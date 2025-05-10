<template>
    <div v-if="isLoading" class="flex justify-center items-center p-6 h-[80vh]">
        <h1 class="text-2xl text-center">CARGANDO LOS PRODUCTOS...</h1>
    </div>
    <div v-else class="container mx-auto p-6">
        <h1 class="text-4xl font-bold text-center mt-2 mb-4">Productos</h1>
        <!-- Carousel-->
        <div class="grid grid-cols-1 place-items-center gap-0
        sm:grid-cols-2 sm:gap-3
        lg:grid-cols-3
        xl:grid-cols-4
        2xl:grid-cols-5
        ">
            <div v-for="(categoriaData, categoria) in productosPorCategoria" :key="categoria" :id="categoria"
                class="mt-5 h-80">
                <h2 class="text-xl font-bold mb-2 text-center">{{ categoria }}</h2>
                <Carousel :long="categoriaData.productos.length" :key="categoriaData.productos.length"
                    :producto="categoriaData.productos" :id="`slide-${categoriaData.productos}`">
                </Carousel>
            </div>
        </div>
        <!-- END Carousel-->
    </div>
</template>

<script>
import Carousel from '@/components/CarouselImgs.vue';
import axios from 'axios';

export default {
    components: {
        Carousel
    },
    data() {
        return {
            /* Carousel */
            active: 0,
            /* FIN Carousel */
            isLoading: true,
            productos: [],
            tiposProductos: [],
            tiposUnicos: 0,
            tipoSeleccionado: 1,
            longitudTipos: {},
            activeSlides: {}, // Almacena el índice actual de cada tipo
            intervals: {} // Almacena los intervalos de cada tipo
        };
    },
    computed: {
        productosFiltrados() {
            return this.productos.filter(p => p.tipo === this.tipoSeleccionado);
        },
        productosPorCategoria() {
            return this.productos.reduce((acc, producto) => {
                const categoria = this.getCategoriaNombre(producto.tipo);
                if (!acc[categoria]) {
                    acc[categoria] = { productos: [], contador: 0 };
                }
                producto.idCont = acc[categoria].contador++;
                acc[categoria].productos.push(producto);
                return acc;
            }, {});
        }
    },
    methods: {
        async obtenerProductos() {
            try {
                const response = await axios.get('http://192.168.1.4:8080/api/productos/listar');

                this.productos = response.data[0];

                this.tiposUnicos = [...new Set(this.productos.map(p => p.tipo))];

                this.longitudTipos = this.tiposUnicos.map(tipo => ({
                    tipo,
                    cantidad: this.productos.filter(p => p.tipo === tipo).length
                }));

                this.tiposProductos = await axios.get("http://192.168.1.4:8080/api/productos/listartipos");

                setTimeout(() => {
                    this.isLoading = false;
                }, 500);

            } catch (error) {
                console.error("Error al obtener los productos", error);
            }
        },
        getCategoriaNombre(id) {
            const map = this.tiposProductos.data.map((tp) => tp.Nombre)
            return map[id - 1] || "Otros";
        }
    },
    mounted() {
        this.obtenerProductos();
    }
};
</script>

<style></style>
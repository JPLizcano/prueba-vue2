<template>
    <div v-if="isLoading" class="flex justify-center items-center p-6 h-[80vh]">
        <h1 class="text-2xl text-center">CARGANDO LOS PRODUCTOS...</h1>
    </div>
    <div v-else class="container mx-auto p-6">
        <h1 class="text-4xl font-bold text-center mt-2 mb-4">Productos</h1>
        <!-- Carousel 1 -->
        <!-- <div class="grid grid-cols-1 place-items-center gap-0
        sm:grid-cols-2 sm:gap-3
        lg:grid-cols-3
        xl:grid-cols-4
        2xl:grid-cols-5
        ">
            <div v-for="(categoriaData, categoria) in productosPorCategoria" :key="categoria" :id="categoria"
                class="mt-5 h-80">
                <h2 class="text-xl font-bold mb-2 text-center">{{ categoria }}</h2>
                <div class="carousel-inner relative overflow-hidden w-60">

                    <ProductoCard v-for="producto in categoriaData.productos" :key="producto.idCont"
                        :producto="producto"
                        class="carousel-item inset-0 relative w-60 transform transition-all duration-500 ease-in-out"
                        :id="`slide-${producto.idCont}`"
                        :class="`${active === producto.idCont ? 'active' : 'left-full'}`" />
                </div>
            </div>
        </div> -->
        <!-- END Carousel 1 -->
        <!-- Carousel 2 -->
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
        <!-- END Carousel 2 -->

        <!-- Productos -->
        <!-- <div v-for="(categoriaData, categoria) in productosPorCategoria" :key="categoria" class="mt-5">
            <h2 class="text-xl font-bold mb-2">{{ categoria }}</h2>
            <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                <ProductoCard v-for="producto in categoriaData.productos" :key="producto.idCont" :producto="producto"
                    :id="`slide-${producto.idCont}`" />
            </div>
        </div> -->
        <!-- END Productos -->

        <!-- Carousel -->
        <!-- <div class="relative slide">
            <div class="carousel-inner relative overflow-hidden w-60">
                <div v-for="(img, i) in productosFiltrados" :id="`slide-${i}`" :key="i"
                    :class="`${active === i ? 'active' : 'left-full'}`"
                    class="carousel-item inset-0 relative w-60 transform transition-all duration-500 ease-in-out">
                    <img class="block w-60" :src="img.imagen" alt="Producto" />
                </div>
            </div>
        </div> -->
        <!-- FIN Carousel -->
    </div>
</template>

<script>
// import ProductoCard from '@/components/ProductoCard.vue';
import Carousel from '@/components/CarouselImgs.vue';
import axios from 'axios';

export default {
    components: {
        // ProductoCard,
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

                // this.tiposUnicos = this.productos.filter(p => p.tipo === this.tipoSeleccionado).length;

                this.tiposUnicos = [...new Set(this.productos.map(p => p.tipo))];

                // this.longitudTipos = this.tiposUnicos.reduce((acc, tipo) => {
                //     acc[tipo] = this.productos.filter(p => p.tipo === tipo).length;
                //     console.log({ tipo, cantidad: acc[tipo] });
                //     return acc;
                // }, {});

                this.longitudTipos = this.tiposUnicos.map(tipo => ({
                    tipo,
                    cantidad: this.productos.filter(p => p.tipo === tipo).length
                }));

                // Iniciar los carousels

                this.tiposProductos = await axios.get("http://192.168.1.4:8080/api/productos/listartipos");

                setTimeout(() => {
                    this.isLoading = false;
                }, 500);
            } catch (error) {
                //console.error("Error al obtener los productos", error);
            } finally {
                // this.isLoading = false;
            }
        },
        getCategoriaNombre(id) {
            const map = this.tiposProductos.data.map((tp) => tp.Nombre)
            const categorias = map;
            return categorias[id - 1] || "Otros";
        }
    },
    mounted() {
        this.obtenerProductos();
    }
};
</script>

<style>
</style>
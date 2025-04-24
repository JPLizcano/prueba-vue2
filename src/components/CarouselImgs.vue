<template>
    <div class="relative slide">
        <div class="relative slide">
            <div class="carousel-inner relative overflow-hidden w-60">
                <ProductoCard v-for="producto in producto" :key="producto.idCont" :producto="producto"
                    :id="`slide-${producto.idCont}`" :class="`${active === producto.idCont ? 'active' : 'left-full'}`"
                    class="carousel-item inset-0 relative w-60 transform transition-all duration-500 ease-in-out" />
            </div>
        </div>
    </div>
</template>

<style>
.left-full {
    left: -100%;
}

.carousel-item {
    float: left;
    position: relative;
    display: block;
    width: 100%;
    margin-right: -100%;
    backface-visibility: hidden;
}

.carousel-item.active {
    left: 0;
}
</style>

<script>
import ProductoCard from '@/components/ProductoCard.vue';
export default {
    components: {
        ProductoCard
    },
    props: {
        long: { type: Number, required: true },
        producto: { type: Array, required: true }
    },
    data: () => ({
        // images: [
        //     "https://picsum.photos/id/237/1024/800", "https://picsum.photos/id/238/1024/800",
        //     "https://picsum.photos/id/239/1024/800", "https://picsum.photos/id/240/1024/800",
        //     "https://picsum.photos/id/241/1024/800", "https://picsum.photos/id/242/1024/800",
        //     "https://picsum.photos/id/243/1024/800", "https://picsum.photos/id/244/1024/800"
        // ],
        active: 0
    }),
    mounted() {
        // console.log(this.long);
        // console.log(this.producto);

        if (this.long <= 1) return;

        let i = 1;
        setInterval(() => {
            // console.log(this.long + ': ' + i);
            if (i >= this.long) {
                // console.log(this.long + ': ' + 'reload');
                i = 0;
            }
            this.active = i;
            i++;
        }, 2500);
    }

}
</script>
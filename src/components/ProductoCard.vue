<template>
    <div class="max-w-96 rounded-lg border bg-white p-4 mb-5" id="PrCard">
        <div class="flex justify-center">
            <img :src="producto.imagen" :alt="producto.nombre" class="w-32 h-32 object-cover rounded-md">
        </div>

        <div class="mt-4">
            <h3 class="text-lg font-semibold text-gray-900 truncate">{{ producto.nombre }}</h3>
            <p class="text-orange-600 font-bold text-lg mt-2">${{ producto.precio.toLocaleString() }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        producto: {
            type: Object,
            required: true
        }
    }
};
</script>
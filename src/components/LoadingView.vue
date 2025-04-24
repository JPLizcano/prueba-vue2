<template>
  <transition name="fade">
    <div v-if="isLoad" :class="alertClass"
      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      CARGANDO...
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    isLoad: Boolean,
    duration: {
      type: Number,
      default: 2500,
    },
  },
  data() {
    return {
      visible: true,
    };
  },
  methods: {
    show() {
      this.visible = true;
      setTimeout(() => {
        this.visible = false;
      }, this.duration);
    },
  },
  computed: {
    alertClass() {
      return {
        "bg-green-500 text-white": this.type === "success",
        "bg-red-500 text-white": this.type === "error",
        "bg-yellow-500 text-black": this.type === "warning",
      };
    },
  },
};
</script>

<style scoped>
/* Animación de desvanecimiento */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* Estilos de la alerta */
.alert {
  background-color: rgb(255, 110, 0);
  color: white;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
}
</style>
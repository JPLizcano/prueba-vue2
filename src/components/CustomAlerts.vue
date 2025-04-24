<template>
  <transition name="fade">
    <div v-if="visible" :class="alertClass" class="absolute px-4 py-2 rounded msg text-sm text-center">
      {{ message }}
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    type: { type: String, default: "success" }, // success, error, warning
    message: { type: String, required: true, default: "" },
    duration: {
      type: Number,
      default: 2500, // Tiempo antes de desaparecer (1.5s por defecto)
    },
  },
  data() {
    return {
      visible: false, // Inicia oculta
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
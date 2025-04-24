<template>
  <div>
    <Loading :isLoad="isLoading" @close="isLoading = false" class="z-20" />
    <div v-if="isOpen"
      class="z-10 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div class="bg-[rgba(255,255,255,0.5)] p-6 rounded-lg shadow-lg w-96 relative">
        <!-- Botón de cerrar -->
        <button class="absolute top-2 right-2 text-gray-500 hover:text-gray-700" @click="closeModal">✖</button>

        <!-- <img class="mx-auto h-[180px] w-auto rounded-3xl" src="@/assets/imgs/Storejys-logo.png" alt="storejys"> -->
        <h2 class="mt-5 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Iniciar sesión</h2>

        <!-- Formulario de Login -->
        <!-- <form class="space-y-6" @submit.prevent="login"> -->
        <form class="space-y-6" v-on:submit.prevent="login">
          <div>
            <div class="relative flex items-center justify-between">
              <label for="Usuario" class=" block text-sm/6 font-medium text-gray-900">Usuario</label>
            </div>
            <div class="mt-1">
              <input type="text" name="Usuario" id="Usuario" autocomplete="Usuario" v-model="user"
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-transparent sm:text-sm/6">
            </div>
          </div>
          <div>
            <div class="flex items-center justify-between">
              <label for="Clave" class="block text-sm/6 font-medium text-gray-900">Contraseña</label>
            </div>
            <div class="mt-1">
              <input type="password" name="Clave" id="Clave" autocomplete="current-Clave" v-model="pass"
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-transparent sm:text-sm/6">
            </div>
          </div>

          <div class="relative flex justify-center">
            <div class="w-full">
              <button type="submit" id="loginbtn" class="btns">
                Iniciar
              </button>
              <div class="w-full flex justify-center mt-4 text-sm">
                No tengo cuenta.
                <button @click="closeModal">
                  <router-link to="/registro" id="registerbtn"
                    class="ml-1 text-[rgb(255,90,0)] hover:text-[rgb(255,120,0)]">
                    Registrarme
                  </router-link>
                </button>
              </div>
            </div>
            <CustomAlerts ref="alerta" :message="alertMessage" :type="alertType" class="top-[85px]" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import CustomAlerts from '@/components/CustomAlerts.vue';
import Loading from '@/components/LoadingView.vue';
import { useAuthStore } from '@/assets/stores/user';

export default {
  components: { CustomAlerts, Loading },
  props: {
    isOpen: Boolean, // Recibe si el modal está abierto
  },
  data() {
    return {
      isLoading: false,
      alertMessage: "",
      alertType: "success",
      user: "",
      pass: ""
    };
  },
  methods: {
    async login() {
      try {
        this.isLoading = true
        if (this.user == "" || this.user.length < 1) {
          this.alertMessage = "Ingrese su usuario";
          this.alertType = "error";
          this.$refs.alerta.show();
          this.isLoading = false
          return;
        }

        if (this.pass == "" || this.pass.length < 1) {
          this.alertMessage = "Ingrese su clave";
          this.alertType = "error";
          this.$refs.alerta.show();
          this.isLoading = false
          return;
        }

        const response = await fetch("http://192.168.1.4:8080/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ Usuario: this.user, Clave: this.pass }),
          credentials: "include", // Si usas cookies para autenticación
        });

        const data = await response.json();
        // console.log("Respuesta del backend:", data);
        if (!data.resultado) {
          this.alertMessage = data.mensaje;
          this.alertType = "error";
          this.$refs.alerta.show();
          this.isLoading = false
        } else {
          // console.log(data.resultado)
          const authStore = useAuthStore();
          authStore.setUser({ nombre: `${data.resultado.Nombre.split(' ', 1)} ${data.resultado.Apellido.split(' ', 1)}` });

          // this.alertMessage = data.resultado.Mensaje;
          // this.alertType = "success";
          // this.$refs.alerta.show();
          setTimeout(() => {
            this.user = ""
            this.pass = ""
            this.$emit("close");
            this.isLoading = false

          }, 500);
        }
        // Redirige al usuario a otra página
        // this.$router.push("/dashboard"); // Si usas Vue Router
      } catch (error) {
        console.error(error);
      }
    },
    mostrarAlerta() {
      this.$refs.alerta.show();
    },
    closeModal() {
      this.$emit("close"); // Cierra el modal cuando se llame
    },
  },
};
</script>

<style scoped></style>

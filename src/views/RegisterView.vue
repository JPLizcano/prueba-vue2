<template>
  <div>
    <Loading :isLoad="isLoading" @close="isLoading = false" class="z-10" />
    <div class="flex items-center justify-center my-10 w-full h-full">
      <div class="bg-[rgba(200,200,200,0.5)] p-6 rounded-lg shadow-lg w-[850px] relative">
        <router-link to="/" class="absolute">
          <svg width="40" height="40" viewBox="0 0 24 25" fill="none" transform="rotate(0 0 0)"
            class="fill-[#ff6e00] hover:fill-[rgb(255,140,0)] transition-colors duration-200">
            <path
              d="M2 12.5C2 6.97766 6.47729 2.50098 11.9996 2.50098C17.5218 2.50098 21.9991 6.97766 21.9991 12.5C21.9991 18.0224 17.5218 22.4991 11.9996 22.4991C6.47729 22.4991 2 18.0224 2 12.5ZM11.4982 9.15521C11.2178 9.03915 10.8952 9.10341 10.6808 9.31801L8.04259 11.9578C7.89904 12.0945 7.80957 12.2874 7.80957 12.5012C7.80957 12.7277 7.90996 12.9307 8.06867 13.0682L10.6807 15.6821C10.8952 15.8967 11.2178 15.961 11.4981 15.8449C11.7785 15.7289 11.9612 15.4554 11.9612 15.152V13.2512L15.4402 13.2512C15.8544 13.2512 16.1902 12.9154 16.1902 12.5012C16.1902 12.087 15.8544 11.7512 15.4402 11.7512H11.9612V9.84817C11.9612 9.54478 11.7785 9.27127 11.4982 9.15521Z" />
          </svg>
        </router-link>
        <!-- <img class="mx-auto h-[180px] w-auto rounded-3xl" src="@/assets/imgs/Storejys-logo.png" alt="storejys"> -->
        <h2 class="mt-7 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Registro de usuario</h2>

        <!-- Formulario de Login -->
        <form class="space-y-6" @submit.prevent="registro">
          <div class="grid grid-cols-4">
            <div class="mr-2">
              <div class="relative flex items-center justify-between">
                <label id="labelNombre" for="Nombre" class=" block text-sm/6 font-medium text-gray-900">Nombre</label>
              </div>
              <div class="mt-1">
                <input type="text" name="Nombre" id="Nombre" autocomplete="current-Nombre"
                  class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-transparent sm:text-sm/6">
              </div>
            </div>

            <div class="mr-2">
              <div class="flex items-center justify-between">
                <label id="labelApellido" for="Apellido"
                  class="block text-sm/6 font-medium text-gray-900">Apellido</label>
              </div>
              <div class="mt-1">
                <input type="text" name="Apellido" id="Apellido" autocomplete="current-Apellido"
                  class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-transparent sm:text-sm/6">
              </div>
            </div>

            <div class="mr-2">
              <div class="relative flex items-center justify-between">
                <label id="labelCelular" for="Celular"
                  class=" block text-sm/6 font-medium text-gray-900">Celular</label>
              </div>
              <div class="mt-1">
                <input type="number" name="Celular" id="Celular" autocomplete="current-Celular"
                  class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-transparent sm:text-sm/6">
              </div>
            </div>

            <div class="">
              <div class="flex items-center justify-between">
                <label id="labelCedula" for="Cedula" class="block text-sm/6 font-medium text-gray-900">Cédula</label>
              </div>
              <div class="mt-1">
                <input type="number" name="Cedula" id="Cedula" autocomplete="current-Cedula"
                  class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-transparent sm:text-sm/6">
              </div>
            </div>

            <div class="mr-2">
              <div class="flex items-center justify-between">
                <label id="labelDireccion" for="Direccion"
                  class="block text-sm/6 font-medium text-gray-900">Dirección</label>
              </div>
              <div class="mt-1">
                <input type="text" name="Direccion" id="Direccion" autocomplete="current-Direccion"
                  class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-transparent sm:text-sm/6">
              </div>
            </div>

            <div class="mr-2">
              <div class="relative flex items-center justify-between">
                <label id="labelBarrio" for="Barrio" class=" block text-sm/6 font-medium text-gray-900">Barrio</label>
              </div>
              <div class="mt-1">
                <input type="text" name="Barrio" id="Barrio" autocomplete="current-Barrio"
                  class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-transparent sm:text-sm/6">
              </div>
            </div>

            <div class="mr-2">
              <div class="flex items-center justify-between">
                <label id="labelCiudad" for="Ciudad" class="block text-sm/6 font-medium text-gray-900">Ciudad</label>
              </div>
              <div class="mt-1">
                <input type="text" name="Ciudad" id="Ciudad" autocomplete="current-Ciudad"
                  class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-transparent sm:text-sm/6">
              </div>
            </div>

            <div class="">
              <div class="relative flex items-center justify-between">
                <label id="labelDepartamento" for="Departamento"
                  class=" block text-sm/6 font-medium text-gray-900">Departamento</label>
              </div>
              <div class="mt-1">
                <input type="text" name="Departamento" id="Departamento" autocomplete="current-Departamento"
                  class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-transparent sm:text-sm/6">
              </div>
            </div>
          </div>

          <div class="grid grid-cols-2" style="margin-top: 0px !important">
            <div class="mr-2">
              <div class="relative flex items-center justify-between">
                <label id="labelCorreo" for="Correo" class=" block text-sm/6 font-medium text-gray-900">Correo</label>
              </div>
              <div class="mt-1">
                <input type="email" name="Correo" id="Correo" autocomplete="current-Correo"
                  class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-transparent sm:text-sm/6">
              </div>
            </div>

            <div class="">
              <div class="flex items-center justify-between">
                <label id="labelClave" for="Clave" class="block text-sm/6 font-medium text-gray-900">Contraseña</label>
              </div>
              <div class="mt-1">
                <input type="password" name="Clave" id="Clave" autocomplete="current-Clave"
                  class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-transparent sm:text-sm/6">
              </div>
            </div>
          </div>

          <div class="relative flex justify-center">
            <button type="submit" id="loginbtn" class="btns">
              Registrarme
            </button>
            <CustomAlerts ref="alerta" :message="alertMessage" :type="alertType" class="top-[55px]" />
          </div>
        </form>
      </div>
    </div>
  </div>

</template>

<script>
import CustomAlerts from '@/components/CustomAlerts.vue';
import Loading from '@/components/LoadingView.vue';
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
    };
  },
  methods: {
    async registro() {
      try {
        this.isLoading = true
        // document.getElementById('Nombre').value = 'prueba front',
        //   document.getElementById('Apellido').value = 'prueba front',
        //   document.getElementById('Celular').value = '4523',
        //   document.getElementById('Cedula').value = '54323',
        //   document.getElementById('Correo').value = '23443fa@gmail.com',
        //   document.getElementById('Direccion').value = 'prueba front',
        //   document.getElementById('Barrio').value = 'prueba front',
        //   document.getElementById('Ciudad').value = 'prueba front',
        //   document.getElementById('Departamento').value = 'prueba front',
        //   document.getElementById('Clave').value = 'prueba front123'
        document.getElementById('Nombre').style.borderColor = 'rgb(150, 150, 150)'
        document.getElementById('Apellido').style.borderColor = 'rgb(150, 150, 150)'
        document.getElementById('Celular').style.borderColor = 'rgb(150, 150, 150)'
        document.getElementById('Cedula').style.borderColor = 'rgb(150, 150, 150)'
        document.getElementById('Correo').style.borderColor = 'rgb(150, 150, 150)'
        document.getElementById('Direccion').style.borderColor = 'rgb(150, 150, 150)'
        document.getElementById('Barrio').style.borderColor = 'rgb(150, 150, 150)'
        document.getElementById('Ciudad').style.borderColor = 'rgb(150, 150, 150)'
        document.getElementById('Departamento').style.borderColor = 'rgb(150, 150, 150)'
        document.getElementById('Clave').style.borderColor = 'rgb(150, 150, 150)'
        document.getElementById('labelNombre').style.color = 'black'
        document.getElementById('labelApellido').style.color = 'black'
        document.getElementById('labelCelular').style.color = 'black'
        document.getElementById('labelCedula').style.color = 'black'
        document.getElementById('labelCorreo').style.color = 'black'
        document.getElementById('labelDireccion').style.color = 'black'
        document.getElementById('labelBarrio').style.color = 'black'
        document.getElementById('labelCiudad').style.color = 'black'
        document.getElementById('labelDepartamento').style.color = 'black'
        document.getElementById('labelClave').style.color = 'black'
        if (document.getElementById('Nombre').value == "") {
          this.isLoading = false
          document.getElementById('Nombre').style.borderColor = 'red'
          document.getElementById('labelNombre').style.color = 'red'
          this.alertMessage = "Ingrese su Nombre";
          this.alertType = "error";
          this.$refs.alerta.show();
          return;
        }
        if (document.getElementById('Apellido').value == "") {
          this.isLoading = false
          document.getElementById('Apellido').style.borderColor = 'red'
          document.getElementById('labelApellido').style.color = 'red'
          this.alertMessage = "Ingrese su Apellido";
          this.alertType = "error";
          this.$refs.alerta.show();
          return;
        }
        if (document.getElementById('Celular').value == "") {
          this.isLoading = false
          document.getElementById('Celular').style.borderColor = 'red'
          document.getElementById('labelCelular').style.color = 'red'
          this.alertMessage = "Ingrese su número de celular";
          this.alertType = "error";
          this.$refs.alerta.show();
          return;
        }
        if (document.getElementById('Cedula').value == "") {
          this.isLoading = false
          document.getElementById('Cedula').style.borderColor = 'red'
          document.getElementById('labelCedula').style.color = 'red'
          this.alertMessage = "Ingrese su cédula";
          this.alertType = "error";
          this.$refs.alerta.show();
          return;
        }
        if (document.getElementById('Direccion').value == "") {
          this.isLoading = false
          document.getElementById('Direccion').style.borderColor = 'red'
          document.getElementById('labelDireccion').style.color = 'red'
          this.alertMessage = "Ingrese su dirección de residencia";
          this.alertType = "error";
          this.$refs.alerta.show();
          return;
        }
        if (document.getElementById('Barrio').value == "") {
          this.isLoading = false
          document.getElementById('Barrio').style.borderColor = 'red'
          document.getElementById('labelBarrio').style.color = 'red'
          this.alertMessage = "Ingrese el barrio en el que vive";
          this.alertType = "error";
          this.$refs.alerta.show();
          return;
        }
        if (document.getElementById('Ciudad').value == "") {
          this.isLoading = false
          document.getElementById('Ciudad').style.borderColor = 'red'
          document.getElementById('labelCiudad').style.color = 'red'
          this.alertMessage = "Ingrese la ciudad en la que vive";
          this.alertType = "error";
          this.$refs.alerta.show();
          return;
        }
        if (document.getElementById('Departamento').value == "") {
          this.isLoading = false
          document.getElementById('Departamento').style.borderColor = 'red'
          document.getElementById('labelDepartamento').style.color = 'red'
          this.alertMessage = "Ingrese el departamento en el que vive";
          this.alertType = "error";
          this.$refs.alerta.show();
          return;
        }
        if (document.getElementById('Correo').value == "") {
          this.isLoading = false
          document.getElementById('Correo').style.borderColor = 'red'
          document.getElementById('labelCorreo').style.color = 'red'
          this.alertMessage = "Ingrese su correo";
          this.alertType = "error";
          this.$refs.alerta.show();
          return;
        }
        if (document.getElementById('Clave').value == "") {
          this.isLoading = false
          document.getElementById('Clave').style.borderColor = 'red'
          document.getElementById('labelClave').style.color = 'red'
          this.alertMessage = "Ingrese su contraseña";
          this.alertType = "error";
          this.$refs.alerta.show();
          return;
        }

        const response = await fetch("http://192.168.1.4:8080/api/usuarios/registrar", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            Nombre: document.getElementById('Nombre').value,
            Apellido: document.getElementById('Apellido').value,
            Celular: document.getElementById('Celular').value,
            Cedula: document.getElementById('Cedula').value,
            Correo: document.getElementById('Correo').value,
            Direccion: document.getElementById('Direccion').value,
            Barrio: document.getElementById('Barrio').value,
            Ciudad: document.getElementById('Ciudad').value,
            Departamento: document.getElementById('Departamento').value,
            Pass: document.getElementById('Clave').value
          }),
          credentials: "include", // Si usas cookies para autenticación
        });

        const data = await response.json();
        // console.log("Respuesta del backend:", data[0][0]);
        if (data[0][0].Mensaje != "Usuario creado con éxito") {
          this.isLoading = false
          this.alertMessage = data[0][0].Mensaje;
          this.alertType = "error";
          this.$refs.alerta.show();
        } else {
          this.alertMessage = data[0][0].Mensaje;
          this.alertType = "success";
          this.$refs.alerta.show();
          document.getElementById('Nombre').value = ''
          document.getElementById('Apellido').value = ''
          document.getElementById('Celular').value = ''
          document.getElementById('Cedula').value = ''
          document.getElementById('Correo').value = ''
          document.getElementById('Direccion').value = ''
          document.getElementById('Barrio').value = ''
          document.getElementById('Ciudad').value = ''
          document.getElementById('Departamento').value = ''
          document.getElementById('Clave').value = ''
          setTimeout(() => {
            this.isLoading = false
            // 👉 Redirige al usuario a otra página
            this.$router.push("/"); // Si usas Vue Router
          }, 500);
        }

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

<style scoped>
</style>

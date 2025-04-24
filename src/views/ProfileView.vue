<template>
    <form class="py-3 px-10" v-on:submit.prevent="updateUser">
        <div v-if="user" class="gap-5 grid grid-cols-1 
        sm:grid-cols-2 sm:gap-3
        lg:grid-cols-3
        xl:grid-cols-3
        2xl:grid-cols-3">
            <div v-for="(valor, clave) in user" :key="clave">
                <div>
                    <div class="flex items-center justify-between">
                        <label for="Clave" class="block text-sm/6 font-medium text-gray-900">{{
                            clave.charAt(0).toUpperCase() + clave.slice(1).toLowerCase() }}</label>
                    </div>
                    <div class="mt-1">
                        <input
                            :type="clave == 'Correo' ? 'email' : clave == 'Celular' || clave == 'Cedula' ? 'number' : 'text'"
                            v-model="user[clave]"
                            class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-transparent sm:text-sm/6">
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-5 flex justify-center">
            <button class="btns sm:w-40" id="loginBtn">Actualizar datos</button>
        </div>
    </form>
</template>
<script>
import { useAuthStore } from '@/assets/stores/user';
import { verificarSesion } from '@/assets/helper/verificar';

export default {
    data() {
        return {
            id: null,
            user: null
        }
    },
    async created() {
        await verificarSesion(useAuthStore()).then((value) => {
            if (value != null && typeof value === "string") {
                this.user = null;
                this.logout();
                if (this.$route.path !== '/') {
                    this.$router.push('/');
                }
            } else {
                const { idUsuario, ...resto } = value;
                this.id = idUsuario;
                this.user = resto;
            }
        });
    },
    // watch: {
    //     user: {
    //         deep: true, // es para cuando un objeto es anidado y asi se detectan cambios internos
    //         handler(nuevoValor) {
    //             console.log("Usuario actualizado:", nuevoValor);
    //         }
    //     }
    // },
    methods: {
        updateUser() {
            console.log(this.id)
            // console.log(this.user)
            // console.log(Object.keys(this.user))
            // console.log(Object.values(this.user))
            Object.entries(this.user).forEach(([clave, valor]) => { console.log(clave, valor) })
        }
    }
}
</script>
<style scoped></style>
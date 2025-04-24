<template>
    <div>
        <LoginView :isOpen="isLoginOpen" @close="isLoginOpen = false" class="z-10" />
        <nav class="bg-[rgb(5,0,10)] py-4 px-5 text-white flex justify-between">
            <div class="text-lg font-semibold flex items-center">
                <img class="mx-auto h-[30px] w-auto rounded-md" src="@/assets/imgs/Storejys-logo.png" alt="storejys" />
                <a href="/" class="ml-2 cursor-default hover:text-orange-400">STOREJYS</a>
            </div>
            <ul class="space-x-4 flex items-center">
                <li v-if="this.auth.usuario">
                    <p class="cursor-default hover:text-orange-400">{{ this.auth.usuario }}</p>
                </li>
                <li v-if="this.auth.usuario">
                    <UserDropdown :items="dropdownItems" />
                </li>
                <li v-if="!this.auth.usuario">
                    <button @click="showLogin" class="hover:text-orange-400 mx-2">Iniciar sesión</button>
                </li>
            </ul>
        </nav>
        <div class="relative flex justify-center z-50">
            <CustomAlerts ref="alerta" :message="alertMessage" :type="alertType" class="top-1" />
        </div>
    </div>
</template>

<script>
import LoginView from '@/views/LoginModal.vue';
import { useAuthStore } from '@/assets/stores/user';
import { verificarSesion } from '@/assets/helper/verificar';
import UserDropdown from '@/components/UserDropdown.vue';
import CustomAlerts from '@/components/CustomAlerts.vue';
// import axios from 'axios';

export default {
    components: {
        LoginView, UserDropdown, CustomAlerts
    },
    data() {
        return {
            auth: useAuthStore(),
            isLoginOpen: false,
            alertMessage: "",
            alertType: "error",
            dropdownItems: [
                { label: "Perfil", action: () => console.log("Ver perfil"), color: "rgb(255,100,0)", bg: "rgb(255,100,0,0.15)", to: "/perfil" },
                { label: "Cerrar sesión", action: () => this.logout(), color: "rgb(255,0,0)", bg: "rgb(255,0,0,0.15)", to: "/" },
            ],
        }
    },
    methods: {
        showLogin() {
            this.isLoginOpen = true;
        },
        logout() {
            // console.log('logout');
            this.auth.logout();
        }
    },
    async created() {
        await verificarSesion(this.auth).then((value) => {
            // console.log(this.$route.path)
            // console.log(value);
            if (value != null && typeof value === "string") {
                // console.log(value);
                this.alertMessage = value;
                this.alertType = "error";
                this.$refs.alerta.show();
                this.auth.usuario = null;
                this.logout();
                if (this.$route.path !== '/') {
                    this.$router.push('/');
                }
            }
        });
    }
}
</script>

<style scoped></style>

import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    usuario: localStorage.getItem("usuario") || null,
    inf: null,
  }),
  actions: {
    setUser(user) {
      this.inf = user;
      this.usuario = user.nombre;
      localStorage.setItem("usuario", user.nombre);
    },
    logout() {
      this.usuario = null;
      localStorage.removeItem("usuario");
      fetch("http://192.168.1.4:8080/api/auth/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // Si usas cookies para autenticación
      });
    },
  },
});

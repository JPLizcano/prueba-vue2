import axios from "axios";

/**
 * Verifica si hay una sesión activa.
 * @param {object} auth - Instancia del store de auth (useAuthStore)
 * @returns {object|null} - Datos del usuario o null si no hay sesión
 */
export async function verificarSesion(auth) {
  try {
    const respuesta = await axios.post("http://192.168.1.4:8080/api/auth/verificar", {}, { withCredentials: true });

    if (respuesta.status === 200 && respuesta.data.usuario) {
      const data = respuesta.data.usuario[0];
      const nombre = `${data.Nombre.split(" ", 1)} ${data.Apellido.split(" ", 1)}`;
      auth.setUser({ nombre });
      return data;
    } else {
      localStorage.removeItem("usuario");
      //   auth.logout?.();
      return null;
    }
  } catch (error) {
    localStorage.removeItem("usuario");
    if (error.response.data == "Sesión expirada, por favor vuelva a ingresar") {
      return error.response.data;
    }
    // auth.logout?.();
    // console.error("Error al verificar la sesión:", error);
    return null;
  }
}

// import { useAuthStore } from "@/assets/stores/user";
// import axios from "axios";

// export default async function verificar() {
//   try {
//     const auth = useAuthStore();
//     const respuesta = await axios.post("http://192.168.1.4:8080/api/auth/verificar", {
//       withCredentials: true, // necesario para que la cookie viaje
//     });
//     if (respuesta.status === 200 && respuesta.data.usuario) {
//       const data = respuesta.data.usuario[0];
//       auth.setUser({ nombre: `${data.Nombre.split(" ", 1)} ${data.Apellido.split(" ", 1)}` });
//       return data;
//     } else {
//       if (localStorage.getItem("usuario")) {
//         localStorage.removeItem("usuario");
//       }
//     }
//   } catch (error) {
//     console.error(error);
//   }
// }

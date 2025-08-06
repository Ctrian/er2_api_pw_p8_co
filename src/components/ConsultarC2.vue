<template>
  <h1>Información</h1>
  <div class="informacion-container">
    <form action="">
      <label for="">Cédula: </label>
      <input type="text" :value="estudiante.cedula" readonly />
      <label for="">Nombre: </label>
      <input type="text" :value="estudiante.nombre" readonly />
      <label for="">Apellido: </label>
      <input type="text" :value="estudiante.apellido" readonly />
      <label for="">Fecha de nacimiento: </label>
      <input type="text" :value="estudiante.fechaNacimiento" readonly />
      <label for="">Genero: </label>
      <input type="text" :value="estudiante.genero" readonly />
    </form>
  </div>
</template>

<script>
import { consultarEstudiantesPorCedulaFachada } from "@/client/EstudianteClient";

export default {
  name: "ConsultarC2",
  data() {
    return {
      estudiante: {
        cedula: "1750",
        nombre: "Juan",
        apellido: "Pérez",
        fechaNacimiento: "2000-01-01",
        genero: "Masculino",
      },
    };
  },
  methods: {
    async consultarEstudiante() {
      this.estudiante = await consultarEstudiantesPorCedulaFachada(this.cedula);
    },
  },
};
</script>

<style>
.informacion-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

label {
    margin-right: 10px;
}

input {
  margin-bottom: 10px;
  padding: 5px;
  width: 200px;
}
</style>
<template>
  <button @click="consultarEstudiantes">Consultar</button>

  <table v-if="estudiantes.length">
    <thead>
      <tr>
        <th>Cédula</th>
        <th>Nombre</th>
        <th>Acción</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="estudiante in estudiantes" :key="estudiante.id">
        <td>{{ estudiante.cedula }}</td>
        <td>{{ estudiante.nombre }}</td>
        <td>
          <button
            @click="consultarEstudiantePorCedula(estudiante.cedula)"
          >
            Consultar
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { consultarEstudiantesFachada } from "@/client/EstudianteClient";
import { consultarEstudiantesPorCedulaFachada } from "@/client/EstudianteClient";

export default {
  name: "ConsultarC1",
  data() {
    return {
      estudiantes: [],
    };
  },
  methods: {
    async consultarEstudiantes() {
      const estudiantes = await consultarEstudiantesFachada();
      this.estudiantes = estudiantes;
    },
    async consultarEstudiantePorCedula(cedula) {
      const estudiante = await consultarEstudiantesPorCedulaFachada(cedula);
      console.log(estudiante);

      /* this.$emit("consultar", estudiante); */
    },
  },
};
</script>

<style>
</style>
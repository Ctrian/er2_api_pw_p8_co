<template>
  <div>
    <h1>Consultar Estudiante</h1>

    <ConsultarC1 :estudiantes="estudiantes" @consultar="consultarEstudiantes" />
    <ConsultarC2 :estudiante="estudiante" />
  </div>
</template>

<script>
import ConsultarC1 from "@/components/ConsultarC1.vue";
import ConsultarC2 from "@/components/ConsultarC2.vue";

export default {
  name: "ConsultarView",
  components: {
    ConsultarC1,
    ConsultarC2,
  },
  data() {
    return {
      estudiantes: [],
      estudiante: null,
    };
  },
  methods: {
    async consultarEstudiantes() {
      this.estudiantes = await consultarEstudiantesFachada();
    },
    async consultarEstudiantePorCedula(cedula) {
      this.estudiante = await consultarEstudiantesPorCedulaFachada(cedula);
    },
  },
};
</script>

<style>
</style>
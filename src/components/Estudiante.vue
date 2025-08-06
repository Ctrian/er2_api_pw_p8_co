<template>
  <div class="estudiante-container">
    

    <form @submit.prevent="guardarEstudiante">
      <div>
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" v-model="estudiante.nombre" />
      </div>
      <div>
        <label for="apellido">Apellido:</label>
        <input type="text" id="apellido" v-model="estudiante.apellido" />
      </div>
      <div>
        <label for="cedula">Cédula:</label>
        <input type="text" id="cedula" v-model="estudiante.cedula" />
      </div>
      <div>
        <label for="fechaNacimiento">Fecha de Nacimiento:</label>
        <input
          type="date"
          id="fechaNacimiento"
          v-model="estudiante.fechaNacimiento"
        />
      </div>
      <div>
        <label for="genero">Género:</label>
        <select id="genero" v-model="estudiante.genero">
          <option value="masculino">Masculino</option>
          <option value="femenino">Femenino</option>
        </select>
      </div>

      {{ mensaje }}

      <button type="submit" class="btn btn-primary">Guardar</button>
    </form>
  </div>
</template>

<script>
import { guardarEstudianteFachada } from "@/client/EstudianteClient";

export default {
  name: "Estudiante",
  data() {
    return {
      estudiante: {
        nombre: "",
        apellido: "",
        cedula: "",
        fechaNacimiento: "",
        genero: "",
      },
      mensaje: "",
    };
  },
  methods: {
    async guardarEstudiante() {
      try {
        const response = await guardarEstudianteFachada(this.estudiante);
        this.mensaje = "Estudiante guardado con éxito.";
        console.log("Respuesta del servidor:", response);
        this.estudiante = {
          nombre: "",
          apellido: "",
          cedula: "",
          fechaNacimiento: "",
          genero: "",
        };
      } catch (error) {
        this.mensaje = "Error al guardar el estudiante.";
        console.error("Error al guardar el estudiante:", error);
      }
    },
  },
};
</script>

<style>
.estudiante-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

label {
  display: block;
  margin-right: 150px;
  margin-bottom: 5px;
}

input {
  margin-bottom: 10px;
  padding: 5px;
  width: 200px;
}

button {
  margin-top: 10px;
}
</style>
import axios from "axios"

const API_URL = "http://localhost:8081/api/universidad/v1/estudiantes";

const guardarEstudiante = async (estudiante) => {
    const respuesta = await axios.post(`${API_URL}`, estudiante).then(respuesta => respuesta.data);
    return respuesta;
}

export const guardarEstudianteFachada = async (estudiante) => {
    return await guardarEstudiante(estudiante);
}

const consultarEstudiantes = async () => {
    const respuesta = await axios.get(`${API_URL}`).then(respuesta => respuesta.data);
    return respuesta;
}

export const consultarEstudiantesFachada = async () => {
    return await consultarEstudiantes();
}

const consultarEstudiantesPorCedula = async (cedula) => {
    const respuesta = await axios.get(`${API_URL}/${cedula}`).then(respuesta => respuesta.data);
    return respuesta;
}

export const consultarEstudiantesPorCedulaFachada = async (cedula) => {
    return await consultarEstudiantesPorCedula(cedula);
}
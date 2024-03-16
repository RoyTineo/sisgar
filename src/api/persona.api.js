import axios from "axios";

const url = "http://localhost:4000/persona"

 export const createPersonaRequest = async (datosPersona)=>{
    return await axios.post(url,datosPersona)    
}

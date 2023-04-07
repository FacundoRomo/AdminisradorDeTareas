import { useState } from "react";
import "./form.css"
import { v4 as uuidv4 } from "uuid"

function Form( props ) {

  const [input, setInput]= useState("")

  const manejarCambio = e =>{
    setInput(e.target.value);
  }

  const manejarEnvio = e => {
    e.preventDefault();
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    }
    props.onSubmit(tareaNueva);
    document.formulario.texto.value="";
    }
  return(
    <form 
      className="tarea-formulario"
      onSubmit={manejarEnvio}
      name="formulario">
      <input
        className="tarea-input"
        type="text"
        placeholder="Ingrese una tarea"
        name="texto"
        onChange={manejarCambio}
      />
      <button className="tarea-boton">
        Agregar Tarea
        </button>
    </form>
  )
}
export default Form;
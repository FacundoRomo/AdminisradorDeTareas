import Form from '../Formulario/form'
import "./listaDeTareas.css"
import { useState } from 'react';
import Tarea from "../Tarea/tarea"

function ListaDeTareas() {

  const [tareas , setTareas]= useState(JSON.parse(localStorage.getItem("tareas")));

  // Obtener las tareas en el localStorage
  if(JSON.parse(localStorage.getItem("tareas"))){

  }
  const agregarTarea = tarea =>{
    if(tarea.texto.trim()){
      tarea.texto=tarea.texto.trim();

      const tareasActualizadas = [tarea, ...tareas]
      setTareas(tareasActualizadas)
      localStorage.setItem("tareas",JSON.stringify(tareasActualizadas))
    }}
  
  const eliminarTarea = id =>{
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas);
    localStorage.removeItem("tareas");
    localStorage.setItem("tareas", JSON.stringify(tareasActualizadas))
  }

  const completarTarea = id =>{
    const tareasActualizadas = tareas.map( tarea => {
      if (tarea.id === id){
        tarea.completada = !tarea.completada
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
    localStorage.removeItem("tareas");
    localStorage.setItem("tareas", JSON.stringify(tareasActualizadas))
  }

  return (
    <>
      <Form onSubmit={ agregarTarea }/>
      <div className="tareas-lista-contenedor">
        {
          tareas ? (tareas.map((tarea) =>
          <Tarea
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            eliminarTarea={eliminarTarea}
            completarTarea={completarTarea} />
          )) : null 
        }
      </div>
    </>
  );
}
export default ListaDeTareas;
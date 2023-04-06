import "./tarea.css"
import { RxCrossCircled } from "react-icons/rx"

function Tarea({id, completarTarea, eliminarTarea, texto, completada }) {
  return(
    <div className={completada ? "tarea-contenedor completa" :"tarea-contenedor"}>
      <div 
        className="tarea-texto"
        onClick={() => completarTarea(id)} >
        {texto}
      </div>
      <div 
        className="tarea-icono-contenedor"
        onClick={() => eliminarTarea(id)}>
        <RxCrossCircled className="tarea-icono"/>
      </div>
    </div>
  )
}
export default Tarea;
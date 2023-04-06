import './App.css';
import ListaDeTareas from './component/ListaDeTareas/listaDeTareas';

function App() {

  
  return (
    <div className="contenedor">
      <div className='title-contenedor'>
        <h1 className='title'>Administrador de tareas</h1>
      </div>
      <div className="tareas-contenedor">
        <h2 className="title-tareas">Mis Tareas</h2>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;

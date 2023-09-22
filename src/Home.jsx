import { useForm } from 'react-hook-form'
import { datos } from './components/data';
import { datos2 } from './components/datos';
import { useContext } from 'react';
import Context from './context/Context';
import './stylesheet/App.css'
import { useNavigate } from 'react-router-dom';


function Home() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navegacion = useNavigate();
  const { etapas, setEtapas, misDatos } = useContext(Context);

  const optener = (data) => {
    console.table(data);
    const miZona = data.valor;
    const Datos = datos.find(d=>d.lugar === miZona);
    misDatos.push(Datos.imagen);
    misDatos.push(Datos.lugar);
    misDatos.push(Datos.precio);
    setEtapas(etapas+3);
    navegacion('/form');
    console.table(misDatos);

  };
  return (
    <>
      <form onSubmit={handleSubmit(optener)}>
        <nav>
          <span>{datos2[etapas].text}</span>
          <input type='submit' value='Enviar' />
          {errors.valor?.type==='required' && <span className='aviso'>Seleciona una de las opciones</span>}
        </nav>
        <div className='formularioZonas'>
          {datos.map(data =>
            <div className='zonas' key={data.lugar}>
              <div className='zona'>
                <input type='radio' className='lugar' name='listado' value={data.lugar} {...register('valor', { required: true })} />
                <span className='poblacion'>{data.lugar}</span>
                <span className='precio'>{data.precio} €</span>

              </div>
              <img src={data.imagen} alt={data.lugar} />

            </div>
          )}
        </div>
      </form>

    </>
  )
}

export default Home

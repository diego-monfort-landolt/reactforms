import { useContext } from "react"
import { datos2 } from "../components/datos"
import Context from "../context/Context"
import { useForm } from "react-hook-form"
import Resumen from "../context/Resumen"
import { useNavigate } from "react-router-dom"

const Form = () => {
  const navegacion =useNavigate();
  const { register, handleSubmit, formState: { errors }, setFocus, reset, watch } = useForm()
  const { etapas, setEtapas, misDatos, setMisDatos } = useContext(Context);
  const obtener = (data) => {
    misDatos[etapas] = data.valor;
    setEtapas(etapas + 1);
    setFocus('valor');
    reset();
  }
  const imprimir = () => {
    window.print();
  }
  const volver = () => {
    setEtapas(0);
    setMisDatos([]);
    navegacion('/home');

  }
  return (
    <>
      <section>
        {etapas > 6
          ?
          <div className="opciones">
            <h2>¿Quieres finalizar o imprimir tu pedido?</h2>
            <button className="volver" onClick={volver}>Volver</button>
            <button className="imprimir" onClick={imprimir}>Imprimir</button>

          </div>
          :

          <form onSubmit={handleSubmit(obtener)}>
            <h2> {datos2[etapas].text} { <span className="verde">{ watch('valor') } { watch('valor.length') >0 && <span>{datos2[etapas].sufijo}</span>}  </span>} </h2>
            <input autoFocus autoComplete='off' {...register('valor',
              {
                required: datos2[etapas].obligatorio,
                min: datos2[etapas].minimo,
                max: datos2[etapas].maximo,
              }
            )}
            />
            {errors.valor?.type === 'required' && <p>Este dato es obligatorio</p>}
            {errors.valor?.type === 'min' && <p>como minimo deberia ser {datos2[etapas].minimo}</p>}
            {errors.valor?.type === 'max' && <p>el maximo es {datos2[etapas].maximo}</p>}
            <hr />
            <input type='submit' value='Enviar' />


          </form>
        }
        <Resumen />
      </section>



    </>
  )
}

export default Form

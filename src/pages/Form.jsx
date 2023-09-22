import { useContext } from "react"
import { datos2 } from "../components/datos"

import Context from "../context/Context"
import { useForm } from "react-hook-form"

const Form = () => {
  const { register, handleSubmit, formState: { errors }, setFocus, reset, watch } = useForm()
  const { etapas, setEtapas, misDatos } = useContext(Context);
  const obtener = (data) => {
    misDatos[etapas] = data.valor;
    setEtapas(etapas + 1);
    setFocus('valor');
    reset();
  }
  return (
    <>
      <form onSubmit={handleSubmit(obtener)}>
        <h2> {datos2[etapas].text} </h2>
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


    </>
  )
}

export default Form

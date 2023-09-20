import { useForm } from 'react-hook-form'
import { validadorDIEGO } from './components/validador';
import './stylesheet/App.css'

function App() {
  const { register, handleSubmit, formState:{ errors } } = useForm();

  const obtenerValores = (data) => {

  }

  return (
    <>
      <form onSubmit={handleSubmit(obtenerValores)}>

        <div className='pregunta'>
          <label htmlFor='nombre'>Name:</label>
          <input id='nombre' placeholder='Marcos...' autoFocus
            {...register('nombre',
              {
                required: true,
                maxLength: 5,
              })}
          />

        </div>
        {errors.nombre?.type === 'required' && <div className='aviso'>The Name section is Obligatorie</div>}
        {errors.nombre?.type === 'maxLength' && <div className='aviso'>5 letters are mandatory</div>}

        <div className='pregunta'>
          <label htmlFor='lastname'>Last Name:</label>
          <input id='lastname' placeholder='Muster...'
            {...register('lastname',
              {
                required: true,
                maxLength: 10,
              })}
          />
        </div>
        {errors.lastname?.type === 'required' && <div className='aviso'>The Name section is Obligatorie</div>}
        {errors.lastname?.type === 'maxLength' && <div className='aviso'>10 letters are mandatory</div>}

        <div className='pregunta'>
          <label htmlFor='edad'>Old:</label>
          <input id='edad' type='number' placeholder='123...'
            {...register('edad', 
            {
              min:1,
              max:100
            })}
          />
        </div>
        {errors.edad?.type === 'min' && <div className='aviso'>please more than 1</div>}
        {errors.edad?.type === 'max' && <div className='aviso'>please less than 100</div>}

        <div className='pregunta'>
          <label htmlFor='email'>E-Mail:</label>
          <input id='email' placeholder='marcos@gmail.com' type='email'
            {...register('email',
            {
              pattern:/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
            })}
          />
        </div>
        {errors.email?.type === 'pattern' && <div className='aviso'>E-Mail not vallid!</div>}

        <div className='pregunta'>
          <label htmlFor='telefono'>Phone:</label>
          <input id='telefono' placeholder='079...'
            {...register('telefono', 
            {
              validate:validadorDIEGO

            })}
          />
        </div>
        {errors.telefono?.type === 'validate' && <div className='aviso'>the phone must start with 079</div>}
        

        <div className='pregunta'>
          <input type='submit' />
        </div>



      </form>

    </>
  )
}

export default App

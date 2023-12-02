import React, { useState } from "react";


const Form = () => {

const [nombre, setNombre] = useState('')
const [email, setEmail] = useState('')
const [show, setShow] = useState(false)
const [error, setError] = useState(false)

const handleSubmit = (e) => {
  e.preventDefault()
  if(nombre.length > 5 && email.length > 6){
    setShow(true)
    setError(false)
} else {
    setError(true)
    setShow(false)
}
}

return (
  <>
    <div>
      <form onSubmit={handleSubmit}>
        <label> Nombre: </label>
        <input type="text" placeholder='Ingrese nombre'
          onChange={(e) => {
          setNombre(e.target.value.trim());
          setShow(false);
          setError(false)
            }}/>
        <label> E-mail: </label>
        <input type="email" placeholder='Ingrese mail' 
        onChange={(e) => {
          setEmail(e.target.value.trim())
          setShow(false);
          setError(false)
          }}/>
        <button>Nos contactamos!</button>
      </form>
    </div>
    <div>
      {show && <h2>Gracias {nombre}, te contactaremos cuando antes vía mail</h2>}
      {error && <h2 className="error">Por favor verifique su información nuevamente</h2>}
    </div>
  </>
);
};

export default Form;

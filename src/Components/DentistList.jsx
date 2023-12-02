import React from 'react'
import { useContextGlobal } from './utils/global.context.jsx'
import Card from './Card.jsx'

const DentistList = () => {
const {state} = useContextGlobal()
  return (
    <div >
      {state.data.map((dentista) => <Card dentista={dentista} key={dentista.id}/>)}
    </div>
  )
}

export default DentistList
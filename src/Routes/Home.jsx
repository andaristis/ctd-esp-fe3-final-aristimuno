import React from 'react'
import Card from '../Components/Card'
import DentistList from '../Components/DentistList'
import { useContextGlobal } from '../Components/utils/global.context'

const Home = () => {
const {state} = useContextGlobal()

return (
  <main className="" >
    <h1>Home</h1>
    <div className='card-grid'>
      {state.data.map((dentista) => <Card dentista={dentista} key={dentista.id}/>)}
    </div>
  </main>
)
}

export default Home
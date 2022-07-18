import React, { createContext } from 'react'
import UsingFetch from './Components/FetchApi/UsingFetch';
import CompDidMount from './Components/Life_cycle_method/CompDidMount';
import ComA from "./Components/UseContext/ComA"
import Login from './Components/Validation/Login';
export const FirstName = createContext();
function App() {

  return (
    <>
      <FirstName.Provider value={"sonu singh"}>
        <ComA />
        <Login />
      </FirstName.Provider>
      <CompDidMount />
      <UsingFetch />

    </>
  )
}

export default App
import React, { createContext } from 'react'
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
    </>
  )
}

export default App
import { useState } from "react";
import { Register } from "./componentesregistro/Register"


function Registro() {
  const [users, setUsers] = useState([]);

  return (
    <>
      <Register users={users} setUsers={setUsers}/>
    </>
  )
}

export default Registro

import React,{useState} from 'react';
import UserTable from './components/UserTable';
import { v4 as uuidv4} from 'uuid';
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm'

function App() {
  const usersData = [
    { id: uuidv4(), name: 'Tania', username: 'floppydiskette' },
    { id: uuidv4(), name: 'Craig', username: 'siliconeidolon' },
    { id: uuidv4(), name: 'Ben', username: 'benisphere' },
  ]

  const [users, setUsers] = useState(usersData);

  // Add User

  const addUser = (user) => {
    user.id = uuidv4();
    setUsers([
      ...users, 
      user
    ])
  }

  // eliminar User

  const deleteUser = (id) =>{
    console.log(id);
    // setUsers(users.filter(users => id !==user.id));

    const arrayFiltrado  = users.filter(user => id !== user.id);
    setUsers(arrayFiltrado);
  }

  //editar Usuario
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState({id:null, name:'', username:''});

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({id: user.id, name:user.name, username:user.username});
  }

  const updateUser = (id, updateUser) =>{
    setEditing(false);
    setUsers(users.map(user => (user.id === id ? updateUser : user)))
  }

  return (
    <div className="App">
      <div className="container mt-5">
        <h1>CRUD HOOKS</h1>
        <div className="flex-row">
          <div className="flex-large">
            {
              editing ? (
                <div>
                  <h2>Editar Usuarios</h2>
                  <EditUserForm currentUser = {currentUser} updateUser={updateUser}/>
                </div>
              ):(
                <div>
                  <h2>Agregar Usuario</h2>
                  <AddUserForm addUser={addUser}/>
                </div>
              )
            }
          </div>
          <div className="flex-large">
            <h2>Views Users</h2>
            <UserTable 
              users={users} 
              deleteUser = {deleteUser} 
              setEditing = {setEditing}
              editRow = {editRow}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

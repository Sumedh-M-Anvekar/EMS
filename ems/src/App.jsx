import React, { useEffect, useState } from 'react'
import Login from './component/Auth/Login'
import EmployeeDashboard from './component/Dashboard/EmployeeDashboard'
import AdminDashboard from './component/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { useContext } from 'react'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setloggedInUserData] = useState(null)

  const [userData,setUserData] = useContext(AuthContext);

  useEffect(()=>{
    const loggedInUser= localStorage.getItem('loggedInUser')
    if(loggedInUser){
      const userData= JSON.parse(loggedInUser);
      setUser(userData.role)
      setloggedInUserData(userData.data)

    }
  },[])
  
  const handleLogin = (email, password) => {

    if(email=='admin@gmail.com' && password=='123'){
      setUser( 'admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }
    else if(userData){
      const employee=userData.find((e)=>email==e.email && password==e.password);
      if(employee){
        setUser('user')
        setloggedInUserData(employee);
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))
      }
    }
    else{
      alert("Invalid email or password")
    }
  }

  

  return (
    <div>
      {!user ? <Login handleLogin={handleLogin}/> : ''}
      {user=='admin' ? <AdminDashboard changeUser={setUser}/>:""}
      {user=='user' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData}/>:""}
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard/> */}
    </div>
  )
}

export default App

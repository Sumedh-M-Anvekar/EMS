import React, { useEffect, useState } from 'react'
import { setLocalStorage } from '../../utils/LocalStorage';

const Header = (props) => {

  const [userName, setuserName] = useState('');
  useEffect(() => {
    if(!props.data){
      setuserName('admin');
    }
    else{
      setuserName(props.data.name);
    }
  }, [props.data])

  const logOut=()=>{
    localStorage.setItem('loggedInUser','');
    props.changeUser('')

  }
  
  return (
    <div className='text-white flex items-center justify-between'>
      <h1 className='text-2xl font-medium'> Hello <br/> <span className='text-3xl font-semibold'>{userName}😍</span> </h1>
      <button onClick={logOut} className='bg-red-700 p-3 rounded hover:bg-red-500'>Log Out</button>
    </div>
  )
}

export default Header

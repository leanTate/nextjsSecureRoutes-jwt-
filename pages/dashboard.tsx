import React,{useState} from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
const Dashboard = () => {
  const router = useRouter();
  const getProfile = async() =>{
    const res = await axios.get('/api/profile')
    setUser(res.data)
  }
  const [user,setUser]=useState()
  const logout=async()=>{
    const res = await axios.post('/api/logout');
    if(res.status===200){
      router.push('/login')
    }
  }
  return (
    <div>
      <button onClick={()=>getProfile()}>
        Get Profile
      </button>
      <pre>
        {JSON.stringify(user,null,2)}
      </pre>
      <button onClick={()=>logout()}>logout</button>
    </div>
  )
}

export default Dashboard

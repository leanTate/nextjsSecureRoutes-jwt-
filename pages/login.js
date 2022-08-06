import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const LoginPage = () => {
  const router = useRouter();
  const [credentials,setCredentials] = useState({
    password:'',
    user:''
  })
  const handleChange = (e) =>{
    setCredentials({
      ...credentials,
      [e.target.name]:e.target.value
    })
  }
  const handleSubmit = async (e) =>{
    e.preventDefault();
    const response = await axios.post('/api/auth/login',credentials);
    if (response.status === 200){
      router.push('/dashboard');
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="user" placeholder="userName" onChange={handleChange}/>
        <input name="password" type="password" placeholder="password" onChange={handleChange} />
        <button>login</button>
      </form>
    </div>
  )
}
export default LoginPage;
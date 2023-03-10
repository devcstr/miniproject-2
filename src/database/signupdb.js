import React, { useState } from 'react'
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"

function SignUpDB() {

    const history = useNavigate();

    const [email,setEmail] = useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/signup",{
                email,
                password
            })
            .then(res=>{
                if(res.data==="exist"){
                   alert ("User already exist")
                }
                
                else if(res.data==="notexist"){
                    history("/", {state:{id:email}})
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })
        }
        catch{
            console.log(e)
        }
    }

  return (
    <div className='signUp'>
    <h1>SignUp</h1>

    <form action="POST">
        <input type="email" onChange={(e) => {setEmail(e.target.value)}} placeholder="Email" name="" id="" />
        <input type="password" onChange={(e) => {setPassword(e.target.value)}} placeholder="Password" name="" id="" />

        <input type="submit" onClick={submit} />
    </form>

    <br />
    <p>OR</p>
    <br />

    <Link to="/">Login Page</Link>
    </div>
  )

}


export default SignUpDB
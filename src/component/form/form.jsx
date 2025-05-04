
import { useState, useContext, useEffect} from "react"
import { useNavigate } from "react-router-dom"
import "./form.css"
import { ForLogin } from "../home"
import axios from "axios"


const Form = () => {
    
    let [user, setUser]=useState([])
    let {student, setLogin, teacher} = useContext(ForLogin);
    let [name, setName]=useState('')
    let [pass, setPass]=useState('')
    // let [studData, setStudData]= useState([])
    const navegate = useNavigate()

    let hiden = ()=> setLogin(false)
    
    let loginToTeacher = () =>{
        (name=="admin" && pass=="admin")? (navegate("/teach")) : (alert("your input incorrect"))
    }

    useEffect(()=>{
        axios.get("/src/db.json")
        .then((resp)=>{
            setUser(resp.data)
            console.log(resp.data)
        })
    }, [])

    let loginToStud = () =>{
        (user.find((ele)=>(ele.email==name)) && user.find((ele)=>(ele.username==pass)))
        ? (navegate("/stud", {state:{name}})) 
        : (alert("your input incorrect"))
    }


return (
    
    <div id='form'>
        <div>
            <label>User Name:</label>
            <input 
            type="text"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            placeholder="your user name"/>
        </div>
        <div>
            <label>Password:</label>
            <input 
            type="password"
            value={pass}
            onChange={(e)=>setPass(e.target.value)}
            placeholder="your password"/>
        </div>
        {teacher && <button onClick={loginToTeacher} >Login</button>}
        {student && <button onClick={loginToStud} >Login</button>}
        <img onClick={hiden} src="/icon/close.png" height={"20px"} alt="close icon" />
    </div>
    
)
}

export default Form


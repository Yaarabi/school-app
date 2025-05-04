
import { useState, createContext } from "react"
import "./style.css"
import React from 'react'
import Form from "../form/form"

const ForLogin = createContext()

const Home = () => {

    let [login, setLogin]=useState(false)
    let [student, setStudent]=useState(false)
    let [teacher, setTeacher]=useState(false)

    let toTeacher = ()=>{
        setLogin(true)
        setTeacher(true)
        setStudent(false)
    }
    let toStud = ()=>{
        setLogin(true)
        setStudent(true)
        setTeacher(false)
    }

return (
    <ForLogin.Provider value={{student, setLogin, teacher}}>
    <nav>
        <h1>One Place One School</h1>
        <div className="loginSection">
            <button>Login</button>
            <button>Sign In</button>
        </div>
    </nav>
    <main>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus at iste deserunt praesentium suscipit ducimus adipisci delectus molestias veniam, obcaecati dignissimos modi nulla laudantium dolore? Neque veniam assumenda provident quis.
        </p>
        <section>
            <div onClick={toTeacher}>Teacher</div>
            <div onClick={toStud}>Student</div>
        </section>
        {login && <Form/>}
    </main>
    </ForLogin.Provider>
)
}

export default Home
export {ForLogin}

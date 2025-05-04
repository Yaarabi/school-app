
import Dachbord from '../piece/dachbord'
import Footer from '../piece/footer'
import Header from '../piece/header'
import { useEffect, useState, createContext } from 'react'
import { useLocation } from 'react-router-dom'
import "./stud.css"
import axios from 'axios'
import Sidebar from '../piece/sideBar'
import Information from '../piece/information'

const Hiden = createContext()

const Stud = () => {

    let [studData, setStudData]=useState([])
    let [showSide, setShowSide]=useState(false)
    let [showInfo, setShowInfo]=useState(false)

    const location = useLocation()
    console.log(location.state)

    useEffect(()=>{
        axios.get("/src/db.json")
        .then((resp)=>{
            setStudData(resp.data.filter((ele)=>(
                ele.email!==location.state
            )))
            // console.log(studData)
        })
    },[location.state])

    

return (
    
    <Hiden.Provider value={{setShowSide, setShowInfo}} >
    {studData[0] ? <>
    <nav>
        <Header name= {studData[0].name} />
    </nav>
    <main>
        {!showInfo &&<Dachbord />}
        {showSide && <Sidebar />}
        {showInfo &&<Information name= {studData[0].name} email= {studData[0].email} phone= {studData[0].phone} website= {studData[0].website} />}
    </main>
    <Footer />
    </>
    : <h2>Loeding ...</h2>
    }
    </Hiden.Provider>
    
)
}

export default Stud
export {Hiden}
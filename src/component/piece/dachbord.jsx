
import React from 'react'
import "./dash.css"
import { useContext } from 'react'
import { Hiden } from '../student/stud'

const Dachbord = () => {

    const {setShowInfo} = useContext(Hiden)

    let forShowInfo = ()=> {setShowInfo(true)}

    return (
    
        <section className='dash'>
            <div onClick={forShowInfo}>My Information</div>
            <div>dash 2</div>
            <div>dash 3</div>
            <div>dash 4</div>
        </section>
    
    )
}

export default Dachbord


import React, { useContext } from 'react'
import { Hiden } from '../student/stud'


const Information = (props) => {

    const {setShowInfo}=useContext(Hiden)

    return (
    <div className='info'>
        <img src="/icon/man.png" alt="user icon" height={"100px"} />
        <h3>{props.name}</h3>
        <h3>{props.email}</h3>
        <h3>{props.phone}</h3>
        <h3>{props.website}</h3>
        <img onClick={()=> setShowInfo(false)} className='back' src="/icon/back (1).png" alt="back icon" height={"20px"} />
    </div>
    )
}

export default Information


import { useContext } from "react";
import React from "react";
import { Hiden } from "../student/stud";

const Header = (props) => {

    const {setShowSide} = useContext(Hiden)

    const display = ()=> setShowSide(true)

    return (
    <>
        <div className="profile">
            <img src="/icon/man (1).png" alt="profile icon" height="40px" />
            <h3 className="margin">{props.name}</h3>
        </div>
        <h2>One School One Place</h2>
        <div className="icon">
            <img id="messagIcon" src="/icon/email.png" alt="boite icon" height="40px" />
            <img onClick={display} className="margin" id="barIcon" src="/icon/menu (2).png" alt="menu icon" height="40px" />
        </div>
    </>
    );
};

export default Header;

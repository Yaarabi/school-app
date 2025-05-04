
import React from 'react';
import { useContext } from 'react';
import { Hiden } from '../student/stud';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {

    const navegate = useNavigate()
    const {setShowSide} = useContext(Hiden)

    const display = ()=> setShowSide(false)

    return (
        <aside>
            <img onClick={display} id="closes" src="/icon/close.png" height="20px" alt="close icon" />
            <div className="links">
                <a href="">My profile</a>
                <a href="">Contact</a>
                <a href="">My Path</a>
                <a href="">Reclamation</a>
                <a href="">Setting</a>
            </div>
            <img onClick={()=> navegate("/")} id="outs" src="/icon/door.png" alt="logOut icon" height="30px" />
        </aside>
    );
};

export default Sidebar;

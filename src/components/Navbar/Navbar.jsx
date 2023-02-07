import React from 'react';
import { DataNav } from './DataNav';
import "./Navbar.css";

export const Navbar = () => {

    const datos = DataNav;
  return (
    <div className='navigate'>
        <nav className='navBar'>
            <h1>Develop.</h1>
            <div >
                <ul className='nav-items'>
                    {
                        datos.map(dato => {
                            return(
                                <li key={dato.id} className='nav-list'><a href={"#" + dato.title} >{dato.title}</a></li>
                            )
                        })
                    }
                </ul>
            </div>
        </nav>
    </div>
  )
}

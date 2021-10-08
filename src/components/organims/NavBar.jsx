import React from 'react'

export default function NavBar() {
    return (
        <nav className="nav">
            <ul className="nav-list">
                <li>
                    <h3>Logo</h3>
                </li>
               <div className="nav-list__container">
               <li>Inicio</li>
                <li>Acerca de</li>
               </div>
            </ul>
        </nav>
    )
}

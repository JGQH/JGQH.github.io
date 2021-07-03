import React from 'react'
import Navref from './Navref'
import './navbar.scss'

const Navbar = ({references, names}) => {
    return (
    <div className="port-navbar">
        {references.map((reference, i) => (
            <Navref key={i} reference={reference} name={names[i]} />
        ))}
    </div>)
}

export default Navbar
import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import Home from '../components/Home'
import MissionStatement from '../components/MissionStatement'
import Contact from '../components/Contact'
import styled from 'styled-components'

const NavBar = () => {
    return(
        <div>
            <NavItems>
                <Link to='/'>Home</Link>
                <Link to='missionStatement'>Mission Statement</Link>
                <Link to='/contact'>Contact Us</Link>
            </NavItems>
            <Routes>
                <Route exact path="/" element={ <Home/> } />
                <Route path="/missionStatement" element={ <MissionStatement/> }/>
                <Route path="/contact" element={ <Contact/> }/>
            </Routes>
        </div>
    )
}

export default NavBar


const NavItems = styled.div`
    margin:2rem;
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;
    
`
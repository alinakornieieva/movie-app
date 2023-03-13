import { NavLink } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {
    return <div className='Navigation'>
        <NavLink to='/' style={({ isActive }) => ({
            color: isActive ? '#fff' : '#a6a6a6',
        })}><span>Home</span></NavLink>
        <NavLink to='/movie-search' style={({ isActive }) => ({
            color: isActive ? '#fff' : '#a6a6a6',
        })}><span>Search</span></NavLink>
        <NavLink to='/favourite-movies' style={({ isActive }) => ({
            color: isActive ? '#fff' : '#a6a6a6',
        })}><span>My favourite</span></NavLink>
    </div>
}

export default Navigation
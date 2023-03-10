import { NavLink } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {
    return <div className='Navigation'>
        <NavLink to='/'><span>Home</span></NavLink>
        <NavLink to='/movie-search'><span>Search</span></NavLink>
        <NavLink to='favourite-movie'><span>My favourite</span></NavLink>
    </div>
}

export default Navigation
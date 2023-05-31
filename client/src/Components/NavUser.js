import {Navbar,Nav,Container} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../Redux/Actions/AuthActions'
const NavUser=()=>{
    const token = localStorage.getItem('token')
    const user = useSelector(state=>state.AuthReducer.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    return(
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Authentification</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" >Home</Nav.Link>

            {
              token && user ? 
              <>
                <Nav.Link as={Link} to="/Profile" >Profile</Nav.Link>
                <Nav.Link onClick={()=>{dispatch(logout());navigate('/')}}>Logout</Nav.Link>
              </>
              :
              <>
                <Nav.Link as={Link} to="/Register" >Register</Nav.Link>
                <Nav.Link as={Link} to="/Login" >Login</Nav.Link>
              </>
            }

            
            
          </Nav>
        </Container>
      </Navbar>
    )
}

export default NavUser
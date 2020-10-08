import React from 'react'
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core"
import '../index.css'

function NavbarComponent(props) {
    return (
        <div className= "Tabs" style= { props.todos.length === 0 ? { display: 'none' } : { display: 'block' }}>        
        <Button>
            <Link to= "/" style={{textDecoration:'none'}}>All</Link> 
        </Button>
        <Button>
            <Link to= '/Active' style={{textDecoration:'none'}}>Active</Link>
        </Button>
        <Button>
            <Link to= '/Exhausted' style={{textDecoration:'none'}}>Exhausted</Link>
        </Button>
        <Button>
            <Link to="/Completed"x style={{textDecoration:'none'}}>Completed</Link>
        </Button>
    </div>
    )
}

export default NavbarComponent

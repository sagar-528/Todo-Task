import React from 'react'
import { Link } from "react-router-dom";

function NavbarComponent(props) {
    return (
        <div className= "Tabs" style= { props.todos.length === 0 ? { display: 'none' } : { display: 'block' }}>        
        <button>
            <Link to= "/" style={{textDecoration:'none'}}>All</Link> 
        </button>
        <button>
            <Link to= '/Active' style={{textDecoration:'none'}}>Active</Link>
        </button>
        <button>
            <Link to= '/Exhausted' style={{textDecoration:'none'}}>Exhausted</Link>
        </button>
        <button>
            <Link to="/Completed"x style={{textDecoration:'none'}}>Completed</Link>
        </button>
    </div>
    )
}

export default NavbarComponent

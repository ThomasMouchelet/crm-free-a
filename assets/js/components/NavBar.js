import React from "react"
import {Link} from "react-router-dom"

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/customers">
                        Customers
                    </Link>
                </li>
                <li>
                    <Link to="/invoices">
                        Invoices
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
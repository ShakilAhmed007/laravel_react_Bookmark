import React from 'react'
import { InertiaLink } from '@inertiajs/inertia-react'
import route from 'ziggy-js';


function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <InertiaLink className="nav-link active" aria-current="page" href={route('bookmark.add').url()}>Add Bookmark</InertiaLink>
                            <a className="nav-link" href="#">Features</a>
                            <a className="nav-link" href="#">Pricing</a>
                        </div>
                    </div>
                <div><InertiaLink href={route('logout')} method='post'>Logout</InertiaLink></div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar

import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Breadcrumb extends Component {
    state = {}

    render() {

        return (
            <div className='shadow-sm'>
                <nav aria-label="breadcrumb" className="container-fluid">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <Link to="/" className='nav-link active' aria-current="page"><i className="fa-solid fa-house text-primary"></i></Link>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">Library</li>
                    </ol>
                </nav>
            </div>
        );
    }
}

export default Breadcrumb;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const pic = {
    url: 'https://picsum.photos/300/200'
}

class PageTitle extends Component {
    render() { 
        const myStyle={
            backgroundImage: `url(${pic.url})`,
            height:'227px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            boxShadow: 'inset 0 0 0 100vh linear-gradient(0deg, rgba(15, 76, 129, 0.62), rgba(15, 76, 129, 0.62))',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        };
        
        // Specifies the default values for props:
        PageTitle.defaultProps = {
            title: 'Page Title'
        }; 
        return (
            <>
                <section style={myStyle}>
                    <h1 className='container text-white text-center'>{this.props.title}</h1>
                </section>
                
                <div className='shadow-sm'>
                    <nav aria-label="breadcrumb" className='container'>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">
                                <Link to="/" className='nav-link active' aria-current="page"><i class="fa-solid fa-house"></i></Link>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">{this.props.title}</li>
                        </ol>   
                    </nav>
                </div>
            </>
        );       
    }
}
 
export default PageTitle;
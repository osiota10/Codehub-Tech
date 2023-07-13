import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CompanyInfoContext } from '../../App';

const PageTitle = ({ title }) => {
    const companyInfo = useContext(CompanyInfoContext)

    const myStyle = {
        backgroundImage: `url(${companyInfo.get_page_header_image})`,
        height: '227px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        boxShadow: 'inset 0 0 0 100vh linear-gradient(0deg, rgba(15, 76, 129, 0.62), rgba(15, 76, 129, 0.62))',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    return (
        <>
            <section style={myStyle}>
                <h1 className='container text-white text-center'>
                    {
                        title
                            ?
                            title
                            :
                            'Page Title'
                    }

                </h1>
            </section>

            <div className='shadow-sm'>
                <nav aria-label="breadcrumb" className='container'>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <Link to="/" className='nav-link active' aria-current="page"><i class="fa-solid fa-house"></i></Link>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">{title}</li>
                    </ol>
                </nav>
            </div>
        </>
    );
}

export default PageTitle;
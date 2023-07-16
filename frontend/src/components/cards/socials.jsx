import React from 'react';


function Socials({ small, socials }) {
    const { facebook_url, instagram_url, twitter_url, linkedin_url, github_url, youtube_url } = socials

    return (
        <div>
            {small ?
                <section>
                    {
                        facebook_url
                            ?
                            <span className='me-1 bg-white p-1'>
                                <a href={facebook_url} target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-square-facebook fs-5 text-primary align-middle"></i>
                                </a>
                            </span>
                            :
                            null
                    }

                    {
                        instagram_url
                            ?
                            <span className='me-1 bg-white p-1'>
                                <a href={instagram_url} target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-instagram fs-5 text-primary align-middle"></i>
                                </a>
                            </span>
                            :
                            null
                    }

                    {
                        twitter_url
                            ?
                            <span className='me-1 bg-white p-1'>
                                <a href={twitter_url} target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-square-twitter fs-5 text-primary align-middle"></i>
                                </a>
                            </span>
                            :
                            null
                    }

                    {
                        linkedin_url
                            ?
                            <span className='me-1 bg-white p-1'>
                                <a href={linkedin_url} target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-linkedin fs-5 text-primary align-middle">
                                    </i></a>
                            </span>
                            :
                            null
                    }

                    {
                        youtube_url
                            ?
                            <span className='me-1 bg-white p-1'>
                                <a href={youtube_url} target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-square-youtube fs-5 text-primary align-middle"></i>
                                </a>
                            </span>
                            :
                            null
                    }

                    {
                        github_url
                            ?
                            <span className='me-1 bg-white p-1'>
                                <a href={github_url} target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-square-github fs-5 text-primary align-middle"></i>
                                </a>
                            </span>
                            :
                            null
                    }
                </ section>

                :

                <>
                    <section className='py-10 bg-light'>
                        <header className='text-center mb-4'>
                            <h2>Our Socials</h2>
                            <h5>Follow us</h5>
                        </header>

                        <section className='d-flex justify-content-center'>
                            {
                                facebook_url
                                    ?
                                    <section className='me-1 bg-white p-1'>
                                        <a href={facebook_url} target="_blank" rel="noopener noreferrer">
                                            <i className="fa-brands fa-square-facebook fs-1 text-primary align-middle"></i>
                                        </a>
                                    </section>
                                    :
                                    null
                            }

                            {
                                instagram_url
                                    ?
                                    <section className='me-1 bg-white p-1' target="_blank" rel="noopener noreferrer">
                                        <a href={instagram_url}>
                                            <i className="fa-brands fa-instagram fs-1 text-primary align-middle"></i>
                                        </a>
                                    </section>
                                    :
                                    null
                            }

                            {
                                twitter_url
                                    ?
                                    <section className='me-1 bg-white p-1'>
                                        <a href={twitter_url} target="_blank" rel="noopener noreferrer">
                                            <i className="fa-brands fa-square-twitter fs-1 text-primary align-middle"></i>
                                        </a>
                                    </section>
                                    :
                                    null
                            }

                            {
                                linkedin_url
                                    ?
                                    <section className='me-1 bg-white p-1'>
                                        <a href={linkedin_url} target="_blank" rel="noopener noreferrer">
                                            <i className="fa-brands fa-linkedin fs-1 text-primary align-middle"></i>
                                        </a>
                                    </section>
                                    :
                                    null
                            }

                            {
                                youtube_url
                                    ?
                                    <section className='me-1 bg-white p-1'>
                                        <a href={youtube_url} target="_blank" rel="noopener noreferrer">
                                            <i className="fa-brands fa-square-youtube fs-1 text-primary align-middle"></i>
                                        </a>
                                    </section>
                                    :
                                    null
                            }

                            {
                                github_url
                                    ?
                                    <span className='me-1 bg-white p-1'>
                                        <a href={github_url} target="_blank" rel="noopener noreferrer">
                                            <i className="fa-brands fa-square-github fs-1 text-primary align-middle"></i>
                                        </a>
                                    </span>
                                    :
                                    null
                            }
                        </section>
                    </section>
                </>
            }
        </div>
    );
}

export default Socials;
import React from 'react'

function ContactForm() {
    return (
        <div className='container py-10'>
            <section className='row'>
                <section className='col-lg-10 mx-auto'>
                    <header className='text-center mb-8'>
                        <h2>Have a Project in Mind?</h2>
                        <h5>Tell us about it</h5>
                    </header>

                    <form class="row g-3">
                        <div class="col-md-6">
                            <div class="form-floating">
                                <input type="text" class="form-control" id="full_name" placeholder="name@example.com" />
                                <label for="full_name">Full Name</label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-floating">
                                <input type="text" class="form-control" id="phone_number" placeholder="name@example.com" />
                                <label for="phone_number">Phone Number</label>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="form-floating">
                                <input type="email" class="form-control" id="email" placeholder="name@example.com" />
                                <label for="email">Email address</label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-floating">
                                <input type="text" class="form-control" id="subject" placeholder="name@example.com" />
                                <label for="subject">Subject</label>
                            </div>
                        </div>

                        <div class="col-md-12">
                            <div class="form-floating" >
                                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: '9.375rem' }}></textarea>
                                <label for="floatingTextarea2">Brief Description</label>
                            </div>
                        </div>


                        <div class="col-12 d-grid">
                            <button type="submit" class="btn btn-primary ">Submit</button>
                        </div>
                    </form>
                </section>
            </section>
        </div>
    );
}

export default ContactForm;
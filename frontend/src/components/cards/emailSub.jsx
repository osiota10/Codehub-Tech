import React, { Component } from 'react';


class MailSubscription extends Component {
    state = {}
    render() {
        return (
            <div className='bg-light'>
                <div className='container py-10'>
                    <div className='row align-items-center'>
                        <div className='col-lg-5'>
                            <h4 className='d-flex justify-content-lg-end justify-content-center'>Subscribe to<br />our Newsletter</h4>
                        </div>
                        <div className='col-lg-7'>
                            <form className="row g-3">
                                <div className="col-md-8">
                                    <div className="form-floating">
                                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" style={{ background: '#fff' }} />
                                        <label for="floatingInput">Email address</label>
                                    </div>
                                </div>

                                <div className="col-md-4 d-grid">
                                    <button type="submit" className="btn btn-primary mb-3">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default MailSubscription;
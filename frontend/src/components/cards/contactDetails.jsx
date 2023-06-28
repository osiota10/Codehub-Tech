import React, { Component } from 'react'

class ContactDetails extends Component {
    state = {  } 
    render() { 
        return (
            <div className='py-10'>
                <div className='container'>
                    <div className='row'>
                        <div className="col-lg-4">
                            <div className='border border-primary p-1'>
                                <i class="fa-solid fa-envelope text-center fs-2 text-primary"></i>
                            </div>
                            <h6>glaw24h@gmail.com</h6>
                        </div>
                        <div className="col-lg-4">
                            <div className='border border-primary p-1'>
                                <i class="fa-solid fa-phone-volume fs-2 text-primary"></i>
                            </div>
                            <h6>08061284530</h6>
                        </div>
                        <div className="col-lg-4">
                            <div className='border border-primary p-1'>
                                <i class="fa-solid fa-location-dot fs-2 text-primary"></i>
                            </div>
                            <h6>No 6, Wilfred Close off Lucky London Street, Osubi, Okpe LGA, Delta State.</h6>
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}
 
export default ContactDetails;
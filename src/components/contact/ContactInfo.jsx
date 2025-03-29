import React from 'react'

const ContactInfo = () => {
  return (
    <section className="contact section-padding">
    <div className="container">
        <div className="row">
            <div className="col-lg-4">
                   <div className="cont-info">
                    <h4 className="fw-700 color-font mb-30">Contact Info.</h4>
                    <h3 className="wow" data-splitting>Contact Email</h3>
                    <div className="item">
                        <h5><a href="mailto:hello@synopix.com">hello@synopix.com</a></h5>                               
                    </div>
                
                </div>
            </div>
              <div className="col-lg-4">
                   <div className="cont-info">
                    <h4 className="fw-700 color-font mb-30">Phone Number</h4>
                    <h3 className="wow" data-splitting>Contact Number</h3>
                     <div className="item">                          
                        <h5><a href="tel:+14709306409">+1 (470) 930-6409</a></h5>
                    </div>
                
                </div>
            </div> 
              <div className="col-lg-4">
                   <div className="cont-info">
                    <h4 className="fw-700 color-font mb-30">Address</h4>
                    <h3 className="wow" data-splitting>Office Adddress</h3>
                     <div className="item">
                        <h6>Synopix LLC, 6065 Roswell Road, Suite 450 <br/> Atlanta, GA 30328-4011
                        </h6>
                    </div>
                
                </div>
            </div>
          
        </div>
    </div>
</section>
  )
}

export default ContactInfo;
import React from 'react'

const ContactHeader = () => {
  return (
    <header className="pages-header circle-bg valign position-re">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-9 col-md-11">
                <div className="capt">
                    <div className="text-center">
                        <h1 className="color-font mb-10 fw-700">Let's talk <br/> about your project.</h1>
                        <p>Feel free to ask me any question or let’s do to talk about
                            our future collaboration.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="circle-color">
        <div className="gradient-circle"></div>
        <div className="gradient-circle two"></div>
    </div>

    <div className="line bottom right"></div>
</header>
  )
}

export default ContactHeader;
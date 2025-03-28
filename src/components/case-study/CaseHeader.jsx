import React from 'react'

const CaseHeader = () => {
  return (
    <header className="works-header  valign ">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-7 col-md-9 static">
                <div className="capt mt-50">
                    <div className="parlx text-center">
                        <h1 className="color-font">portfolio</h1>
                        <p>Creativity involves breaking out of expected & repeatable patterns in order to look at
                            things in different way than ever before.</p>
                    </div>

                    <div className="bactxt custom-font">
                        <span className="full-width">Works</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="circle-bg">
          <div className="circle-color fixed">
            <div className="gradient-circle"></div>
            <div className="gradient-circle two"></div>
          </div>
        </div>
    </div>
</header>

  )
}

export default CaseHeader;
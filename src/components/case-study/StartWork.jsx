import React, { useEffect } from 'react';
import $ from 'jquery';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import Isotope from 'isotope-layout'
//port './StartWork.css'; // Import the CSS file

// Import images
import one from '../../assets/images/portfolio/portfolio/1/1.jpg';
import saveenteen from '../../assets/images/portfolio/portfolio/1/17.jpg';
import eighteen from '../../assets/images/portfolio/portfolio/1/18.jpg';
import two from '../../assets/images/portfolio/portfolio/1/2.jpg';
import three from '../../assets/images/portfolio/portfolio/1/3.jpg';
import four from '../../assets/images/portfolio/portfolio/1/4.jpg';
import six from '../../assets/images/portfolio/portfolio/1/6.jpg';
import sixteen from '../../assets/images/portfolio/portfolio/1/16.jpg';
import seven from '../../assets/images/portfolio/portfolio/1/7.jpg';
import five from '../../assets/images/portfolio/portfolio/1/5.jpg';
import eight from '../../assets/images/portfolio/portfolio/1/8.jpg';
import nine from '../../assets/images/portfolio/portfolio/1/9.jpg';
import ten from '../../assets/images/portfolio/portfolio/1/10.jpg';
import thirteen from '../../assets/images/portfolio/portfolio/1/13.jpg';
import fourteen from '../../assets/images/portfolio/portfolio/1/14.jpg';
import sixteena from '../../assets/images/portfolio/portfolio/1/16a.jpg';
import fourteena from '../../assets/images/portfolio/portfolio/1/14a.jpg';
import fiveteena from '../../assets/images/portfolio/portfolio/1/15a.jpg';
import fiveteen from '../../assets/images/portfolio/portfolio/1/15.jpg';

export const StartWork = () => {
  useEffect(() => {
    // Initialize Swiper and other jQuery plugins
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: { el: '.swiper-pagination', clickable: true },
      });

        // **Fix Isotope Initialization**
    let iso;
    if ($('.gallery').length) {
      iso = new Isotope('.gallery', { itemSelector: '.items' });
    }
    // jQuery code for filtering
    $('.filtering').on('click', 'span', function () {
      var filterValue = $(this).attr('data-filter');
      $('.gallery').isotope({ filter: filterValue });
    });

    $('.filtering').on('click', 'span', function () {
      $(this).addClass('active').siblings().removeClass('active');
    });

    // Initialize isotope
    $('.gallery').isotope({
      itemSelector: '.items',
    });
     // Cleanup function to remove event listeners
   // **Filter Handling**
   $('.filtering').on('click', 'span', function () {
    var filterValue = $(this).attr('data-filter');
    iso.arrange({ filter: filterValue });

    $(this).addClass('active').siblings().removeClass('active');
  });

  // Cleanup function to remove event listeners
  return () => {
    if (swiper) swiper.destroy();
    if (iso) iso.destroy();
  };
}, []);

  return (
    <section className="portfolio three-column section-padding pb-70">
    <div className="container">
        <div className="row">

            {/* <!-- filter links --> */}
            <div className="filtering text-center mb-30 col-12">
                <div className="filter">
                    <span data-filter='*' className="active">All</span>
                    <span data-filter='.brand'>Website</span>
                    <span data-filter='.web'>Mobile App</span>
                    <span data-filter='.graphic'>Brand Identity</span>
                </div>
            </div>

            {/* <!-- gallery --> */}
            <div className="gallery full-width">

                {/* <!-- gallery item --> */}
                <div className="col-lg-4 col-md-6 items brand">
                    <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                        <a href="https://prepdesk.in/" target="blank">
                            <img src ={one} alt="image"></img>

                        </a>
                    </div>
                    <div className="cont">
                        <h6>Prepdesk </h6>
                        <span><a href="https://prepdesk.in/" target="blank">Website Design</a></span>
                    </div>
                </div>
                
                
                   <div className="col-lg-4 col-md-6 items web">
                    <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                        <a href="https://www.figma.com/file/8rGro3QQXzlkwzpKZoUIz1/instabatch_app?type=design&node-id=0-1&t=7OgAxUraBBkkV4ia-0" target="blank">
                            <img src={saveenteen} alt="image"></img>

                        </a>
                    </div>
                    <div className="cont">
                        <h6>Instabatch</h6>
                        <span><a href="https://www.figma.com/file/8rGro3QQXzlkwzpKZoUIz1/instabatch_app?type=design&node-id=0-1&t=7OgAxUraBBkkV4ia-0" target="blank">Mobile App UI/UX Design</a></span>
                    </div>
                </div>
                
                
                   <div className="col-lg-4 col-md-6 items brand">
                    <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                        <a href="https://jayabazaar.com/" target="blank">
                            <img src={eighteen} alt="image"></img>

                        </a>
                    </div>
                    <div className="cont">
                        <h6>Jaya Bazaar </h6>
                        <span><a href="https://jayabazaar.com/" target="blank">Website Design</a></span>
                    </div>
                </div>

                {/* <!-- gallery item --> */}
                <div className="col-lg-4 col-md-6 items web">
                    <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                        <a href="https://www.figma.com/file/BuC1qm9V6XgB5FO4fqgRci/groovey-app?type=design&node-id=0-1&t=k8oXFz70AOjscqzv-0"  target="blank">
                            <img src={two} alt="image"></img>

                        </a>
                    </div>
                    <div className="cont">
                        <h6>Groovey</h6>
                        <span><a href="https://www.figma.com/file/BuC1qm9V6XgB5FO4fqgRci/groovey-app?type=design&node-id=0-1&t=k8oXFz70AOjscqzv-0" target="blank">Mobile App UI/UX Design</a></span>
                    </div>
                </div>

                {/* <!-- gallery item --> */}
                <div className="col-lg-4 col-md-6 items brand">
                    <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                        <a href="https://secneural.com/" target="blank">
                            <img src={three} alt="image"></img>

                        </a>
                    </div>
                    <div className="cont">
                        <h6>Secneural LLC</h6>
                        <span><a href="https://secneural.com/" target="blank">Website UI/UX Design</a></span>
                    </div>
                </div>

                {/* <!-- gallery item --> */}
                <div className="col-lg-4 col-md-6 items web">
                    <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                        <a href="https://www.figma.com/file/nQ87l8E1e7Qh60x6deFfcS/ekinch?type=design&node-id=0-1&t=dYtocOmVPVRUUF7x-0" target="blank">
                            <img src={four} alt="image"></img>

                        </a>
                    </div>
                    <div className="cont">
                        <h6>Ekinch</h6>
                        <span><a href="https://www.figma.com/file/nQ87l8E1e7Qh60x6deFfcS/ekinch?type=design&node-id=0-1&t=dYtocOmVPVRUUF7x-0" target="blank">Mobile App Design</a></span>
                    </div>
                </div>

                {/* <!-- gallery item --> */}
                <div className="col-lg-4 col-md-6 items brand">
                    <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                        <a href="https://threatsview.com/" target="blank">
                            <img src={five} alt="image"></img>
                        </a>
                    </div>
                    <div className="cont">
                        <h6>Threatview</h6>
                        <span><a href="https://threatsview.com/" target="blank">Mobile App UI/UX Design</a></span>
                    </div>
                </div>

                {/* <!-- gallery item --> */}
                <div className="col-lg-4 col-md-6 items brand">
                    <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                        <a href="https://b2bcontenthub.com/"  target="blank">
                            <img src={six} alt="image"></img>

                        </a>
                    </div>
                    <div className="cont">
                        <h6>Business Content Hub</h6>
                        <span><a href="https://b2bcontenthub.com/"  target="blank">Website Design</a></span>
                    </div>
                </div>
                
                     <div className="col-lg-4 col-md-6 items web">
                    <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                        <a href="https://www.figma.com/file/5eIOZnbOer6SrkYfTLqJo9/borrower-management-loan-app?type=design&node-id=35-595&t=8wUcFzn2izlLdbZT-0" target="blank">
                            <img src={seven} alt="image"></img>

                        </a>
                    </div>
                    <div className="cont">
                        <h6>Finayo</h6>
                        <span><a href="https://www.figma.com/file/5eIOZnbOer6SrkYfTLqJo9/borrower-management-loan-app?type=design&node-id=35-595&t=8wUcFzn2izlLdbZT-0" target="blank">Mobile App Design</a></span>
                    </div>
                </div>
                
                
                     <div className="col-lg-4 col-md-6 items web">
                    <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                        <a href="https://play.google.com/store/apps/details?id=com.stepbuck.app&hl=en_IN&gl=US&pli=1" target="blank">
                            <img src= {sixteen} alt="image"></img>

                        </a>
                    </div>
                    <div className="cont">
                        <h6>Stepbuck </h6>
                        <span><a href="https://play.google.com/store/apps/details?id=com.stepbuck.app&hl=en_IN&gl=US&pli=1" target="blank">Mobile App Design</a></span>
                    </div>
                </div>
                
                
                     <div className="col-lg-4 col-md-6 items graphic">
                    <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                        <a href="case-study/packaging.pdf" target="blank">
                            <img src={eight} alt="image"></img>

                        </a>
                    </div>
                    <div className="cont">
                        <h6>Bhrigu Package Design </h6>
                        <span><a href="case-study/packaging.pdf" target="blank">Brand Packaging Design</a></span>
                    </div>
                </div>
                
                     <div className="col-lg-4 col-md-6 items web">
                    <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                        <a href="https://www.figma.com/file/IAX9atrYhjvhKlE2wJn2N5/cepat-app?type=design&node-id=0-1&t=6f8wiEqgYQh3aF2u-0"  target="blank">
                            <img src={nine} alt="image"></img>

                        </a>
                    </div>
                    <div className="cont">
                        <h6>Cepat Gawe</h6>
                        <span><a href="https://www.figma.com/file/IAX9atrYhjvhKlE2wJn2N5/cepat-app?type=design&node-id=0-1&t=6f8wiEqgYQh3aF2u-0"  target="blank">Mobile App Design</a></span>
                    </div>
                </div>
                
                     <div className="col-lg-4 col-md-6 items web">
                    <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                        <a href="https://www.figma.com/file/2C04RHVBycTY8ETg4pftzC/verifeed?type=design&node-id=0-1&t=q4b5Yx3HgD9CcnxN-0" target="blank">
                            <img src={ten} alt="image" ></img>

                        </a>
                    </div>
                    <div className="cont">
                        <h6>Verifeed</h6>
                        <span><a href="https://www.figma.com/file/2C04RHVBycTY8ETg4pftzC/verifeed?type=design&node-id=0-1&t=q4b5Yx3HgD9CcnxN-0" target="blank">Mobile App Design</a></span>
                    </div>
                </div>
            
                
                     <div className="col-lg-4 col-md-6 items graphic">
                    <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                        <a href="case-study/2d-logo.pdf" target="blank">
                            <img src={thirteen} alt="image"></img>

                        </a>
                    </div>
                    <div className="cont">
                        <h6>Logo Design</h6>
                        <span><a href="#0">Brand Logo Design</a></span>
                    </div>
                </div>
                
                     <div className="col-lg-4 col-md-6 items graphic">
                    <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                        <a href="case-study/brand-print.pdf" target="blank">
                            <img src={fourteen} alt="image"></img>

                        </a>
                    </div>
                    <div className="cont">
                        <h6>Brand Printing</h6>
                        <span><a href="#0" target="blank">Product Prinitng </a></span>
                    </div>
                </div>
                
                         <div className="col-lg-4 col-md-6 items graphic">
                    <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                        <a href="case-study/3d-logo.pdf" target="blank">
                            <img src={sixteena} alt="image"></img>

                        </a>
                    </div>
                    <div className="cont">
                        <h6>3D Logo Design</h6>
                        <span><a href="#0" target="blank">Logo Design </a></span>
                    </div>
                </div>
                
                
                     <div className="col-lg-4 col-md-6 items graphic">
                    <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                        <a href="case-study/packaging.pdf" target="blank">
                            <img src={fourteena} alt="image"></img>

                        </a>
                    </div>
                    <div className="cont">
                        <h6>Brand Package</h6>
                        <span><a href="#0" target="blank">Package Design </a></span>
                    </div>
                </div>
                
                   <div className="col-lg-4 col-md-6 items graphic">
                    <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                        <a href="case-study/brand-print.pdf" target="blank">
                            <img src={fiveteena} alt="image"></img>

                        </a>
                    </div>
                    <div className="cont">
                        <h6>Company Branding</h6>
                        <span><a href="#0" target="blank">Company Brand Design </a></span>
                    </div>
                </div>
                
                     <div className="col-lg-4 col-md-6 items graphic">
                    <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                        <a href="img/illus.png" target="blank">
                            <img src={fiveteen} alt="image"></img>

                        </a>
                    </div>
                    <div className="cont">
                        <h6>Illustrator</h6>
                        <span><a href="#0" target="blank">3D Vector</a></span>
                    </div>
                </div>

            </div>

        </div>
    </div>
</section>
  )
}

// export default StartWork;
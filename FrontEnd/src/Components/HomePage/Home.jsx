import React, { useEffect } from 'react'
import img1 from '../../img/carousel-1.jpg'
import img2 from '../../img/carousel-2.jpg'
import img3 from '../../img/carousel-3.jpg'
import img4 from '../../img/omar-prestwich-jLEGurepDco-unsplash.jpg'
import img5 from '../../img/offer-2.jpg'
import { Link } from 'react-router'


function setupCarousel(carouselId, interval = 5000) {
  const carousel = document.getElementById(carouselId);
  if (!carousel) return;

  const slides = carousel.querySelectorAll('.carousel-item');
  const indicators = carousel.querySelectorAll('.carousel-indicators button');
  const prevBtn = carousel.querySelector('.carousel-control-prev');
  const nextBtn = carousel.querySelector('.carousel-control-next');
  let currentIndex = 0;
  let slideInterval;

  function showSlide(index) {
    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;

    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
      slide.setAttribute('aria-hidden', i !== index);
    });

    indicators.forEach((indicator, i) => {
      indicator.classList.toggle('active', i === index);
      indicator.setAttribute('aria-current', i === index);
    });

    currentIndex = index;
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  function startAutoSlide() {
    slideInterval = setInterval(nextSlide, interval);
  }

  function stopAutoSlide() {
    clearInterval(slideInterval);
  }

  // Event listeners for navigation
  nextBtn?.addEventListener('click', () => {
    stopAutoSlide();
    nextSlide();
    startAutoSlide();
  });

  prevBtn?.addEventListener('click', () => {
    stopAutoSlide();
    prevSlide();
    startAutoSlide();
  });

  indicators.forEach((indicator, i) => {
    indicator.addEventListener('click', () => {
      stopAutoSlide();
      showSlide(i);
      startAutoSlide();
    });
  });

  // Pause on hover
  carousel.addEventListener('mouseenter', stopAutoSlide);
  carousel.addEventListener('mouseleave', startAutoSlide);

  // Initialize
  showSlide(0);
  startAutoSlide();

  // Cleanup
  return () => {
    stopAutoSlide();
    nextBtn?.removeEventListener('click', nextSlide);
    prevBtn?.removeEventListener('click', prevSlide);
    indicators.forEach((indicator, i) => {
      indicator.removeEventListener('click', () => showSlide(i));
    });
    carousel.removeEventListener('mouseenter', stopAutoSlide);
    carousel.removeEventListener('mouseleave', startAutoSlide);
  };
}

function Home() {
  useEffect(() => {
    const cleanup = setupCarousel('header-carousel');
    return cleanup;
  }, []);

  return (
    <div>
      <div className="container-fluid mb-3">
        <div className="row px-xl-5">
          <div className="col-lg-8">
            <div id="header-carousel" className="carousel carousel-fade mb-30 mb-lg-0" role="region" aria-label="Fashion Carousel">
              {/* Carousel Indicators */}
              <div className="carousel-indicators">
                <button
                  type="button"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  aria-label="Slide 3"
                ></button>
              </div>

              {/* Carousel Items */}
              <div className="carousel-inner">
                <div className="carousel-item position-relative active" style={{ height: '430px' }} aria-hidden="false">
                  <img
                    className="position-absolute w-100 h-100"
                    src={img1}
                    style={{ objectFit: 'cover' }}
                    alt="Men's Fashion"
                  />
                  <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div className="p-3" style={{ maxWidth: '700px' }}>
                      <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">
                        Men's Fashion
                      </h1>
                      <p className="mx-md-5 px-5 animate__animated animate__bounceIn">
                        Welcome to ASTU E-commerce website <br />
                        Shop Smarter, Live Better! Discover the best deals on
                      </p>
                      <Link
                        className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp"
                        to="/shop"
                      >
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="carousel-item position-relative" style={{ height: '430px' }} aria-hidden="true">
                  <img
                    className="position-absolute w-100 h-100"
                    src={img2}
                    style={{ objectFit: 'cover' }}
                    alt="Women's Fashion"
                  />
                  <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div className="p-3" style={{ maxWidth: '700px' }}>
                      <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">
                        Women's Fashion
                      </h1>
                      <p className="mx-md-5 px-5 animate__animated animate__bounceIn">
                        Big Savings, Endless Choices! Find everything you need at unbeatable prices
                      </p>
                      <Link
                        className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp"
                        to="/shop"
                      >
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="carousel-item position-relative" style={{ height: '430px' }} aria-hidden="true">
                  <img
                    className="position-absolute w-100 h-100"
                    src={img3}
                    style={{ objectFit: 'cover' }}
                    alt="Kids' Fashion"
                  />
                  <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div className="p-3" style={{ maxWidth: '700px' }}>
                      <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">
                        Kids' Fashion
                      </h1>
                      <p className="mx-md-5 px-5 animate__animated animate__bounceIn">
                        Exclusive Offers Just for You! Don't miss out on today's hottest deals.
                      </p>
                      <Link
                        className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp"
                        to="/shop"
                      >
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Carousel Controls */}
              <button
                className="carousel-control-prev"
                type="button"
                aria-label="Previous Slide"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                aria-label="Next Slide"
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="product-offer mb-30" style={{ height: '200px' }}>
              <img className="img-fluid" src={img4} alt="Special Offer 1" />
              <div className="offer-text">
                <h6 className="text-white text-uppercase">Save 20%</h6>
                <h3 className="text-white mb-3">Special Offer</h3>
                <Link to="/shop" className="btn btn-primary">
                  Shop Now
                </Link>
              </div>
            </div>
            <div className="product-offer mb-30" style={{ height: '200px' }}>
              <img className="img-fluid" src={img5} alt="Special Offer 2" />
              <div className="offer-text">
                <h6 className="text-white text-uppercase">Save 20%</h6>
                <h3 className="text-white mb-3">Special Offer</h3>
                <Link to="/shop" className="btn btn-primary">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
// import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faStar, faCheck, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Proj = () => {
  return (
    <div>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#1d3557] text-white flex items-center justify-between p-6">
        <a href="#" className="text-2xl font-bold">
          <span className="text-[#e63946]">k</span>anasu
        </a>
        <div id="menu-bars" className="text-2xl">
          <FontAwesomeIcon icon={faBars} />
        </div>
        <nav className="space-x-4">
          <a href="#home" className="text-white">home</a>
          <a href="#service" className="text-white">services</a>
          <a href="#about" className="text-white">about</a>
          <a href="#gallery" className="text-white">gallery</a>
          <a href="#price" className="text-white">price</a>
          <a href="#review" className="text-white">review</a>
          <a href="#contact" className="text-white">contact</a>
        </nav>
      </header>

      <section id="home" className="flex items-center justify-center bg-[#ffffff] h-screen text-center">
        <div className="max-w-lg mx-auto">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <h3 className="text-4xl font-bold mb-4">It's Time To <span className="text-[#e63946]">Celebrate!</span></h3>
          <p className="text-lg mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, omnis.</p>
          <a href="#contact" className="bg-[#e63946] text-white py-2 px-4 rounded hover:bg-[#f1faee]">Contact Us</a>
        </div>
      </section>

      <section id="service" className="bg-[#ffffff] py-16">
        <h1 className="text-3xl font-bold text-center mb-8">our <span className="text-[#e63946]">services</span></h1>
        <div className="flex flex-wrap justify-center">
          <div className="text-center bg-white p-6 m-4 shadow-lg rounded">
            <FontAwesomeIcon icon={faStar} className="text-[#e63946] text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Decoration</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, asperiores.</p>
          </div>
          <div className="text-center bg-white p-6 m-4 shadow-lg rounded">
            <FontAwesomeIcon icon={faStar} className="text-[#e63946] text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Catering</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, asperiores.</p>
          </div>
          <div className="text-center bg-white p-6 m-4 shadow-lg rounded">
            <FontAwesomeIcon icon={faStar} className="text-[#e63946] text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Entertainment</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, asperiores.</p>
          </div>
        </div>
      </section>

      <section id="about" className="py-16">
        <h1 className="text-3xl font-bold text-center mb-8"><span className="text-[#e63946]">about</span> us</h1>
        <div className="flex flex-col lg:flex-row max-w-4xl mx-auto">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <img src="images/about-img.jpg" alt="" className="w-full h-auto object-cover rounded" />
          </div>
          <div className="lg:w-1/2 lg:pl-8">
            <h3 className="text-2xl font-bold mb-4">We Will Give a Very Special Celebration For You</h3>
            <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, doloremque.</p>
            <a href="#contact" className="bg-[#e63946] text-white py-2 px-4 rounded hover:bg-[#f1faee]">Contact Us</a>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-16 bg-[#ffffff]">
        <h1 className="text-3xl font-bold text-center mb-8">our <span className="text-[#e63946]">gallery</span></h1>
        <div className="flex flex-wrap justify-center">
          <div className="relative bg-white shadow-lg rounded overflow-hidden m-4">
            <img src="images/gallery1.jpg" alt="" className="w-full h-auto object-cover" />
            <div className="absolute inset-0 flex items-center justify-center space-x-2 opacity-0 hover:opacity-100 transition-opacity">
              <a href="#" className="text-[#e63946]"><FontAwesomeIcon icon={faStar} className="text-xl" /></a>
              <a href="#" className="text-[#e63946]"><FontAwesomeIcon icon={faStar} className="text-xl" /></a>
            </div>
          </div>
          <div className="relative bg-white shadow-lg rounded overflow-hidden m-4">
            <img src="images/gallery2.jpg" alt="" className="w-full h-auto object-cover" />
            <div className="absolute inset-0 flex items-center justify-center space-x-2 opacity-0 hover:opacity-100 transition-opacity">
              <a href="#" className="text-[#e63946]"><FontAwesomeIcon icon={faStar} className="text-xl" /></a>
              <a href="#" className="text-[#e63946]"><FontAwesomeIcon icon={faStar} className="text-xl" /></a>
            </div>
          </div>
          <div className="relative bg-white shadow-lg rounded overflow-hidden m-4">
            <img src="images/gallery3.jpg" alt="" className="w-full h-auto object-cover" />
            <div className="absolute inset-0 flex items-center justify-center space-x-2 opacity-0 hover:opacity-100 transition-opacity">
              <a href="#" className="text-[#e63946]"><FontAwesomeIcon icon={faStar} className="text-xl" /></a>
              <a href="#" className="text-[#e63946]"><FontAwesomeIcon icon={faStar} className="text-xl" /></a>
            </div>
          </div>
        </div>
      </section>

      <section id="price" className="py-16 bg-[#ffffff]">
        <h1 className="text-3xl font-bold text-center mb-8">our <span className="text-[#e63946]">pricing</span></h1>
        <div className="flex flex-wrap justify-center">
          <div className="bg-white p-6 m-4 shadow-lg rounded text-center">
            <h3 className="text-xl font-bold mb-2">Basic Plan</h3>
            <div className="text-4xl font-semibold mb-4">$250</div>
            <ul className="list-disc list-inside mb-4">
              <li><FontAwesomeIcon icon={faCheck} className="text-[#e63946]" /> Venue Selection</li>
              <li><FontAwesomeIcon icon={faCheck} className="text-[#e63946]" /> Decoration</li>
              <li><FontAwesomeIcon icon={faCheck} className="text-[#e63946]" /> Catering</li>
            </ul>
            <a href="#" className="bg-[#e63946] text-white py-2 px-4 rounded hover:bg-[#f1faee]">Select Plan</a>
          </div>
          <div className="bg-white p-6 m-4 shadow-lg rounded text-center">
            <h3 className="text-xl font-bold mb-2">Standard Plan</h3>
            <div className="text-4xl font-semibold mb-4">$450</div>
            <ul className="list-disc list-inside mb-4">
              <li><FontAwesomeIcon icon={faCheck} className="text-[#e63946]" /> Venue Selection</li>
              <li><FontAwesomeIcon icon={faCheck} className="text-[#e63946]" /> Decoration</li>
              <li><FontAwesomeIcon icon={faCheck} className="text-[#e63946]" /> Catering</li>
              <li><FontAwesomeIcon icon={faCheck} className="text-[#e63946]" /> Entertainment</li>
            </ul>
            <a href="#" className="bg-[#e63946] text-white py-2 px-4 rounded hover:bg-[#f1faee]">Select Plan</a>
          </div>
          <div className="bg-white p-6 m-4 shadow-lg rounded text-center">
            <h3 className="text-xl font-bold mb-2">Premium Plan</h3>
            <div className="text-4xl font-semibold mb-4">$750</div>
            <ul className="list-disc list-inside mb-4">
              <li><FontAwesomeIcon icon={faCheck} className="text-[#e63946]" /> Venue Selection</li>
              <li><FontAwesomeIcon icon={faCheck} className="text-[#e63946]" /> Decoration</li>
              <li><FontAwesomeIcon icon={faCheck} className="text-[#e63946]" /> Catering</li>
              <li><FontAwesomeIcon icon={faCheck} className="text-[#e63946]" /> Entertainment</li>
              <li><FontAwesomeIcon icon={faCheck} className="text-[#e63946]" /> Photography</li>
            </ul>
            <a href="#" className="bg-[#e63946] text-white py-2 px-4 rounded hover:bg-[#f1faee]">Select Plan</a>
          </div>
        </div>
      </section>

      <section id="review" className="py-16">
        <h1 className="text-3xl font-bold text-center mb-8"><span className="text-[#e63946]">what</span> our clients say</h1>
        <div className="flex flex-wrap justify-center">
          <div className="bg-white p-6 m-4 shadow-lg rounded text-center">
            <FontAwesomeIcon icon={faQuoteRight} className="text-[#e63946] text-4xl mb-4" />
            <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, labore?</p>
            <h4 className="font-semibold">John Doe</h4>
            <p className="text-gray-600">Client</p>
          </div>
          <div className="bg-white p-6 m-4 shadow-lg rounded text-center">
            <FontAwesomeIcon icon={faQuoteRight} className="text-[#e63946] text-4xl mb-4" />
            <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, labore?</p>
            <h4 className="font-semibold">Jane Smith</h4>
            <p className="text-gray-600">Client</p>
          </div>
        </div>
      </section>

      <footer className="bg-[#1d3557] p-6 text-center text-white">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="text-white bg-[#e63946] p-2 rounded-full hover:bg-[#f1faee]"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href="#" className="text-white bg-[#e63946] p-2 rounded-full hover:bg-[#f1faee]"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="#" className="text-white bg-[#e63946] p-2 rounded-full hover:bg-[#f1faee]"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="#" className="text-white bg-[#e63946] p-2 rounded-full hover:bg-[#f1faee]"><FontAwesomeIcon icon={faLinkedinIn} /></a>
        </div>
        <p className="text-lg">© 2024 <span className="text-[#e63946]">YourCompany</span>. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Proj;

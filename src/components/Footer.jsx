import React from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import scrollEffect from '../hooks/Scroll';
import { Twitter, Instagram, Linkedin } from 'lucide-react';

function Footer() {
  const services = [
    { id: 1, name: 'App Development', route: 'app-development' },
    { id: 2, name: 'Web Development', route: 'web-development' },
    { id: 3, name: 'Cloud Hosting', route: 'cloud-hosting' },
    { id: 4, name: 'Digital Marketing', route: 'digital-marketing' },
    { id: 5, name: 'UI & UX Design', route: 'ui-ux-design' },  // Updated
    { id: 6, name: 'Social Media Marketing', route: 'social-media-marketing' }
  ];


  return (
    <footer className="bg-gray-900 text-white" data-aos="fade-up">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center" aria-label="Go to homepage">
              <img src={logo} className="h-10 me-3 rounded-full" alt="ZOME Logo" />
              
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-300 uppercase">Our Services</h2>
              <ul className="text-gray-400 font-medium">
                {services.map((service) => (
                  <li className="mb-4" key={service.id}>
                    <Link
                      to={ `/service/${service.route}`}
                      state={{ serviceId: service.id }}
                      onClick={scrollEffect}
                      className="hover:underline"
                      aria-label={`${service.name} service`}
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-300 uppercase">Follow us</h2>
              <ul className="text-gray-400 font-medium space-y-4">
                <li>
                  <a
                    href="https://www.instagram.com/zometechagency?igsh=eWFhZXcxNjh2ZTg3"
                    className="hover:underline"
                    aria-label="ZOME Instagram"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/zomeagency"
                    className="hover:underline"
                    aria-label="ZOME Twitter"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/zome-tech-agency-949b24343/"
                    className="hover:underline"
                    aria-label="ZOME LinkedIn"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>

            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-300 uppercase">Other Links</h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <Link to="/" className="hover:underline" onClick={scrollEffect} aria-label="Home Page">Home</Link>
                </li>
                <li className="mb-4">
                  <Link to="/about" className="hover:underline" onClick={scrollEffect} aria-label="About us page">About</Link>
                </li>
                <li className="mb-4">
                  <Link to="/contact" className="hover:underline" onClick={scrollEffect} aria-label="Contact us page">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-400 sm:text-center">
            © 2024 <a href="#" className="hover:underline" aria-label="ZOME homepage">ZOME</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            {/* Instagram Icon from lucide-react */}
            <a
              href="#"
              className="text-gray-400 hover:text-white ms-5"
              aria-label="ZOME Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>

            {/* Twitter Icon from lucide-react */}
            <a
              href="https://x.com/zomeagency"
              className="text-gray-400 hover:text-white ms-5"
              aria-label="ZOME Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>

            {/* LinkedIn Icon from lucide-react */}
            <a
              href="https://www.linkedin.com/in/zome-tech-agency-949b24343/"
              className="text-gray-400 hover:text-white ms-5"
              aria-label="ZOME LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;

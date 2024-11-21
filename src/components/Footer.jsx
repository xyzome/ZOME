import React from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import scrollEffect from '../hooks/Scroll';
import Homepage from './Homepage';

function Footer() {
  const services = [
    { name: 'App Development', link: Homepage },
    { name: 'Web Development', link: Homepage },
    { name: 'Cloud Hosting', link: Homepage },
    { name: 'Digital Marketing', link: Homepage },
    { name: 'UI & UX Design', link: Homepage },
    { name: 'Social Media Marketing', link: Homepage },
  ];

  return (
    <>
      <footer className="bg-white dark:bg-gray-900" data-aos="fade-up">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="#" className="flex items-center" aria-label="Go to homepage">
                <img src={logo} className="h-8 me-3 rounded-full" alt="ZOME Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  ZOME
                </span>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Our Services</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  {services.map((service, index) => (
                    <li className="mb-4" key={index}>
                      <Link
                        to={service.link}
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
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline" aria-label="ZOME Instagram">Instagram</a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline" aria-label="ZOME Facebook">Facebook</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Other Links</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link to="/contact" className="hover:underline" onClick={scrollEffect} aria-label="Contact us page">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2024 <a href="#" className="hover:underline" aria-label="ZOME homepage">ZOME</a>. All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5" aria-label="ZOME Twitter">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                  <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">Twitter page</span>
              </a>
              <a href="https://github.com" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5" aria-label="ZOME GitHub">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.404-.012 2.73 0 .267.176.57.686.474A9.91 9.91 0 0 0 10 .333" clipRule="evenodd" />
                </svg>
                <span className="sr-only">GitHub page</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

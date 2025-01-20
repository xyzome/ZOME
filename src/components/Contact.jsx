import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false); // Track submission state

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Start submission process
    try {
      const response = await axios.post(
        'https://api.sheetbest.com/sheets/8bdfa284-f9cf-468c-98ac-f07f33b451a8',
        formData
      );

      if (response.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Submitted!',
          text: 'We’ve received your message! Our team will be in touch shortly.',
        });
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'There was an issue submitting your message. Please try again.',
        });
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      Swal.fire({
        icon: 'error',
        title: 'Submission Failed',
        text: 'Something went wrong. Please try again later.',
      });
    } finally {
      setIsSubmitting(false); // Reset submission state
    }
  };

  return (
    <>
      {/* Helmet for SEO */}
      <Helmet>
        <title>Contact Us - Your Trusted Partner | Business</title>
        <meta name="description"
          content="Get in touch with us to address your queries effectively. Fill out our contact form and we'll get back to you promptly." />
        <meta name="keywords" content="contact us, get in touch, business queries, contact form, customer service" />
        <meta name="author" content="Zome" />
        <meta property="og:title" content="Contact Us - Your Trusted Partner | Business" />
        <meta property="og:description" content="Get in touch with us to address your queries effectively. Fill out our contact form and we'll get back to you promptly." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zome.in/contact" />
        <meta name="robots" content="index, follow" />

        {/* Breadcrumb JSON-LD */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://zome.in"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Contact Us",
                  "item": "https://zome.in/contact"
                }
              ]
            }
          `}
        </script>
      </Helmet>


      
      <section className="bg-gray-900 pt-8">
        <div
          className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h1
            className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Contact Us
          </h1>
          <p
            className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            By filling out the form below, you help us address your query effectively!
          </p>
          <form
            className="space-y-8"
            onSubmit={handleSubmit}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your Name"
                required
                pattern="[A-Za-z\s]+"
                title="Name must only contain letters."
              />
            </div>

            {/* Organization/Company Field */}
            <div>
              <label
                htmlFor="company"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Organization/Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your Organization/Company Name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="example@gmail.com"
                required
              />
            </div>

            {/* Phone Field */}
            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="+1 234 567 890"
                required
                pattern="^\+?[0-9]{1,3}?[-. ]?(\d{1,4}[-. ]?){2,3}\d{1,4}$"
              />
            </div>

            {/* Message Field */}
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Leave a comment..."
                required
                minLength={10}
                maxLength={500}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-fit"
              disabled={isSubmitting} // Disable button while submitting
            >
              {isSubmitting ? 'Sending...' : 'Send Message'} {/* Button text changes */}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;

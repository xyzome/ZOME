import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import servicesData from './service.json';
import { CheckCircle, FileText, Target, Shield, Users } from 'lucide-react';
import { Helmet } from "react-helmet";

const HeroSection = ({ service }) => {
  const firstHalfBullets = service.bullets.slice(0, 3);
  const secondHalfBullets = service.bullets.slice(3);

  return (
    <section
      className="hero-section flex flex-wrap items-center justify-between py-20 px-10 bg-gray-900 text-gray-200"
      data-aos="fade-up"
    >
      {/* SEO Optimized Image Section */}
      <div
        className="hero-image w-full md:w-1/2 mb-10 md:mb-0 flex justify-center items-center"
        data-aos="fade-left"
      >
        <img
          src={service.image}
          alt={`Detailed view of ${service.title}`}
          className="max-w-full h-auto object-cover rounded-lg shadow-lg"
          loading="lazy"
        />
      </div>

      {/* Content Section */}
      <div className="hero-content w-full md:w-1/2 pl-0 md:pl-10" data-aos="fade-right">
        <h1 className="text-4xl font-bold text-indigo-200 mb-4">{service.title}</h1>
        <p className="text-lg text-gray-300 mb-6">{service.description}</p>

        {/* Service Bullets */}
        <div className="service-list flex flex-wrap space-y-3 text-gray-300">
          <div className="w-full md:w-1/2">
            <ul>
              {firstHalfBullets.map((bullet, index) => (
                <li key={index} className="flex items-center mb-3">
                  <CheckCircle className="mr-2 text-indigo-500" size={20} />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/2">
            <ul>
              {secondHalfBullets.map((bullet, index) => (
                <li key={index} className="flex items-center mb-3">
                  <CheckCircle className="mr-2 text-indigo-500" size={20} />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const StepsSection = ({ steps }) => (
  <section className="text-gray-300 bg-gray-900" data-aos="fade-up">
    <div className="container px-5 py-24 mx-auto flex flex-wrap">
      {steps.map((step, index) => {
        let IconComponent;
        switch (index) {
          case 0:
            IconComponent = CheckCircle;
            break;
          case 1:
            IconComponent = FileText;
            break;
          case 2:
            IconComponent = Target;
            break;
          case 3:
            IconComponent = Shield;
            break;
          case 4:
            IconComponent = Users;
            break;
          default:
            IconComponent = CheckCircle;
        }

        return (
          <div
            key={index}
            className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto"
          >
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-400 pointer-events-none"></div>
            </div>
            <div
              className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm"
              data-aos="fade-left"
            >
              {index + 1}
            </div>
            <div
              className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row"
              data-aos="fade-right"
            >
              <div className="flex-shrink-0 w-24 h-24 bg-indigo-500 text-white rounded-full inline-flex items-center justify-center">
                <IconComponent className="w-12 h-12" />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-gray-200 mb-1 text-xl">{step.step}</h2>
                <p className="leading-relaxed text-gray-300">{step.detail}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </section>
);

const Accordion = ({ items, open, toggleAccordion }) => (
  <div className="w-full">
    {items.map((item, index) => (
      <div key={index} className="mb-4">
        <button
          className={`w-full text-left px-4 py-3 text-lg font-medium bg-gray-800 rounded-lg focus:outline-none hover:bg-gray-700 ${open === index ? "text-blue-400" : "text-gray-300"
            }`}
          onClick={() => toggleAccordion(index)}
        >
          {item.title}
        </button>
        {open === index && (
          <div className="px-4 py-3 text-gray-300 text-left">{item.content}</div>
        )}
      </div>
    ))}
  </div>
);

const DevelopmentProcess = ({ service, open, toggleAccordion }) => (
  <section
    className="relative text-gray-300 bg-gray-900 body-font overflow-hidden"
    data-aos="fade-up"
  >
    <div className="container relative mx-auto px-5 py-24 flex flex-col items-center">
      <h2 className="title-font sm:text-4xl text-3xl mb-8 font-medium text-gray-200 text-center">
        Explore {service.title} Development Process
      </h2>
      <div
        className="w-full max-w-3xl bg-gray-800 rounded-lg shadow-lg p-6"
        data-aos="zoom-in"
      >
        <Accordion
          items={service.accordion}
          open={open}
          toggleAccordion={toggleAccordion}
        />
      </div>
    </div>
  </section>
);

function Common() {
  const location = useLocation();
  const { serviceId } = location.state || {};
  const [service, setService] = useState(null);
  const [open, setOpen] = useState(null);

  useEffect(() => {
    if (serviceId) {
      const foundService = servicesData.services.find((s) => s.id === serviceId);
      setService(foundService);
    }
  }, [serviceId]);

  if (!service) return <p className="text-gray-300">Service not found.</p>;

  return (
    <>
      <Helmet>
        <title>{service.title} | Service Details</title>
        <meta name="description" content={`Learn more about ${service.title}. ${service.description}`} />
        <meta name="keywords" content={`Service, ${service.title}, Development Process`} />
        <meta name="author" content="Zome" />

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
                  "name": ${service.title},
                  "item": "https://www.zome.in/service/${service.title.toLowerCase().replace(/ /g, '-')}"
                }
              ]
            }
          `}

          </script>
      </Helmet>
      <HeroSection service={service} />
      <StepsSection steps={service.howWeWork} />
      <DevelopmentProcess service={service} open={open} toggleAccordion={setOpen} />
    </>
  );
}

export default Common;

import React from 'react';
import { Helmet } from 'react-helmet';
import CountUp from 'react-countup';
import methodology from '../images/methodology.png';
import { Link } from 'react-router-dom';
import scrollToTop from '../hooks/Scroll';

const AboutUs = () => {
    return (
        <div className="bg-gray-900 text-gray-100">
            <Helmet>
                <title>About Us - Unlocking Business Potential | Your Brand</title>
                <meta name="description" content="Discover how we set trends and deliver innovative solutions tailored to help your business unlock its fullest potential." />
                <meta name="keywords" content="About Us, Innovative Solutions, Business Growth, Methodology, Why Choose Us, Achievements" />
                <meta name="author" content="Zome" />
                <meta property="og:title" content="About Us - Unlocking Business Potential | Your Brand" />
                <meta property="og:description" content="Explore our methodology, achievements, and why choosing us can help your business thrive." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://zome.in/about" />
                <meta property="og:image" content="https://www.zome.in/assets/logo-BXeXjiAV.png" />

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
                  "name": "About Us",
                  "item": "https://zome.in/about"
                }
              ]
            }
          `}
                </script>
            </Helmet>


            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gray-900 text-white" data-aos="fade-up">
                <div className="container mx-auto px-4 py-20 text-center">
                    <h1 className="text-5xl font-extrabold mb-6">About Us</h1>
                    <p className="max-w-3xl mx-auto text-lg text-gray-300">
                        We don’t follow trends; we set them. Our innovative approach is tailored to help your business unlock its fullest potential.
                    </p>
                </div>
                <div className="absolute -bottom-20 -left-40 w-96 h-96 bg-gray-700 rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute -top-20 -right-40 w-80 h-80 bg-gray-600 rounded-full opacity-20 blur-3xl"></div>
            </section>

            {/* Methodology Section */}
            <section className="py-16 px-4 lg:px-20 bg-gray-900" data-aos="fade-right">
                <h2 className="text-4xl font-bold text-center mb-12 text-white">Our Methodology</h2>
                <div className="relative flex flex-wrap lg:flex-nowrap items-center lg:space-x-10">
                    <div className="lg:w-1/2">
                        <img
                            src={methodology}
                            alt="Our Process"
                            className="w-full rounded-lg shadow-lg"
                            data-aos="fade-left"
                        />
                    </div>
                    <div className="lg:w-1/2 mt-8 lg:mt-0 space-y-6">
                        <div data-aos="fade-up">
                            <h3 className="text-2xl font-semibold text-white">Unleash Success</h3>
                            <p className="text-gray-300">
                                A synergy of innovation and precision. We don’t follow trends; we set them.
                            </p>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="200">
                            <h3 className="text-2xl font-semibold text-white">Maximize Potential</h3>
                            <p className="text-gray-300">
                                Every challenge becomes an opportunity. Unleash untapped power and soar to new heights.
                            </p>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="400">
                            <h3 className="text-2xl font-semibold text-white">Unique Solutions</h3>
                            <p className="text-gray-300">
                                Where uniqueness meets functionality and aspirations find their bespoke reality.
                            </p>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="600">
                            <h3 className="text-2xl font-semibold text-white">Our Precision</h3>
                            <p className="text-gray-300">
                                Precision you can trust. Reliability you can depend on – because quality is our commitment.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-16 px-4 bg-gray-900 text-gray-100">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12 text-white" data-aos="fade-left">Why Choose Us</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { percentage: 98, label: 'Viewers', description: 'Unlocking the extraordinary requires an audience as diverse and dynamic as the dreams we dare to chase.' },
                            { percentage: 9, label: 'Keyword', description: 'Unlocking potential, one keyword at a time – where relevance becomes resonance.' },
                            { percentage: 10, label: 'Time', description: 'The clock ticks, but with us, time accelerates – from conception to innovation, we’re always ahead of the game.' },
                        ].map((item, idx) => (
                            <div key={idx} className="group relative bg-gray-700 rounded-lg shadow-lg overflow-hidden" data-aos="fade-up" data-aos-delay={idx * 200}>
                                <div className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-70 transition duration-300"></div>
                                <div className="p-8 space-y-4 relative z-10">
                                    <h3 className="text-3xl font-bold text-indigo-300">
                                        <CountUp start={0} end={item.percentage} duration={10} suffix="%" />
                                    </h3>
                                    <p className="font-medium text-gray-300">{item.label}</p>
                                    <p className="text-gray-400">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Us Section */}
            <section className="relative w-full h-[500px] bg-gray-900">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-70"
                    style={{
                        backgroundImage: 'url("https://lightleader.in/wp-content/uploads/2018/11/contactus-background.png")',
                    }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
                <Link
                    to="/contact"
                    className="relative z-10 flex items-center justify-center w-full h-full"
                    onClick={scrollToTop}
                    data-aos="fade-up" data-aos-delay="400">
                    <div className="flex items-center justify-center w-32 h-32 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-60 lg:h-60 bg-gradient-to-r from-gray-600 to-gray-500 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300">
                        <span className="text-sm sm:text-lg md:text-2xl font-extrabold text-white drop-shadow-lg">
                            Contact with Us
                        </span>
                    </div>

                </Link>
            </section>
        </div>
    );
};

export default AboutUs;

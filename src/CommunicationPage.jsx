import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Mic, Camera, Eye, Network, Shield, Users, Database, Globe, ChevronRight, Star, Award, Zap, Target } from 'lucide-react';

const CommunicationPage = () => {
    const [activeService, setActiveService] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const navigationItems = [
        { name: "Information Technology", active: false, icon: <Database className="w-5 h-5" /> },
        { name: "Communications", active: true, icon: <Network className="w-5 h-5" /> },
        { name: "Imaging and Printing", active: false, icon: <Camera className="w-5 h-5" /> },
        { name: "Inbuilding Solutions", active: false, icon: <Shield className="w-5 h-5" /> },
        { name: "Special Purpose Fitouts", active: false, icon: <Target className="w-5 h-5" /> },
        { name: "Photography", active: false, icon: <Eye className="w-5 h-5" /> },
        { name: "Personal & SME Solutions", active: false, icon: <Users className="w-5 h-5" /> },
        { name: "Infrastructure Projects", active: false, icon: <Globe className="w-5 h-5" /> }
    ];

    const services = [
        {
            icon: <Phone className="w-12 h-12 text-white" />,
            title: "Voice Communication Systems",
            description: "We entered the communication sector in 1979, and partnered with the best-of-breed technology providers such as Mitel, NEC, Huawei and Cisco. We specialize in designing and building innovative solutions that are highly customized to suit each customer, and have provided communication solutions for the Defence sector, government and private sectors.",
            gradient: "from-blue-500 via-blue-600 to-cyan-500",
            bgColor: "bg-blue-500",
            features: ["IP Telephony", "10,000+ Ports", "Defence Networks"]
        },
        {
            icon: <Users className="w-12 h-12 text-white" />,
            title: "Multimedia Call Centers",
            description: "We provide our customers with multimedia contact centers that enable them to interact with their customers via voice calls, social media, web chat and email so that they can improve customer service and customer retention.",
            gradient: "from-purple-500 via-purple-600 to-pink-500",
            bgColor: "bg-purple-500",
            features: ["Omnichannel", "Social Media", "Customer Retention"]
        },
        {
            icon: <Mic className="w-12 h-12 text-white" />,
            title: "Interactive Voice Response",
            description: "Interactive Voice Response systems can automate the information provided to customers by using voice guidance and text to speech so that information can be read out to customers directly from a database. The company has developed IVR systems in English, Sinhala, Tamil and Bengali.",
            gradient: "from-green-500 via-green-600 to-teal-500",
            bgColor: "bg-green-500",
            features: ["Multi-language", "Text-to-Speech", "Database Integration"]
        },
        {
            icon: <Camera className="w-12 h-12 text-white" />,
            title: "CCTV Surveillance Systems",
            description: "The company has implemented many surveillance solutions ranging from Colombo City Surveillance for the Ministry of Defense, Safeguarding the artifacts at the Colombo Museum to providing 24 x 7 Surveillance for the Vault at the Central Bank that contain the Gold reserves and currency of Sri Lanka.",
            gradient: "from-red-500 via-red-600 to-orange-500",
            bgColor: "bg-red-500",
            features: ["24/7 Monitoring", "High Security", "Government Grade"]
        },
        {
            icon: <Eye className="w-12 h-12 text-white" />,
            title: "Video Analytics",
            description: "The Company complements the surveillance systems using the latest state of the art video analytics such as Facial Recognition, Number plate recognition, Perimeter crossing detection, crowd detection and Machine learning. Video Analytics provide actionable intelligence to Surveillance systems.",
            gradient: "from-indigo-500 via-indigo-600 to-purple-500",
            bgColor: "bg-indigo-500",
            features: ["AI Recognition", "Machine Learning", "Real-time Analysis"]
        },
        {
            icon: <Network className="w-12 h-12 text-white" />,
            title: "Mission Critical Networks",
            description: "Metropolitan have an enviable track record of providing complex communication Solutions in the most demanding environments in Sri Lanka, UK, Pakistan and Bangladesh. This reputation that the company enjoys has been built over a period of 40 years of innovation and service.",
            gradient: "from-orange-500 via-orange-600 to-yellow-500",
            bgColor: "bg-orange-500",
            features: ["40+ Years", "4 Countries", "Mission Critical"]
        }
    ];

    const partners = [
        { name: 'Aruba' },
        { name: 'Axis' },
        { name: 'Cisco' },
        { name: 'Huawei' },
        { name: 'Mitel' },
        { name: 'NEC' },
        { name: 'Bosch' },
        { name: 'Aviat' },
        { name: 'Cisco' },
        { name: 'Grand' },
        { name: 'Hik' },
        { name: 'Indigo' },
        { name: 'Intracom' },
        { name: 'Softex' },
        { name: 'Telrad' },
        { name: 'Xtend' }
    ];

    const stats = [
        { number: '40+', label: 'Years of Experience', icon: <Award className="w-8 h-8" />, color: 'text-blue-400' },
        { number: '10,000+', label: 'Ports Connected', icon: <Network className="w-8 h-8" />, color: 'text-purple-400' },
        { number: '4', label: 'Countries Served', icon: <Globe className="w-8 h-8" />, color: 'text-green-400' },
        { number: '1979', label: 'Established', icon: <Star className="w-8 h-8" />, color: 'text-orange-400' }
    ];

    return (
        <div className="h-screen bg-gray-50 flex flex-col overflow-hidden">
            {/* Top Navigation Bar */}
            <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-200 px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo Section */}
                    <div className="flex items-center space-x-3">
                        <div className="flex items-center">
                            <div>
                                <img
                                    src="/metrologo.png"
                                    alt="Your Company Name"
                                    className="h-15"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Navigation Menu */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {[
                            { name: 'HOME', active: false },
                            { name: 'ABOUT', active: false },
                            { name: 'SOLUTIONS', active: true },
                            { name: 'SUPPORT SERVICES', active: false },
                            { name: 'REGIONAL PRESENCE', active: false },
                            { name: 'CONTACT', active: false },
                            { name: 'SHOP ONLINE', active: false },
                            { name: 'CAREERS', active: false }
                        ].map((item, index) => (
                            <a
                                key={index}
                                href="#"
                                className={`text-sm font-medium transition-colors duration-200 hover:opacity-80 ${item.active
                                    ? 'border-b-2 pb-1'
                                    : ''
                                    }`}
                                style={{
                                    color: item.active ? 'rgb(11, 113, 225)' : 'rgb(64, 64, 64)',
                                    borderColor: item.active ? 'rgb(11, 113, 225)' : 'transparent'
                                }}
                            >
                                {item.name}
                            </a>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden p-2 rounded-lg hover:bg-gray-100">
                        <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                            <div className="w-full h-0.5 bg-gray-600"></div>
                            <div className="w-full h-0.5 bg-gray-600"></div>
                            <div className="w-full h-0.5 bg-gray-600"></div>
                        </div>
                    </button>
                </div>
            </div>

            {/* Main Content Container */}
            <div className="flex-1 flex flex-col md:flex-row overflow-hidden pt-20">
                {/* Mobile/Tablet Services Navigation - Only visible on small screens */}
                <div className=" mt-5 md:hidden w-full bg-white shadow-md">

                    <div className="overflow-x-auto">
                        <div className="flex space-x-2 p-4">
                            {navigationItems.map((item, index) => (
                                <div
                                    key={index}
                                    className={`flex-shrink-0 px-4 py-2 rounded-lg ${item.active ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}
                                >
                                    <div className="flex items-center space-x-2">
                                        {item.icon}
                                        <span>{item.name}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Desktop Sidebar Navigation - Hidden on mobile */}
                <div className="hidden md:block w-72 bg-gray-50 flex-shrink-0">
                    <nav className="py-8 px-6 space-y-1">
                        {navigationItems.map((item, index) => (
                            <div
                                key={index}
                                className={`group flex items-center justify-between py-4 px-4 cursor-pointer transition-all duration-300 ${item.active
                                    ? 'text-blue-600 font-semibold border-r-3 bg-blue-50'
                                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                                    }`}
                                style={{
                                    borderRight: item.active ? '3px solid rgb(11, 113, 225)' : '3px solid transparent'
                                }}
                            >
                                <span className="text-base">{item.name}</span>
                                <ChevronRight
                                    className={`w-4 h-4 transition-all duration-300 ${item.active ? 'text-blue-600' : 'text-gray-400 group-hover:text-blue-600'
                                        }`}
                                />
                            </div>
                        ))}
                    </nav>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 overflow-y-auto">
                    {/* Hero Section */}
                    <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white py-16 md:py-24 overflow-hidden">
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

                        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                            <div className="text-center">
                                <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full text-blue-200 text-sm font-medium mb-6 backdrop-blur-sm border border-blue-400/20">
                                    <Zap className="w-4 h-4 mr-2" />
                                    Leading Innovation Since 1979
                                </div>

                                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
                                    Communication
                                    <br />
                                    <span style={{ color: 'rgb(11, 113, 225)' }}>
                                        Solutions
                                    </span>
                                </h1>

                                <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed mb-8 md:mb-12" style={{ color: 'rgb(247, 247, 247)' }}>
                                    Delivering innovative communication technologies for over 40 years,
                                    serving defense, government, and private sectors with cutting-edge solutions.
                                </p>

                                <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-8 md:mb-12" style={{ color: 'rgb(247, 247, 247)' }}>
                                    {[
                                        { icon: <Globe className="w-5 h-5 md:w-6 md:h-6" />, text: "Global Reach" },
                                        { icon: <Shield className="w-5 h-5 md:w-6 md:h-6" />, text: "Secure Solutions" },
                                        { icon: <Database className="w-5 h-5 md:w-6 md:h-6" />, text: "Scalable Systems" },
                                        { icon: <Award className="w-5 h-5 md:w-6 md:h-6" />, text: "Proven Excellence" }
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 md:px-4 md:py-2 border border-white/20 text-sm md:text-base">
                                            {item.icon}
                                            <span className="ml-2 font-medium">{item.text}</span>
                                        </div>
                                    ))}
                                </div>

                                <button className="px-6 py-3 md:px-8 md:py-4 rounded-xl md:rounded-2xl text-base md:text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg text-white" style={{ backgroundColor: 'rgb(11, 113, 225)' }}>
                                    Explore Our Solutions
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Services Section */}
                    <div className="py-12 md:py-24" style={{ background: 'linear-gradient(to bottom, rgb(255, 255, 255), rgb(247, 247, 247))' }}>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-12 md:mb-20">
                                <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6" style={{ color: 'rgb(33, 37, 41)' }}>Premium Services</h2>
                                <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'rgb(64, 64, 64)' }}>
                                    Comprehensive communication solutions tailored to meet the unique needs of each client
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                                {services.map((service, index) => (
                                    <div
                                        key={index}
                                        className="group rounded-xl md:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 md:hover:-translate-y-3 overflow-hidden cursor-pointer"
                                        style={{ backgroundColor: 'rgb(255, 255, 255)', border: '1px solid rgb(247, 247, 247)' }}
                                        onMouseEnter={() => setActiveService(index)}
                                    >
                                        {/* Gradient Top Bar */}
                                        <div className={`h-1 bg-gradient-to-r ${service.gradient}`}></div>

                                        <div className="p-6 md:p-8">
                                            {/* Icon Container */}
                                            <div className={`relative w-16 h-16 md:w-20 md:h-20 ${service.bgColor} rounded-xl md:rounded-2xl mb-4 md:mb-6 group-hover:scale-105 transition-transform duration-300 shadow-lg`}>
                                                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl md:rounded-2xl"></div>
                                                <div className="flex items-center justify-center w-full h-full">
                                                    {React.cloneElement(service.icon, { className: "w-8 h-8 md:w-12 md:h-12 text-white" })}
                                                </div>
                                            </div>

                                            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 transition-colors duration-300" style={{ color: 'rgb(33, 37, 41)' }}>
                                                {service.title}
                                            </h3>

                                            {/* Feature Tags */}
                                            <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
                                                {service.features.map((feature, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-2 py-1 rounded-full text-xs md:text-sm font-medium"
                                                        style={{ backgroundColor: 'rgb(247, 247, 247)', color: 'rgb(64, 64, 64)' }}
                                                    >
                                                        {feature}
                                                    </span>
                                                ))}
                                            </div>

                                            <p className="text-sm md:text-base leading-relaxed mb-4 md:mb-6" style={{ color: 'rgb(64, 64, 64)' }}>
                                                {service.description}
                                            </p>

                                            <div className="flex items-center font-semibold text-sm md:text-base transition-colors duration-300" style={{ color: 'rgb(11, 113, 225)' }}>
                                                <span>Learn More</span>
                                                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div className="py-12 md:py-20" style={{ backgroundColor: 'rgb(33, 37, 41)' }}>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                                {stats.map((stat, index) => (
                                    <div key={index} className="text-center group">
                                        <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: 'rgb(247, 247, 247)', color: 'rgb(11, 113, 225)' }}>
                                            {React.cloneElement(stat.icon, { className: "w-6 h-6 md:w-8 md:h-8" })}
                                        </div>
                                        <div className="text-2xl md:text-4xl font-bold mb-1 md:mb-2" style={{ color: 'rgb(11, 113, 225)' }}>
                                            {stat.number}
                                        </div>
                                        <div className="text-sm md:text-lg font-medium" style={{ color: 'rgb(247, 247, 247)' }}>
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Technology Partners */}
                    <div className="py-12 md:py-20 bg-white">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-12 md:mb-16">
                                <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-gray-900">Technology Partners</h2>
                                <p className="text-base md:text-xl max-w-2xl mx-auto text-gray-600">
                                    Collaborating with industry-leading technology providers
                                </p>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                                {partners.map((partner, index) => (
                                    <div key={index} className="group rounded-xl p-4 transition-all duration-300 hover:shadow-lg bg-gray-50 border border-gray-50">
                                        <div className="text-center">
                                            <div className="w-full h-16 md:h-20 flex items-center justify-center mx-auto mb-2 md:mb-4">
                                                <img
                                                    src={`/${partner.name.toLowerCase()}.png`}
                                                    alt={partner.name}
                                                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Languages Section */}
                    <div className="py-8 md:py-12" style={{ backgroundColor: 'rgb(247, 247, 247)' }}>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center">
                                <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-8" style={{ color: 'rgb(33, 37, 41)' }}>Multi-Language Support</h2>
                                <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                                    {['English', 'Sinhala', 'Tamil', 'Bengali'].map((language, index) => (
                                        <div
                                            key={index}
                                            className="group px-4 py-2 md:px-6 md:py-3 rounded-xl md:rounded-2xl text-base md:text-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-105"
                                            style={{ backgroundColor: 'rgb(11, 113, 225)', color: 'rgb(255, 255, 255)' }}
                                        >
                                            {language}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer CTA */}
                    <div>
                        {/* CTA Section */}
                        <div className="py-12 md:py-24" style={{ backgroundColor: 'rgb(33, 37, 41)' }}>
                            <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                                <div className="mb-6 md:mb-8">
                                    <div className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6" style={{ backgroundColor: 'rgb(247, 247, 247)', color: 'rgb(11, 113, 225)' }}>
                                        <MessageSquare className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                                        Get Started Today
                                    </div>

                                    <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 leading-tight" style={{ color: 'rgb(255, 255, 255)' }}>
                                        Ready to Transform Your
                                        <br />
                                        <span style={{ color: 'rgb(11, 113, 225)' }}>
                                            Communication Infrastructure?
                                        </span>
                                    </h2>

                                    <p className="text-base md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed" style={{ color: 'rgb(247, 247, 247)' }}>
                                        Let's discuss how our proven solutions can meet your specific requirements
                                    </p>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                                    <button className="px-6 py-3 md:px-8 md:py-4 rounded-xl md:rounded-2xl text-base md:text-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 hover:scale-105" style={{ backgroundColor: 'rgb(255, 255, 255)', color: 'rgb(11, 113, 225)' }}>
                                        Contact Us Today
                                    </button>
                                    <button className="bg-transparent px-6 py-3 md:px-8 md:py-4 rounded-xl md:rounded-2xl text-base md:text-lg font-semibold transition-all duration-300 transform hover:-translate-y-0.5" style={{ border: '2px solid rgb(255, 255, 255)', color: 'rgb(255, 255, 255)' }}>
                                        View Portfolio
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Main Footer */}
                        <footer className="py-8 md:py-12" style={{ backgroundColor: 'rgb(33, 37, 41)' }}>
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
                                    {/* Company Info */}
                                    <div className="col-span-1 md:col-span-2">
                                        <div className="flex items-center space-x-3 mb-3 md:mb-4">
                                            <div className="flex items-center space-x-3">
                                                <div className="flex items-center">
                                                    <div>
                                                        <img
                                                            src="src/assets/metrologo.png"
                                                            alt="Your Company Name"
                                                            className="h-12 md:h-15"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="mb-3 md:mb-4 text-sm md:text-base max-w-md leading-relaxed" style={{ color: 'rgb(247, 247, 247)' }}>
                                            Leading provider of innovative communication solutions since 1979.
                                            Serving defense, government, and private sectors with cutting-edge technology.
                                        </p>
                                        <div className="flex space-x-3 md:space-x-4">
                                            {[
                                                { icon: <Globe className="w-4 h-4 md:w-5 md:h-5" />, label: "Website" },
                                                { icon: <MessageSquare className="w-4 h-4 md:w-5 md:h-5" />, label: "Contact" },
                                                { icon: <Network className="w-4 h-4 md:w-5 md:h-5" />, label: "LinkedIn" }
                                            ].map((social, index) => (
                                                <button
                                                    key={index}
                                                    className="p-1 md:p-2 rounded-lg transition-colors duration-300 hover:scale-110"
                                                    style={{ backgroundColor: 'rgb(64, 64, 64)', color: 'rgb(247, 247, 247)' }}
                                                    title={social.label}
                                                >
                                                    {social.icon}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Quick Links */}
                                    <div>
                                        <h4 className="font-bold mb-3 md:mb-4 text-sm md:text-base" style={{ color: 'rgb(255, 255, 255)' }}>Quick Links</h4>
                                        <ul className="space-y-1 md:space-y-2">
                                            {['About Us', 'Our Services', 'Technology Partners', 'Case Studies', 'Support'].map((link, index) => (
                                                <li key={index}>
                                                    <a
                                                        href="#"
                                                        className="transition-colors duration-300 hover:underline text-xs md:text-sm"
                                                        style={{ color: 'rgb(247, 247, 247)' }}
                                                    >
                                                        {link}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Contact Info */}
                                    <div>
                                        <h4 className="font-bold mb-3 md:mb-4 text-sm md:text-base" style={{ color: 'rgb(255, 255, 255)' }}>Contact Info</h4>
                                        <div className="space-y-2 md:space-y-3">
                                            <div className="flex items-start space-x-2 md:space-x-3">
                                                <Phone className="w-4 h-4 md:w-5 md:h-5 mt-0.5 md:mt-1" style={{ color: 'rgb(11, 113, 225)' }} />
                                                <div className="text-xs md:text-sm">
                                                    <p style={{ color: 'rgb(247, 247, 247)' }}>+94 11 123 4567</p>
                                                    <p style={{ color: 'rgb(247, 247, 247)' }}>+94 11 765 4321</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start space-x-2 md:space-x-3">
                                                <MessageSquare className="w-4 h-4 md:w-5 md:h-5 mt-0.5 md:mt-1" style={{ color: 'rgb(11, 113, 225)' }} />
                                                <p className="text-xs md:text-sm" style={{ color: 'rgb(247, 247, 247)' }}>info@metropolitan.lk</p>
                                            </div>
                                            <div className="flex items-start space-x-2 md:space-x-3">
                                                <Globe className="w-4 h-4 md:w-5 md:h-5 mt-0.5 md:mt-1" style={{ color: 'rgb(11, 113, 225)' }} />
                                                <div className="text-xs md:text-sm">
                                                    <p style={{ color: 'rgb(247, 247, 247)' }}>Colombo, Sri Lanka</p>
                                                    <p style={{ color: 'rgb(247, 247, 247)' }}>Dhaka, Bangladesh</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom Bar */}
                                <div className="pt-6 md:pt-8 border-t" style={{ borderColor: 'rgb(64, 64, 64)' }}>
                                    <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
                                        <p className="text-xs md:text-sm" style={{ color: 'rgb(247, 247, 247)' }}>
                                            © 2025 Metropolitan. All rights reserved.
                                        </p>
                                        <div className="flex space-x-4 md:space-x-6">
                                            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link, index) => (
                                                <a
                                                    key={index}
                                                    href="#"
                                                    className="text-xs md:text-sm transition-colors duration-300 hover:underline"
                                                    style={{ color: 'rgb(247, 247, 247)' }}
                                                >
                                                    {link}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommunicationPage;
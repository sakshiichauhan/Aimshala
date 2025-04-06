import React from 'react';
import { PhoneCall } from 'lucide-react';
import AimshalaLogo from '../assets/Footer/Aimshala_Logo.png'; 
import BackgroundImage from '../assets/Footer/Rectangle.png';

const Footer = () => {
    const date = new Date();

    return (
        <footer
            className="text-white relative "
            style={{
                backgroundImage: `url(${BackgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '1921px',
                height: '926.84px',
            }}
        >
            <div 
                className="absolute"
                style={{
                    width: '1680px',
                    height: '875.41px',
                    top: '50.95px',
                    left: '121.5px',
                }}
            >
                {/* Logo and Mission Statement in Same Row */}
               <div 
                    className="flex items-center gap-4 mb-8"
                    style={{
                        width: '1679px',
                        height: '1px',
                    }}
                >
                    <img src={AimshalaLogo} alt="Aimshala Logo" className="h-[79px] w-[321.79px]gap-4" />
                    <p className="font-poppins text-[18px] w-1291px h-54px">
                        @ Aimshala where individuals are equipped to Take Charge of their lives, realise their aspirations, and make meaningful contributions to society, fostering a future of limitless possibilities.
                    </p>
                </div>

                {/* Navigation Sections */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 px-12 py-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Explore</h3>
                        <ul className="space-y-2 text-sm">
                            <li>Career Consulting</li>
                            <li>Career Profiling</li>
                            <li>AI-based Psychometric Test</li>
                            <li>Experiential Learning</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Prepare</h3>
                        <ul className="space-y-2 text-sm">
                            <li>Entrance Exam Preparation</li>
                            <li>Up-skill Programs</li>
                            <li>View all Courses</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Mentorship</h3>
                        <ul className="space-y-2 text-sm">
                            <li>One-on-One Mentorship</li>
                            <li>Mentor Profiles</li>
                            <li>Become a Mentor</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Engage</h3>
                        <ul className="space-y-2 text-sm">
                            <li>Webinars</li>
                            <li>Seminars</li>
                            <li>Training Programs</li>
                            <li>Workshops</li>
                            <li>Competitions</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contribute</h3>
                        <ul className="space-y-2 text-sm">
                            <li>Book Contribution</li>
                            <li>Educational Resources</li>
                            <li>Coin Rewards System</li>
                            <li>Redemption Program</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-white/20 py-6">
                    <div className="flex flex-col lg:flex-row justify-between items-center px-12">
                        {/* Links */}
                        <ul className="flex flex-wrap justify-center space-x-4 text-sm mb-4 lg:mb-0">
                            <li><a href="#">@ Aimshala</a></li>
                            <li><a href="#">Success Stories</a></li>
                            <li><a href="#">Refer and Earn</a></li>
                            <li><a href="#">In the News</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Help Centre</a></li>
                            <li><a href="#">Career</a></li>
                            <li><a href="#">Life @ Aimshala</a></li>
                        </ul>

                        {/* Contact */}
                        <div className="text-center lg:text-left">
                            <p>Contact</p>
                            <p><PhoneCall /> +91 95 602 97 502 | 📧 hello@aimshala.com</p>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-4 mt-4">
                        <a href="#" className="hover:opacity-75">Facebook</a>
                        <a href="#" className="hover:opacity-75">Instagram</a>
                        <a href="#" className="hover:opacity-75">LinkedIn</a>
                    <p>Privacy Policy | Terms of Use | Data Protection Policy | Cookie Policy</p>
                    <p>©{date.getFullYear()} Aimshala. All Rights Reserved.</p>
                </div>
            </div>
            </div>
        </footer>
    );
};

export default Footer;

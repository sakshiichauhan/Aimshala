import { useState } from 'react';
import AimshalaLogo from '../assets/Navbar/AimshalaLogo.png';
import Output from '../assets/Navbar/Output.png';
import Aim from '../assets/Navbar/Aim.png';
import { Search, Bell, Menu, X } from 'lucide-react';
import { SignInButton, UserButton, SignedIn, SignedOut } from '@clerk/clerk-react';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className='relative'>
            <header className="bg-white shadow-md absolute top-0 left-0 w-full font-poppins z-50">
                <nav className="lg:mx-[300px] flex items-center justify-between py-3 px-6 md:px-8">
                    <img src={AimshalaLogo} alt="Aimshala Logo" className="h-auto w-[150px] md:w-[180px]" />

                    {/* Menu Button for md and lg screens */}
                    <button
                        className="hidden md:block lg:hidden text-gray-700"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>

                    {/* Nav Links for lg screens */}
                    <ul className="hidden lg:flex items-center space-x-8 text-md font-medium">
                        <li className="hover:text-[#94278F]">
                            <a href="#">Insights</a>
                        </li>
                        <li className="hover:text-[#94278F]">
                            <a href="#">For</a>
                        </li>
                        <li className="hover:text-[#94278F]">
                            <span
                                className="p-2"
                                style={{
                                    backgroundImage: `url(${Aim})`,
                                    backgroundSize: 'contain',
                                    backgroundRepeat: 'no-repeat',
                                }}
                            >
                                AIM
                            </span>
                        </li>
                    </ul>

                    {/* Right-side icons and button for lg screens */}
                    <div className="hidden lg:flex items-center gap-8">
                        <Search className="text-gray-500" />
                        <Bell className="text-gray-500" />
                        
                        {/* Clerk authentication */}
                        <SignedOut>
                            <SignInButton>
                                <button className="px-4 py-2 border border-[#94278F] text-[#94278F] hover:bg-purple-100 rounded-[6px] transition duration-300 ease-in-out transform hover:scale-105">
                                    Login
                                </button>
                            </SignInButton>
                        </SignedOut>
                        <SignedIn>
                            <UserButton afterSignOutUrl="/">
                                <button className="px-4 py-2 border border-[#94278F] text-[#94278F] rounded-full transition duration-300 ease-in-out transform hover:scale-105">
                                    Profile
                                </button>
                            </UserButton>
                        </SignedIn>
                    
                        <button className="flex items-center px-4 py-2 border border-[#94278F] text-[#94278F] rounded-full hover:bg-purple-100">
                            <img src={Output} alt="Profile" className="h-8 w-8 rounded-full mr-2" />
                            For Partners
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-700"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>

                    {/* Mobile and md menu */}
                    {menuOpen && (
                        <div className="absolute top-full left-0 w-full bg-white shadow-md lg:hidden z-10">
                            <ul className="flex flex-col space-y-4 p-6">
                                <li className="hover:text-[#94278F]">
                                    <a href="#">Insights</a>
                                </li>
                                <li className="hover:text-[#94278F]">
                                    <a href="#">For</a>
                                </li>
                                <li className="hover:text-[#94278F]">
                                    <span
                                        className="p-2"
                                        style={{
                                            backgroundImage: `url(${Aim})`,
                                            backgroundSize: 'contain',
                                            backgroundRepeat: 'no-repeat',
                                        }}
                                    >
                                        AIM
                                    </span>
                                </li>
                            </ul>
                            <div className="px-6 pb-4 flex flex-col gap-4">
                                <div className="flex items-center gap-4">
                                    <Search className="text-gray-500" />
                                    <Bell className="text-gray-500" />
                                </div>
                                {/* Mobile Clerk authentication */}
                                <div className='flex flex-row gap-2'>
                                <SignedOut>
                                    <SignInButton>
                                        <button className="px-4 py-2 border border-[#94278F] text-[#94278F] hover:bg-purple-100 rounded-[6px] transition duration-300 ease-in-out transform hover:scale-105 w-full">
                                            Login
                                        </button>
                                    </SignInButton>
                                </SignedOut>
                                <SignedIn>
                                    <UserButton afterSignOutUrl="/">
                                        <button className="px-4 py-2 border border-[#94278F] text-[#94278F] rounded-full transition duration-300 ease-in-out transform hover:scale-105 w-full">
                                            Profile
                                        </button>
                                    </UserButton>
                                </SignedIn>
                                <button className="flex items-center px-4 py-2 border border-[#94278F] text-[#94278F] rounded-full hover:bg-purple-100">
                                    <img src={Output} alt="Profile" className="h-8 w-8 rounded-full mr-2" />
                                    For Partners
                                </button>
                                </div>
                            </div>
                        </div>
                    )}
                </nav>
            </header>
        </div>
    );
}
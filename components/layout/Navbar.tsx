import { Link } from 'react-router-dom';
import { useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import Menu from './Menu';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle search logic here
        console.log('Searching for:', searchQuery);
    };

    return (
        <nav className="bg-white shadow-lg w-full sticky top-0 left-0 z-50">
            <div className="max-w-7xl mx-auto px-2 sm:px-2 lg:px-4">
                <div className="flex justify-between h-16">
                    {/* Logo and brand name */}
                    <div className={`flex items-center ${isSearchOpen ? 'md:flex hidden' : 'flex'}`}>
                        <Link to="/" className="flex-shrink-0">
                            <img
                                className="h-auto w-40"
                                src="https://www.hana-tochi-to.jp/res/img/logo.svg"
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    

                    {/* Search Bar - Desktop */}
                    <div className="hidden md:flex flex-1 items-center justify-center px-4 gap-5">
                        <div className='flex items-center'><Menu/></div>
                        <form onSubmit={handleSearch} className="w-full max-w-lg">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full bg-gray-100 rounded-full pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                    placeholder="Search..."
                                />
                                <button
                                    type="submit"
                                    className="absolute right-0 top-0 mt-2 mr-3 text-gray-600 hover:text-indigo-600"
                                >
                                    <IoIosSearch size={24} />
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Desktop menu */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link
                            to="/login"
                            className="w-10 h-10 flex items-center justify-center hover:bg-gray-400 text-gray-500 bg-gray-200 border-none rounded-full text-sm font-medium"
                        >
                            <FaUser size={20} />
                        </Link>
                        <Link 
                            to="/cart" 
                            className="w-10 h-10 flex justify-center items-center hover:bg-gray-400 text-gray-500 bg-gray-200 border-none rounded-full text-sm font-medium"
                        >
                            <BsCart2 size={20} />
                        </Link>
                    </div>

                    {/* Mobile Search Bar */}
                    <div className={`md:hidden flex items-center transition-all duration-300 ease-in-out ${isSearchOpen ? 'flex-1 mx-2' : 'w-0 overflow-hidden'}`}>
                        <form onSubmit={handleSearch} className="w-full">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full bg-gray-100 rounded-full pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                    placeholder="Search..."
                                />
                                <button
                                    type="submit"
                                    className="absolute right-0 top-0 mt-2 mr-3 text-gray-600 hover:text-indigo-600"
                                >
                                    <IoIosSearch size={24} />
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Mobile Search and Menu buttons */}
                    <div className="md:hidden flex items-center space-x-2">
                        <button
                            onClick={() => setIsSearchOpen(!isSearchOpen)}
                            className="p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none"
                        >
                            {isSearchOpen ? (
                                <IoClose size={24} />
                            ) : (
                                <IoIosSearch size={24} />
                            )}
                        </button>
                        <BsCart2 size={22} />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <CiMenuBurger size={24} />
                            ) : (
                                <IoClose size={24} />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link to="/" className="text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium">
                            Home
                        </Link>
                        <Link to="/" className="text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium">
                            About
                        </Link>
                        <Link to="/" className="text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium">
                            Services
                        </Link>
                        <Link to="/" className="text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium">
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
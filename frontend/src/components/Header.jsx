import React from 'react'
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

export default function Header() {
    const currentUser = false
    return (
        <header className='bg-primary shadow-md'>
            <div className='flex justify-between items-center max-w-6xl mx-auto p-2 md:p-3'>
                <Link to='/'>
                    <h1 className='font-bold text-sm sm:text-lg md:text-xl flex'>
                        <span className='text-secondary'>Medina</span>
                        <span className='text-accent mr-[2px]'>Homes</span>
                    </h1>
                </Link>
                <form
                    className='bg-slate-100 p-2 md:p-3 rounded-lg flex items-center'
                >
                    <input
                        type='text'
                        placeholder='Search...'
                        className='bg-transparent focus:outline-none w-26 md:w-64'

                    />
                    <button>
                        <FaSearch className='text-primary hover:text-accent' />
                    </button>
                </form>
                <ul className='flex'>
                    <Link to='/'>
                        <li className='hidden sm:inline sm:text-sm md:text-lg text-secondary hover:bg-accent sm:py-4 md:py-6 px-6'>
                            Home
                        </li>
                    </Link>
                    <Link to='/about'>
                        <li className='hidden sm:inline sm:text-sm md:text-lg text-secondary hover:bg-accent sm:py-4 md:py-6 px-6'>
                            About
                        </li>
                    </Link>
                    <Link to='/profile'>
                        {currentUser ? (
                            <img
                                className='rounded-full h-7 w-7 object-cover'
                                src={currentUser.avatar}
                                alt='profile'
                            />
                        ) : (
                            <li className='hidden sm:inline sm:text-sm md:text-lg text-secondary hover:bg-accent sm:py-4 md:py-6 px-6'>Sign in</li>
                        )}
                    </Link>
                </ul>
            </div>
        </header>
    )
}

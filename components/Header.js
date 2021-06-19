import React from 'react'
import Link from 'next/link'
import { routes } from '../data/routes'

const Header = (props) => {
    return (
        <section class="w-full px-8 text-gray-700 bg-white">
            <div class="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
                <div class="relative flex flex-col md:flex-row">
                    <Link href={`/`}>
                        <a href="#_" class="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
                            <span class="mx-auto text-xl font-black lƒeading-none text-gray-900 select-none">NEXT JS BLOG<span class="text-indigo-600">.</span></span>
                        </a>
                    </Link>
                    <nav class="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
                        {
                            routes.map((route) => {
                                return(
                                    <Link href={route.link}>
                                        <a className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">{route.name}</a>
                                    </Link>
                                )
                            })
                        }
                    </nav>
                </div>

                <div class="inline-flex items-center ml-5 space-x-6 lg:justify-end">
                    <a href="#" class="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900">
                        Sign in
                    </a>
                    <a href="#" class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                        Sign up
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Header

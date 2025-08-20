import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <footer className="px-6 md:px-16 lg:px-36 mt-40 w-full text-gray-300">
            <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500 pb-14">
                <div className="md:max-w-96">
                    <img className="w-36 h-auto" src={assets.nlogo} alt="logo" />
                    <p className="mt-6 text-sm">
                        Discover the best movie experiences with us. Enjoy seamless booking, reviews, and personalized recommendations at your fingertips.
                    </p>
                    <div className="flex items-center gap-2 mt-4">
                        <img src={assets.googlePlay} alt="Google Play" className="h-9 w-auto" />
                        <img src={assets.appStore} alt="App Store" className="h-9 w-auto" />
                    </div>
                </div>
                <div className="flex-1 flex items-start md:justify-end gap-20 md:gap-40">
                    <div>
                        <h2 className="font-semibold mb-5">Quick Links</h2>
                        <ul className="text-sm space-y-2">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Movies</a></li>
                            <li><a href="#">FAQs</a></li>
                            <li><a href="#">Terms of Service</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold mb-5">Contact Us</h2>
                        <div className="text-sm space-y-2">
                            <p>+1-800-555-1234</p>
                            <p>support@bookshow.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="pt-4 text-center text-sm pb-5">
                © {new Date().getFullYear()} BookShow. All Rights Reserved.
            </p>
        </footer>
    )
}

export default Footer

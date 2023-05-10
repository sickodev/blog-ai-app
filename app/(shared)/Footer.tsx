import React from "react";

const Footer = () => {
    return (
        <footer className='bg-wh-900 text-wh-50 py-10 px-10'>
            <div className='justify-between mx-auto gap-16 sm:flex'>
                {/* FIRST COLUMN */}
                <div className='mt-16 basis-1/2 sm:mt-0'>
                    <h4 className='font-bold'>FUTURAMA BLOG</h4>
                    <p className='my-5'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </p>
                    <p>© Futurama Blogs All Rights Reserved</p>
                </div>
                {/* SECOND COLUMN */}
                <div className='mt-16 basis-1/4 sm:mt-0'>
                    <h4 className='font-bold'>Links</h4>
                    <p className='my-5'>Eae vero fere</p>
                    <p className='my-5'>Simile ob videor</p>
                    <p className='my-5'>Uno rectum uti</p>
                    <p>Ipsum non dem</p>
                </div>
                {/* THIRD COLUMN */}
                <div className='mt-16 basis-1/4 sm:mt-0'>
                    <h4 className='font-bold'>Contact Us</h4>
                    <p className='my-5'>Magna ferri nolle</p>
                    <p className='my-5'>123 Street, Listbon, PO</p>
                    <p>+91-987-665-3201</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

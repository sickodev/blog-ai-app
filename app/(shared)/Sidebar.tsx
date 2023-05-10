import React from "react";
import SocialLinks from "./SocialLinks";
import Subscribe from "./Subscribe";
import Image from "next/image";
import Ad2 from "public/assets/ad-2.png";
import AboutProfile from "public/assets/about-profile.jpg";

const Sidebar = () => {
    return (
        <section>
            <h4 className=' bg-wh-900 py-2 px-5 text-wh-900 text-xs text-center font-bold'>
                SUBSCRIBE AND FOLLOW
            </h4>
            <div className='my-5 mx-5 '>
                <SocialLinks isDark />
            </div>
            <Subscribe />
            <Image
                className='hidden md:block my-8 w-full'
                src={Ad2}
                alt='advert-2'
                placeholder='blur'
                width={500}
                height={1000}
            />
            <h4 className=' bg-wh-900 py-2 px-5 text-wh-10 text-xs text-center font-bold'>
                ABOUT THE BLOG
            </h4>
            <div className=' my-3 flex justify-center'>
                <Image
                    src={AboutProfile}
                    alt='about-profile'
                    placeholder='blur'
                    style={{
                        objectFit: "cover",
                        width: "500px",
                        height: "250px",
                    }}
                />
            </div>
            <h4 className='  py-2 px-5 text-wh-500 text-center font-bold'>
                Cleo Rainer
            </h4>
            <p className='text-wh-500 text-center text-sm'>
                Rug gelukken des ten gehouden zandlaag middelen bedreven. Dag
                veld wel daad vast aard wiel vrij.
            </p>
        </section>
    );
};

export default Sidebar;

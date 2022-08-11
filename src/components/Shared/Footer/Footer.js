import React from 'react';
import links from './footerLink.json'

const Footer = () => {
    return (
        <div className="bg-[#21202E] w-full relative">
            <div className="container px-[15px] pt-[20px] lg:pt-0 lg:px-0">
                <div className="text-center">
                    <div className="hidden lg:block">
                        <div className="flex flex-row items-center justify-between">
                            <div className="flex flex-row gap-[30px] py-[50px]">
                                {
                                    links.map(({fLink},i) => (
                                        <a key={i} href="/#">
                                        <img
                                        className="inline-block"
                                        src={`/images/${fLink}`}
                                        alt=""
                                        />
                                        </a>
                                    ))
                                }
                            </div>
                            <p className="text-[18px] leading-[21px]
                             text-white">© 2021-2022 Aada Finance. All rights reserved.</p>
                        </div>
                    </div>                   
                    <div className="block lg:hidden">
                        <div className="grid grid-cols-4 gap-y-[20px]">
                            {
                                links.map(({fLink},i) => (
                                    <a key={i} href="/#">
                                    <img
                                    className="inline-block"
                                    src={`/images/${fLink}`}
                                    alt=""
                                    />
                                    </a>
                                ))
                            }
                        </div>
                    </div>                   
                    <p className="block lg:hidden w-[185px] text-[14px] leading-[21px] text-white mx-auto py-[22px]">© 2021-2022 Aada Finance. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
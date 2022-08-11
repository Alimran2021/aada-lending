import React from 'react';
import socialLinks from './social.json'

const HeaderSection = () => {
    return (
        <div className="w-full mt-[40px] lg:mt-[150px] mb-[277px] lg:mb-[100px] relative z-10">
            <div className="container">
                <div className="w-full lg:w-[881px]">
                    <h2 className="text-white text-[28px] leading-[36px] lg:text-[60px] lg:leading-[80px] font-medium">
                    <span
                    className="font-medium text-transparent text-[28px] leading-[36px] lg:text-[60px] lg:leading-[80px] bg-clip-text bg-gradient-to-r from-[#B5FED9] to-[#00ADEE]"
                    >Lending and borrowing protocol</span> backed with NFT’s and built on Cardano blockchain
                    </h2>
                    <button type="button" className="bg-[#00ADEE] w-full lg:w-[242px] py-[18px] rounded-[10px] mt-[70px] mb-[140px]">
                        <span className="font-black text-[18px] text-white">launch app</span>
                    </button>
                </div>
                <div className="hidden lg:block">
                    <div className="flex items-center">
                        <p className="text-white text-[18px] inline-block mr-6">Join our community:</p>
                        <div className="flex flex-row items-center gap-2.5">
                            {
                                socialLinks.map(({socialLink},i) => (
                                    <a href="/#">
                                       <img key={i} src={`/images/${socialLink}`} alt=""/>
                                    </a>
                            ))
                        }
                    </div>
                </div>
                </div>                
            </div>
        </div>
    );
};

export default HeaderSection;
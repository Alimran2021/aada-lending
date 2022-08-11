import React from 'react';
import partners from './partner.json'

const OurPartners = () => {
    return (
        <div className="w-full bg-[#0A0D15] pb-[47px] lg:pb-[100px] relative">
            <img className="absolute top-[-55.75rem] left-0" src="/images/partnerBg-1.png" alt="" />
            <img className="absolute top-[-24.75rem] right-0" src="/images/partnerBg-2.png" alt="" />
            <div className="container px-[15px] lg:px-0">
                <div>
                    <h2 className="text-[36px] lg:text-[60px] font-black text-white pt-[40px] pb-[32px] lg:pt-[160px] lg:pb-[90px]">Our partners</h2>
                    <div className="grid grid-cols-2 lg:grid-cols-5 items-center justify-between gap-x-11 gap-y-4">
                        {
                            partners.map(({partnerImg},i)=>(
                                <img key={i} src={`/images/${partnerImg}`} alt=""/>
                            ))
                        }
                    </div>
                </div>
            </div>
            <img className="hidden lg:block absolute bottom-0 right-[1rem]" src="/images/partnerBg-3.png" alt="" />
            <img className="block lg:hidden absolute bottom-[-82px] right-0" src="/images/partnerBg-4.png" alt="" />
        </div>
    );
};

export default OurPartners;
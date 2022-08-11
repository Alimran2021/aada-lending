import React from 'react';

const LatestAada = () => {
    return (
        <div className="bg-[#0A0D15] w-full relative">
            <div className="container lg:flex lg:flex-row items-center gap-[130px] px-[15px] lg:px-0 pb-[41px]">
                <div className="relative z-10">
                    <h2 className="text-[28px] text-white font-black pt-[40px] pb-[30px]">Latest Aada videos</h2>
                    <img className="lg:w-[815px] lg:h-[472px]" src="/images/latest-1.png" alt=""/>
                </div>
                <div>
                    <div className="hidden lg:block pt-[80px] relative z-10">
                        <a href="/#" className="flex flex-row items-center justify-end gap-6">
                            <p className="text-[16px] font-bold uppercase text-[#B5FED9]">View all videos</p>
                            <img className="w-[25px] h-[12px]" src="/images/latest-5.png" alt=""/>
                        </a>
                    </div>
                    <div className="min-w-[135px] flex flex-row items-center gap-[20px] mt-[20px] cursor-pointer relative z-10">
                        <img className="" src="/images/latest-3.png" alt=""/>
                        <div>
                            <p className=" font-bold text-[18px] leading-[21px] lg:text-[30px] lg:leading-[45px]
                             text-transparent bg-clip-text bg-gradient-to-r from-[#B5FED9] to-[#00ADEE]">
                            Aada Finance V.1 Providing the Loan
                            </p>
                            <img className="hidden lg:block" src="/images/latest-4.png" alt="" />
                        </div>
                    </div>
                    <div className="min-w-[135px] flex flex-row items-center my-[15px] lg:my-[26px] gap-[20px] cursor-pointer relative z-10">
                        <img src="/images/latest-3.png" alt=""/>
                            <p className=" font-bold text-[18px] leading-[21px] text-white lg:text-[30px] lg:leading-[45px]">
                              Lending and Borrowing on Cardano: Intro
                            </p> 
                    </div>
                    <div className="min-w-[135px] flex flex-row items-center mb-[20px] gap-[20px] cursor-pointer relative z-10">
                        <img src="/images/latest-3.png" alt=""/>
                            <p className=" font-bold text-[18px] leading-[21px] text-white lg:text-[30px] lg:leading-[45px]">
                              Lending and Borrowing on Cardano: Intro
                            </p> 
                    </div>
                    <div className="block lg:hidden">
                        <button type="button" className="flex flex-row items-center gap-4">
                            <p className="text-[14px] font-bold uppercase text-[#B5FED9]">View all videos</p>
                            <img className='w-[25px] h-[12px]' src="/images/latest-5.png" alt=""/>
                        </button>
                    </div>
                </div>
            </div>
            <img className="hidden lg:block w-[627px] h-[627px] absolute left-0 bottom-[-300px]" src="/images/latest-bg1.png" alt="" />
            <img className="w-[235px] h-[235px] lg:w-[932px] lg:h-[932px] absolute right-0 bottom-[-3.75rem] lg:bottom-[-333px]" src="/images/Ellipse 18.png" alt="" />
        </div>
    );
};

export default LatestAada;
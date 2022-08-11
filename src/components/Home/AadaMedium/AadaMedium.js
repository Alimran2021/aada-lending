import React from 'react';

const AadaMedium = () => {
    return (
        <div className="bg-[#21202E] w-full">
            <div className="container px-[15px] lg:px-0 pb-[40px] lg:pb-[120px]">
                <div className="flex flex-row items-center justify-between">
                    <h2 className="text-[28px] lg:text-[60px] font-black text-white pt-[41px] pb-[20px] lg:pt-[120px] lg:pb-[63px]">Aada Medium</h2>
                    <div className="hidden lg:block">
                    <button type="button" className="flex flex-row items-center gap-4">
                            <p className="text-[16px] font-bold uppercase text-[#B5FED9]">View all View all insights</p>
                            <img className='w-[25px] h-[12px]' src="/images/latest-5.png" alt=""/>
                        </button>
                    </div>
                </div>
                <div className="lg:flex lg:flex-row gap-7">
                    <div>
                        <img src="/images/medium-1.png" alt=""/>
                        <div className="max-w-[514px]">
                            <p className="w-[290px] lg:w-full text-[24px] leading-[30px] lg:text-[36px] lg:leading-[50px] font-bold text-white 
                            mt-[15px] mb-[20px]">
                         <span className="text-[12px] lg:text-[16px] font-normal mr-3">Mar 8</span>
                         Why is Crypto Lending Worth It ?
                        </p>
                        </div>
                    </div>
                    <div>
                        <img src="/images/medium-3.png" alt=""/>
                        <div className="max-w-[514px]">
                            <p className="w-[290px] lg:w-full text-[24px] leading-[30px] lg:text-[36px] lg:leading-[50px] font-bold mt-[15px] mb-[20px]
                            text-transparent bg-clip-text bg-gradient-to-r from-[#B5FED9] to-[#00ADEE]">
                            <span className="text-[12px] lg:text-[16px] text-white font-normal mr-3">Feb 24</span>
                            Charli3 to Provide Aada Finance with Oracle Services on Cardano ?
                            </p>
                        </div>
                    </div>
                    <div>
                        <img src="/images/medium-3.png" alt=""/>
                       <div className="max-w-[514px]">
                           <p className="w-[290px] lg:w-full text-[24px] leading-[30px] lg:text-[36px] lg:leading-[50px] font-bold text-white 
                            mt-[15px] mb-[20px]">
                            <span className="text-[12px] lg:text-[16px] font-normal mr-3">Feb 21</span>
                            Aada Finance to Integrate the Djed Stablecoin, issued by COTI
                            </p>
                       </div>
                    </div>
                    <div className="block lg:hidden">
                        <button type="button" className="flex flex-row items-center gap-4">
                            <p className="text-[14px] font-bold uppercase text-[#B5FED9]">View all View all insights</p>
                            <img className='w-[25px] h-[12px]' src="/images/latest-5.png" alt=""/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AadaMedium;
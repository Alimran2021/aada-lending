import React from 'react';


const UseCase = () => {
    return (
        <div className="bg-[#0A0D15] w-full pt-[40px] relative">
            <img className="absolute -top-[149px] overflow-hidden" src="/images/use-case3.png" alt=""/>
            <img className="absolute bottom-[-218px] right-0 overflow-hidden inline-block" src="/images/use-case4.png" alt=""/>
            <div className="container px-[15px] md:px-0">
             <div className="lg:flex lg:flex-row gap-[7rem]">
                <div>
                <h2 className="text-[28px] lg:text-[60px] lg:leading-[80px] font-black text-white mb-[25px]">Use cases for CNFT</h2>
                <div>
                    <ul className="w-full flex flex-row text-white text-[20px] overflow-hidden mb-4">
                        <li>
                            <a href="/#" className="font-black text-[#B5FED9] mr-[20px]">
                              Shorting
                            </a>
                        </li>
                        <li>
                            <a href="/#" className="opacity-[0.5] mr-[20px]">
                            Leverage
                            </a>
                        </li>
                        <li>
                            <a href="/#" className="opacity-[0.5] mr-[20px]">
                            Farming
                            </a>
                        </li>
                        <li>
                            <a href="/#" className="opacity-[0.5] mr-1">
                             Safe
                            </a>
                        </li>
                        <li>
                            <a href="/#" className="opacity-[0.5] mr-[20px]">
                            buy
                            </a>
                        </li>
                        <li>
                            <a href="/#" className="opacity-[0.5] mr-1">
                            Transferable 
                            </a>
                        </li>
                        <li>
                            <a href="/#" className="opacity-[0.5]">
                            loans
                            </a>
                        </li>
                    </ul>
                    <div className="border-b-2 border-[#6D6F74] mb-[32px] block lg:hidden"></div>
                </div>
                <p className="text-[18px] lg:text-[24px] lg:leading-[36px] leading-[24px] font-medium text-white mt-[32px] mb-[30px] w-full lg:max-w-[577px]">
                  Shorting is the act of selling the cryptocurrency in the hope that it falls in value and you can buy it back at a lower price.
                </p>
                <div className="flex flex-row items-center gap-4 mb-[40px] cursor-pointer">
                    <div >
                        <img className="w-[60px] h-[60px] lg:w-[100px] lg:h-[100px]" src="/images/button-bg.png" alt=""/>
                        <img className="relative left-[1.7rem] -top-[2.3rem] lg:-top-[3.8rem] lg:left-[2.8rem] w-[10px] h-[13px] lg:w-[17px] lg:h-[22px]" src="/images/button-bgMidle.png" alt=""/>
                    </div>
                    <p className="text-[14px] lg:-[18px] text-[#B5FED9]">Launch Application</p>
                </div>
                </div>
                <div className="max-w-[878px] h-auto">
                   <img className=" w-full pb-[46px] lg:pb-[122px] lg:max-w-full lg:h-full relative z-10" src="/images/use-case1.png" alt=""/>
                </div>
             </div>
            </div>
        </div>
    );
};

export default UseCase;
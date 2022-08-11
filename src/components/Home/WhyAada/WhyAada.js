import React from 'react';
import links from './AadaLink.json'

const WhyAada = () => {
    return (
        <div className="bg-[#21202E] w-full relative">
            <div className="container px-[15px] lg:px-0">
              <div className="pt-[40px] pb-[40px]">
                    <h2 className="text-[28px] lg:text-[60px] text-white font-black mb-[30px]">Why Aada?</h2>
                <div className="block lg:hidden">
                    <ul className="w-full flex flex-row overflow-hidden mb-1">
                        <p className="text-[18px] text-[#B5FED9] font-black mr-2">NFT-</p>
                        <p className="text-[18px] text-[#B5FED9] font-black mr-7">Bonds</p>
                        <li className="">
                            <a href="/#" className="text-[18px] font-medium text-white opacity-[0.5] mr-2">Non</a>
                        
                        </li>
                        <li className="">
                            <a href="/#" className="text-[18px] font-medium text-white opacity-[0.5] mr-7">Custodial</a>
                        </li>
                        <li>
                            <a href="/#" className="text-[18px] font-medium text-white opacity-[0.5] mr-2">Transparent</a>
                        </li>
                        <li>
                            <a href="/#" className="text-[18px] font-medium text-white opacity-[0.5]"> DAO</a>
                        </li>

                    </ul>
                    <div className="border-b-2 border-[#6D6F74] mb-[40px] block lg:hidden"></div>
                </div>
                <div className="lg:flex lg:flex-row items-center gap-[116px]">
                  <div>
                     <img className="w-full lg:h-[400px] relative z-10" src="/images/ada1.png" alt="" />
                   </div>
                   <div>
                        <h3 className="text-[18px] lg:text-[48px] font-black text-white mt-[20px] mb-[10px]">NFT-Bonds</h3>
                        <p className="font-medium text-[16px] lg:text-[24px] lg:leading-[36px] lg:w-[544px] leading-[20px] text-white">
                        Borrowers loan or Lenders deposit is locked into NFT-Bond and can be redeemed by anyone who provides an NFT and its condition. This creates a totally new financial instrument that can be transferred, sold or staked on DeFi.
                        </p>
                   </div>
                <div className="hidden lg:block">
                    <h3 className="text-[26px] font-black text-[#B5FED9]" >NFT-Bonds</h3>
                    {
                        links.map(({adaLink},i) => (
                            <div className="mb-[33px] w-[214px]">
                                <a href="/#" className="text-[20px] leading-[30px] font-medium text-white opacity-[0.5]">{adaLink}</a>
                            </div>
                        ))
                    }
                </div>
                  </div>
              </div>
            </div>
            <img className="hidden lg:block w-[280px] h-[281px] lg:w-[564px] lg:h-[569px] absolute overflow-hidden bottom-10 lg:bottom-[-11.75rem] left-0" src="/images/ada2.png" alt=""/>
            <img className="blcok lg:hidden w-[280px] h-[542px]  absolute overflow-hidden inline-block bottom-[-0.5rem] left-0" src="/images/ada4.png" alt=""/>
        </div>
    );
};

export default WhyAada;
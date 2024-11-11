import Link from "next/link"

export default function Navbar(){
    return(
        <div className="flex relative bg-[#252B42]   h-[91px] w-[1322px] left-[59px]  ">
          <div className="flex flex-row relative w-[1322px] h-[91px] left-[136px] ">
            <div className="h-[58px] w-[187px] top-[17px] left-[136px] ">
              <h3 className=" flex relative  h-[32px] w-[152px] top-[13px] font-Montserrat font-bold text-2xl leading-8 tracking-widest text-[#FFFFFF]">BrandName</h3>
            </div>
            <div className="flex h-[58px] w-[815px] top-[16px] left-[364px]">
              <div className="flex  relative h-[24px] w-[275px] ml-24 top-[17px] text-[#FFFFFF] font-Montserrat gap-[21px]">
                <Link href="./">Home</Link>
                <Link href="product">Product</Link>
                <Link href="pricing">Pricing</Link>
                <Link href="contact">Contact</Link>
              </div>
              <div className="flex  h-[52px] w-[189px] top-[3px] left-[626px]  text-[14px] ml-72 text-[#FFFFFF] font-Montserrat gap-[45px]">
                  <Link href="login" className="h-[22px] w-[41px] pt-[17px]">Login</Link>
                  <div className="w-[214px] h-[52px]  ">
                    <div className=" w-[110px] h-[52px] gap-[15px] px-[25px] py-[15px] rounded-[5px] bg-[#23A6F0] ">
                      <button className="w-[60px] h-[22px] font-medium leading-[22px] tracking-[0.2px] ">JOIN US</button>
                      </div>
                  </div>
              </div>
            </div>
          </div>    
        </div>  
    ) 
}
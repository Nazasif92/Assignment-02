import Navbar from "./components/navbar"

export default function Home(){
  return(
    
    <div className= " relative bg-[#252B42] w-[1440px] h-[1132px] min-h-screen ">
      <Navbar/>
      <div className=" relative w-[1046px] h-[1028px] top-[104px] left-[197px] py-20 gap-20 ">
        <div id="row" className="flex  relative w-[701px] h-[496px] left-40 bottom-10  ">
          <div id="main content" className="w-[699px] h-[496px] px-10 py-10 gap-[40px] ">
            <h5 className="text-[#23A6F0] flex justify-center font-Montserrat text-base leading-6 tracking-widest ">Welcome</h5>
            <h1 className="text-[#FFFFFF]  relative h-[160px] w-[542px] left-16 top-16 font-semibold font-Montserrat text-center text-5xl leading-[1.5] tracking-[0.2px] ">Selling on the internet like a pro</h1>
            <h4 className="text-[#FFFFFF] flex relative  h-[60px] w-[536px] left-12 top-20 font-Montserrat text-center text-xl leading-[30px] mt-7 tracking-[0.2px] ">We know how large objects will act, but things on a  small scale just do not act that way.</h4>
            <div className="flex relative w-[365px] h-[52px] left-[138px] top-28 gap-[10px]">
              <button className="flex  bg-[#23A6F0] w-[193px] h-[52px] px-[40px] py-[15px] gap-[10px] rounded-[5]"><span className="h-[22px] w-[113px] text-[#FFFFFF] font-Montserrat text-sm tracking-widest text-center text-nowrap">Get Quote Now</span></button>
              <button className="flex border-[#23A6F0] border-2 w-[162px] h-[52px] rounded-[5] px-[40px] py-[15px] gap-[10px]"><span className="h-[22px] w-[82px] text-[#23A6F0] font-Montserrat text-sm text-center tracking-widest text-nowrap">Learn More</span></button>
            </div>
          </div>
  
        </div>
        <div id="row" className="flex relative w-[1046px] h-[292px] gap-[30px] mt-16 mb-14">
          <div id="col" className=" flex relative h-[292px] w-[328px] ">
            <div id="card" className="grid bg-[#FFFFFF] w-[328px] h-[292px] py-[35px] px-[40px] gap-[20px]">
              <div id="fixed width" className="bg-[#FFDCD1] w-[70px] h-[76px] rounded-[10] px-[19] py-[22] gap-[10]"></div>
              <div id="title" className="w-[135px] h-[24px]"><h3 className="font-Montserrat text-[#252B42] tracking-widest leading-6 text-base text-nowrap">training courses</h3></div>
              <div id="fixed" className="w-[50px] h-[2px] bg-[#E74040]"></div>
              <div id="paragraph" className="w-[222px] h-[60px]"><p className="font-serif text-[#737373] text-sm leading-5 tracking-wide">The gradual accumulation of information about atomic and small-scale behaviour...</p></div>
            </div>
          </div>
          <div id="col" className=" flex relative h-[292px] w-[329px]">
            <div id="card" className="grid bg-[#FFFFFF] w-[328px] h-[292px] py-[35px] px-[40] gap-[20]">
              <div id="fixed width" className="bg-[#B9EAA8] w-[70px] h-[76px] rounded-[10] px-[19px] py-[22px] gap-[10]"></div>
              <div id="title" className="w-[135px] h-[24px]"><h3 className="font-Montserrat text-[#252B42] tracking-widest leading-6 text-base text-nowrap">2769 online courses</h3></div>
              <div id="fixed" className="w-[50px] h-[2px] bg-[#E74040]"></div>
              <div id="paragraph" className="w-[222px] h-[60px]"><p className="font-serif text-[#737373] text-sm leading-5 tracking-wide">The gradual accumulation of information about atomic and small-scale behaviour...</p></div>
            </div>
          </div>
          <div id="col" className=" flex relative h-[292px] w-[329px] ">
            <div id="card" className="grid bg-[#23A6F0] w-[328px] h-[292px] py-[35px] px-[40px] gap-[20px]">
              <div id="fixed width" className="bg-[#FFFFFF] w-[70px] h-[76px] rounded-[10] px-[19px] py-[22px] gap-[10px]"></div>
              <div id="title" className="w-[135px] h-[24px] "><h3 className="font-Montserrat text-[#FFFFFF] tracking-widest leading-6 text-base text-nowrap ">training courses</h3></div>
              <div id="fixed" className="w-[50px] h-[2px] bg-[#FFFFFF]"></div>
              <div id="paragraph" className=" w-[222px] h-[60px]"><p className="font-serif text-[#FFFFFF] text-sm leading-5 tracking-wide">The gradual accumulation of information about atomic and small-scale behaviour...</p></div>
            </div>
          </div>
        </div>
      </div> 
    </div>   
  )  
}  
  

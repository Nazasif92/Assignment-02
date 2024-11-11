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
            <h4 className="text-[#FFFFFF] flex relative  h-[60] w-[536] left-12 top-20 font-Montserrat text-center text-xl leading-[30px] mt-7 tracking-[0.2px] ">We know how large objects will act, but things on a  small scale just do not act that way.</h4>
            <div className="flex relative w-[365] h-[52] left-[138px] top-28 gap-[10]">
              <button className="flex  bg-[#23A6F0] w-[193] h-[52] px-[40] py-[15] gap-[10] rounded-[5]"><span className="h-[22] w-[113] text-[#FFFFFF] font-Montserrat text-sm tracking-widest text-center text-nowrap">Get Quote Now</span></button>
              <button className="flex border-[#23A6F0] border-2 w-[162] h-[52] rounded-[5] px-[40] py-[15] gap-[10]"><span className="h-[22] w-[82] text-[#23A6F0] font-Montserrat text-sm text-center tracking-widest text-nowrap">Learn More</span></button>
            </div>
          </div>
  
        </div>
        <div id="row" className="flex relative w-[1046] h-[292] gap-[30] mt-16 mb-14">
          <div id="col" className=" flex relative h-[292] w-[328] ">
            <div id="card" className="grid bg-[#FFFFFF] w-[328] h-[292] py-[35] px-[40] gap-[20]">
              <div id="fixed width" className="bg-[#FFDCD1] w-[70] h-[76] rounded-[10] px-[19] py-[22] gap-[10]"></div>
              <div id="title" className="w-[135] h-[24]"><h3 className="font-Montserrat text-[#252B42] tracking-widest leading-6 text-base text-nowrap">training courses</h3></div>
              <div id="fixed" className="w-[50] h-[2] bg-[#E74040]"></div>
              <div id="paragraph" className="w-[222] h-[60]"><p className="font-serif text-[#737373] text-sm leading-5 tracking-wide">The gradual accumulation of information about atomic and small-scale behaviour...</p></div>
            </div>
          </div>
          <div id="col" className=" flex relative h-[292] w-[329]">
            <div id="card" className="grid bg-[#FFFFFF] w-[328] h-[292] py-[35] px-[40] gap-[20]">
              <div id="fixed width" className="bg-[#B9EAA8] w-[70] h-[76] rounded-[10] px-[19] py-[22] gap-[10]"></div>
              <div id="title" className="w-[135] h-[24]"><h3 className="font-Montserrat text-[#252B42] tracking-widest leading-6 text-base text-nowrap">2769 online courses</h3></div>
              <div id="fixed" className="w-[50] h-[2] bg-[#E74040]"></div>
              <div id="paragraph" className="w-[222] h-[60]"><p className="font-serif text-[#737373] text-sm leading-5 tracking-wide">The gradual accumulation of information about atomic and small-scale behaviour...</p></div>
            </div>
          </div>
          <div id="col" className=" flex relative h-[292] w-[329] ">
            <div id="card" className="grid bg-[#23A6F0] w-[328] h-[292] py-[35] px-[40] gap-[20]">
              <div id="fixed width" className="bg-[#FFFFFF] w-[70] h-[76] rounded-[10] px-[19] py-[22] gap-[10]"></div>
              <div id="title" className="w-[135] h-[24] "><h3 className="font-Montserrat text-[#FFFFFF] tracking-widest leading-6 text-base text-nowrap ">training courses</h3></div>
              <div id="fixed" className="w-[50] h-[2] bg-[#FFFFFF]"></div>
              <div id="paragraph" className=" w-[222] h-[60]"><p className="font-serif text-[#FFFFFF] text-sm leading-5 tracking-wide">The gradual accumulation of information about atomic and small-scale behaviour...</p></div>
            </div>
          </div>
        </div>
      </div> 
    </div>   
  )  
}  
  
import Group316 from '../assets/Group316.png'
import Rectangle89 from '../assets/Rectangle89.png'
const Hero = () => {
  return (
    <div className='grid lg:grid-cols-2 grid-cols-1 md:p-10 p-10' style={{ background: 'linear-gradient(270deg, #05445E 0%, #022534 100%)' }}>
      <div className='flex flex-col justify-center'>
        <h1 className='font-[800] md:text-[72px] font-rubik text-white text-[32px]'>Be better at DSA & CP</h1>
        <p style={{ fontFamily: 'DM Sans' }} className='text-[24px] text-white'>Lorem, ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        <div className='grid md:grid-cols-2 mt-6 md:gap-0 gap-4'>
          <button className='p-3 md:w-80 text-[#05445E] rounded-lg text-lg w-full' style={{ background: 'linear-gradient(90.76deg, #FFFFFF 0%, #DFF6FF 144.63%)', fontFamily: 'DM Sans' }}>Join now &#8594;</button>
          <button style={{ fontFamily: 'DM Sans' }} className='p-3 text-white md:w-80 w-full rounded-lg text-lg border-gradient border-2'>View curriculum</button>
        </div>
        <div className='grid lg:grid-cols-2 grid-cols-1 mt-7'>
          <ul>
            <li className="flex items-center p-3 w-full">
              <img style={{height: 64,width: 64}}  src={Rectangle89} alt="#" />
              <p style={{ fontFamily: 'DM Sans' }} className='text-white  p-3 text-lg'>Lorem ipsum, dolor sit amet</p>
            </li>
            <li className="flex items-center p-3 w-full">
              <img style={{height: 64,width: 64}} src={Rectangle89} alt="#" />
              <p style={{ fontFamily: 'DM Sans' }} className='text-white p-3 text-lg'>Lorem ipsum, dolor sit amet</p>
            </li>
          </ul>
          <ul>
            <li className="flex items-center p-3 w-full">
              <img style={{height: 64,width: 64}} src={Rectangle89} alt="#" />
              <p style={{ fontFamily: 'DM Sans' }} className='text-white p-3 text-lg'>Lorem ipsum, dolor sit amet</p>
            </li>
            <li className="flex items-center p-3 w-full">
              <img style={{height: 64,width: 64}} src={Rectangle89} alt="#" />
              <p style={{ fontFamily: 'DM Sans' }} className='text-white p-3 text-lg'>Lorem ipsum, dolor sit amet</p>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <img className='h-full w-full' style={{scale: 1.2}} src={Group316} alt="#" />
      </div>
    </div>
  )
}

export default Hero;

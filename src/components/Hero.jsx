import Group316 from '../assets/Group316.png'
import Rectangle89 from '../assets/Rectangle89.png'
const Hero = () => {
  return (
    <div className='grid md:grid-cols-2 grid-cols-1 p-10' style={{background: 'linear-gradient(270deg, #05445E 0%, #022534 100%)'}}>
      <div className='flex flex-col justify-center'>
        <h1 className='font-[800] md:text-[72px] font-rubik text-white text-[45px]'>Be better at DSA & CP</h1>
        <p className='text-[24px] text-white'>Lorem, ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        <div className='grid md:grid-cols-2 mt-6 md:gap-0'>
          <button className='p-3 w-80 text-[#05445E] rounded-lg text-lg' style={{background: 'linear-gradient(90.76deg, #FFFFFF 0%, #DFF6FF 144.63%)'}}>Join now &#8594;</button>
          <button className='p-3 text-white w-80 rounded-lg text-lg border-gradient border-2'>View curriculum</button>
        </div>
        <div className='grid grid-cols-2 mt-7'>
          <ul>
            <li className="flex items-center p-3">
              <img src={Rectangle89} alt="#" />
              <p className='text-white p-3 text-lg'>Lorem ipsum, dolor sit amet</p>
            </li>
            <li className="flex items-center p-3">
              <img src={Rectangle89} alt="#" />
              <p className='text-white p-3 text-lg'>Lorem ipsum, dolor sit amet</p>
            </li>
          </ul>
          <ul>
            <li className="flex items-center p-3">
              <img src={Rectangle89} alt="#" />
              <p className='text-white p-3 text-lg'>Lorem ipsum, dolor sit amet</p>
            </li>
            <li className="flex items-center p-3">
              <img src={Rectangle89} alt="#" />
              <p className='text-white p-3 text-lg'>Lorem ipsum, dolor sit amet</p>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <img src={Group316} alt="#" />
      </div>
    </div>
  )
}


export default Hero

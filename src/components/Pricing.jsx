import Rectangle132 from '../assets/Rectangle132.png';
import Frame215 from '../assets/Frame215.png';
import Rectangle89 from '../assets/Rectangle89.png';

const Pricing = () => {
  return (
    <div style={{ backgroundImage: `url('../assets/Vector3.png')` }} className="grid md:grid-cols-2 grid-cols-1 p-10">
      <div className='flex items-center flex-col justify-center'>
      <h1 className="font-[800] md:text-[64px] font-rubik">Invest in skills,<br /> <span className='text-[#05445E]'> earn 10X</span> of what you paid.</h1>
        <p className='text-2xl mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <div className='grid grid-cols-2 mt-20'>
          <ul style={{marginLeft: 0,paddingLeft: 0}}>
            <li className="flex items-center p-3">
              <img src={Rectangle132} alt="#" />
              <p className='p-3 text-lg'> <span className='font-bold text-2xl'> 1.2 Cr/Year</span><br /> highest  fresher package</p>
            </li>
            <li className="flex items-center p-3">
              <img src={Rectangle132} alt="#" />
              <p className='p-3 text-lg'><span className='font-bold text-2xl'>1000+ Offers </span> <br /> from top companies</p>
            </li>
          </ul>
          <ul style={{marginLeft: 0,paddingLeft: 0}}>
            <li className="flex items-center p-3">
              <img src={Rectangle132} alt="#" />
              <p className='p-3 text-lg'><span className='font-bold text-2xl'>Multiple &lt;  100 Ranks</span> <br /> in kickstart last year</p>
            </li>
            <li className="flex items-center p-3">
              <img src={Rectangle132} alt="#" />
              <p className='p-3 text-lg'><span className='font-bold text-2xl'>Trusted by IITians</span> <br /> for their career prep</p>
            </li>
          </ul>
        </div>
      </div>
      <div className='p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6'>
        <div className='bg-white p-4 rounded-lg'>
          <p className='text-[24px] font-semibold text-[#0F0F0F]'>Premium Victory Batch</p>
          <h1 className='text-[#818181] line-through text-[40px] mt-2'>₹19,999</h1>
          <h1 style={{background: 'linear-gradient(90deg, #3F6FC1 0%, #05445E 100%)',WebkitTextFillColor: 'transparent',WebkitBackgroundClip: 'text'}} className='text-[64px] font-semibold'>₹13,999</h1>
        </div>
        <div>
          <img className='h-56' src={Frame215} alt="#" />
        </div>
        <div style={{border: '1px solid black',background: 'linear-gradient(270deg, #05445E 0%, #022534 100%)'}}>
          <ul>
            <li className="flex items-center p-3">
              <img src={Rectangle89} alt="#" />
              <p className='p-3 text-lg text-white'>100+ Hrs Live Content</p>
            </li>
            <li className="flex items-center p-3">
              <img src={Rectangle89} alt="#" />
              <p className='p-3 text-lg text-white'>50+ Hrs Contest</p>
            </li>
            <li className="flex items-center p-3">
              <img src={Rectangle89} alt="#" />
              <p className='p-3 text-lg text-white'>500+ Problems</p>
            </li>
            <li className="flex items-center p-3">
              <img src={Rectangle89} alt="#" />
              <p className='p-3 text-lg text-white'>Includes an interview bootcamp and access to a mentor network</p>
            </li>
            <li className="flex items-center p-3">
              <img src={Rectangle89} alt="#" />
              <p className='p-3 text-lg text-white'>Enjoy access to our content for one year (paid extensions available)</p>
            </li>
            <li className="flex items-center p-3">
              <img src={Rectangle89} alt="#" />
              <p className='p-3 text-lg text-white'>Flexible payment options, including no-cost EMI, are available.</p>
            </li>
          </ul>
          <button className='p-3 w-80 text-[#05445E] rounded-lg text-lg' style={{background: 'linear-gradient(90.76deg, #FFFFFF 0%, #DFF6FF 144.63%)'}}>Join now &#8594;</button>
        </div>
      </div>
    </div>
  );
}

export default Pricing;

import Group316 from "../assets/Group316.png";
import Rectangle89 from "../assets/Rectangle89.png";
import Container from "./Container";
const Hero = () => {
	return (
		<>
			<div
				className="overflow-hidden md:h-screen"
				style={{
					background: "linear-gradient(270deg, #05445E 0%, #022534 100%)",
				}}
			>
				<Container>
					<div className="relative flex flex-col items-center w-full h-full max-md:pt-20 md:flex-row">
						<div className="flex flex-col text-center w-full md:w-[600px] gap-8 md:mt-4">
							<h1 className="font-[800] w-full md:text-5xl font-rubik text-white text-4xl">
								Be better at DSA & CP
							</h1>
							<p
								style={{ fontFamily: "DM Sans" }}
								className="w-full text-sm text-white whitespace-normal"
							>
								Lorem, ipsum dolor sit amet, consectetur adipisicing
								elit, sed do eiusmod tempor incididunt ut labore et
								dolore magna aliqua
							</p>
							<div className="flex items-center gap-4 ">
								<button
									className="p-3 md:w-52 text-[#05445E] rounded-lg text-lg w-full"
									style={{
										background:
											"linear-gradient(90.76deg, #FFFFFF 0%, #DFF6FF 144.63%)",
										fontFamily: "DM Sans",
									}}
								>
									Join now &#8594;
								</button>
								<button
									style={{ fontFamily: "DM Sans" }}
									className="w-full p-3 text-lg text-white border-2 rounded-lg button-gradient md:w-52"
								>
									View curriculum
								</button>
							</div>
							<div className="flex mt-5 max-md:justify-center">
								<ul>
									<li className="flex items-center w-full p-3">
										<img
											style={{ height: 60, width: 60 }}
											src={Rectangle89}
											alt="#"
										/>
										<p
											style={{ fontFamily: "DM Sans" }}
											className="p-3 text-sm text-white md:text-base"
										>
											Lorem ipsum, dolor sit amet
										</p>
									</li>
									<li className="flex items-center w-full p-3">
										<img
											style={{ height: 60, width: 60 }}
											src={Rectangle89}
											alt="#"
										/>
										<p
											style={{ fontFamily: "DM Sans" }}
											className="p-3 text-sm text-white md:text-base"
										>
											Lorem ipsum, dolor sit amet
										</p>
									</li>
								</ul>
								<ul>
									<li className="flex items-center w-full p-3">
										<img
											style={{ height: 60, width: 60 }}
											src={Rectangle89}
											alt="#"
										/>
										<p
											style={{ fontFamily: "DM Sans" }}
											className="p-3 text-sm text-white md:text-base"
										>
											Lorem ipsum, dolor sit amet
										</p>
									</li>
									<li className="flex items-center w-full p-3">
										<img
											style={{ height: 60, width: 60 }}
											src={Rectangle89}
											alt="#"
										/>
										<p
											style={{ fontFamily: "DM Sans" }}
											className="p-3 text-sm text-white md:text-base"
										>
											Lorem ipsum, dolor sit amet
										</p>
									</li>
								</ul>
							</div>
						</div>
						<div className="md:hidden ">
							<div className="scale-125 ">
								<img
									className="w-full h-full "
									src={Group316}
									alt="#"
								/>
							</div>
						</div>
						<div className="absolute hidden lg:block overflow-hidden z-0 my-auto xl:-right-[22%] lg:-right-[12%] md:-right-[5%] ">
							<img
								className="h-full xl:w-[1000px] lg:w-[800px] md:w-[700px] "
								src={Group316}
								alt="#"
							/>
						</div>
					</div>
				</Container>
			</div>
		</>
	);
};

export default Hero;

import AwardedWork from "../../components/Work/AwardedWork";
import ClassicBlueTag from "../../assets/images/Classic Blue Tag.png";
import Crown from "../../assets/images/Awarded Works Crown.png";
import Tag from "../../components/Tag/Tag";
import OrangyWaveTag from "../../assets/images/Orangy Wave Tag.png";

const AwardedWorks = () => {
	return (
		<div className='text-[#e5e5e5] pb-[2rem] lg:w-[90%] max-w-[1200px] m-auto px-6 md:px-10 xxl:pt-[3rem]'>
			<div className='flex flex-col lg:flex-row justify-between lg:items-center gap-2 lg:gap-10 mt-[4rem]'>
				<h2 className='uppercase text-[1.5rem] lg:text-[3rem] font-semibold lg:w-[30%] leading-[3rem]'>
					Awarded Works
				</h2>
				<p className='text-[#929294] lg:w-[30%] font-medium lg:text-base text-[80%] text-left my-6 md:my-0'>
					We are passionate digital market, we always produce projects that both
					ourselves and our clients can be truly proud of
				</p>
				<Tag imgSrc={Crown} value='290' className='hidden lg:flex' />
			</div>

			{/* Awarded Work 1 */}
			<AwardedWork
				labels={["SEO", "Social Ads", "2021 Awards"]}
				caption='Classic blue'
				title='Classic Blue'
				icon={ClassicBlueTag}
				className='bg-work-banner-1'
			/>
			<AwardedWork
				labels={["CRO", "2021 Awards", "Content Marketing"]}
				caption='Orangy Wave'
				title='Orangy Wave'
				icon={OrangyWaveTag}
				className='bg-work-banner-2'
			/>
		</div>
	);
};

export default AwardedWorks;

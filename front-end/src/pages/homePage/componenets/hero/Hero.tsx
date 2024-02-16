import "./hero.css"
import MainBtn from "@/components/custom-comp/MainBtn"



const Hero = () => {
    return (
        <section className=" custom-hero-bg ">
            <div className="bg-[#000000f1] flex justify-center items-center flex-col-reverse md:flex-row py-20 px-4 md:px-16 md:py-36">
                <div className=" w-full md:w-1/2 text-2xl mt-5 md:mt-0">
                    <h1 className=" text-white py-10  border-l-4 border-white pl-6 italic text-base md:text-2xl font-bold ">
                    Unleash Your Imagination: Our title generator isn't just a tool; it's an inspiration engine for content creators like you! Break free from the ordinary and let your ideas soar with titles that capture attention and spark curiosity.
                    </h1>
                    <div className="mt-5   flex flex-col md:flex-row gap-5" >
                        <MainBtn name="Generate Titles" to="generate"/>
                        <MainBtn name="Trending Videos" to="trending"/>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <img src="./images/svgs/undraw_online_stats_0g94.svg" alt="hero svg" />
                </div>
            </div>
        </section>
    )
}

export default Hero
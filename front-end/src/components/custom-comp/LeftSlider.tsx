import MainBtn from "./MainBtn"



const LeftSlider = () => {



    return (

        <section className=' h-auto lg:min-w-[200px]  border-e-2 border-dashed border-black py-10 flex justify-center items-start'>
            <div className=" sticky top-48 flex flex-col py-6 justify-center gap-4">

                <MainBtn name={"Trending"} to={"trending"}/>


                <MainBtn name={"Generate"} to={"generate"}/>



            </div>

        </section>
    )
}

export default LeftSlider
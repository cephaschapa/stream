import Image from "next/image";
import Wrapper from "./Wrapper";

const About = () => {
    return(
        <section id="about" className="py-10 bg-gray-100 dark:bg-slate-900">
            <Wrapper>
                <div className="w-full">
                    {/* <h1 className="text-center font-bold text-5xl text-slate-600">About StreamIO</h1> */}
                    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 py-5">
                        <div className="flex py-5 items-center justify-center lg:justify-start w-full">
                            <div className="dark:text-white">
                                <h1 className="text-5xl py-3 font-bold text-center md:text-left">About</h1>
                                <p className="text-2xl text-center md:text-left md:text-4xl">Our mission is to enhance online collaboration by connecting communities and institutions.</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row justify-center items-center h-full">
                            <Image src='/mobile-mockup.png' alt="mobile-app-mockup-iphone-12" className="transition duration-200 hover:scale-105 shadow-xl" height={600} width={310}/>
                            <Image src='/mobile-mockup-2.png' alt="mobile-app-mockup-iphone-12" className="transition duration-200 hover:scale-105" height={600} width={310}/>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}

export default About;
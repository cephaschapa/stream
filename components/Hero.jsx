import Wrapper from "./Wrapper"
import {} from '@heroicons/react/solid'
import { CodeIcon, LockClosedIcon } from "@heroicons/react/outline"

const Hero = () => {
    return (
        <div className="pt-16 flex lg:justify-center streamio-hero h-screen w-full">
            <Wrapper>
                <div className="flex lg:items-center flex-col space-y-5">
                    <h1 className="font-bold lg:text-8xl text-center text-6xl text-white">Fast, reliable, and secure conferencing</h1>
                    <p className="text-gray-100 lg:text-2xl">Hold incredible events, share knowledge, build and grow your community, create opportunity.</p>
                    <div className="flex flex-col space-y-4 lg:w-1/2">
                        <button className="px-5 p-4 rounded-full w-full bg-green-600 text-white">Start a Meeting</button>
                        <div className="">
                            <form className="flex rounded-full bg-white">
                                <div className="flex space-x-2 items-center w-full pl-5">
                                    <LockClosedIcon className="h-6 w-6 text-gray-500"/>
                                    <input className="outline-none w-full" placeholder="Meeting Code"/>
                                </div>
                                <button className="px-5 p-4 rounded-full bg-green-600 text-white lg:w-52">Join</button>
                            </form>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default Hero

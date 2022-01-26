import { ArrowRightIcon, CubeTransparentIcon, DocumentDuplicateIcon, StatusOnlineIcon } from "@heroicons/react/outline";
import { BellIcon, CalendarIcon, ChatIcon, FilmIcon, MenuAlt1Icon, PresentationChartLineIcon, VideoCameraIcon, ViewListIcon } from "@heroicons/react/solid";
import Wrapper from "./Wrapper";

const Features = () => {
    return(
        <section id="features" className="py-10 dark:bg-slate-800">
           <Wrapper>
            <div className="w-full">
                <h1 className="text-center font-bold text-5xl text-slate-600 dark:text-white">Features</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10 pt-5 lg:pt-10">
                    <div className="card  py-4 space-y-2 items-center bg-slate-100 dark:bg-slate-900 p-3">
                        <VideoCameraIcon className="h-16 w-16 text-green-600"/>
                        <h3 className="font-bold text-2xl text-slate-600 dark:text-white">Video Conferencing</h3>
                        <p className="dark:text-white text-center">Enjoy seamless video conferencing.</p>
                        <button className="flex mt-3 p-3 bg-green-600 rounded-full text-white space-x-2 px-4 transition duration-200 hover:bg-green-500">
                            <p className="uppercase">
                                Learn More
                            </p>
                            <ArrowRightIcon className="h-6 w-6"/>
                        </button>
                    </div>
                    <div className="card py-4 space-y-2 relative items-center bg-slate-100 dark:bg-slate-900 p-3">
                        <FilmIcon className="h-16 w-16 text-green-600"/>
                        <h3 className="font-bold text-2xl text-slate-600 dark:text-white">Recording</h3>
                        <p className="dark:text-white text-center">Record live events and meetings.</p>
                        <button className="flex mt-3 p-3 bg-green-600 rounded-full text-white space-x-2 px-4 transition duration-200 hover:bg-green-500">
                            <p className="uppercase">
                                Learn More
                            </p>
                            <ArrowRightIcon className="h-6 w-6"/>
                        </button>
                    </div>
                    <div className="card py-4 space-y-2 relative items-center bg-slate-100 dark:bg-slate-900 p-3">
                        <DocumentDuplicateIcon className="h-16 w-16 text-green-600"/>
                        <h3 className="font-bold text-2xl text-slate-600 dark:text-white">File Sharing</h3>
                        <p className="dark:text-white text-center">Share cloud hosted files.</p>
                        <button className="flex mt-3 p-3 bg-green-600 rounded-full text-white space-x-2 px-4 transition duration-200 hover:bg-green-500">
                            <p className="uppercase">
                                Learn More
                            </p>
                            <ArrowRightIcon className="h-6 w-6"/>
                        </button>
                    </div>
                    <div className="card py-4 space-y-2 relative items-center bg-slate-100 dark:bg-slate-900 p-3">
                        <ChatIcon className="h-16 w-16 text-green-600"/>
                        <h3 className="font-bold text-2xl text-slate-600 dark:text-white">Reatime Chat</h3>
                        <p className="dark:text-white text-center">Send messages and collaborate in realtime.</p>
                        <button className="flex mt-3 p-3 bg-green-600 rounded-full text-white space-x-2 px-4 transition duration-200 hover:bg-green-500">
                            <p className="uppercase">
                                Learn More
                            </p>
                            <ArrowRightIcon className="h-6 w-6"/>
                        </button>
                    </div>
                    <div className="card py-4 space-y-2 relative items-center bg-slate-100 dark:bg-slate-900 p-3">
                        <BellIcon className="h-16 w-16 text-green-600"/>
                        <h3 className="font-bold text-2xl text-slate-600 dark:text-white">Notification Service</h3>
                        <p className="dark:text-white text-center">Set reminders and customize notifications.</p>
                        <button className="flex mt-3 p-3 bg-green-600 rounded-full text-white space-x-2 px-4 transition duration-200 hover:bg-green-500">
                            <p className="uppercase">
                                Learn More
                            </p>
                            <ArrowRightIcon className="h-6 w-6"/>
                        </button>
                    </div>
                    <div className="card py-4 space-y-2 relative items-center bg-slate-100 dark:bg-slate-900 p-3">
                        <ViewListIcon className="h-16 w-16 text-green-600"/>
                        <h3 className="font-bold text-2xl text-slate-600 dark:text-white">Transcription</h3>
                        <p className="dark:text-white text-center">Video transcription with near accurate precision.</p>
                        <button className="flex mt-3 p-3 bg-green-600 rounded-full text-white space-x-2 px-4 transition duration-200 hover:bg-green-500">
                            <p className="uppercase">
                                Learn More
                            </p>
                            <ArrowRightIcon className="h-6 w-6"/>
                        </button>
                    </div>
                    <div className="card py-4 space-y-2 relative items-center bg-slate-100 dark:bg-slate-900 p-3">
                        <PresentationChartLineIcon className="h-16 w-16 text-green-600"/>
                        <h3 className="font-bold text-2xl text-slate-600 dark:text-white">Whiteboards</h3>
                        <p className="dark:text-white text-center">Drawable canvas for enhenced demonstrations</p>
                        <button className="flex mt-3 p-3 bg-green-600 rounded-full text-white space-x-2 px-4 transition duration-200 hover:bg-green-500">
                            <p className="uppercase">
                                Learn More
                            </p>
                            <ArrowRightIcon className="h-6 w-6"/>
                        </button>
                    </div>
                    <div className="card py-4 space-y-2 relative items-center bg-slate-100 dark:bg-slate-900 p-3">
                        <CubeTransparentIcon className="h-16 w-16 text-green-600"/>
                        <h3 className="font-bold text-2xl text-slate-600 dark:text-white text-center">Augmented Reality</h3>
                        <p className="dark:text-white text-center">An enhenced online experience that combines the digital world and the real one.</p>
                        <button className="flex mt-3 p-3 bg-green-600 rounded-full text-white space-x-2 px-4 transition duration-200 hover:bg-green-500">
                            <p className="uppercase">
                                Learn More
                            </p>
                            <ArrowRightIcon className="h-6 w-6"/>
                        </button>
                    </div>
                    <div className="card py-4 space-y-2 relative items-center bg-slate-100 dark:bg-slate-900 p-3">
                        <CalendarIcon className="h-16 w-16 text-green-600"/>
                        <h3 className="font-bold text-2xl text-slate-600 dark:text-white">Scheduling</h3>
                        <p className="dark:text-white text-center">Schedule events and meeting on the go. Compatible with Google Calender and more.</p>
                        <button className="flex mt-3 p-3 bg-green-600 rounded-full text-white space-x-2 px-4 transition duration-200 hover:bg-green-500">
                            <p className="uppercase">
                                Learn More
                            </p>
                            <ArrowRightIcon className="h-6 w-6"/>
                        </button>
                    </div>
                    
                    <div className="card py-4 space-y-2 relative items-center bg-slate-100 dark:bg-slate-900 p-3">
                        <StatusOnlineIcon className="h-16 w-16 text-green-600"/>
                        <h3 className="font-bold text-2xl text-slate-600 dark:text-white text-center">Remote Resource Access</h3>
                        <p className="dark:text-white text-center">Seemless resource sharing and collaboration for teams in different locations.</p>
                        <button className="flex mt-3 p-3 bg-green-600 rounded-full text-white space-x-2 px-4 transition duration-200 hover:bg-green-500">
                            <p className="uppercase">
                                Learn More
                            </p>
                            <ArrowRightIcon className="h-6 w-6"/>
                        </button>
                    </div>
                </div>
            </div>
           </Wrapper>
        </section>
    )
}

export default Features;
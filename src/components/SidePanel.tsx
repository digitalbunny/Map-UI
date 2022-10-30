import { useState } from "react"
import { CSSTransition } from "react-transition-group"


export default function SidePanel() {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);


    return (
        <>
            <button 
                className={`absolute z-20 top-1/2 bg-white border border-zinc-200 text-zinc-500 py-4 px-2 rounded-r-md shadow ${isCollapsed ? 'left-[24rem]' : 'left-[0rem]'}`} 
                onClick={() => setIsCollapsed(!isCollapsed)}>
                {
                    isCollapsed ?
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
                    </svg>:
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                    </svg>
                }
            </button>

            <CSSTransition
                in={isCollapsed} 
                timeout={300} 
                classNames="sliderLeftTransition" 
                unmountOnExit>
                <div className="fixed z-10 inset-y-0 w-1/3 lg:w-1/4 2xl:w-1/5">
                    <div className="min-h-screen w-full overflow-x-hidden bg-white border-r border-zinc-200 shadow">
                        <section className="relative w-full p-4">
                            <div className="relative z-10 w-full flex bg-white border border-zinc-200 rounded-md overflow-hidden">
                                <input 
                                    type="text" 
                                    name="place" 
                                    className="w-[75%] text-sm bg-white border-0 focus:border-zinc-400 focus:ring-0 focus:outline-none py-2 px-4" />

                                <div className="flex items-center text-zinc-500 bg-white divide-x divide-zinc-300 w-[25%]">
                                    <span className="pr-2.5 cursor-pointer">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                        </svg>
                                    </span>

                                    <span className="pl-2.5 cursor-pointer">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </span>
                                </div>
                            </div>

                            <img 
                                src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                                alt="background" 
                                className="absolute inset-0 object-cover" />
                        </section>
                    </div>
                </div>
            </CSSTransition>
        </>
    )
}
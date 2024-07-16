import BottomNav from "./BottomNav"

const Message = () => {
    return (
        <>
            <div className="mx-3">

                <div className="flex items-center justify-between mt-5">
                    <img src="back.svg" alt="" />
                    <h2 className="text-lg font-medium text-[#1F1F39]">Booked Sessions</h2>
                    <div />
                </div>

                <div className="flex gap-4 mt-3 w-full relative pb-5">
                    <div className="flex flex-col flex-1 mt-5 shadow-custom2 p-3">
                        <div className="flex gap-4 items-center justify-between">
                            <div className="flex gap-4 items-center">
                                <img src="face2-img.svg" alt="" />

                                <div className="flex gap-1 flex-1 items-center justify-between">
                                    <div className="flex flex-col gap-2 justify-between">
                                        <span className="text-[#1F1F39] text-[15px] leading-[22.5px]">Samson Smith</span>
                                        <span className="flex items-center gap-2 text-[#B8B8D2] font-normal text-xs leading-[15.96px]"><img src="vex.svg" alt="" /> <span>Chemistry</span></span>
                                    </div>

                                    
                                </div>
                            </div>

                            {/* <div className="flex items-center justify-end  gap-3 p-2 rounded-md bg-[#FFEBF0] text-[#FF7396] text-sm leading-[15.72px]"><img src="/chat.svg" alt="chat" /> <span>Chat</span></div> */}

                            <div className=" items-end justify-between">
                                    <div className="flex flex-col gap-2 items-end justify-between">
                                        <span className="text-[#B8B8D2] text-[10px] leading-[13.5px] tracking-[-0.3px] font-normal">02/09/2024</span>
                                        <span className="flex items-center gap-2 text-[#FF7396] font-normal text-xs leading-[15.96px] tracking-[-0.3px]"><img src="vex.svg" alt="" /> <span>Cancel session</span></span>
                                    </div>
                            </div>

                        </div>
                    </div>
                </div>



            </div>
            <BottomNav />
        </>
    )
}

export default Message
import BottomNav from "../components/BottomNav"

const Account = () => {
    return (
        <>
        <div className="mx-3 relative">

            <div className="flex items-center justify-between mt-5">
                <img src="back.svg" alt="" />
                <h2 className="text-lg font-medium text-[#1F1F39]">Tutor Profile</h2>
                <div />
            </div>

            <div className="flex gap-4 mt-3 w-full relative pb-5">
                <div className="z-50 bottom-0 right-0  absolute text-center border text-white text-[15px] bg-[#465CFF] border-[#465CFF] rounded-xl p-3 px-12">Book Tutor</div>
                <div className="flex flex-col flex-1 mt-5 shadow-custom2 p-3">
                    <div className="flex gap-4 items-end justify-between">
                        <div className="flex gap-4 items-center">
                            <img src="face2-img.svg" alt="" />

                            <div className="flex flex-col gap-1 justify-between">
                                <div className="flex flex-col gap-2 justify-between">
                                    <span className="text-[#1F1F39] text-[15px] leading-[22.5px]">Samson Smith</span>
                                    <span className="text-[#1F1F39] font-bold text-[16.32px] leading-[16.32px]">₹‎20/hr</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-end  gap-3 p-2 rounded-md bg-[#FFEBF0] text-[#FF7396] text-sm leading-[15.72px]"><img src="/chat.svg" alt="chat" /> <span>Chat</span></div>
                    </div>


                    <div className="flex gap-4 mt-3">
                        {/* <div className="text-[#B8B8D2] text-xs leading-[18px]"></div> */}
                        <div className="text-[#858597] text-xs leading-[18px] font-normal">Subjects: English, Mathematics, Biology, Physics</div>
                    </div>

                    <div className="flex gap-4 mt-3 w-full">
                        <div className="flex items-center justify-between w-full">
                            <div className="flex items-start gap-3">
                                <img src="star.svg" alt="" />
                                <span className="text-xs leading-[18px] font-medium text-[#858597]">3.0</span>
                            </div>

                        </div>
                    </div>

                </div>
            </div>


            <div className="text-[#1F1F39] text-[15px] font-bold leading-[22.5px]">Tutor Information</div>

            <div className="border-t border-[#F4F3FD] my-3 p-2">
                <div className="text-[15px] text-[#1F1F39] font-medium leading-[22.5px] mb-2">Background</div>

                <p className="text-[#858597] text-xs leading-[18px]">I've been teaching private French and English lessons for years, and love it! I have a Masters degree in English Literature, and am very experienced in writing and editing essays. <br /> <br /> BA in English Literature and Linguistics from the University of Toronto (2019)MA in English Literature from McGill University (2021)</p>
            </div>
            <div className="border-t border-[#F4F3FD] my-3 p-2">
                <div className="text-[15px] text-[#1F1F39] font-medium leading-[22.5px] mb-2">Subjects</div>
                <div className="flex flex-wrap gap-3 mt-2">
                    <div className="flex items-center gap-3 p-1 px-2 rounded-[12px] text-xs font-normal leading-[14.4px] bg-[#D6DBFF] text-[#465CFF]"> <span> Chemistry</span></div>
                    <div className="flex items-center gap-3 p-1 px-2 rounded-[12px] text-xs font-normal leading-[14.4px] bg-[#D6DBFF] text-[#465CFF]"> <span> Biology</span></div>
                    <div className="flex items-center gap-3 p-1 px-2 rounded-[12px] text-xs font-normal leading-[14.4px] bg-[#D6DBFF] text-[#465CFF]"> <span> French</span></div>
                    <div className="flex items-center gap-3 p-1 px-2 rounded-[12px] text-xs font-normal leading-[14.4px] bg-[#D6DBFF] text-[#465CFF]"> <span> Math</span></div>
                    <div className="flex items-center gap-3 p-1 px-2 rounded-[12px] text-xs font-normal leading-[14.4px] bg-[#D6DBFF] text-[#465CFF]"> <span> English Language</span></div>
                </div>
            </div>

            <div className="border-t border-[#F4F3FD] my-3 p-2">
                <div className="text-[15px] text-[#1F1F39] font-medium leading-[22.5px] mb-2">Levels</div>

                <p className="text-[#858597] text-xs leading-[18px]">Elementary /  Middle School / High School</p>
            </div>

            <div className="border-t border-[#F4F3FD] my-3 p-2">
                <div className="text-[15px] text-[#1F1F39] font-medium leading-[22.5px] mb-2">Classes Format</div>

                <p className="text-[#858597] text-xs leading-[18px]">My Home / Your Home / Live Classes</p>
            </div>
            <div className="border-t border-[#F4F3FD] my-3 p-2">
                <div className="text-[15px] text-[#1F1F39] font-medium leading-[22.5px] mb-2">Extras</div>

                <p className="text-[#858597] text-xs leading-[18px]">Books / Video Lectures / Notes</p>
            </div>
            <div className="border-t border-[#F4F3FD] my-3 p-2">
                <div className="text-[15px] text-[#1F1F39] font-medium leading-[22.5px] mb-2">Offer Classes</div>

                <p className="text-[#858597] text-xs leading-[18px]">Individual / In Groups</p>
            </div>
            <div className="border-t border-[#F4F3FD] my-3 p-2 mb-28">
                <div className="text-[15px] text-[#1F1F39] font-medium leading-[22.5px] mb-2">Location</div>

                <p className="text-[#858597] text-xs leading-[18px]">Cahrnet, India</p>
            </div>

        </div>
            <BottomNav />
        </>
    )
}

export default Account
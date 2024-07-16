const Account = () => {
    return (
        <div className="mx-3 relative">
            <div className="absolute text-center border text-white text-[15px] bg-[#465CFF] border-[#465CFF] rounded-xl p-3 px-12 w-full">Book Tutor</div>

            <div className="flex items-center justify-between mt-5">
                <img src="back.svg" alt="" />
                <h2 className="text-lg font-medium text-[#1F1F39]">Tutor Profile</h2>
                <div />
            </div>

            <div className="flex gap-4 mt-3 w-full">
            <div className="flex flex-col flex-1 mt-5 shadow-custom2 p-3">
                    <div className="flex gap-4 items-center">
                        <img src="face2-img.svg" alt="" />

                        <div className="flex flex-col gap-1 justify-between">
                            <div className="flex flex-col gap-2 justify-between">
                                <span className="text-[#1F1F39] text-[15px] leading-[22.5px]">Samson Smith</span>
                                <span className="text-[#1F1F39] font-bold text-[16.32px] leading-[16.32px]">₹‎20/hr</span>
                            </div>
                        </div>
                        <div className="bg text-[#FF7396] text-sm leading-[15.72px]"></div>
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
        </div>
    )
}

export default Account
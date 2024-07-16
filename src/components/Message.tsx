import BottomNav from "./BottomNav"


const Card = () =>  <div className="flex gap-4 mt- w-full">
<div className="flex flex-col flex-1 mt-3 shadow-custo p-3 divide-y">
    <div className="flex gap-4 items-center justify-between">
        <div className="flex gap-4 items-center">
            <img src="bookedface.svg" alt="" />

            <div className="flex gap-1 flex-1 items-center justify-between">
                <div className="flex flex-col gap-2 justify-between">
                    <span className="text-[#1F1F39] text-[15px] leading-[22.5px]">Samson Smith</span>
                    <span className="flex items-center gap-2 text-[#B8B8D2] font-normal text-xs leading-[15.96px]"><img src="vex.svg" alt="" /> <span>Chemistry</span></span>
                </div>
            </div>
        </div>


        <div className=" items-end justify-between">
            <div className="flex flex-col gap-2 items-end justify-between">
                <span className="text-[#B8B8D2] text-[10px] leading-[13.5px] tracking-[-0.3px] font-normal">02/09/2024</span>
                <span className="flex items-center gap-2 text-[#FF7396] font-normal text-xs leading-[15.96px] tracking-[-0.3px]"><img src="vex.svg" alt="" /> <span>Cancel session</span></span>
            </div>
        </div>

    </div>
</div>
</div>
const Message = () => {
    return (
        <>
            <div className="mx-3">

                <div className="flex items-center justify-between mt-5">
                    <img src="back.svg" alt="" />
                    <h2 className="text-lg font-medium text-[#1F1F39]">Booked Sessions</h2>
                    <div />
                </div>
            <div className="mt-5">
               <Card />
               <Card />
               <Card />
            </div> 
            </div>
            <BottomNav />
        </>
    )
}

export default Message
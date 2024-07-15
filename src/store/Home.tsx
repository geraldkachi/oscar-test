import { useState } from "react";
import BottomNav from "../components/BottomNav"
import Card from "../components/Card"
import { DragCloseBottom } from "../components/Drawer";

const Home = () => {
    const [open, setOpen] = useState(false);
    <DragCloseBottom {...{open, setOpen}} />
    return (
        <>
        <div className="mx-5">
            <div className="flex flex-col mt-10">
                <div className="text-[25px] font-medium text-[#1F1F39] tracking-[-0.3px] leading-[32.75px]">Search</div>
                <div className="text-xs font-normal leading-[15.72px] tracking-[-0.3px] text-[#858597] mt-1">Find a tutor of your choice</div>
            </div>

            <div className="flex items-center gap-4 w-full mt-5">
                <div className="flex relative bg-[#F2F2F2] rounded-[10px] w-full">
                    <img src="search.svg" alt="" className="pl-3 pt- " />
                    <input type="text" placeholder="Search" className="outline-none border border-[#F4F3FD] bg-[#F2F2F2] rounded-[10px] w-full placeholder:text-[#B8B8D2] p-3 placeholder:text-[12px] placeholder:tracking-[-0.3px] placeholder:leading-[15.72px]" />
                </div>
                <img src="filter.svg" alt="" onClick={() => null} />
            </div>

            <Card />

        </div>
            <BottomNav />
        </>
    )
}

export default Home
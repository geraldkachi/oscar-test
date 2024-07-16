import { useState } from "react";
import BottomNav from "../components/BottomNav"
import Card from "../components/Card"
import { DragCloseBottom } from "../components/Drawer";
import ReactSelect from "../components/ReactSelect";

const Home = () => {
    const [open, setOpen] = useState(false);
    const [select, setSelect] = useState('');

    const onSelect = (selected: { value: string }) => {
        setSelect(selected.value);
    };

    const options = [
        { value: 'Mathematics', label: 'Mathematics' },
        { value: 'Chemistry', label: 'Chemistry' }
    ]

    return (
        <>
            <DragCloseBottom {...{ open, setOpen }}>
                <div className="my5">
                    <ReactSelect label="Subject" options={options} placeholder={'select'} value={select} onChange={onSelect} required />
                    <div className="flex gap-5 items-center pt-3 pb-4 text-white">
                        <div className="flex items-center gap-3 p-1 px-2 rounded-[12px] text-xs font-normal leading-[14.4px] bg-[#465CFF]"><span>Mathematics</span> <img src="drag-x.svg" /></div>
                        <div className="flex items-center gap-3 p-1 px-2 rounded-[12px] text-xs font-normal leading-[14.4px] bg-[#465CFF]"> <span> Chemistry</span> <img src="drag-x.svg" /></div>
                    </div>

                    <ReactSelect label="Duration (in hrs)" options={options} placeholder={'select'} value={select} onChange={onSelect} required />
                    <ReactSelect label="Class format)" options={options} placeholder={'select'} value={select} onChange={onSelect} required />
                    <ReactSelect label="Price range per hour)" options={options} placeholder={'select'} value={select} onChange={onSelect} required />


                    <div className="flex items-center gap-4 mt-8">
                        <div className="text-center border text-[#465CFF] text-[15px] border-[#465CFF] rounded-xl p-3 w-full">Clear</div>
                        <div className="text-center border text-white text-[15px] bg-[#465CFF] border-[#465CFF] rounded-xl p-3 px-12 w-full">Apply Filter</div>
                    </div>
                </div>
            </DragCloseBottom>
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
                    <img src="filter.svg" alt="" onClick={() => setOpen(true)} />
                </div>

                <Card />
            </div>
            <BottomNav />
        </>
    )
}

export default Home
import { useState } from "react";
import BottomNav from "../components/BottomNav"
import ReactSelect from "../components/ReactSelect"
import Input from "../components/Input";

const Session = () => {
    const [select, setSelect] = useState('');
    const [date, setDate] = useState('');

    const onSelect = (selected: { value: string }) => {
        setSelect(selected.value);
    };

    const options = [
        { value: 'Mathematics', label: 'Mathematics' },
        { value: 'Chemistry', label: 'Chemistry' }
    ]

    const handleDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDate(e.target.value)
    };
    return (
        <>
            <div className="bg-[#465CFF] py-4 rounded-ee-[30px] rounded-bl-[30px]">
                <div className="mx-5 mt-5">
                    <div className="flex items-center justify-between mt-5">
                        <img src="back.svg" alt="" />
                        <div />
                    </div>

                    <div className="flex flex-col text-white mt-5">
                        <div>Book A Session</div>
                        <div className="flex items-center gap-3 text-[15px] leading-[22.5px] font-medium">
                            <span>with</span>
                            <img src="session-face.svg" alt="" />
                            <span>Samson Smith</span>
                            <span className="leading-[17.03px] text-[13px] font-medium">Fee: ₹‎20/hr</span>
                        </div>
                    </div>
                </div>
            </div>


            <div className="mb-28 mt-5">
                <div className="my5 mx-5">
                    <ReactSelect label={`Subject ${<div className="text-[#B8B8D2] text-[15px] leading-[22.5px]"> (1 subject per session)</div>}`} options={options} placeholder={'select'} value={select} onChange={onSelect} required />
                    <ReactSelect label="Level" options={options} placeholder={'select'} value={select} onChange={onSelect} required />
                    <ReactSelect label="Class Format" options={options} placeholder={'select'} value={select} onChange={onSelect} required />

                    <div>
                        <div className='text-base leading-6 font-medium mb-10 ml-1 text-[#1F1F39]'>Start date & time</div>
                        <div className="flex items-end gap-4">
                            <Input
                                label="Date of Birth"
                                className="mb-1"
                                value={date}
                                type="date"
                                onChange={handleDate}
                                name="date"
                                placeholder="DD/MM/YY"
                            />
                            <Input
                                label=""
                                className="mb-1"
                                value={date}
                                type="text"
                                onChange={handleDate}
                                name="date"
                                placeholder="00:00 | AM"
                            />
                                  {/* <ReactSelect label="Class Format" options={options} placeholder={'00:00 | AM'} value={select} onChange={onSelect} required /> */}
                          

                        </div>
                            <Input
                                label="Duration in hours"
                                className="mb-1"
                                value={date}
                                type="number"
                                onChange={handleDate}
                                name="date"
                                placeholder="1"
                            />


                    </div>

                    <div className="flex items-center gap-4 mt-8">
                        <div className="text-center border text-white text-[15px] bg-[#465CFF] border-[#465CFF] rounded-xl p-3 px-12 w-full">Done</div>
                    </div>
                </div>
            </div>
            <BottomNav />
        </>
    )
}

export default Session
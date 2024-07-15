// eslint-disable-next-line @typescript-eslint/no-unused-vars
const dataCard = [
    {
        name: 'Yara Shaidi',
        amount: '₹‎10/hr',
        title: "I've been teaching private French and English lessons for years, and love it! ...",
        subjects: 'ubjects: English, Mathematics, Biology, Physics',
        stars: "5.0",
        reviews: 100,
        image: 'face-img.svg',
        link: 'https://www.linkedin.com/in/yara-shaidi/',
    },
    {
        name: 'Samson Smith',
        amount: '₹‎20/hr',
        title: "I've been teaching private French and English lessons for years, and love it! ...",
        subjects: 'ubjects: English, Mathematics, Biology, Physics',
        stars: "3.0",
        reviews: 100,
        image: 'face2-img.svg',
        link: 'https://www.linkedin.com/in/yara-shaidi/',
    },
    {
        name: 'Shira Kan',
        amount: '₹‎5/hr',
        title: "I've been teaching private French and English lessons for years, and love it! ...",
        subjects: 'ubjects: English, Mathematics, Biology, Physics',
        stars: "4.3",
        reviews: 100,
        image: 'face2-img.svg',
        link: 'https://www.linkedin.com/in/yara-shaidi/',
    },
    {
        name: 'Shira Kan',
        amount: '₹‎5/hr',
        title: "I've been teaching private French and English lessons for years, and love it! ...",
        subjects: 'ubjects: English, Mathematics, Biology, Physics',
        stars: "4.3",
        reviews: 100,
        image: 'face3-img.svg',
        link: 'https://www.linkedin.com/in/yara-shaidi/',
    },
    {
        name: 'Mohammod C.',
        amount: '₹‎10/hr',
        title: "I've been teaching private French and English lessons for years, and love it! ...",
        subjects: 'ubjects: English, Mathematics, Biology, Physics',
        stars: "5.0",
        reviews: 100,
        image: 'face4-img.svg',
        link: 'https://www.linkedin.com/in/yara-shaidi/',
    },
]

const Card = () => {
    return (
        <>
            {dataCard.map(card => (
                <div key={card.name} className="flex flex-col flex-1 mt-5 shadow-custom2 p-3">
                    <div className="flex gap-4">
                        <img src={card.image} alt="" />

                        <div className="flex flex-col gap-1 justify-between">
                            <div className="flex items-center justify-between">
                                <span className="text-[#1F1F39] text-[15px] leading-[22.5px]">{card.name}</span>
                                <span className="text-[#1F1F39] font-bold text-[16.32px] leading-[16.32px]">{card.amount}</span>
                            </div>

                            <div className="text-[#858597] text-xs leading-[18px] font-normal">{card.title}</div>
                        </div>
                    </div>


                    <div className="flex gap-4 mt-3">
                        <div className="text-[#B8B8D2] text-xs leading-[18px]">{card.subjects}</div>
                    </div>


                    <div className="flex gap-4 mt-3 w-full">
                        <div className="flex items-center justify-between w-full">
                            <div className="flex items-start gap-3">
                                <img src="star.svg" alt="" />
                                <span className="text-xs leading-[18px] font-medium text-[#858597]">{card.stars}</span>
                            </div>

                            <div className="p-3 text-[#465CFF] leading-[19.65px] tracking-[-0.3px] text-[15px] font-normal rounded-md">View Profile</div>
                        </div>
                    </div>

                </div>
            ))}
        </>
    )
}

export default Card
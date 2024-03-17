import Image from "next/image";

const Providing = () => {
    return (
        <div className="flex flex-col gap-5 mx-2 lg:mx-auto lg:max-w-4xl xl:max-w-7xl py-10">
            
            <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-20 py-10 lg:p-10 bg-rose-100 rounded-3xl">
    <div className="w-full lg:w-1/3">
        <Image width={500} height={500} className="p-3" src="https://www.creativeitinstitute.com/images/featured/featured_text_one_image1662023354.png" alt="" />
    </div>
    <div className="flex flex-col gap-3 w-2/3">
        <h1 className="font-bold text-3xl">Providing project-based classes is our specialty</h1>
        <p className="text-base font-normal">We believe in skills gained through practical projects. A great number of people struggle to start their career in the tech field for only having conceptual knowledge. Creative IT makes sure to provide hands-on training to prepare you for job markets. Our course module contains projects that are designed to track your progress. During the course, you will be able to make a portfolio yourself to showcase your practical skills to the potential employers.</p>
    </div>
</div>


<div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-20 py-10 lg:p-10 bg-rose-100 rounded-3xl">

    <div className="flex flex-col gap-3 w-1/2">
        <p className="text-rose-500 font-bold">Successfully 14 Year&apos;s</p>
        <h1 className="font-bold text-3xl lg:text-5xl">World-Renowned IT Expert Making Organization</h1>
        <p className="text-base font-normal">Creative IT has been working with a vision to create IT experts for the past 14 years. In a fast pacing world, where every sector relies on technology, you need to develop IT skills to secure a better future. With the utmost dedication, we have been able to make more than 50,000 IT experts who are currently working in different sectors.</p>
        <div className="flex gap-3">
            <div><button className="btn btn-error">Browse Course </button></div>
            <div><button className="btn btn-error">Learn More </button></div>             
        </div>
                   
                    

    </div>

    <div className="w-full lg:w-1/2">
        <Image width={500} height={500} className="p-3" src="https://www.creativeitinstitute.com/images/featured/02_default.jpg" alt="" />
    </div>
</div>

        </div>
    );
};

export default Providing;
import Image from "next/image";
import Link from "next/link";
import { IoBookOutline } from "react-icons/io5";

const Banner = () => {


    return (
        <div className="bg-red-100">
        <div className="flex flex-col lg:flex-row items-center py-10 gap-5 mx-2 lg:mx-auto lg:max-w-4xl xl:max-w-7xl">

            <div className="flex flex-col gap-3">

                <p className="flex gap-3 text-lg font-bold"><span><Image src="https://www.creativeitinstitute.com/assets/images/home/Check.png" alt="" width={25} height={25} /></span>Unleash Your Potential</p>
                <h1 className="font-bold text-5xl">Become an IT Pro & Rule the</h1>
                <h1 className="font-extrabold text-5xl text-red-500">Digital World</h1>
                <p className="font-normal text-base">With a vision to turn manpower into assets, Creative IT Institute is ready to enhance your learning experience with skilled mentors and updated curriculum. Pick your desired course from more than 30 trendy options.</p>
                <div className="flex gap-5">
                    <Link href='/courses'><div><button className="btn btn-error"><span className="text-xl hidden md:flex"><IoBookOutline /></span>Browse Contents </button></div></Link>
                    <Link href='/courses'><div><button className="btn btn-error"><span className="text-xl hidden md:flex"><IoBookOutline /></span>Join Free Seminar </button></div>  </Link>                  
                </div>

                <div className="flex items-center gap-2">
                    <div><Image width={50} height={50} src="https://www.creativeitinstitute.com/iso.png" alt="" /></div>
                    <div><p className="font-semibold">One of the best ISO certified IT
Training Institutes in Bangladesh</p></div>
                </div>


            </div>

            <div>

            <iframe className="card border-white border-[10px]  shadow-2xl drop-shadow-2xl rounded-lg bg-slate-400 lg:w-[460px] h-[320px]" src="https://www.youtube.com/embed/idIAK98UZDk?si=e6splj0z6uIVxFcs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> 


            </div>

        </div>
        </div>
    );
};

export default Banner;
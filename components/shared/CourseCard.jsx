import Image from "next/image";
import Link from "next/link";

const CourseCard = ({course}) => {

    const {image,title,review,student,fee} = course
    
    return (

      <>
        <Link href='/courses/details'>
        <div>

<div className="card w-[22rem] bg-base-100 shadow-xl">
<figure><Image width={500} height={500} src={image} alt="Shoes" /></figure>
<div className="card-body gap-4">
<p className="text-sm text-yellow-500">All Courses</p>
<h1 className="font-bold text-xl">{title}</h1>
<div className="flex items-center gap-3">
<div className="rating rating-xs">
<input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
<input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
<input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
<input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
<input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
</div>
<div className="badge badge-outline h-[3rem] w-[20rem] text-nowrap">{review} Review</div> 
<div className="badge badge-outline h-[3rem] w-[20rem] text-nowrap">{student} Student</div> 
</div>
<div className="flex gap-3 items-center">
<p className="font-bold">Course Fee: {fee} BDT</p>
<div>
<div><button className="btn btn-outline btn-error">Click For Discount</button></div>
</div>
</div>
</div>
</div>

</div>
        </Link>
      </>

    );
};

export default CourseCard;
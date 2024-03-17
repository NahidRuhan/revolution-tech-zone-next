import CourseCard from "@/components/shared/CourseCard";

const HomeCourses = () => {
    const courses1 = [
        {
          image: 'https://www.creativeitinstitute.com/images/course/course_1665409737.jpg',
          title: 'Professional Graphic Design',
          review: '9,000',
          student: '18,000',
          fee: '50,000'
        },
        {
          image: 'https://www.creativeitinstitute.com/images/course/course_1662552115.jpg',
          title: 'Motion Graphic',
          review: '4,160',
          student: '5,200',
          fee: '50,000'
        },
    
     {
          image: 'https://www.creativeitinstitute.com/images/course/course_1662637290.jpg',
          title: 'UX/UI Design',
          review: '2,800',
          student: '3,500',
          fee: '50,000'
        },
      ]
      const courses2 = [
        {
          image: 'https://www.creativeitinstitute.com/images/course/course_1663052056.jpg',
          title: 'Web Development',
          review: '1,520',
          student: '1,900',
          fee: '50,000'
        },
     {
          image: 'https://www.creativeitinstitute.com/images/course/course_1662795698.jpg',
          title: 'MERN Stack Development',
          review: '680',
          student: '850',
          fee: '95,000'
        },
     {
          image: 'https://www.creativeitinstitute.com/images/course/course_1673929467.jpg',
          title: 'App Development With Kotlin',
          review: '1,220',
          student: '2,400',
          fee: '50,000'
        },
    ]
        const courses3 = [
            {
                image: 'https://www.creativeitinstitute.com/images/course/course_1662866125.jpg',
                title: 'Professional 3D Animation',
                review: '3,200',
                student: '4,000',
                fee: '50,000'
              },
           {
                image: 'https://www.creativeitinstitute.com/images/course/course_1663052405.jpg',
                title: 'Interior and Exterior Design',
                review: '2,000',
                student: '2,500',
                fee: '50,000'
              },
           {
                image: 'https://www.creativeitinstitute.com/images/course/course_1663052435.jpg',
                title: '3D Product Modeling',
                review: '136',
                student: '170',
                fee: '20,000'
              },
           {
                image: 'https://www.creativeitinstitute.com/images/course/course_1663052460.jpg',
                title: '3D Floor Plan',
                review: '120',
                student: '150',
                fee: '20,000'
              },
          ]
    
      
    return (
        <div className="flex flex-col gap-5 mx-2 lg:mx-auto lg:max-w-4xl xl:max-w-7xl">

            <div className="flex flex-col gap-5">
                <h1 className="font-bold text-3xl">Graphic And Multimedia</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
{
    courses1.map((course,ind)=>(<CourseCard key={ind} course={course}></CourseCard>))
}
</div>
            </div>

            
            <div className="flex flex-col gap-5">
                <h1 className="font-bold text-3xl">Web And Software</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
{
    courses2.map((course,ind)=>(<CourseCard key={ind} course={course}></CourseCard>))
}
</div>
            </div>

            
            <div className="flex flex-col gap-5">
                <h1 className="font-bold text-3xl">3D Animation</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
{
    courses3.map((course,ind)=>(<CourseCard key={ind} course={course}></CourseCard>))
}
</div>
            </div>

            
        </div>
    );
};

export default HomeCourses;
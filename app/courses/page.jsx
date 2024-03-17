import HomeCourses from "@/components/home/HomeCourses";
import Image from "next/image";

const Courses = () => {
    return (
        <div className="mx-2 lg:mx-auto lg:max-w-4xl xl:max-w-7xl py-10">

        <div className="flex flex-col gap-5">
            <h1 className="text-red-700 font-extrabold text-3xl">Courses</h1>
            <p className="text-base font-normal lg:w-3/4">We offer all the trendy courses that are in demand in the global market. In addition, you are getting lab facilities where high-end computers with the required configuration are ready to facilitate your learning. After class, you can practice the topic in our labs to grow your skills. The courses are designed to make you confident throughout the learning journey with Creative IT.</p>
        </div>

        <div className="grid grid-cols-3 lg:grid-cols-4 gap-10 py-10">

        <div className="flex justify-center items-center text-center">
  <div className="flex flex-col items-center">
    <div className="mb-4">
      <Image width={50} height={50} src="https://www.creativeitinstitute.com/images/department/gd.png" alt="" />
    </div>
    <div>
      <h3>Graphic &amp; Multimedia</h3>
    </div>
  </div>
</div>



      <div className="flex justify-center items-center text-center">
  <div className="flex flex-col items-center">
    <div className="mb-4">
      <Image width={50} height={50} src="https://www.creativeitinstitute.com/images/department/wd.png" alt="" />
    </div>
    <div>
    <h3>Web &amp; Software</h3>
    </div>
  </div>
</div>



      <div className="flex justify-center items-center text-center">
  <div className="flex flex-col items-center">
    <div className="mb-4">
      <Image width={50} height={50} src="https://www.creativeitinstitute.com/images/department/dm.png" alt="" />
    </div>
    <div>
    <h3>Digital Marketing</h3>
    </div>
  </div>
</div>



      <div className="flex justify-center items-center text-center">
  <div className="flex flex-col items-center">
    <div className="mb-4">
      <Image width={50} height={50} src="https://www.creativeitinstitute.com/images/department/cy.png" alt="" />
    </div>
    <div>
    <h3>Cyber Security</h3>
    </div>
  </div>
</div>



      <div className="flex justify-center items-center text-center">
  <div className="flex flex-col items-center">
    <div className="mb-4">
      <Image width={50} height={50} src="https://www.creativeitinstitute.com/images/department/ve.png" alt="" />
    </div>
    <div>
    <h3>Film &amp; Media</h3>
    </div>
  </div>
</div>



      <div className="flex justify-center items-center text-center">
  <div className="flex flex-col items-center">
    <div className="mb-4">
      <Image width={50} height={50} src="https://www.creativeitinstitute.com/images/department/lg.png" alt="" />
    </div>
    <div>
    <h3>English Language</h3>
    </div>
  </div>
</div>



      <div className="flex justify-center items-center text-center">
  <div className="flex flex-col items-center">
    <div className="mb-4">
      <Image width={50} height={50} src="https://www.creativeitinstitute.com/images/department/robot.png" alt="" />
    </div>
    <div>
    <h3>Robotics &amp; Automation</h3>
    </div>
  </div>
</div>



      <div className="flex justify-center items-center text-center">
  <div className="flex flex-col items-center">
    <div className="mb-4">
      <Image width={50} height={50} src="https://www.creativeitinstitute.com/images/department/aws.png" alt="" />
    </div>
    <div>
    <h3>Cloud Computing</h3>
    </div>
  </div>
</div>
        </div>

        <div className="text-center flex flex-col gap-5">
            <h1 className="text-3xl font-bold">Admission Is Going On</h1>
            <p className="w-3/4 mx-auto">We have designed our course list with the demanding skills in the local and global market. From the list, you can pick any online or offline course according to your preference.</p>
        </div>
        
        <div className="py-10"><HomeCourses></HomeCourses></div>
        
            
        </div>
    );
};

export default Courses;
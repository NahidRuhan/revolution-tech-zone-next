import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { FaRegCircle } from "react-icons/fa";
import { Label, Modal, TextInput } from 'flowbite-react';
import { useState } from 'react';


const CourseDetail = () => {

    const [openModal, setOpenModal] = useState(false);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    // const [course, setCourse] = useState('');

    function onCloseModal() {
        setOpenModal(false);
        setEmail('');
        setName('');
        setPhone('');
        // setCourse('');
      }

    return (
        <div className="mx-2 lg:mx-auto lg:max-w-4xl xl:max-w-7xl">


            <section className="py-10">

                <div className="flex flex-col lg:flex-row items-center gap-10">

                    <div className="flex flex-col gap-8 basis-1/2">
                        <p className="font-bold text-xl text-red-700 text-center lg:text-left">Turn Your Passion into an Artistic Profession</p>
                        <h1 className="font-bold text-4xl text-center lg:text-left">Professional Graphic Design</h1>
                        <div className="flex flex-col lg:flex-row gap-4 justify-center">
                            <div className="text-center h-20 w-36 flex flex-col justify-center border rounded-3xl mx-auto">
                                <p className="font-normal text-base">Duration</p>
                                <p className="font-bold text-2xl">6 Month</p>
                            </div>
                            <div className="text-center h-20 w-36 flex flex-col justify-center border rounded-3xl mx-auto">
                                <p className="font-normal text-base">Lectures</p>
                                <p className="font-bold text-2xl">48</p>
                            </div>
                            <div className="text-center h-20 w-36 flex flex-col justify-center border rounded-3xl mx-auto">
                                <p className="font-normal text-base">Projects</p>
                                <p className="font-bold text-2xl">30+</p>
                            </div>
                        </div>
                        <p>Considering the growing demand for visual content, marketers are promoting their products through graphical ideas nowadays. The increasing need for graphic designers has unlocked many opportunities for the people who prefer working independently. A study shows, all the companies prioritize their visual acceptance, even a small company spends up to 500 dollars to create a perfect logo. If you are passionate about making designs, this updated Graphic Design course is for you.</p>
                        <div className="flex gap-10">
                            <div><button className="btn btn-error">Admission</button></div>
                            <div><button className="btn btn-error">Join Free Seminar</button></div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="rating rating-xs">
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <div className="badge badge-outline h-[3rem] w-[7rem] text-nowrap">14,000 Review</div> 
                            <div className="badge badge-outline h-[3rem] w-[7rem] text-nowrap">18,000 Student</div> 
                        </div>

                    </div>

                    <div className="basis-1/2">
                        <img className="w-full rounded-3xl" src="https://www.creativeitinstitute.com/images/course/course_1665409737.jpg" alt="" />
                    </div>

                </div>

            </section>

            <section>

                <div className="flex flex-col lg:flex-row gap-10 py-10">

                    <div className="basis-3/5">

                        <div className="flex flex-col gap-5 py-10">
                            <p className="font-bold text-5xl">Course Overview</p>
                            <p className="font-normal text-base">Our updated curriculum, along with the project-based work, prepares you to be a Professional Graphic Designer. The course module covers a wide range of topics, through which you learn how to use digital tools to create unique designs. Using Adobe Photoshop or Adobe Illustrator, you will be able to design a variety of things including banners, t-shirts, products, etc during the course. The lab facilities that we provide make you competent to perform better in the global marketplace. So, if you are interested to explore the field of innovative designs, enroll in this course now. </p>
                        </div>

                        <div className="flex flex-col gap-5 py-10">
                            <h1 className="font-bold text-3xl">Course Curriculum</h1>
                            <div>
                                <ul className="grid grid-cols-2 gap-3">
                                    <li className="flex items-center gap-2"><span><MdCheckBoxOutlineBlank /></span>Professional Presentation</li>
                                    <li className="flex items-center gap-2"><span><MdCheckBoxOutlineBlank /></span>Invoice Template Design</li>
                                    <li className="flex items-center gap-2"><span><MdCheckBoxOutlineBlank /></span>Brochure Layout</li>
                                    <li className="flex items-center gap-2"><span><MdCheckBoxOutlineBlank /></span>Desk & Wall Calendar Design</li>
                                    <li className="flex items-center gap-2"><span><MdCheckBoxOutlineBlank /></span>Certificate Template Design</li>
                                    <li className="flex items-center gap-2"><span><MdCheckBoxOutlineBlank /></span>Resume & Cover Letter Design</li>
                                    <li className="flex items-center gap-2"><span><MdCheckBoxOutlineBlank /></span>Image Clipping</li>
                                    <li className="flex items-center gap-2"><span><MdCheckBoxOutlineBlank /></span>Banner / Poster Design</li>
                                    <li className="flex items-center gap-2"><span><MdCheckBoxOutlineBlank /></span>Web Banner Design</li>
                                    <li className="flex items-center gap-2"><span><MdCheckBoxOutlineBlank /></span>Raster To Vector</li>
                                    <li className="flex items-center gap-2"><span><MdCheckBoxOutlineBlank /></span>Letterhead Design</li>
                                    <li className="flex items-center gap-2"><span><MdCheckBoxOutlineBlank /></span>Logo Design</li>
                                    <li className="flex items-center gap-2"><span><MdCheckBoxOutlineBlank /></span>Product Packaging</li>
                                    <li className="flex items-center gap-2"><span><MdCheckBoxOutlineBlank /></span>T-Shirt Design</li>
                                    <li className="flex items-center gap-2"><span><MdCheckBoxOutlineBlank /></span>Landscape Design</li>
                                    <li className="flex items-center gap-2"><span><MdCheckBoxOutlineBlank /></span>Neck Joint</li>
                                    <li className="flex items-center gap-2"><span><MdCheckBoxOutlineBlank /></span>Magazine Design</li>
                                    <li className="flex items-center gap-2"><span><MdCheckBoxOutlineBlank /></span>Web UI Design</li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex flex-col gap-5 py-10">
                            <h1 className="font-bold text-3xl">Softwares You&apos;ll Learn</h1>
                            <div>
                                <ul className="grid grid-cols-2 gap-3">
                                    <li className="flex items-center gap-5"><span><img src="https://www.creativeitinstitute.com/images/option/option1662293000.png" alt="" /></span>Adobe InDesign</li>
                                    <li className="flex items-center gap-5"><span><img src="https://www.creativeitinstitute.com/images/option/option1662293041.png" alt="" /></span>Adobe Photoshop</li>
                                    <li className="flex items-center gap-5"><span><img src="https://www.creativeitinstitute.com/images/option/option1662293072.png" alt="" /></span>Adobe XD</li>
                                    <li className="flex items-center gap-5"><span><img src="https://www.creativeitinstitute.com/images/option/option1662293128.png" alt="" /></span>Adobe Illustrator</li>
                                    <li className="flex items-center gap-5"><span><img src="https://www.creativeitinstitute.com/images/option/option1662369221.png" alt="" /></span>Microsoft Office PowerPoint</li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex flex-col gap-5 py-10">
                            <h1 className="font-bold text-3xl">This course is Designed for</h1>
                            <div>
                                <ul className="grid grid-cols-2 gap-3">
                                    <li>
                                        <div className="flex flex-col justify-center text-center border rounded-3xl h-52">
                                            <img className="w-1/2 mx-auto" src="https://www.creativeitinstitute.com/images/option/option1662371418.png" alt="" />
                                            <p>Anyone interested to learn freelancing</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex flex-col justify-center text-center border rounded-3xl h-52">
                                            <img className="w-1/2 mx-auto" src="https://www.creativeitinstitute.com/images/option/option1662371439.png" alt="" />
                                            <p>Job seekers</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex flex-col justify-center text-center border rounded-3xl h-52">
                                            <img className="w-1/2 mx-auto" src="https://www.creativeitinstitute.com/images/option/option1662371456.png" alt="" />
                                            <p>Students</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex flex-col justify-center text-center border rounded-3xl h-52">
                                            <img className="w-1/2 mx-auto" src="https://www.creativeitinstitute.com/images/option/option1662371472.png" alt="" />
                                            <p>Homemakers</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex flex-col justify-center text-center border rounded-3xl h-52">
                                            <img className="w-1/2 mx-auto" src="https://www.creativeitinstitute.com/images/option/option1662371491.png" alt="" />
                                            <p>Anyone interested to learn Graphics Design</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex flex-col justify-center text-center border rounded-3xl h-52">
                                            <img className="w-1/2 mx-auto" src="https://www.creativeitinstitute.com/images/option/option1662371522.png" alt="" />
                                            <p>Immigrants</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex flex-col gap-5 py-10">
                            <p className="font-bold text-3xl">Career Opportunities</p>
                            <div>
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                                    <li>
                                        <div className="flex flex-col px-8 py-10 bg-green-100 rounded-3xl mx-3 gap-3">
                                            <img className="w-1/2 mx-auto" src="https://www.creativeitinstitute.com/images/option/option1662446690.png" alt="" />
                                            <p className="text-base">A graphic designer plays a vital role in promoting companies by creating appealing logos and posters. With the growing numbers of companies worldwide, the demand for professional graphic designers has surged in recent days. You will be able to get a remote job in or outside our country after completing the advanced graphic design course. Our career placement department will help you in this regard.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex flex-col px-8 py-10 bg-green-100 rounded-3xl mx-3 gap-3">
                                            <img className="w-1/2 mx-auto" src="https://www.creativeitinstitute.com/images/option/option1662446732.png" alt="" />
                                            <p className="text-base">A study shows, almost  57% of people employed in the art and design industries are freelancers. The number is increasing with time as more people are opting for an independent career with a good earning. The global marketplaces like Fiverr, Upwork, Legit offer loads of projects on graphic design. You can also start a freelancing career being a skilled designer.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex flex-col gap-5 py-10">
                            <h1 className="font-bold text-3xl">Open Job Positions</h1>
                            <div>
                                <ul className="grid grid-cols-2 gap-3 font-bold text-xl">
                                    <li className="flex items-center gap-2"><span><FaRegCircle /></span>Graphics Designer</li>
                                    <li className="flex items-center gap-2"><span><FaRegCircle /></span>Creative Executive</li>
                                    <li className="flex items-center gap-2"><span><FaRegCircle /></span>Creative Director</li>
                                    <li className="flex items-center gap-2"><span><FaRegCircle /></span>Logo Designer</li>
                                    <li className="flex items-center gap-2"><span><FaRegCircle /></span>Photoshop Artist</li>
                                    <li className="flex items-center gap-2"><span><FaRegCircle /></span>Brand Promoter</li>
                                    <li className="flex items-center gap-2"><span><FaRegCircle /></span>UI Designer And Related Occupations</li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex flex-col gap-5 py-10">
                            <h1 className="font-bold text-5xl py-5">Exclusive Solutions That Set Us Apart</h1>
                            <div>
                            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-10 font-bold text-xl">
                                    <li>
                                        <div className="flex flex-col px-8 py-10 bg-green-100 rounded-3xl mx-3">
                                            <img className="w-1/4" src="https://www.creativeitinstitute.com/images/option/option1662372090.png" alt="" />
                                            <p className="font-bold text-xl py-5">Online Live Batch</p>
                                            <p className="text-base">Do you live abroad or prefer a remote learning process? We have launched online batches with all the offline facilities so that you can keep up with the technical advancement of today’s world. Now you can enroll in any course from anywhere, at any time.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex flex-col px-8 py-10 bg-green-100 rounded-3xl mx-3">
                                            <img className="w-1/4" src="https://www.creativeitinstitute.com/images/option/option1662372132.png" alt="" />
                                            <p className="font-bold text-xl py-5">Review Class</p>
                                            <p className="text-base">Do you face difficulty when you review the previous concepts? To ensure the best learning outcome, we arrange review classes that help our students overcome any problem in their skill development process. You will be able to understand the topics that you find complex under the close supervision of our skilled mentors.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex flex-col px-8 py-10 bg-green-100 rounded-3xl mx-3">
                                            <img className="w-1/4" src="https://www.creativeitinstitute.com/images/option/option1662372155.png" alt="" />
                                            <p className="font-bold text-xl py-5">Lifetime Support</p>
                                            <p className="text-base">Creative IT and its students share a lifetime bond. We strengthen our bond with you by providing lifelong support that helps you overcome any problem in your career path even after completing your course. Our expert support team ensures 24 hours service to all of our students. The personalized feedback that you receive from us, helps you grow, every day.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex flex-col px-8 py-10 bg-green-100 rounded-3xl mx-3">
                                            <img className="w-1/4" src="https://www.creativeitinstitute.com/images/option/option1662372191.png" alt="" />
                                            <p className="font-bold text-xl py-5">Practice lab support</p>
                                            <p className="text-base">We offer our students practice lab support so that they can complete their courseworks feasibly at any time. The uninterrupted learning environment that we ensure, helps the student gather practical knowledge in an efficient manner.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex flex-col px-8 py-10 bg-green-100 rounded-3xl mx-3">
                                            <img className="w-1/4" src="https://www.creativeitinstitute.com/images/option/option1662372211.png" alt="" />
                                            <p className="font-bold text-xl py-5">Class Videos</p>
                                            <p className="text-base">No need to worry if you miss a topic in the class. We record most of our classes so that students who miss a session can still get the information they need. They can watch the videos again and again until they understand the topic thoroughly. Our motto is to provide you a flexible learning experience to gradually improve your competence.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex flex-col px-8 py-10 bg-green-100 rounded-3xl mx-3">
                                            <img className="w-1/4" src="https://www.creativeitinstitute.com/images/option/option1662372262.png" alt="" />
                                            <p className="font-bold text-xl py-5">Career Placement Support</p>
                                            <p className="text-base">Our career placement department is ready to help you find a lucrative job. We ensure your resume gets into the hands of the right hiring manager.  So far this department has helped more than 16000 students to find jobs in competitive global platforms. Promising a better future, we have successfully raised the job placement rate to 66% in 2023.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex flex-col px-8 py-10 bg-green-100 rounded-3xl mx-3">
                                            <img className="w-1/4" src="https://www.creativeitinstitute.com/images/option/option1665139532.png" alt="" />
                                            <p className="font-bold text-xl py-5">Virtual Internship</p>
                                            <p className="text-base">Without in-hand experience, no one can be competent in any skill. Practical work experience is a must have for better career opportunities. CIT offers its students virtual internship opportunities, where they can work under the supervision of industry experts. The online internships qualify to be as effective as offline work experience. Hence, you can also complete our internship at our office. </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>


                    </div>

                    <div className="basis-3/5 relative">
                        <div className="bg-rose-100 p-10 flex flex-col gap-5 sticky top-16 xl:top-20 rounded-3xl">
                            <p className="font-bold text-3xl">Admission Is Going On</p>
                            <p className="font-normal text-base">Enroll now to any of our Offline (On- Campus) or Online (Live Class) courses as per your suitable time.</p>
                            <div className="h-44 flex flex-col justify-center gap-3 pl-7 xl:w-96 rounded-3xl bg-red-600">
                                <p className="text-white font-bold text-xl">Course Fee Offline</p>
                                <p className="text-white font-bold text-2xl">BDT 50,000</p>
                                <div>
                                    <button onClick={() => setOpenModal(true)} className="bg-white text-red-700 p-2 w-48 rounded-xl">Enroll Now</button>
                                    <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <img className="mx-auto" src="https://www.creativeitinstitute.com/logo.png" alt="" />
            <h3 className="text-4xl font-bold text-gray-900 dark:text-white text-center">Give valid Information</h3>
            <p className="font-normal text-base text-center">After fill-up form our team contact you</p>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Your name" />
              </div>
              <TextInput
                id="name"
                placeholder="Jane Doe"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput
                id="email"
                placeholder="name@company.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="phone" value="Your Phone" />
              </div>
              <TextInput
                id="phone"
                placeholder="+880xxxxxxxxxx"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="course" value="Your Wanted Course" />
              </div>
              {/* <TextInput
                id="phone"
                placeholder="+880xxxxxxxxxx"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                required
              /> */}
                <select className="text-black input input-bordered xl:w-full" id="service" name="service">
                <option value="">Professional Graphic Design</option>
                <option value="">Motion Graphic</option>
                <option value="">UX/UI Design</option>
                <option value="">Digital Image Editing</option>
                <option value="">Adobe Photoshop</option>
                <option value="">Adobe Illustrator</option>
                <option value="">Web Development</option>
                <option value="">MERN Stack Development</option>
                <option value="">App Development With Kotlin</option>
                <option value="">Python Django</option>
                <option value="">Python Machine Learning</option>
                <option value="">Front-End Development with React</option>
                <option value="">Professional 3D Animation</option>
                <option value="">Interior and Exterior Design</option>
                <option value="">3D Floor Plan</option>
              </select>
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="onlineOffline" value="Take Your Course" />
              </div>
              {/* <TextInput
                id="phone"
                placeholder="+880xxxxxxxxxx"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                required
              /> */}
              <div className="flex items-center gap-5">
                              <input type="radio" id="option1" name="options" value="option1"/>
<label htmlFor="option1">Option 1</label>

<input type="radio" id="option2" name="options" value="option2"/>
<label htmlFor="option2">Option 2</label>
              </div>

              <div className="flex justify-center py-10">
                <input className="border p-2 rounded-lg bg-red-500 text-white px-10" type="submit" value="Submit" />
              </div>

            </div>
          </div>
        </Modal.Body>
      </Modal>
                                </div>
                            </div>
                            <div className="h-44 flex flex-col justify-center gap-3 pl-7 xl:w-96 rounded-3xl bg-red-600">
                                <p className="text-white font-bold text-xl">Course Fee Online</p>
                                <p className="text-white font-bold text-2xl">BDT 20,000</p>
                                <div><button onClick={() => setOpenModal(true)} className="bg-white text-red-700 p-2 w-48 rounded-xl">Enroll Now</button></div>
                            </div>                            
                        </div>
                    </div>   

                </div>




            </section>
            





        </div>
    );
};

export default CourseDetail;
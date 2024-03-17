"use client"

import { IoBookOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { Label, Modal, TextInput } from 'flowbite-react';
import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const NavigationBar = () => {

  const router = useRouter();

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

<div className="bg-base-300 sticky top-0 z-50">
<div className="drawer lg:mx-auto lg:max-w-4xl xl:max-w-7xl">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
    {/* Navbar */}
    <div className="w-full navbar h-1">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div onClick={()=>router.push('/')} className="flex-1 px-2 mx-2"><Image width={150} height={100} src="https://www.creativeitinstitute.com/logo.png" alt="" /></div>
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal lg:text-base xl:text-xl">
          {/* Navbar menu content here */}
          <li><Link href='/'>Home</Link></li>
           <li><a>About us</a></li>
           <li><a>Success story</a></li>
           <li><a>Freelancing</a></li>
           <li>
              <div>
                <button onClick={() => setOpenModal(true)}>Contact</button>
                <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <Image width={150} height={100} className="mx-auto" src="https://www.creativeitinstitute.com/logo.png" alt="" />
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
<label htmlFor="option1">Online</label>

<input type="radio" id="option2" name="options" value="option2"/>
<label htmlFor="option2">Offline</label>
              </div>

              <div className="flex justify-center py-10">
                <input className="border p-2 rounded-lg bg-red-500 text-white px-10" type="submit" value="Submit" />
              </div>

            </div>
          </div>
        </Modal.Body>
      </Modal>
                
              </div>
           </li>
           <li><button onClick={()=>router.push('/courses')} className="btn btn-error"><span className="text-xl"><IoBookOutline /></span>Browse Contents <span className="text-xl"><IoIosArrowDown /></span></button></li>
        </ul>
      </div>
    </div>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-base-200 items-center">
      {/* Sidebar content here */}
      <li><div className="px-2 mx-2"><Image width={150} height={100} src="https://www.creativeitinstitute.com/logo.png" alt="" /></div>
</li>
      <li><Link href='/'>Home</Link></li>
          <li><a>About us</a></li>
          <li><a>Success story</a></li>
          <li><a>Freelancing</a></li>
          <li><button onClick={() => setOpenModal(true)}>Contact</button></li>
          <li><div><button onClick={()=>router.push('/courses')} className="btn btn-error"><span className="text-xl"><IoBookOutline /></span>Browse Contents <span className="text-xl"><IoIosArrowDown /></span></button></div></li>

          
    </ul>
  </div>
</div>
</div>
    );
};

export default NavigationBar;
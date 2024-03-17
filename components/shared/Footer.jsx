import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-neutral text-neutral-content">
              
  <nav>
    <h6 className="footer-title">Contact</h6>
    <p className="flex items-center gap-4"><span><FaLocationDot /></span>Head Office:<br/>Momtaz Plaza (4th Floor)<br/>House # 07 , Road # 04<br/>Dhanmondi, Dhaka- 1205</p>
    <p className="flex items-center gap-4"><span><FaPhone></FaPhone></span>+8801747925398<br/>+8801919349919<br/>+8801745273647</p>
    <p className="flex items-center gap-4"><span><MdEmail /></span>revolution@techzone.com</p>

  </nav>
  <nav>
    <h6 className="footer-title">Quick Links</h6> 
    <a className="link link-hover">Free Seminar Schedule</a>
    <a className="link link-hover">Mentors</a>
    <a className="link link-hover">Success Story</a>
    <a className="link link-hover">Our Gallery</a>
    <a className="link link-hover">FAQ</a>
    <a className="link link-hover">Blog</a>
    <a className="link link-hover">Privacy Policy</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Popular Courses</h6> 
    <a className="link link-hover">Web Development</a>
    <a className="link link-hover">Professional Graphic Design</a>
    <a className="link link-hover">Digital Marketing</a>
    <a className="link link-hover">Mern Stack Development</a>
    <a className="link link-hover">Motion Graphics</a>
    <a className="link link-hover">Professional 3D Animation</a>
    <a className="link link-hover">Content Writing</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Others</h6> 
    <a className="link link-hover">About Us</a>
    <a className="link link-hover">Our Facility</a>
    <a className="link link-hover">Our Achievement</a>
    <a className="link link-hover">Career Placement</a>
    <a className="link link-hover">Freelancing</a>
    <a className="link link-hover">Students Feedback</a>
    <a className="link link-hover">Contact</a>
  </nav>
</footer>
        </div>
    );
};

export default Footer;
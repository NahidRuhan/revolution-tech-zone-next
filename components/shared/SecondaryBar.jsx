import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const SecondaryBar = () => {
    return (
      
        <div className="bg-[#FFA500]">
        <div className="hidden lg:flex items-center justify-between py-1 mx-2 lg:mx-auto lg:max-w-4xl xl:max-w-7xl">
          <div className="flex gap-20">
            <p className="flex items-center gap-2"><span><FaPhoneAlt /></span>01886349919</p>
            <p className="flex items-center gap-2"><span><MdEmail /></span>dilal328@gmail.com</p>
          </div>
        </div>
      </div>
  
    );
};

export default SecondaryBar;
import { GrUserAdmin } from "react-icons/gr";
import { useState } from "react";
import BecomeMemberModal from "../../../Modal/BecomeMemberModal";
import { FcSettings } from "react-icons/fc";
import MenuItem from "./MenuItem";
import { MdAnnouncement } from "react-icons/md";
const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform text-gray-600  hover:bg-gray-300   hover:text-gray-700 cursor-pointer"
      >
        <GrUserAdmin className="w-5 h-5" />
        <span className="mx-4 font-medium">Become A Member</span>
      </div>
      <BecomeMemberModal closeModal={closeModal} isOpen={isOpen} />
    </>
  );
};

export default UserMenu;

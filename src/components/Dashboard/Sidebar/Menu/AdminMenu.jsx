import { FaUserCog } from "react-icons/fa";
import MenuItem from "./MenuItem";
import { IoGitPullRequestSharp } from "react-icons/io5";
import { RiCoupon3Line } from "react-icons/ri";
import { MdAdminPanelSettings, MdAnnouncement } from "react-icons/md";
import { FaBullhorn } from "react-icons/fa";

const AdminMenu = () => {
  return (
    <>
      <MenuItem
        icon={FaUserCog}
        label="Manage Members"
        address="manage-members"
      />
      <MenuItem
        icon={FaBullhorn}
        label="Make Announcement"
        address="make-announcement"
      />
      <MenuItem
        icon={IoGitPullRequestSharp}
        label="Agreement Requests"
        address="agreement-requests"
      />
      <MenuItem
        icon={RiCoupon3Line}
        label="Manage Coupons"
        address="manage-coupons"
      />
      <MenuItem
        icon={MdAdminPanelSettings}
        label="Admin Profile"
        address="admin-profile"
      />
    </>
  );
};

export default AdminMenu;

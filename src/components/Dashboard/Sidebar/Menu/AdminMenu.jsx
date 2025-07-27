import { FaUserCog } from "react-icons/fa";
import { TfiAnnouncement } from "react-icons/tfi";
import MenuItem from "./MenuItem";
import { IoGitPullRequestSharp } from "react-icons/io5";
import { RiCoupon3Line } from "react-icons/ri";
import { MdAdminPanelSettings } from "react-icons/md";

const AdminMenu = () => {
  return (
    <>
      <MenuItem
        icon={FaUserCog}
        label="Manage Members"
        address="manage-members"
      />
      <MenuItem
        icon={TfiAnnouncement}
        label="Manage Announcement"
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

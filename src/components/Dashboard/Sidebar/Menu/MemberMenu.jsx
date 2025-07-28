import MenuItem from "./MenuItem";
import { MdOutlinePayments, MdAnnouncement } from "react-icons/md";
import { BiDollarCircle } from "react-icons/bi";
const MemberMenu = () => {
  return (
    <>
      <MenuItem
        icon={BiDollarCircle}
        label="Make payment"
        address="make-payment"
      />
      <MenuItem
        icon={MdOutlinePayments}
        label="Payment History"
        address="payment-history"
      />
      <MenuItem
        icon={MdAnnouncement}
        label="Announcements"
        address="/dashboard"
      />
    </>
  );
};

export default MemberMenu;

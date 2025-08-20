import MenuItem from "./MenuItem";
import { MdOutlinePayments, MdAnnouncement } from "react-icons/md";
import { BiDollarCircle } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
const MemberMenu = () => {
  return (
    <>
      <MenuItem
        icon={BiDollarCircle}
        label="Make Payment"
        address="make-payment"
      />
      <MenuItem
        icon={MdOutlinePayments}
        label="Payment History"
        address="payment-history"
      />
    </>
  );
};

export default MemberMenu;

import { BsFingerprint } from 'react-icons/bs'
import { GrUserAdmin } from 'react-icons/gr'
import MenuItem from './MenuItem'
import { useState } from 'react'
import BecomeMemberModal from '../../../Modal/BecomeMemberModal'
import { MdOutlinePayments,MdAnnouncement } from "react-icons/md";
import { BiDollarCircle } from "react-icons/bi";
const MemberMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className='flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform text-gray-600  hover:bg-gray-300   hover:text-gray-700 cursor-pointer'
      >
        <GrUserAdmin className='w-5 h-5' />

        <span className='mx-4 font-medium'>Become A Member</span>
      </div>

      <BecomeMemberModal closeModal={closeModal} isOpen={isOpen} />
      <MenuItem icon={BiDollarCircle } label='Make payment' address='make-payment' />
      <MenuItem icon={MdOutlinePayments} label='Payment History' address='payment-history' />
      <MenuItem icon={MdAnnouncement} label='Announcements' address='announcements' />
    </>
  )
}

export default MemberMenu

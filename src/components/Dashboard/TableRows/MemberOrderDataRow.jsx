import { useState } from 'react'
import DeleteModal from '../../Modal/DeleteModal'
const MemberOrderDataRow = () => {
  let [isOpen, setIsOpen] = useState(false)
  const closeModal = () => setIsOpen(false)

  return (
    <tr>
      {/* Apartment Image */}
      <td className='px-5 py-5 border-b border-gray-200 dark:border-base-300 bg-white dark:bg-base-200 text-sm'>
        <div className='flex items-center'>
          <div className='flex-shrink-0'>
            <div className='block relative'>
              <img
                alt='apartment'
                src='https://i.ibb.co/n3tfShv/apartment1.jpg'
                className='mx-auto object-cover rounded h-12 w-16'
              />
            </div>
          </div>
        </div>
      </td>

      {/* Floor Number */}
      <td className='px-5 py-5 border-b border-gray-200 dark:border-base-300 bg-white dark:bg-base-200 text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>2</p>
      </td>

      {/* Block Name */}
      <td className='px-5 py-5 border-b border-gray-200 dark:border-base-300 bg-white dark:bg-base-200 text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>B</p>
      </td>

      {/* Apartment Number */}
      <td className='px-5 py-5 border-b border-gray-200 dark:border-base-300 bg-white dark:bg-base-200 text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>205</p>
      </td>

      {/* Rent */}
      <td className='px-5 py-5 border-b border-gray-200 dark:border-base-300 bg-white dark:bg-base-200 text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>৳12,000</p>
      </td>

      {/* Agreement Button */}
      <td className='px-5 py-5 border-b border-gray-200 dark:border-base-300 bg-white dark:bg-base-200 text-sm'>
        <button
          onClick={() => setIsOpen(true)}
          className='relative disabled:cursor-not-allowed cursor-pointer inline-block px-4 py-1 font-semibold text-blue-900 leading-tight'
        >
          <span className='absolute inset-0 bg-blue-200 opacity-50 rounded-full'></span>
          <span className='relative'>Request Agreement</span>
        </button>

        {/* Modal */}
        <DeleteModal isOpen={isOpen} closeModal={closeModal} />
      </td>
    </tr>
  )
}

export default MemberOrderDataRow

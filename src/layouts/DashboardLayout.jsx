import { Outlet } from 'react-router';
import Sidebar from '../components/Dashboard/Sidebar/Sidebar';
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from '../components/Shared/ThemeToggle/ThemeToggle';

const DashboardLayout = () => {
  const { theme } = useTheme();
  return (
    <div className={`relative min-h-screen md:flex ${theme === 'dark' ? 'bg-base-100 text-white' : 'bg-white text-gray-900'}`}>
      {/* Left Side: Sidebar Component */}
      <Sidebar />
      {/* Right Side: Dashboard Dynamic Content */}
      <div className='flex-1 md:ml-64'>
        <div className='p-5'>
          {/* Outlet for dynamic contents */}
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout;
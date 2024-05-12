// export data
import { FaHome, FaFileAlt, FaCog, FaUser, FaQuestionCircle, FaSignOutAlt } from 'react-icons/fa';
import { IoIosApps } from "react-icons/io";
export const navbarLinks = [
  { name: 'Dashboard', href: '/', icon: <FaHome className='lg:hidden' /> },
  { name: 'Templates', href: '/templates', icon: <FaFileAlt className='lg:hidden' /> },
  { name: 'Applications', href: '/applications', icon: <IoIosApps className='lg:hidden' /> },
]
export const userLinks = [
  { name: 'Account & settings', href: '/Account', showOnMobile: true, icon: <FaUser className='lg:hidden' /> },
  { name: 'Help', href: '/help', showOnMobile: true, icon: <FaQuestionCircle className='lg:hidden' /> },
  { name: 'Log Out', href: '/logout', showOnMobile: true, isButton: true, icon: <FaSignOutAlt className='lg:hidden' /> }
]

import {
  HomeIcon,
  AcademicCapIcon,
  TemplateIcon,
  BookOpenIcon,
  CalendarIcon,
  IdentificationIcon,
  ClipboardListIcon,
  RssIcon,
  MailIcon,
  SpeakerphoneIcon,
  AdjustmentsIcon,
  UserRemoveIcon,
} from '@heroicons/react/outline';
import { signOut, useSession } from 'next-auth/react';

function Sidebar() {
  const { data: session, status } = useSession();

  console.log(session);

  return (
    <div className='text-gray-500 p-5 text-sm border-r border-gray-200 overflow-y-scroll scrollbar-hide h-screen'>
      <div className='space-y-4'>
        <button className='flex items-center space-x-2 hover:text-white'>
          <p>PRODUNI</p>
        </button>
        <hr className='border-t-[0.1px] border-gray-900' />
        <button className='flex items-center space-x-2 hover:text-white'>
          <MailIcon className='h-5 w-5' />
          <p>Messages</p>
        </button>
        <button className='flex items-center space-x-2 hover:text-white'>
          <SpeakerphoneIcon className='h-5 w-5' />
          <p>Notifications</p>
        </button>
        <button className='flex items-center space-x-2 hover:text-white'>
          <AdjustmentsIcon className='h-5 w-5' />
          <p>Settings</p>
        </button>
        <button
          className='flex items-center space-x-2 hover:text-white'
          onClick={() => signOut()}
        >
          <UserRemoveIcon className='h-5 w-5' />
          <p>Logout</p>
        </button>
        <hr className='border-t-[0.1px] border-gray-900' />

        <button className='flex items-center space-x-2 hover:text-white'>
          <HomeIcon className='h-5 w-5' />
          <p>Home</p>
        </button>
        <button className='flex items-center space-x-2 hover:text-white'>
          <TemplateIcon className='h-5 w-5' />
          <p>Dashboard</p>
        </button>
        <button className='flex items-center space-x-2 hover:text-white'>
          <AcademicCapIcon className='h-5 w-5' />
          <p>Academic</p>
        </button>
        <hr className='border-t-[0.1px] border-gray-900' />

        <button className='flex items-center space-x-2 hover:text-white'>
          <BookOpenIcon className='h-5 w-5' />
          <p>Subject</p>
        </button>
        <button className='flex items-center space-x-2 hover:text-white'>
          <IdentificationIcon className='h-5 w-5' />
          <p>Class Routine</p>
        </button>
        <button className='flex items-center space-x-2 hover:text-white'>
          <CalendarIcon className='h-5 w-5' />
          <p>Academic Calendar</p>
        </button>
        <button className='flex items-center space-x-2 hover:text-white'>
          <ClipboardListIcon className='h-5 w-5' />
          <p>Exam</p>
        </button>
        <button className='flex items-center space-x-2 hover:text-white'>
          <RssIcon className='h-5 w-5' />
          <p>Lunch</p>
        </button>
        <hr className='border-t-[0.1px] border-gray-900' />
      </div>
    </div>
  );
}

export default Sidebar;

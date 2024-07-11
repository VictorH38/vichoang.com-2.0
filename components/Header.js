// next image
import Image from "next/image";

// next link
import Link from "next/link";

// components
import Socials from '../components/Socials';

const Header = () => {
  return (
    <header className='absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-y-2 lg:gap-y-6 py-6 lg:py-8'>
          {/* logo */}
          <Link href={'/'} className='text-3xl lg:text-4xl'>
            {/* <Image
              src={'/logo.svg'}
              width={220}
              height={48}
              alt=''
              priority={true}
            /> */}
            <span className='bold'>victor</span> <span className='light'>hoang</span><span className='text-accent'>.</span>
          </Link>
          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;

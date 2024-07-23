// links
import Link from "next/link";

// icons
import {
  RiGithubLine,
  RiLinkedinBoxLine,
  RiArticleLine,
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className='flex items-center gap-x-10 text-xl lg:text-3xl'>
      <Link href={'/Victor_Hoang_Resume.pdf'} target="_blank" className='hover:text-accent transition-all duration-300'>
        <RiArticleLine />
      </Link>
      <Link href={'https://github.com/VictorH38'} target="_blank" className='hover:text-accent transition-all duration-300'>
        <RiGithubLine />
      </Link>
      <Link href={'https://www.linkedin.com/in/victorhoang03/'} target="_blank" className='hover:text-accent transition-all duration-300'>
        <RiLinkedinBoxLine />
      </Link>
    </div>
  );
};

export default Socials;

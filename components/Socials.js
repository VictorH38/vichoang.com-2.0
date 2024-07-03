// links
import Link from "next/link";

// icons
import {
  RiInstagramLine,
  RiGithubLine,
  RiLinkedinBoxLine,
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className='flex items-center gap-x-10 text-3xl'>
      <Link href={'https://instagram.com/victorrhoang?igshid=YmMyMTA2M2Y='} target="_blank" className='hover:text-accent transition-all duration-300'>
        <RiInstagramLine />
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

import { Link } from 'react-router-dom';
import '../index.css';

const Header = () => {
  return (
    <div className='flex w-full h-24 border-b-4 items-center '>
      <ul className='flex flex-row w-full p-10 justify-between'>
        <li className='text-3xl font-semibold'>PlayItForward</li>
        <li className=''>
          <Link to='/submit'>Submit</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;

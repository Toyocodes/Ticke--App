import { FaHome } from "react-icons/fa";
import { FaTicket } from "react-icons/fa6";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className=" bg-nav p-4">
      <div className="flex items-center space-x-4">
        <Link href="/" className="cursor-pointer hover:text-red-400">
          <FaHome className="text-white" />
        </Link>
        <Link href="/TicketPage/new" className="flex items-center gap-x-1 hover:text-red-400 cursor-pointer text-white">
          <FaTicket />
          <p>Create ticket</p>
        </Link>
      </div>
     
    </nav>
  );
};

export default Nav;

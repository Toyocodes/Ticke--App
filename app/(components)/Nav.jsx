import { FaHome } from "react-icons/fa";
import { FaTicket } from "react-icons/fa6";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className=" bg-nav p-4">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <FaHome className="text-white" />
        </Link>
        <Link href="/TicketPage/new">
          <FaTicket className="text-white" />
        </Link>
      </div>
     
    </nav>
  );
};

export default Nav;

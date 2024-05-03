"use client";
import { FaTimes } from "react-icons/fa";
import {useRouter} from "next/navigation"


const DeleteBlock = ({id}) => {
  
  const router = useRouter();

  const deleteTicket = async () => {

    const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      router.refresh();
    }
  };

  return (
    <div>
      <FaTimes
        onClick={deleteTicket}
        className="text-red-400 hover:cursor-pointer hover:text-red-200"
      />
    </div>
  );
};

export default DeleteBlock;

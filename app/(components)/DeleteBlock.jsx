"use client";
import { FaTimes } from "react-icons/fa";
import {useRouter} from "next/navigation"
import toast from "react-hot-toast";


const DeleteBlock = ({id}) => {
  
  const router = useRouter();

  const deleteTicket = async () => {
    const apiBaseUrl = process.env.REACT_APP_API_BASE_URL || "http://localhost:3000/api";
    const res = await fetch(`${apiBaseUrl}/Tickets/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      router.refresh();
    }
    toast.success("Ticket deleted successfully")
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

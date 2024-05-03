import Ticket from "@/app/models/ticket";
import { NextResponse } from "next/server";

export async function POST(req) {
    console.log("POST RAN")
      try {
        // const { id } = params;
    
        const body = await req.json();
        const ticketData = body.formData;
    
        await Ticket.create(ticketData)
    
        return NextResponse.json({ message: "Ticket created" }, { status: 201 });
      } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Error", error }, { status: 500 });
      }
    }

    export async function GET(){
      try {
        const tickets = await Ticket.find();
        return NextResponse.json({ tickets }, { status: 201 });
      } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Error", error }, { status: 500 });
      }
    }
    
// export async function GET(request, { params }) {
//   const { id } = params;

//   const foundTicket = await Ticket.findOne({ _id: id });
//   return NextResponse.json({ foundTicket }, { status: 200 });
// }

// export async function PUT(req, { params }) {
//   try {
//     const { id } = params;

//     const body = await req.json();
//     const ticketData = body.formData;

//     const updateTicketData = await Ticket.findByIdAndUpdate(id, {
//       ...ticketData,
//     });

//     return NextResponse.json({ message: "Ticket updated" }, { status: 200 });
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json({ message: "Error", error }, { status: 500 });
//   }
// }

// export async function DELETE(req, { params }) {
//   try {
//     const { id } = params;

//     await Ticket.findByIdAndDelete(id);
//     return NextResponse.json({ message: "Ticket Deleted" }, { status: 200 });
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json({ message: "Error", error }, { status: 500 });
//   }
// }
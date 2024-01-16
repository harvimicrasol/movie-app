import Contact from "@/models/contact";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  const data = await Contact.find();
  try{  
    return NextResponse.json(
    {
      result: data,
    },
    {
      status: 200,
    }
  );

  }
  catch(e){
    console.log("GET error:", e);
    return NextResponse.json(
      {
        message: "Server error, please try again!",
      },
      {
        status: 500,
      }
    );
  }

}

export async function POST(req, res) {
  try {
         const payload = await req.json();
    //     await dbConn();

    //     await Contact.create(payload);

    let contacts = new Contact(payload);

    const result = await contacts.save();

    return NextResponse.json(
      {
        result,
        message: "Thank you for message",
      },
      {
        status: 200,
      }
    );
  } catch (e) {
    console.log("POST error:", e);
    return NextResponse.json(
      {
        message: "Server error, please try again!",
      },
      {
        status: 500,
      }
    );
  }
}

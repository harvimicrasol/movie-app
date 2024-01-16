// import Contact from "@/models/contact";
// import { NextResponse } from "next/server";

// export async function GET(req, res) {
//   const data = await Contact.find();
//   try{
//     return NextResponse.json(
//     {
//       result: data,
//     },
//     {
//       status: 200,
//     }
//   );

//   }
//   catch(e){
//     console.log("GET error:", e);
//     return NextResponse.json(
//       {
//         message: "Server error, please try again!",
//       },
//       {
//         status: 500,
//       }
//     );
//   }

// }

export async function POST(req, res) {
  try {
         const payload = await req.json();
         await dbConn();

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

import Contact from "@/models/contact";
import dbConn from "@/utils/dbConn";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    // Retrieve data from the database or any other source
    const data = await Contact.find();

    return NextResponse.json(
      {
        result: data,
      },
      {
        status: 200,
      }
    );
  } catch (e) {
    console.error("GET error:", e);
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


// method post

// export async function POST(req, res) {
//   try {
//     const body = await req.json();
//     await dbConn();

//     const result = await Contact.create(body);

//     return NextResponse.json(
//       {
//         message: "Message sent successfully!",
//         result: result,
//       },
//       {
//         status: 200,
//       }
//     );
//   } catch (e) {
//     return NextResponse.json(
//       { message: "Server error, please try again!" },
//       { status: 500 }
//     );
//   }
// }

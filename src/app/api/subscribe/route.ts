// import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   try {
//     const { email } = await req.json();

//     if (!email) {
//       return NextResponse.json({ error: "Email is required" }, { status: 400 });
//     }

//     const API_KEY = process.env.MAILCHIMP_API_KEY;
//     const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
//     const API_SERVER = process.env.MAILCHIMP_API_SERVER; // 👈 using your defined variable

//     const url = `https://${API_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

//     const response = await fetch(url, {
//       method: "POST",
//       headers: {
//         Authorization: `apikey ${API_KEY}`,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         email_address: email,
//         status: "subscribed",
//       }),
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       console.error("Mailchimp error:", errorData);
//       return NextResponse.json(
//         { error: "Failed to subscribe to Mailchimp" },
//         { status: 500 }
//       );
//     }

//     return NextResponse.json({ message: "Subscribed successfully!" }, { status: 200 });
//   } catch (error) {
//     console.error("Server error:", error);
//     return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
//   }
// }









import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const API_KEY = process.env.MAILCHIMP_API_KEY!;
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID!;
    const DATACENTER = process.env.MAILCHIMP_API_SERVER!;

    const response = await fetch(
      `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${Buffer.from(`anystring:${API_KEY}`).toString("base64")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email_address: email,
          status: "subscribed",
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({ error: data.detail || "Failed to subscribe" }, { status: 400 });
    }

    return NextResponse.json({ message: "Successfully joined" });
  } catch (err) {
    console.error("Mailchimp error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

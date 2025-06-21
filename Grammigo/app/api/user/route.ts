import { auth, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  const { userId } = await auth();
  
  if (!userId) {
    return new NextResponse(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
    });
  }

  const user = await currentUser();
  
  return NextResponse.json({
    id: userId,
    name: user?.firstName + " " + user?.lastName,
    email: user?.emailAddresses[0]?.emailAddress,
    imageUrl: user?.imageUrl,
    publicMetadata: user?.publicMetadata,
  });
}

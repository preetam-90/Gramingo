import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const { userId } = await auth();
  const user = await currentUser();
  
  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img 
              src={user?.imageUrl || "/placeholder-user.jpg"} 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold">{user?.firstName} {user?.lastName}</h2>
            <p className="text-gray-500">{user?.emailAddresses[0]?.emailAddress}</p>
          </div>
        </div>
        
        <div className="border-t pt-6 mt-6">
          <h3 className="text-lg font-medium mb-4">Account Information</h3>
          <div className="grid gap-4">
            <div>
              <p className="text-sm text-gray-500">User ID</p>
              <p>{userId}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p>{user?.emailAddresses[0]?.emailAddress}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Created</p>
              <p>{user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : "N/A"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
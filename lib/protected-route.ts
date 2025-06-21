import { redirect } from "next/navigation"
import { currentUser } from "@/lib/auth"

export async function protectRoute(requiredRole?: string) {
  const user = await currentUser()
  if (!user) redirect("/auth/login")
  if (requiredRole && user.role !== requiredRole) redirect("/unauthorized")
  return user
}
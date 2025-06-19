// Mock database - In production, use MongoDB, PostgreSQL, etc.
export class Database {
  private static users: any[] = [
    {
      id: "1",
      name: "Preetam Kumar Singh",
      email: "preetamkumar8873@gmail.com",
      password: "$2a$12$hashed_@Galaxytaba9", // Mock hashed password
      role: "farmer",
      provider: "email",
      isVerified: true,
      createdAt: new Date(),
    },
    {
      id: "2",
      name: "Preetam Kumar Singh (Owner)",
      email: "preetamkumar8873@gmail.com",
      password: "$2a$12$hashed_@Galaxytaba9", // Same credentials, different role
      role: "owner",
      provider: "email",
      isVerified: true,
      createdAt: new Date(),
    },
    {
      id: "3",
      name: "Preetam Kumar Singh (Admin)",
      email: "preetamkumar8873@gmail.com",
      password: "$2a$12$hashed_@Galaxytaba9", // Same credentials, admin role
      role: "admin",
      provider: "email",
      isVerified: true,
      createdAt: new Date(),
    },
    {
      id: "4",
      name: "Preetam Kumar Singh (Demo)",
      email: "preetam@example.com",
      password: "$2a$12$hashed_demo123", // Mock hashed password
      role: "farmer",
      provider: "email",
      isVerified: true,
      createdAt: new Date(),
    },
    {
      id: "5",
      name: "Rajesh Kumar",
      email: "rajesh@example.com",
      password: "$2a$12$hashed_demo123",
      role: "owner",
      provider: "email",
      isVerified: true,
      createdAt: new Date(),
    },
  ]

  private static verificationTokens: Map<string, any> = new Map()
  private static resetTokens: Map<string, any> = new Map()

  static async createUser(userData: any) {
    const id = (this.users.length + 1).toString()
    const user = {
      id,
      ...userData,
      createdAt: new Date(),
      isVerified: false,
    }
    this.users.push(user)
    return user
  }

  static async findUserByEmail(email: string) {
    return this.users.find((user) => user.email === email) || null
  }

  static async findUsersByEmail(email: string) {
    return this.users.filter((user) => user.email === email)
  }

  static async findUserById(id: string) {
    return this.users.find((user) => user.id === id) || null
  }

  static async updateUser(id: string, updates: any) {
    const userIndex = this.users.findIndex((user) => user.id === id)
    if (userIndex !== -1) {
      this.users[userIndex] = { ...this.users[userIndex], ...updates }
      return this.users[userIndex]
    }
    return null
  }

  static async storeVerificationToken(token: string, userId: string, expiresAt: Date) {
    this.verificationTokens.set(token, { userId, expiresAt })
  }

  static async getVerificationToken(token: string) {
    return this.verificationTokens.get(token) || null
  }

  static async deleteVerificationToken(token: string) {
    this.verificationTokens.delete(token)
  }

  static async storeResetToken(token: string, userId: string, expiresAt: Date) {
    this.resetTokens.set(token, { userId, expiresAt })
  }

  static async getResetToken(token: string) {
    return this.resetTokens.get(token) || null
  }

  static async deleteResetToken(token: string) {
    this.resetTokens.delete(token)
  }
}

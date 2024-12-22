import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { method, body } = req;
  switch (method) {
    case "GET":
      const students = await prisma.students.findMany();
      res.status(200).json(students);
      break;
    case "POST":
      const newStudent = await prisma.students.create({ data: body });
      res.status(201).json(newStudent);
      break;
    // Add PUT/DELETE as needed
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

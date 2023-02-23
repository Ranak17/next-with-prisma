import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "GET") {
    const main = async () => {
      const profiles = await prisma.userlogin.findMany();
      return profiles;
    };
    try {
      const profiles = await main(); // Wait for the main() function to complete and return the data
      res.status(200).json(profiles); // Send the response with the retrieved data
    } catch (e) {
      console.log("error : ", e.message);
    } finally {
      await prisma.$disconnect();
    }
  }
  if (req.method === "POST") {
    // console.log("post called");
    try {
      const { username, password } = req.body;
      const profile = await prisma.userlogin.create({
        data: {
          username,
          password,
        },
      });
      res.status(200).json({ name: "post called ho gayi" });
    } catch (e) {
      console.log("error aa gaya : ", e.message);
    } finally {
      await prisma.$disconnect();
    }
  }

  if (req.method === "DELETE") {
    try {
      const id = req.query.id;
      await prisma.userlogin.delete({
        where: {
          id: parseInt(id),
        },
      });
      res.status(200).json({ name: "Delete query chl gyi" });
    } catch (e) {
      console.log("error aa gaya : ", e.message);
    } finally {
      await prisma.$disconnect();
    }
  }
}

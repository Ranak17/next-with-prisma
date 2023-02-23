import {PrismaClient} from "@prisma/client"
const prisma= new PrismaClient()

export default async function handler(req,res) {
    if(req.method==="GET"){
        const main = async () =>{
            const profiles = await prisma.userlogin.findMany()
            return profiles
        }
        try {
            const profiles = await main(); // Wait for the main() function to complete and return the data
            res.status(200).json(profiles); // Send the response with the retrieved data
          } catch (e) {
            console.log("error : ", e.message);
          } finally {
            await prisma.$disconnect();
          }
        }







    }

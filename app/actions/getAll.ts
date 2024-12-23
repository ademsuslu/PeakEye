"use server"
import prismadb from "@/lib/prismadb";
export const handleGetNewsletter = async () => {
    try {
        const emails = await prismadb.newsletter.findMany()

        return {
            emails, message: "Emails", status: 200
        }

    } catch (error) {
        throw new Error("Email oluşturulamadı")
    }
};

"use server"
import prismadb from "@/lib/prismadb";
export const handleCreateNewsletter = async (values: string) => {
    try {
        const alreadyEmail = await prismadb.newsletter.findUnique({
            where: { email: values },
        })
        if (!alreadyEmail) {
            const emails = await prismadb.newsletter.create({
                data: {
                    email: values
                },
            });
            return {
                emails, message: "Email oluşturuldu", status: 201
            }
        }
        else {
            return {
                message: "Bu e-posta zaten kayıtlı", status: 400
            }
        }
    } catch (error) {
        throw new Error("Email oluşturulamadı")
    }
};

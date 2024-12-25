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
type Blogs = {
    category: string;
    desc: string;
    img: string;
    userAvatar: string;
    userName: string;
    useeDate: string; // Tarihi string olarak alıyoruz (daha sonra `Date` nesnesine dönüştürülebilir)
};

export const handleCreateBlogs = async (data: Blogs) => {
    const { category, desc, img, userAvatar, userName, useeDate } = data
    try {

        const blog = await prismadb.blogs.create({
            data: {
                category: category,
                desc: desc,
                img: img,
                userAvatar: userAvatar,
                userName: userName,
                useeDate: useeDate,
            },
        });
        return {
            blog, message: "Blog oluşturuldu", status: 201
        }

    } catch (error) {
        throw new Error("Email oluşturulamadı")
    }
};


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
export const handleGetBlog = async () => {
    try {
        // blog ıcın degııstırılıcek
        const Blogs = await prismadb.blogs.findMany()

        return {
            Blogs, message: "Blogs", status: 200
        }

    } catch (error) {
        throw new Error("Not found")
    }
};

export const handleGetBlogById = async (id: number) => {

    // blog ıcın degııstırılıcek
    const Blogs = await prismadb.blogs.findUnique({
        where: {
            id: id
        },
    })
    if (!Blogs) {

        return {
            Blogs, message: "Blog Not found", status: 404
        }
    }
    return {
        Blogs, message: "Blogs", status: 200
    }

};


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
    const blog = await prismadb.blogs.findUnique({
        where: {
            id: Number(id),
        },
    });

    if (!blog) {
        return {
            blog: null,
            message: "Blog not found",
            status: 404
        }
    }

    return {
        blog,
        message: "Blog found",
        status: 200
    }
};
import { handleGetBlogById } from "@/app/actions/getAll"

export default async function BlogPage({params}:{params:{id:number}}) {
  const res = await handleGetBlogById(params.id)
  return (
    <div>
    {res.blog?.desc}
    </div>
  )
}

import { Skeleton } from "@/components/ui/skeleton"


const BlogAds = () => {
  return (
    <div className="w-full h-full flex justify-center items-center mb-20">
        <Skeleton  className="w-[750px] h-[100px] rounded-md bg-secondary">
          <div className="flex flex-col items-center  justify-center my-auto h-full">
            <p>Advertisement</p>
            <strong>You can place ads</strong>
            <span>750x100</span>
          </div>
        </Skeleton>

    </div>
  )
}

export default BlogAds
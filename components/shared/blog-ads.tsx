import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"
import React from "react"


interface Props {
  type?:"single"
}

const BlogAds:React.FC<Props> = ({type}) => {
  return (

    <div
    className={cn(
      type === "single"
        ? "w-full h-full flex justify-center items-center mb-8"
        : "w-full h-full flex justify-center items-center mb-20"
    )}
  >
  
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
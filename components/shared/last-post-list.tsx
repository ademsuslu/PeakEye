import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card"
import Image from "next/image"
import { Button } from "../ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Blogs } from "@prisma/client"
import Link from "next/link"

interface BlogsProps {
    data: Blogs[]
}

const LastPostList: React.FC<BlogsProps> = ({ data }) => {
    return (
        <div className="flex flex-col">
            <h1 className="text-[24px] font-bold mb-8">Latest Post</h1>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    data?.map((item, index) => {
                        return <Link  key={index} href="/single-post">
                            <Card className="flex  flex-col p-0 m-0 hover:border-[#4B6BFB] transition-all">
                                <CardHeader className="">
                                    <Image src={item.img} className="w-full h-full" width={360} height={240} alt="blog-png" loading="lazy" />
                                </CardHeader>
                                <CardContent className="flex flex-col justify-center items-start mt-4">
                                    <div className="mb-4">
                                        <Button className="text-[#4B6BFB] bg-[#4B6BFB] bg-opacity-10 hover:bg-[#4B6BFB] hover:bg-opacity-15">Technology</Button>
                                    </div>
                                    <h1 className=" text-[16px] md:text-[24px] font-bold   leading-tight">
                                        {item.desc}
                                    </h1>
                                    <div className="flex items-center mt-5">
                                        <Avatar className="w-9 h-9">
                                            <AvatarImage src={item.userAvatar} />
                                            <AvatarFallback>{item.userName}</AvatarFallback>
                                        </Avatar>
                                        <span className="ml-3 text-[12px] text-muted-foreground ">{item.userName}</span>
                                        <span className="ml-4 text-[12px] text-muted-foreground">{item.useeDate}</span>

                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    })}

            </div>
            <div className="w-full flex justify-center items-start mt-8">
                <Button variant={"outline"}>View All Post</Button>
            </div>
        </div>
    )
}

export default LastPostList
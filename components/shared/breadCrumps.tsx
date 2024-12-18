"use client"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import Link from "next/link"
const BreadCrumps = () => {


    return (
        <div className="w-full flex flex-col justify-center items-center mt-10">
            <h1 className="font-bold text-[30px]">
                Page Title
            </h1>
            <header className="flex mt-2 top-0 bg-background  shrink-0 items-center gap-2  px-4">

                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <Link href="/">Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <Link href="/">Link One</Link>
                        </BreadcrumbItem>
                     
                    </BreadcrumbList>
                </Breadcrumb>
            </header>
        </div>
    )
}

export default BreadCrumps
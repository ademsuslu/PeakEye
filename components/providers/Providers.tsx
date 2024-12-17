"use client"
import { FC, ReactNode} from "react"
import Navbar from "@/components/shared/navbar"
import Footer from "@/components/shared/Footer"


interface ProvidersProps {
    children: ReactNode
}
export const Providers: FC<ProvidersProps> = ({ children }) => {
    return (
        <div className="flex flex-col ">
        <div className="flex flex-col px-2 md:px-8 lg:px-32 w-full">
         
            <Navbar/>
            <main className="flex-1  flex flex-col h-full">
             {children}
            </main>
        </div>
            <Footer/>
        </div>
    )
}
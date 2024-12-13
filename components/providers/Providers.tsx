"use client"
import { FC, ReactNode} from "react"
import Navbar from "../shared/navbar"
import Footer from "../shared/footer"

interface ProvidersProps {
    children: ReactNode
}
export const Providers: FC<ProvidersProps> = ({ children }) => {
    return (
        <div className="flex flex-col  min-h-[calc(100vh-10.5rem-1px)]">
            
            <Navbar/>
            <main className="flex-1 flex flex-col h-full">
             {children}
            </main>
            <Footer/>
        </div>
    )
}
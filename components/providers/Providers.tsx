"use client"
import { FC, ReactNode} from "react"
import Navbar from "../shared/navbar"
import Footer from "../shared/footer"

interface ProvidersProps {
    children: ReactNode
}
export const Providers: FC<ProvidersProps> = ({ children }) => {
    return (
        <div className="flex  flex-col justify-between items-center">
            <Navbar/>
            <main>
             {children}
            </main>
            <Footer/>
        </div>
    )
}
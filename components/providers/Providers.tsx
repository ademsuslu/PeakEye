"use client"
import { FC, ReactNode} from "react"
import Navbar from "../shared/navbar"
import Footer from "../shared/footer"

interface ProvidersProps {
    children: ReactNode
}
export const Providers: FC<ProvidersProps> = ({ children }) => {
    return (
        <div className="">
            <Navbar/>
             {children}
            <Footer/>
        </div>
    )
}
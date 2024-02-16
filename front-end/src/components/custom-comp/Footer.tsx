import { Github, Instagram, Twitter } from "lucide-react"



const Footer = () => {
    return (
        <section className=' py-6  border-t-2 border-dashed border-white dark bg-background text-foreground'>
            <div className="w-full flex justify-center gap-5">
                <a className="hover:text-gray-400" href="google.com">

                    <Instagram />
                </a>
                <a className="hover:text-gray-400" href="google.com">
                    <Twitter />
                </a>
                <a className="hover:text-gray-400" href="google.com">

                    <Github />
                </a>


            </div>
        </section>
    )
}

export default Footer
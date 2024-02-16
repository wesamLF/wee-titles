
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Copy } from "lucide-react"

import { aiTitlesType } from "../generateTitlesAiSection/GenerateTitlesAi";
import { toast } from "@/components/ui/use-toast";
export const FromAiTitlesItem = ({ item }: {
    item: aiTitlesType}
) => {


    const handleCopy = () => {
        navigator.clipboard.writeText(item.title)
        toast({
            className: "bg-green-500 text-white",
            description: "Copied to Clipboard",
        })
    }

    return (
        <div className="flex justify-between items-center ">
            <Accordion type="single" collapsible className="w-full ">
                <AccordionItem value="item-1">
                    <AccordionTrigger className=" text-base md:text-lg text-start">{item.title}</AccordionTrigger>
                    <AccordionContent >
                        <span className=" text-sm md:text-base">{item.description}</span>
                        
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <button className=" mx-3 md:mx-5 " onClick={handleCopy}>
                    <Copy className=" h-4 w-4 shrink-0 transition-transform duration-200" />
            </button>
        </div>)
}

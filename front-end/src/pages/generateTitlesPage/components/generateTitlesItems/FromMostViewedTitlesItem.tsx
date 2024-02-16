
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Copy } from "lucide-react"
import { FilterYouTubeEmbedURL } from "../../../../utils/FilterYouTubeEmbedURL"
import { mostViewedTitlesType } from "../generateTitlesMostViewedSection/GenerateTitlesMostViewed";
import { YTurlRedirect } from "@/utils/YTurlRedirect";
import { toast } from "@/components/ui/use-toast";

export const FromMostViewedTitlesItem = ({ item }: {
    item: mostViewedTitlesType
}) => {


    const handleCopy = () => {
        navigator.clipboard.writeText(item.generatedTitle)
        toast({
            className: "bg-green-500 text-white",
            description: "Copied to Clipboard",
        })
        
    }

    return (
        <div className="flex justify-between items-center flex-col md:flex-row">
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-base md:text-lg text-start">{item.generatedTitle}</AccordionTrigger>
                    <AccordionContent >
                        <h3 className=" text-sm md:text-base  font-semibold mt-4">this title is generated based on this video:</h3>
                        <div className="flex flex-col md:flex-row p-2 gap-5 bg-stone-200 rounded-sm">
                            <iframe className="rounded sm:w-[250px] h-auto " 
                                loading="eager"
                                src={FilterYouTubeEmbedURL(item.videoLink)}>
                            </iframe>
                            
                            <div className="w-full text-sm md:text-base">
                                <h4
                                    className=" hover:text-gray-600 cursor-pointer"
                                    onClick={() => YTurlRedirect(item.videoLink)}>{item.title}</h4>
                                <span
                                    className="text-blue-500  hover:text-black cursor-pointer"
                                    onClick={() => YTurlRedirect(item.channleLink)}>{item.channleName}</span>
                                <div className="">
                                    views: <span className=" underline me-3">{item.views}</span>
                                </div>
                            </div>
                        </div>

                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <button className=" mx-4 hidden md:block" onClick={handleCopy}>
                
                    <Copy className=" h-4 w-4 shrink-0 transition-transform duration-200" />
            </button>
        </div>)
}

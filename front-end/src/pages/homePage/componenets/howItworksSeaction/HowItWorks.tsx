import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const HowItWorks = () => {
    return (
        <section className='dark bg-background text-foreground flex justify-center items-center flex-col py-10 px-3 md:px-16 my-24'>
            <h1 className=" text-2xl md:text-4xl font-bold mb-3">Is it magic?</h1>
            <div className="w-full flex justify-center items-center flex-col md:flex-row">
                <div className="w-full md:w-1/2  ">
                    <img src="./images/gifs/gif2.gif" className=" object-cover"></img>
                </div>
                <div className="w-full md:w-1/2 px-4"><Accordion type="single" collapsible className="w-full text-lg">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>How it works?</AccordionTrigger>
                        <AccordionContent>
                            The tool scrapes the Youtube's pages and filter it and send it to ChatGPT to analyze it.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Is it accurate?</AccordionTrigger>
                        <AccordionContent>
                            Depends on the Youtube trending videos, some are easy to generate similer titles based on it and some are not.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Who can use it?</AccordionTrigger>
                        <AccordionContent>
                            <p>- Content create who needs some insp for your new videos.</p>
                            <p>- This tool provides CSV files for download to help you collect data of youtube trending videos for each genre gaming, music,...</p>

                        </AccordionContent>
                    </AccordionItem>
                </Accordion></div>
            </div>

        </section >
    )
}

export default HowItWorks
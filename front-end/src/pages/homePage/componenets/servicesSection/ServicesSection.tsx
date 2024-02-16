import ServiceCard from "./ServiceCard"

export type serviceType = {
    url: string,
    title: string,
    description: string,
    advantages: string[]
}
export function ServicesSection() {
    const servies: serviceType[] = [{
        url: "/trending",
        title: "Trending Videos",
        description: "now you can see all trending videos in your country....",
        advantages: [
            "Easy to use", "Accuret", "CSV Files", "Fast!"
        ]
    },
    {
        url: "/generate",
        title: "Generate Titiles",
        description: "If you are content create and needs some ins, this is for YOU!",
        advantages: [
            "Easy to use", "Very efficient", "ChatGPT"
        ]
    }, {
        url: "/generate",
        title: "Ai Generated Title",
        description: "Just enter the topic and leave the rest for the ( AI ) to handle.",
        advantages: [
            "Easy to use", "Very efficient", "ChatGPT"
        ]
    }
    ]

    return (
        <section className="flex flex-col md:flex-row flex-wrap justify-center  gap-5 py-10 px-3 md:py-32 md:my-16">
            {servies.map((s, i) => (
                <ServiceCard key={i} url={s.url} title={s.title} description={s.description} advantages={[...s.advantages]} />

            ))}

        </section>
    )
}


export default ServicesSection

import { Flame } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { serviceType } from "./ServicesSection"
import { NavLink } from "react-router-dom"



type CardProps = React.ComponentProps<typeof Card> & serviceType


const ServiceCard = ({ className, ...props }: CardProps) => {

    return (
        <Card className={cn("w-full md:w-[380px] dark bg-background text-foreground shadow-2xl shadow-[#3f3d56]  p-4", className)} {...props}>
            <div className=" flex items-center space-x-4 rounded-md border border-red-600 p-4">
                <Flame className="text-red-600" />
                <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">
                        Free Tier
                    </p>
                    <p className="text-sm text-muted-foreground">
                        unlimited access to all features.
                    </p>
                </div>
            </div>
            <CardHeader>
                <CardTitle>{props.title}</CardTitle>
                <CardDescription>{props.description}</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">

                <div>
                    {props.advantages.map((a, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"    >
                            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-[#dc2626]" />
                            <div className="space-y-1d">
                                <p className="text-md leading-none">
                                    {a}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
            <CardFooter>
                <NavLink to={`..${props.url}`}>
                    <Button className="w-full text-sm md:text-base ">
                        {props.title}
                    </Button>
                </NavLink>
            </CardFooter>
        </Card>
    )
}

export default ServiceCard
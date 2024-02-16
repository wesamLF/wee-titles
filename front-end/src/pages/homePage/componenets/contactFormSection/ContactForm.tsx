import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import emailjs from '@emailjs/browser';
import { useState } from "react"
import { Loader2 } from 'lucide-react'
import { toast } from "@/components/ui/use-toast"

const formSchema = z.object({
    email: z
        .string({
            required_error: "Please select an email to display.",
        })
        .email(),
    subject: z.string().min(5, {
        message: "pleas enter a subject.",
    }),
    message: z.string().min(5, {
        message: "pleas enter a message.",
    }),
})

const ContactForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            subject: "",
            message: ""
        },
    })
    const [isLoading, setIsLoading] = useState(false)
    async function sendEmail(values: z.infer<typeof formSchema>) {
        setIsLoading(true)
        emailjs.send(import.meta.env.VITE_SERIVES_KEY, import.meta.env.VITE_TEMPLATE_KEY, {
            subject: values.subject,
            email: values.email,
            message: values.message
        }, import.meta.env.VITE_EMAIL_KEY)
            .then(() => {
                setIsLoading(false)
                toast({
                    className: "bg-green-500 border-0",
                    description: <p className="text-base font-normal text-white">"Your message has been sent."</p>,
                })
            }, (error) => {
                setIsLoading(false)
                toast({
                    variant: "destructive",
                    description: error.text,
                })
            })
    }


    return (
        <section id="contact" className=" w-full flex justify-center items-center  my-20 ">
            <div className="w-full md:w-1/2 dark bg-background text-foreground border border-black  shadow-2xl shadow-gray-900 
            py-16 px-5 md:px-16">
                <div className="mb-8">
                    <h1 className="text-2xl md:text-4xl font-bold text-center">Contact Form</h1>
                    <p className="text-base md:text-lg text-muted-foreground">Help us to improve our system. We are open to any suggestions and questions. Feel free to contact us.</p>
                </div>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(sendEmail)} className="space-y-3" >
                        <FormField
                            control={form.control}
                            name="email"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Email" {...field} />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="subject"
                            render={({ field}) => (
                                <FormItem>
                                    <FormLabel>Subject</FormLabel>
                                    <FormControl>
                                        <Input placeholder="subject" {...field} />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field}) => (
                                <FormItem>
                                    <FormLabel>message</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="message"
                                            className="resize-none"
                                            {...field}
                                        />               

                                                             </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {isLoading ? <Button disabled>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Please wait
                        </Button> : <Button type="submit" disabled={isLoading}>Send</Button>}
                    </form>
                </Form>
            </div>
        </section>
    )
}

export default ContactForm
import {

    FormControl,

    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { UseFormReturn } from "react-hook-form";
import { langAndGenreType } from "@/utils/formSchemas.zod";


function LangSelector({ form }: {
    form: UseFormReturn<langAndGenreType>
}) {



    //  LangSelector<T> = ({ form }: {
    //     form: UseFormReturn<T>
    // }) => {


    return (
        <FormField

            control={form.control}
            name="lang"
            render={({ field }) => (
                <FormItem className="w-full">
                    <FormMessage />

                    <Select onValueChange={field.onChange} defaultValue={field.value} >
                        <FormControl>
                            <SelectTrigger className="text-base">
                                <SelectValue placeholder="Select the language" />
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent className="text-base">
                            <SelectItem value="arabic" >arabic</SelectItem>
                            <SelectItem value="english">english</SelectItem>

                        </SelectContent>
                    </Select>
                </FormItem>
            )}
        />




    )
}

export default LangSelector
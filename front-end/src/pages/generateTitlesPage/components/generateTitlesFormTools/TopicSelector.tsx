import {

  FormControl,

  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { generateTitlesFormType } from "@/utils/formSchemas.zod";
import { UseFormReturn } from "react-hook-form";

const TopicSelector = ({ form, selectedGenre }: {
  form: UseFormReturn<generateTitlesFormType>,
  selectedGenre: "gaming" | "music" | undefined

}) => {

  return (
    <FormField

      control={form.control}
      name="topic"
      render={({ field }) => (

        <FormItem className="w-full">
          <FormMessage />

          <Select onValueChange={field.onChange} defaultValue={field.value}
            disabled={selectedGenre == undefined}

          >
            <FormControl>
              <SelectTrigger className="text-base">
                <SelectValue placeholder="Select a topic" />
              </SelectTrigger>
            </FormControl>
            <SelectContent className="text-base">
              {selectedGenre == "gaming" ? <>
                <SelectItem value="csgo">csgo</SelectItem>
                <SelectItem value="fortnite">fortnite</SelectItem>
                <SelectItem value="valorant">valorant</SelectItem>
              </> : <>
              <SelectItem value="rap">rap</SelectItem>
              <SelectItem value="rockandroll">Rock and roll</SelectItem>
             
              </>}

            </SelectContent>
          </Select>
        </FormItem >
      )}
    />




  )
}

export default TopicSelector
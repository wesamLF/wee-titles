
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { Form } from "@/components/ui/form"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import TopicSelector from "@/pages/generateTitlesPage/components/generateTitlesFormTools/TopicSelector"
import GenerateTitlesGenreSelector from "./GenerateTitlesGenreSelector"


const generateTitlesFormSchema = z.object({
  topic: z.enum(["valorant", "csgo", "fortnite", "rap", "rockandroll"], {
    required_error: "You need to select a topic.",
  }),
})

const GenerateTitlesFormTools = ({ fetchData, loading }:
  { fetchData: (url: string, to: string, topic: string) => void, loading: boolean }) => {

  const [clickedBtn, setClickedBtn] = useState<"mostviewed" | "ai">()
  const [selectedGenre, setSelectedGenre] = useState<"gaming" | "music">()

  const navigate = useNavigate();

  const form = useForm<z.infer<typeof generateTitlesFormSchema>>({
    resolver: zodResolver(generateTitlesFormSchema),
    defaultValues: {

    },
  })


  function onSubmit(data: z.infer<typeof generateTitlesFormSchema>) {

    if (clickedBtn === "ai") {
      fetchData(`${import.meta.env.VITE_BE_URL}/generate/titles/ai/${data.topic}`, "ai", data.topic)
      navigate(`./${clickedBtn}`)

    } else if (clickedBtn === "mostviewed") {
      fetchData(`${import.meta.env.VITE_BE_URL}/generate/titles/mostviewed/${data.topic}`, "mostviewed", data.topic)

      navigate(`./${clickedBtn}`)
    }

  }



  return (
    <div className='border border-solid border-[gray] shadow-md shadow-gray-500  bg-white  mb-3'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          <div className="flex flex-col md:flex-row items-center md:items-end justify-center md:justify-between w-full p-6 gap-5">
            <div className="  flex justify-center items-center w-full md:w-1/4  ">
              <GenerateTitlesGenreSelector setSelectedGenre={setSelectedGenre} />
            </div>
            <div className="  flex justify-center items-center w-full md:w-1/4  ">
              <TopicSelector form={form} selectedGenre={selectedGenre} />
            </div>


            <div className=" w-full md:w-1/2 px-8 flex flex-row gap-4">
              <div className=" flex justify-center w-full ">
                <Button className="w-full" name="mostviewed" type="submit"
                  disabled={loading}
                  onClick={() => { setClickedBtn("mostviewed") }}>
                  {loading && clickedBtn == "mostviewed" ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : ""} Mostviewed</Button>
              </div>
              <div className=" flex justify-center w-full ">
                <Button className="w-full" name="AI" type="submit"
                  onClick={() => { setClickedBtn("ai") }}
                  disabled={loading}>
                  {loading && clickedBtn == "ai" ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : ""} AI</Button>
              </div>
            </div>
          </div>

        </form>
      </Form>
    </div >
  )
}

export default GenerateTitlesFormTools



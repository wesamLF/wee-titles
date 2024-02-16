
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

import GenreSelector from "./GenreSelector"
import LangSelector from "./LangSelector"
import { Form } from "@/components/ui/form"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const FormSchema = z.object({
  lang: z.enum(["english", "arabic"], {
    required_error: "You need to select a language.",
  }),
  genre: z.enum(["gaming" , "movies" , "now" , "music"], {
    required_error: "You need to select a genre.",
  }),
})

const TrendingFormTools = ({ fetchData, loading }:
  { fetchData: (url: string , to:"trending" | "genres",genres:string) => void, loading: boolean }) => {
  const [clickedBtn, setClickedBtn] = useState<"genres" | "trending">()
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {

    },
  })


  function onSubmit(data: z.infer<typeof FormSchema>) {
    if (clickedBtn === "genres") {
      fetchData(`${import.meta.env.VITE_BE_URL}/trending/${data.genre}/genres`, "genres", data.genre)
      navigate(`./${clickedBtn}`)

    } else if (clickedBtn === "trending") {
      fetchData(`${import.meta.env.VITE_BE_URL}/trending/${data.genre}`,"trending", data.genre)
      navigate(`./${clickedBtn}`)
    }

  }



  return (
    <div className='border border-solid border-[gray]  shadow-md shadow-gray-500 bg-white mb-3'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="" id="trending-form">
          <div className="flex flex-col md:flex-row items-center md:items-end justify-center md:justify-between w-full p-6 gap-5">
            <div className="  flex justify-center items-center w-full md:w-1/4 ">
              <LangSelector form={form as any} />
            </div>
            <div className=" flex justify-center items-center w-full md:w-1/4  ">
              <GenreSelector form={form} />
            </div>

            <div className=" w-full md:w-1/2 px-8 flex justify-center flex-row gap-4">
              <div className="bg-greden-200 flex justify-center w-full ">
                <Button className="w-full" name="genres" type="submit"
                  disabled={loading}
                  onClick={() => { setClickedBtn("genres") }}>
                  {loading && clickedBtn == "genres" ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : ""} Genres</Button>
              </div>
              <div className="bg-greden-200 flex justify-center w-full ">
                <Button className="w-full" name="trending" type="submit"
                  onClick={() => { setClickedBtn("trending") }}
                  disabled={loading}>
                  {loading && clickedBtn == "trending" ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : ""} Trending</Button>
            </div>
          </div>
        </div>

      </form>
    </Form>
    </div >
  )
}

export default TrendingFormTools



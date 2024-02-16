import { useOutletContext } from "react-router-dom"
import { FromAiTitlesItem } from "../generateTitlesItems/FromAiTitlesItem"
import LoadingSpinner from "@/utils/LoadingSpinner"
import ErrorMessage from "@/utils/ErrorMessage"


export type aiTitlesType = {
  title:string,
  description:string
}
const GenerateTitlesAi = () => {
  const { fromAi, loading, error }: { fromAi: aiTitlesType[], loading: boolean, error:boolean } = useOutletContext()
  if (error) return <ErrorMessage  />
  if (loading) return <div className=" my-28"><LoadingSpinner /></div>
  return (
    <section className="p-4">
      {fromAi.map((item, i) => (
        <FromAiTitlesItem item={item} key={i}/>
      ))}
    </section>
  )
}

export default GenerateTitlesAi
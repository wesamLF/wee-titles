import { useOutletContext } from "react-router-dom"
import { FromMostViewedTitlesItem } from "../generateTitlesItems/FromMostViewedTitlesItem"
import LoadingSpinner from "@/utils/LoadingSpinner";
import ErrorMessage from "@/utils/ErrorMessage";


export type mostViewedTitlesType = {
  title: string;
  generatedTitle: string;
  videoLink: string;
  views: string;
  channleName: string;
  channleLink:string

}
const GenerateTitlesTrending = () => {
  const { fromMostViewed, loading, error }: { fromMostViewed: mostViewedTitlesType[], loading: boolean, error: boolean } = useOutletContext()
  if (error) return  <ErrorMessage  />
  if (loading) return <div className=" my-28"><LoadingSpinner /></div>
  return (
    <section className="p-5">
      {fromMostViewed.map((item, i) => (
        <FromMostViewedTitlesItem item={item} key={i} />
      ))}
    </section>
  )
}

export default GenerateTitlesTrending
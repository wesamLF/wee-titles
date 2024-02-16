
import { Outlet } from "react-router-dom"
import TrendingFormTools from "./components/trendingFormTools/TrendingFormTools"
import useFetchTrendingData from "./hooks/useFetchTrendingData"
import LeftSlider from "@/components/custom-comp/LeftSlider"
import DownloadBtn from "@/components/custom-comp/DownloadBtn"



const TrendingContainer = () => {

  const { fetchData, data, loading, error } = useFetchTrendingData()
  const newData = {
    trendingGenresData: data.trendingGenres.data,
    trendingTableData: data.trendingTable.data
  }
  const { trendingGenresData, trendingTableData } = newData

  return (
    <>
      <LeftSlider />
      <section className='p-0 md:px-24 md:py-16  w-full'>
        <TrendingFormTools fetchData={fetchData} loading={loading} />
        {(!loading && !error && trendingTableData?.length != 0) && <DownloadBtn data={trendingTableData} />}
        <div className=" min-h-[450px] border border-solid border-[gray]  shadow-md shadow-gray-500 bg-white">
          <Outlet context={{ trendingGenresData, trendingTableData, loading, error }} />
        </div>
      </section>
    </>
  )
}

export default TrendingContainer
import { Button } from '../ui/button'
import { DownloadCloud } from 'lucide-react'
import { useToast } from "@/components/ui/use-toast"
import axios from 'axios';

type trendingDataType = {
    title: string;
    channleName: string;
    views: string;
    videoLink: string;
    channleLink: string;
}[]
const DownloadBtn = ({ data }: { data: trendingDataType }) => {
    const { toast } = useToast()
    const downloadFile = async () => {
     try {
            const res = await axios.post(`${import.meta.env.VITE_BE_URL}/download/csv`, {
                data
            }, {
                responseType: "blob",
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const url = URL.createObjectURL(res.data)
            const a = document.createElement('a')
            a.href = url
            a.download = "table.csv"
            a.style.display = "none"
            document.body.appendChild(a)
            a.click()
            a.remove()
            URL.revokeObjectURL(url)
            toast({
                className: "bg-green-500 text-white",
                description: "Downloaded successfully",
            })
        } catch (error) {
            toast({
                variant: "destructive",
                description: "please try again!" + error,
            })
        }


    }
    return (
        <div className=" flex justify-end py-1">

            <Button variant={"link"} className=' text-green-500 ' onClick={() => downloadFile()}>
                Download
                <DownloadCloud className="ps-1 h-7 w-7" />
            </Button></div>
    )
}

export default DownloadBtn
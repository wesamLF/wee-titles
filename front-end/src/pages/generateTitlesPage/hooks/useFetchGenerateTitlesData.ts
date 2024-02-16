import { useState } from "react"
import axios from "axios"


export default function useFetchGenerateTitlesData() {

    const [data, setData] = useState({

        fromMostViewed: {
            topic: "",
            data: []
        },
        fromAi: {
            topic: "",
            data: []
        }
    })
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const fetchData = (url: string, to: string, topic: string) => {
        console.log("urrrrl", url)
        setError(false)
        setLoading(true)
        if (to == "ai" && data.fromAi.data.length == 0 || to == "ai" && topic != data.fromAi.topic) {
            axios.get(url).then(res => {
                setLoading(false);
                setData({
                    fromAi: {
                        topic: topic,
                        data: res.data as any
                    },
                    fromMostViewed: {...data.fromMostViewed}
                })
            }).catch(() => {
                setError(true)
                setLoading(false)
            })
        } else if (to == "mostviewed" && data.fromMostViewed.data.length == 0 || to == "mostviewed" && topic != data.fromMostViewed.topic) {

            axios.get(url).then(res => {

                setLoading(false);
                setData({
                    fromMostViewed: {
                        topic: topic,
                        data: res.data as any
                    },
                    fromAi: {...data.fromAi}
                })
            }).catch(() => {
                setError(true)
                setLoading(false)
            })
        }else {

            setLoading(false)
        }
    };

    return { fetchData, data, loading, error }

}

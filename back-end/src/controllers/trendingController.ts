
import { Request, Response, NextFunction } from "express"

import { getBestGenres, getTrendingVideosData } from "../services/trendingServices"
import { urlsFilter } from "../util/urlsFilter"


type generateGenreType = {
    genre: string
    description: string
}


export async function trendingVideosController(req: Request, res: Response, next: NextFunction) {
    try {
        const url = urlsFilter(req.params?.genre) // by defualt genre == "trending now"
        const data = await getTrendingVideosData(url)
        const fullData = {
            trending: data,
        }
        res.status(200)
        res.json(fullData)
    } catch (err) {
        next(err)
    }

}
export async function trendingGenresController(req: Request, res: Response, next: NextFunction) {
    try {
        const url = urlsFilter(req.params?.genre)
        const temp = await getTrendingVideosData(url)
        let titles: (string | null)[]
        if (temp) {
            titles = temp.map((title) => title!.title)
        } else { titles = [""] }

        const generatedGenres: generateGenreType[] = await getBestGenres(titles as string[])
        const fullData = {
            trending: temp,
            genres: generatedGenres
        }
        res.json(fullData)
    } catch (err) {
       next(err)
    }

}
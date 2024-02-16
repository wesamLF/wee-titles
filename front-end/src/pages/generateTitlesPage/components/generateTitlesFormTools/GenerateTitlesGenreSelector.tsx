
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";


const GenerateTitlesGenreSelector = (
    { setSelectedGenre }: {
        // form: UseFormReturn<generateTitlesFormType>,
        setSelectedGenre: React.Dispatch<React.SetStateAction<"gaming" | "music" | undefined>>

    }
) => {


    return (
        <>
            <Select onValueChange={(value)=>setSelectedGenre(value as "gaming" | "music" | undefined)}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a genre" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>

                        <SelectItem value="gaming" onClick={()=>setSelectedGenre("gaming")}>gaming</SelectItem>
                        <SelectItem value="music" onClick={()=>setSelectedGenre("music")}>music</SelectItem>
                        
                    </SelectGroup>
                </SelectContent>
            </Select>



        </>




    )
}

export default GenerateTitlesGenreSelector
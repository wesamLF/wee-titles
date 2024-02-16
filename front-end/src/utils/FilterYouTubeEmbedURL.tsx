


export const FilterYouTubeEmbedURL =(url:string)=>{
    const embedId = url.slice(8, 20).replace("=",""); //for yt videos not "shorts" we still have "=" at the start of embed code
    
    return `https://www.youtube.com/embed/${embedId}`
}
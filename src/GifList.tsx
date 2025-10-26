import React from 'react'
interface GifListProps {
    gifs: {
        id: string;
        title: string;
        images: {
            fixed_height: {
                url: string;
            };
        };
    }[];
}
const GifList: React.FC<GifListProps>=({gifs})=> {

  return (
    <div>{
        gifs.map((gif)=>(
            <img key={gif.id} src={gif.images.fixed_height.url} alt={gif.title} />
        ))      
        }</div>
  )
}

export default GifList
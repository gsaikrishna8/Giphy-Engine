import React from 'react'
import GifList from './GifList';
const apiKey = import.meta.env.VITE_GIPHY_API_KEY;
const Search: React.FC=()=> {
    const [query, setQuery] = React.useState<string>('')
    const [gifs,  setGifs]= React.useState<[]>([])  
    const fetchGifs = async () => {
        
        try{
 const response = await fetch(
            `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=25&offset=0&rating=g&lang=en`
        )
        const data = await response.json()
        setGifs(data.data)
        }catch(error){
            console.error('Error fetching gifs:', error)
        }
       
    }
    const handleKeyDown=(e: React.KeyboardEvent<HTMLInputElement>)=>{
        if(e.key==='Enter'){
            fetchGifs()
        }
    }
  return (
    <div>
        <input
        type='text'
        value={query}
        onChange={(e)=> setQuery(e.target.value)}
        style={{width: '300px', height: '30px', fontSize: '16px'}}
        onKeyDown={handleKeyDown}
        />
        <button onClick={fetchGifs} style={{marginLeft:"10px"}}>Search</button>
        <div style={{marginTop: '20px'}}>
<GifList gifs={gifs} />
        </div>
        
    </div>
  )
}

export default Search
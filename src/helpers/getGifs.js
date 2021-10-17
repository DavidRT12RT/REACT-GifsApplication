  export const getGifs = async(category)=>{
        //Peticion http para traer las imagenes de esa categoria
        const url =`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=OYLOjF7oBYDDH5fhVn3u8WbWakkbaXWj`;
        const resp=await fetch(url);
        const {data} = await resp.json();
        const gifs = data.map(img=>{
            return {
                id:img.id,
                title:img.title,
                url:img.images?.downsized_medium.url
            }
        });

        return gifs;
    }
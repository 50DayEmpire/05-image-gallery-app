import { useEffect, useState } from 'react'
import Card from './Card'

const Cards = () => {

    const [images, setImages] = useState([]);

    const peticion = async () => {
        const res = await fetch('https://api.unsplash.com/photos/?client_id=UXonXEMq7mNYHvnAxxuRZDOGhZY8VUO-iMymoL4q2kY');
        const data = await res.json();
        setImages(data);
    };

    useEffect(() => {
        peticion();
    }, [])
    

  return (
    <>
        {
            images.map((img)=>{
                return <Card key={img.id} img={img.urls?.regular} />
            })
        }
    </>
  )
}

export default Cards
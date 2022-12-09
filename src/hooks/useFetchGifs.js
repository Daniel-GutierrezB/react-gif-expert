import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {
    
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );
    
    const getImages = async () => {
        const newImages = await getGifs( category );
        setImages(newImages);
        setIsLoading(false);
    }
    
    // El useEffect se utiliza para disparar un efecto secundario después de que algo suceda.
    // Si dejamos las dependencias vacías significa que este hook solo se va a disparar la primera vez que se crea y se construye nuestro componente.
    useEffect( () => {
        getImages();
    // dependencias
    }, []);
    

    return {
        images,
        isLoading
    }
}

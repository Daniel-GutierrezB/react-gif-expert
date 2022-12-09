import { useState } from 'react';
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

  // Cuando se quiera almacenar información y esa info tiene que cambiar el html necestiamos utilizar 'hooks'.
  const [categories, setCategories] = useState([ 'One Punch' ]);

  const onAddCategory = ( newCategory ) => {

      if ( categories.includes( newCategory )) return;

      setCategories( [  newCategory, ...categories ] );
      // setCategories( cat => [ ...cat, 'Valorant' ]);
  }

  return (
    <>
    
        <h1>GiftExpertApp</h1>

        <AddCategory  
            onNewCategory={ (value) =>  onAddCategory(value) }
        />

        { 
          categories.map( category => (
                <GifGrid 
                key={ category } 
                category={ category }/>
            )) 
        }
    
    </>
  )
}

import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';

import '../styles/custom-styles.css';

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png',
}

export const Shoppingpage = () => {
  return (
    <div>
      <h1>Shoppingpage</h1>
      <hr />

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
      }}>
        
        <ProductCard product={product}>
          <ProductImage />

          <ProductTitle />

          <ProductButtons />
        </ProductCard>


        <ProductCard 
          product={product}
          className="bg-dark"
        >
          <ProductCard.Image className='custom-imge' />

          <ProductCard.Title 
            title={'Hola mundo'} 
            className="text-white text-bold" 
          />

          <ProductCard.Buttons />
        </ProductCard>
      </div>
    </div>
  )
}

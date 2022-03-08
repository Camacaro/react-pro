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
        
        <ProductCard 
          product={product}
          className="bg-dark text-white"
        >
          <ProductImage className='custom-imge' />

          <ProductTitle className="text-white text-bold" activeClass="active" />

          <ProductButtons className="custom-buttons" />
        </ProductCard>


        <ProductCard 
          product={product}
          className="bg-dark text-white"
        >
          <ProductCard.Image className='custom-imge' />

          <ProductCard.Title 
            title={'Hola mundo'} 
            className="text-white text-bold" 
          />

          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>
      </div>
    </div>
  )
}

import {ProductCard, ProductButtons, ProductImage, ProductTitle} from 'jcamacaro-product-card'

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  // img: './coffee-mug.png',
}

export const Home = () => {
  return (
    <div style={{
      height: '150px',
      margin: '15px 15px',
    }}>
      <ProductCard 
        product={product}
        initialValues={{
          count: 4,
          maxCount: 10
        }}
      >
        {
          ({
            reset,
            increaseBy,
            count,
            isMaxCountReached,
            maxCount
          }) => (
            <>
              <ProductTitle />

              <ProductImage />

              <ProductButtons />

              {count} / {maxCount} <br />
              <button onClick={reset}> Reset</button>
            </>
          )
        }
      </ProductCard>
    </div>
  )
}

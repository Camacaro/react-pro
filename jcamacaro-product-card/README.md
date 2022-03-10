# Product Card

Este es un paquete de pruebas de despliege en NPM

### Jesús Camacaro

## Ejemplo

```JS
import {ProductCard} from 'jcamacaro-product-card'
```

```JS
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
        <ProductCard.Image />

        <ProductCard.Title />

        <ProductCard.Buttons />
      </>
    )
  }
</ProductCard>
```
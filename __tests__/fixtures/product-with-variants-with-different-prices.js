import { decimalPrice } from '../../src/lib/decimal-price'

const ProductsWithVariantsWithDifferentPrices = {
  min_current_price: decimalPrice(10),
  max_current_price: decimalPrice(12)
}

export default ProductsWithVariantsWithDifferentPrices

import { decimalPrice } from '../../src/lib/decimal-price'

const productSearchHit = {
  'category_ids': [ 59 ],
  'product_path': '/products/seed_product_51',
  'product_title': 'SEPIA nonslip tray 420×210mm',
  'product_reference': 'seed_product_51',
  'product_meta_data': {
    'eu': {
      'description': `Assam in north-eastern India grows exceptional tea in the lush
        soil of the Brahmaputra valley – and we pick ours at the peak of the season
        from some of the region's finest estates during the second flush harvest.
        It's rich, strong and full-bodied with malty notes.`
    }
  },
  'variant_sku': '0927967530244',
  'variant_title': 'Variant 2 for SEPIA nonslip tray 420×210mm',
  'variant_meta_data': {
    'eu': {
      'price': 97.68
    }
  },
  'product_assets': [
    {
      'url': 'https://shift-platform-dev.s3-eu-west-1.amazonaws.com/uploads/asset_file/asset_file/139/1537803717.9168365-SEPIA_nonslip_tray_420_210mm.jpg',
      'alt_text': 'SEPIA nonslip tray 420×210mm',
      'sort_position': 1
    }
  ],
  'variants': [
    { price: decimalPrice(19) },
    { price: decimalPrice(15) }
  ],
  'variant_assets': [],
  'product_rating': 0,
  'objectID': '1510895812'
}
export default productSearchHit

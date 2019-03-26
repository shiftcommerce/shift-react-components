import BannerImage from './banner-image'
import EmailSignup from './email-signup'
import GenericGrid from './generic-grid'
import HeroFull from './hero-full'
import HorizontalDivider from './horizontal-divider'
import ProductGrid from './product-grid'

import Config from '../../lib/config'

const defaultTemplates = {
  banner_image: BannerImage,
  email_signup: EmailSignup,
  generic_grid: GenericGrid,
  hero_full: HeroFull,
  horizontal_divider: HorizontalDivider,
  product_grid: ProductGrid
}

export default () => Object.assign({}, defaultTemplates, Config.get().customTemplateComponents)

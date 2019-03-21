import Config from './config'

/**
 * Lib
 */
import FormErrors from './form-errors'

/**
 * Navigation Components
 */
import NavBar from '../components/navigation/navbar'
import NavBarOption from '../components/navigation/navbar-option'

/**
 * Objects
 */
import Breadcrumb from '../objects/breadcrumb'
import Button from '../objects/button'
import Checkbox from '../objects/checkbox'
import ConditionalLink from '../objects/conditional-link'
import DropdownSelect from '../objects/dropdown-select'
import Head from '../objects/head'
import Image from '../objects/image'
import Input from '../objects/input'
import LazyLoad from '../objects/lazy-load'
import Link from '../objects/link'
import Loading from '../objects/loading'
import Logo from '../objects/logo'
import PayPalButton from '../objects/paypal-button'
import Rating from '../objects/rating'
import VariantSelector from '../objects/variant-selector'

/**
 * PDP Components
 */
import ProductCarousel from '../components/products/display/product-carousel'
import ProductEwisForm from '../components/products/display/product-ewis-form'
import ProductPrice from '../components/products/display/product-price'

/**
 * PLP Components
 */
import ProductListingCard from '../components/products/listing/product-listing-card'
import ProductMenu from '../components/products/listing/product-menu'
import ProductMenuOptions from '../components/products/listing/product-menu-options'

/**
 * Cart/Checkout components
 */
import AddressBook from '../components/checkout/address-book'
import AddressForm from '../components/checkout/address-form'
import AddressFormHeader from '../components/checkout/address-form-header'
import LineItems from '../components/cart/line-items'
import PaymentIcons from '../components/cart/payment-icons'
import PaymentMethods from '../components/checkout/payment-methods'
import PaymentMethod from '../components/checkout/payment-method'
import PaymentMethodHeader from '../components/checkout/payment-method-header'
import ShippingMethodsHeader from '../components/checkout/shipping-methods-header'
import StripeFields from '../components/checkout/stripe-fields'
import StripePayment from '../components/checkout/stripe-payment'
import StripeWrapper from '../components/checkout/stripe-wrapper'

/**
 * Order Components
 */
import OrderLineItems from '../components/orders/order-line-items'
import OrderList from '../components/orders/order-list'
import ShippingAddresses from '../components/orders/shipping-addresses'

/**
 * Search Components
 */
import SearchBar from '../components/search/search-bar'
import SearchFilters from '../components/search/search-filters'
import SearchHits from '../components/search/search-hits'
import SearchRatingFilter from '../components/search/search-rating-filter'
import SearchRefinements from '../components/search/search-refinements'
import SearchSlider from '../components/search/search-slider'

/**
 * Static Page
 */
import StaticPageError from '../components/static-page/error'
import StaticPageErrorBody from '../components/static-page/error-body'
import StaticPageErrorDetails from '../components/static-page/error-details'

/**
 * Layout Components
 */
import CustomHead from '../components/layout/custom-head'
import Footer from '../components/layout/footer'
import Minibag from '../components/layout/minibag'

const mapping = {
  AddressBook,
  AddressForm,
  AddressFormHeader,
  Breadcrumb,
  Button,
  Checkbox,
  ConditionalLink,
  CustomHead,
  DropdownSelect,
  Footer,
  FormErrors,
  Head,
  Image,
  Input,
  LazyLoad,
  LineItems,
  Link,
  Loading,
  Logo,
  Minibag,
  NavBar,
  NavBarOption,
  OrderLineItems,
  OrderList,
  PayPalButton,
  PaymentIcons,
  PaymentMethods,
  PaymentMethod,
  PaymentMethodHeader,
  ProductCarousel,
  ProductEwisForm,
  ProductListingCard,
  ProductMenu,
  ProductMenuOptions,
  ProductPrice,
  Rating,
  SearchBar,
  SearchFilters,
  SearchHits,
  SearchRatingFilter,
  SearchRefinements,
  SearchSlider,
  ShippingAddresses,
  ShippingMethodsHeader,
  StaticPageError,
  StaticPageErrorBody,
  StaticPageErrorDetails,
  StripeFields,
  StripePayment,
  StripeWrapper,
  VariantSelector
}

export default function (module) {
  return Config.get()[module] || mapping[module]
}

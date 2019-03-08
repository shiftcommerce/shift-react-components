const order = {
  cardTokenRequested: false,
  cardToken: {
    id: 'tok_1DRhVLIZ9svPgtYNDsRIAYyp',
    object: 'token',
    card: {
      id: 'card_1DRhVLIZ9svPgtYNHTG1Vare',
      object: 'card',
      address_city: 'Leeds',
      address_country: 'GB',
      address_line1: '104 Quay One',
      address_line1_check: 'unchecked',
      address_line2: '',
      address_state: 'Some state',
      address_zip: 'LS9 8DS',
      address_zip_check: 'unchecked',
      brand: 'Visa',
      country: 'US',
      cvc_check: 'unchecked',
      dynamic_last4: null,
      exp_month: 9,
      exp_year: 2029,
      funding: 'credit',
      last4: '4242',
      metadata: {

      },
      name: 'john smith',
      tokenization_method: null
    },
    client_ip: '90.198.102.132',
    created: 1541083839,
    livemode: false,
    type: 'card',
    used: false
  },
  paymentError: null,
  error: false,
  card_errors: false,
  loading: false,
  id: '95',
  email: 'john.smith@shiftcommerce.com',
  channel: 'web',
  shipping_discount_name: null,
  free_shipping: false,
  reference: '_95_',
  status: 'pending',
  deallocated_at: null,
  deallocated: false,
  coupons_applied: [

  ],
  ip_address: '90.198.102.132',
  shipping_address: {
    id: '',
    attributes: {
      address_line_1: '228 Query Avenue',
      address_line_2: '',
      city: 'Manchester',
      country: 'GB',
      first_name: 'Terry',
      last_name: 'Tibbs',
      postcode: 'M1 1TP'
    },
    type: 'addresses'
  },
  billing_address: {
    id: '',
    attributes: {
      address_line_1: '104 Quay One',
      address_line_2: '',
      city: 'Leeds',
      country: 'GB',
      first_name: 'john',
      last_name: 'smith',
      postcode: 'LS9 8DS'
    },
    type: 'addresses'
  },
  customer_account_id: null,
  shipping_method: {
    attributes: {
      created_at: '2018-11-01T14:50:35.544Z',
      description: 'Sunday 2nd December',
      label: 'Super Saver',
      meta_attributes: {

      },
      reference: 'super_saver',
      sku: 'super_saver',
      sub_total: 3.45,
      tax: 2,
      tax_rate: 20,
      total: 3.45,
      updated_at: '2018-11-01T14:50:35.544Z'
    },
    id: '1',
    type: 'shipping_methods'
  },
  currency: 'GBP',
  discount_summaries: [
    {
      id: '',
      type: 'discount_summaries',
      attributes: {
        total: 0,
        name: '',
        promotion_id: 0
      }
    }
  ],
  test: true,
  placed_at: '2018-11-01T14:50:39.968Z',
  shipping_discount: 0,
  total: 110.26,
  sub_total: 106.81,
  shipping_total: 3.45,
  tax: 0,
  line_items: [
    {
      id: '127',
      title: 'SCS-04-CJ coffee jug 600ml',
      sku: '1425689355217',
      unit_quantity: 1,
      gift_unit_quantity: 0,
      gift: false,
      tracking_url: null,
      line_item_discounts: [

      ],
      taxes: 0,
      unit_price: 90.31
    },
    {
      id: '128',
      title: 'Brazil Daterra Masterpiece - Curupira',
      sku: 'bdm1',
      unit_quantity: 1,
      gift_unit_quantity: 0,
      gift: false,
      tracking_url: null,
      line_item_discounts: [

      ],
      taxes: 0,
      unit_price: 16.5
    }
  ]
}

export default order

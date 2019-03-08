const orders = {
  loading: false,
  data: [
    {
      id: '61c40964-4b4c-4f54-b580-958798087312',
      account_reference: 'shiftacc',
      reference: '1000',
      placed_at: '2018-01-01T12:00:00.000Z',
      pricing: {
        currency: 'GBP',
        total_ex_tax: 125900,
        total_inc_tax: 150600,
        pre_discount_total_ex_tax: 126600,
        pre_discount_total_inc_tax: 151440,
        total_discount_ex_tax: 700,
        total_discount_inc_tax: 840
      },
      customer: {
        id: '61c40964-4b4c-4f54-b580-958798087312',
        reference: '23063301',
        email: 'test@shiftcommerce.com',
        name: 'SHIFT',
        meta_attributes: {}
      },
      line_items: [
        {
          id: '61c40964-4b4c-4f54-b580-958798087312_0',
          sku: 'WHITE-TSHIRT-XXL',
          quantity: 5,
          pricing: {
            each_ex_tax: 1200,
            each_inc_tax: 1440,
            line_ex_tax: 6000,
            line_inc_tax: 7200,
            line_discount_ex_tax: 0,
            line_discount_inc_tax: 0,
            tax_rate: 12000
          },
          image_urls: [
            'https://example.com/path/to/image.jpg',
            'https://example.com/path/to/image1.jpg'
          ],
          shipping_method: {
            id: '61c40964-4b4c-4f54-b580-958798087312_1',
            label: 'Next Day Delivery',
            price: 599,
            meta_attributes: {
              sku: 'NEXTDAY'
            }
          },
          shipping_address: {
            id: '61c40964-4b4c-4f54-b580-958798087312_1',
            name: 'Test Customer',
            company: 'SHIFT Commerce',
            lines: [
              'The Calls'
            ],
            city: 'Leeds',
            state: 'West Yorkshire',
            postcode: 'LS2 7EY',
            country: 'United Kingdom',
            meta_attributes: {
              further: 'information'
            }
          },
          discounts: [],
          individual_prices: []
        },
        {
          id: '61c40964-4b4c-4f54-b580-958798087312_1',
          sku: 'BLACK-SOCKS-001',
          quantity: 3,
          pricing: {
            each_ex_tax: 200,
            each_inc_tax: 240,
            line_ex_tax: 400,
            line_inc_tax: 480,
            line_discount_ex_tax: 200,
            line_discount_inc_tax: 240,
            tax_rate: 12000
          },
          image_urls: [],
          shipping_method: {
            id: '61c40964-4b4c-4f54-b580-958798087312_2',
            label: 'Two-man Delivery',
            price: 2499,
            meta_attributes: {
              sku: 'DROPSHIP'
            }
          },
          shipping_address: {
            id: '61c40964-4b4c-4f54-b580-958798087312_2',
            name: 'Test Customer 2',
            company: null,
            lines: [
              'SHIFT Commerce',
              'The Calls Landing'
            ],
            city: 'Leeds',
            state: 'West Yorkshire',
            postcode: 'LS2 7EY',
            country: 'United Kingdom',
            meta_attributes: {
              further: 'information'
            }
          },
          discounts: [
            {
              id: '61c40964-4b4c-4f54-b580-958798087312_1_0',
              label: '3 for 2 on Socks',
              amount_ex_tax: 200,
              amount_inc_tax: 240,
              coupon_code: '3FOR2SOCKS',
              meta_attributes: {}
            }
          ],
          individual_prices: [
            {
              id: '61c40964-4b4c-4f54-b580-958798087312_1_0',
              ex_tax: 133,
              inc_tax: 160,
              discount_ex_tax: 67,
              discount_inc_tax: 80,
              discounts: [
                {
                  id: '61c40964-4b4c-4f54-b580-958798087312_1_0_0',
                  label: '3 for 2 on Socks',
                  amount_ex_tax: 67,
                  amount_inc_tax: 80,
                  coupon_code: null,
                  meta_attributes: {}
                }
              ]
            },
            {
              id: '61c40964-4b4c-4f54-b580-958798087312_1_1',
              ex_tax: 133,
              inc_tax: 160,
              discount_ex_tax: 67,
              discount_inc_tax: 80,
              discounts: [
                {
                  id: '61c40964-4b4c-4f54-b580-958798087312_1_1_0',
                  label: '3 for 2 on Socks',
                  amount_ex_tax: 67,
                  amount_inc_tax: 80,
                  coupon_code: null,
                  meta_attributes: {}
                }
              ]
            },
            {
              id: '61c40964-4b4c-4f54-b580-958798087312_1_2',
              ex_tax: 134,
              inc_tax: 160,
              discount_ex_tax: 66,
              discount_inc_tax: 80,
              discounts: [
                {
                  id: '61c40964-4b4c-4f54-b580-958798087312_1_2_0',
                  label: '3 for 2 on Socks',
                  amount_ex_tax: 66,
                  amount_inc_tax: 80,
                  coupon_code: null,
                  meta_attributes: {}
                }
              ]
            }
          ]
        },
        {
          id: '61c40964-4b4c-4f54-b580-958798087312_2',
          sku: 'WHITE-TSHIRT-L',
          quantity: 1,
          pricing: {
            each_ex_tax: 120000,
            each_inc_tax: 144000,
            line_ex_tax: 120000,
            line_inc_tax: 144000,
            line_discount_ex_tax: 0,
            line_discount_inc_tax: 0,
            tax_rate: 12000
          },
          image_urls: [],
          shipping_method: {
            id: '61c40964-4b4c-4f54-b580-958798087312_1',
            label: 'Next Day Delivery',
            price: 599,
            meta_attributes: {
              sku: 'NEXTDAY'
            }
          },
          shipping_address: {
            id: '61c40964-4b4c-4f54-b580-958798087312_1',
            name: 'Test Customer',
            company: 'SHIFT Commerce',
            lines: [
              'The Calls'
            ],
            city: 'Leeds',
            state: 'West Yorkshire',
            postcode: 'LS2 7EY',
            country: 'United Kingdom',
            meta_attributes: {
              further: 'information'
            }
          },
          discounts: [],
          individual_prices: []
        }
      ],
      shipping_methods: [
        {
          id: '61c40964-4b4c-4f54-b580-958798087312_1',
          label: 'Next Day Delivery',
          price: 599,
          meta_attributes: {
            sku: 'NEXTDAY'
          }
        },
        {
          id: '61c40964-4b4c-4f54-b580-958798087312_2',
          label: 'Two-man Delivery',
          price: 2499,
          meta_attributes: {
            sku: 'DROPSHIP'
          }
        }
      ],
      shipping_addresses: [
        {
          id: '61c40964-4b4c-4f54-b580-958798087312_1',
          name: 'Test Customer',
          company: 'SHIFT Commerce',
          lines: [
            'The Calls'
          ],
          city: 'Leeds',
          state: 'West Yorkshire',
          postcode: 'LS2 7EY',
          country: 'United Kingdom',
          meta_attributes: {
            further: 'information'
          }
        },
        {
          id: '61c40964-4b4c-4f54-b580-958798087312_2',
          name: 'Test Customer 2',
          company: null,
          lines: [
            'SHIFT Commerce',
            'The Calls Landing'
          ],
          city: 'Leeds',
          state: 'West Yorkshire',
          postcode: 'LS2 7EY',
          country: 'United Kingdom',
          meta_attributes: {
            further: 'information'
          }
        }
      ]
    },
    {
      id: 'fda3fcff-92c7-414a-bdea-156cde21a926',
      account_reference: 'shiftacc',
      reference: '1001',
      placed_at: '2018-01-01T12:00:00.000Z',
      pricing: {
        currency: 'GBP',
        total_ex_tax: 125900,
        total_inc_tax: 160600,
        pre_discount_total_ex_tax: 126600,
        pre_discount_total_inc_tax: 151440,
        total_discount_ex_tax: 700,
        total_discount_inc_tax: 840
      },
      customer: {
        id: 'fda3fcff-92c7-414a-bdea-156cde21a926',
        reference: '23063301',
        email: 'test@shiftcommerce.com',
        name: 'SHIFT',
        meta_attributes: {}
      },
      line_items: [
        {
          id: 'fda3fcff-92c7-414a-bdea-156cde21a926_0',
          sku: 'WHITE-TSHIRT-XXL',
          quantity: 5,
          pricing: {
            each_ex_tax: 1200,
            each_inc_tax: 1440,
            line_ex_tax: 6000,
            line_inc_tax: 7200,
            line_discount_ex_tax: 0,
            line_discount_inc_tax: 0,
            tax_rate: 12000
          },
          image_urls: [
            'https://example.com/path/to/image.jpg',
            'https://example.com/path/to/image1.jpg'
          ],
          shipping_method: {
            id: 'fda3fcff-92c7-414a-bdea-156cde21a926_1',
            label: 'Next Day Delivery',
            price: 599,
            meta_attributes: {
              sku: 'NEXTDAY'
            }
          },
          shipping_address: {
            id: 'fda3fcff-92c7-414a-bdea-156cde21a926_1',
            name: 'Test Customer',
            company: 'SHIFT Commerce',
            lines: [
              'The Calls'
            ],
            city: 'Leeds',
            state: 'West Yorkshire',
            postcode: 'LS2 7EY',
            country: 'United Kingdom',
            meta_attributes: {
              further: 'information'
            }
          },
          discounts: [],
          individual_prices: []
        },
        {
          id: 'fda3fcff-92c7-414a-bdea-156cde21a926_1',
          sku: 'BLACK-SOCKS-001',
          quantity: 3,
          pricing: {
            each_ex_tax: 200,
            each_inc_tax: 240,
            line_ex_tax: 400,
            line_inc_tax: 480,
            line_discount_ex_tax: 200,
            line_discount_inc_tax: 240,
            tax_rate: 12000
          },
          image_urls: [],
          shipping_method: {
            id: 'fda3fcff-92c7-414a-bdea-156cde21a926_2',
            label: 'Two-man Delivery',
            price: 2499,
            meta_attributes: {
              sku: 'DROPSHIP'
            }
          },
          shipping_address: {
            id: 'fda3fcff-92c7-414a-bdea-156cde21a926_2',
            name: 'Test Customer 2',
            company: null,
            lines: [
              'SHIFT Commerce',
              'The Calls Landing'
            ],
            city: 'Leeds',
            state: 'West Yorkshire',
            postcode: 'LS2 7EY',
            country: 'United Kingdom',
            meta_attributes: {
              further: 'information'
            }
          },
          discounts: [
            {
              id: 'fda3fcff-92c7-414a-bdea-156cde21a926_1_0',
              label: '3 for 2 on Socks',
              amount_ex_tax: 200,
              amount_inc_tax: 240,
              coupon_code: '3FOR2SOCKS',
              meta_attributes: {}
            }
          ],
          individual_prices: [
            {
              id: 'fda3fcff-92c7-414a-bdea-156cde21a926_1_0',
              ex_tax: 133,
              inc_tax: 160,
              discount_ex_tax: 67,
              discount_inc_tax: 80,
              discounts: [
                {
                  id: 'fda3fcff-92c7-414a-bdea-156cde21a926_1_0_0',
                  label: '3 for 2 on Socks',
                  amount_ex_tax: 67,
                  amount_inc_tax: 80,
                  coupon_code: null,
                  meta_attributes: {}
                }
              ]
            },
            {
              id: 'fda3fcff-92c7-414a-bdea-156cde21a926_1_1',
              ex_tax: 133,
              inc_tax: 160,
              discount_ex_tax: 67,
              discount_inc_tax: 80,
              discounts: [
                {
                  id: 'fda3fcff-92c7-414a-bdea-156cde21a926_1_1_0',
                  label: '3 for 2 on Socks',
                  amount_ex_tax: 67,
                  amount_inc_tax: 80,
                  coupon_code: null,
                  meta_attributes: {}
                }
              ]
            },
            {
              id: 'fda3fcff-92c7-414a-bdea-156cde21a926_1_2',
              ex_tax: 134,
              inc_tax: 160,
              discount_ex_tax: 66,
              discount_inc_tax: 80,
              discounts: [
                {
                  id: 'fda3fcff-92c7-414a-bdea-156cde21a926_1_2_0',
                  label: '3 for 2 on Socks',
                  amount_ex_tax: 66,
                  amount_inc_tax: 80,
                  coupon_code: null,
                  meta_attributes: {}
                }
              ]
            }
          ]
        },
        {
          id: 'fda3fcff-92c7-414a-bdea-156cde21a926_2',
          sku: 'WHITE-TSHIRT-L',
          quantity: 1,
          pricing: {
            each_ex_tax: 120000,
            each_inc_tax: 144000,
            line_ex_tax: 120000,
            line_inc_tax: 144000,
            line_discount_ex_tax: 0,
            line_discount_inc_tax: 0,
            tax_rate: 12000
          },
          image_urls: [],
          shipping_method: {
            id: 'fda3fcff-92c7-414a-bdea-156cde21a926_1',
            label: 'Next Day Delivery',
            price: 599,
            meta_attributes: {
              sku: 'NEXTDAY'
            }
          },
          shipping_address: {
            id: 'fda3fcff-92c7-414a-bdea-156cde21a926_1',
            name: 'Test Customer',
            company: 'SHIFT Commerce',
            lines: [
              'The Calls'
            ],
            city: 'Leeds',
            state: 'West Yorkshire',
            postcode: 'LS2 7EY',
            country: 'United Kingdom',
            meta_attributes: {
              further: 'information'
            }
          },
          discounts: [],
          individual_prices: []
        }
      ],
      shipping_methods: [
        {
          id: 'fda3fcff-92c7-414a-bdea-156cde21a926_1',
          label: 'Next Day Delivery',
          price: 599,
          meta_attributes: {
            sku: 'NEXTDAY'
          }
        },
        {
          id: 'fda3fcff-92c7-414a-bdea-156cde21a926_2',
          label: 'Two-man Delivery',
          price: 2499,
          meta_attributes: {
            sku: 'DROPSHIP'
          }
        }
      ],
      shipping_addresses: [
        {
          id: 'fda3fcff-92c7-414a-bdea-156cde21a926_1',
          name: 'Test Customer',
          company: 'SHIFT Commerce',
          lines: [
            'The Calls'
          ],
          city: 'Leeds',
          state: 'West Yorkshire',
          postcode: 'LS2 7EY',
          country: 'United Kingdom',
          meta_attributes: {
            further: 'information'
          }
        },
        {
          id: 'fda3fcff-92c7-414a-bdea-156cde21a926_2',
          name: 'Test Customer 2',
          company: null,
          lines: [
            'SHIFT Commerce',
            'The Calls Landing'
          ],
          city: 'Leeds',
          state: 'West Yorkshire',
          postcode: 'LS2 7EY',
          country: 'United Kingdom',
          meta_attributes: {
            further: 'information'
          }
        }
      ]
    }
  ],
  pagination: {
    first: 'http://host.docker.internal:4000/oms/v1/order_histories?fields%5Border_histories%5D=account_reference%2Creference%2Cplaced_at%2Ccustomer%2Cpricing%2Cline_items%2Cshipping_addresses%2Cshipping_methods&include=customer%2Cshipping_methods%2Cshipping_addresses%2Cbilling_addresses%2Cdiscounts%2Cline_items%2Cline_items.shipping_method%2Cline_items.shipping_address%2Cline_items.discounts%2Cline_items.individual_prices%2Cline_items.individual_prices.discounts%2Cpayments.billing_address&page%5Blimit%5D=10&page%5Boffset%5D=0',
    last: 'http://host.docker.internal:4000/oms/v1/order_histories?fields%5Border_histories%5D=account_reference%2Creference%2Cplaced_at%2Ccustomer%2Cpricing%2Cline_items%2Cshipping_addresses%2Cshipping_methods&include=customer%2Cshipping_methods%2Cshipping_addresses%2Cbilling_addresses%2Cdiscounts%2Cline_items%2Cline_items.shipping_method%2Cline_items.shipping_address%2Cline_items.discounts%2Cline_items.individual_prices%2Cline_items.individual_prices.discounts%2Cpayments.billing_address&page%5Blimit%5D=10&page%5Boffset%5D=0'
  }
}

export default orders

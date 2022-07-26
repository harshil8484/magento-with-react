let categoryListQuery = `
{
categoryList(filters: {ids: {in: ["2"]}}) {
    children_count
    children {
    id
    level
    name
    path
    url_path
    url_key
    image
    description
    children {
        id
        level
        name
        path
        url_path
        url_key
        image
        description
    }
    }
}
}`;

let newInProduct = `{
  categoryList(filters: {ids: {eq: "41"}}) {
    products {
      total_count
      items{
        id
        sku
        name
        url_key
        stock_status
        new
        image{
          url
          label
          position
        }
        small_image{
          url
          label
          position
        }
        thumbnail{
          url
          label
          position
        }
        short_description{
          html
        }
        description{
          html
        }
        price_range{
          minimum_price{
            regular_price{
              value
              currency
            }
            final_price{
              value
              currency
            }
          }
          maximum_price{
            regular_price{
              value
              currency
            }
            final_price{
              value
              currency
            }
          }
        }
        new_from_date
        new_to_date
        special_price
        special_from_date
        special_to_date
        gift_message_available
        country_of_manufacture
        price_tiers{
          quantity
          final_price{
            value
            currency
          }
          discount{
            amount_off
            percent_off
          }
        }
      }
      page_info {
        current_page
        page_size
      }
    }
  }
}`;

let addProductToCart = `mutation {
  addSimpleProductsToCart(
    input: {
      cart_id: "CART_ID"
      cart_items: [
        {
          data: {
            quantity: 1
            sku: "product_sku"
          }
        }
      ]
    }
  ) {
    cart {
      items {
        id
        product {
          sku
          stock_status
          name
          thumbnail{
          url
          label
          position
        }
        price_range{
          minimum_price{
            regular_price{
              value
              currency
            } 
          }
        }
       }
        quantity
      }
    }
  }
}
`;

let emptyCart = `mutation {
  createEmptyCart
}`;
const allQueries = {
  categoryListQuery: categoryListQuery,
  newInProduct: newInProduct,
  addTocart: addProductToCart,
  emptyCart: emptyCart,
};

export { allQueries };

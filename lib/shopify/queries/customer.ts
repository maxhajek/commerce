export const getCustomerQuery = /* GraphQL */ `
  query getCustomer($customerAccessToken: String!) {
    customer(customerAccessToken: $customerAccessToken) {
      id
      email
      firstName
      lastName
      phone
      acceptsMarketing
      addresses(first: 10) {
        edges {
          node {
            id
            address1
            address2
            city
            country
            firstName
            lastName
            phone
            province
            zip
          }
        }
      }
      orders(first: 10) {
        edges {
          node {
            id
            orderNumber
            processedAt
            totalPrice {
              amount
              currencyCode
            }
            financialStatus
            fulfillmentStatus
          }
        }
      }
    }
  }
`;

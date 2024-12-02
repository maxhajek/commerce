// create the customer shopify fragment

const customerFragment = /* GraphQL */ `
  fragment customer on Customer {
    id
    email
    firstName
    lastName
    displayName
    phone
    tags
    acceptsMarketing
    createdAt
    updatedAt
  }
`;

export default customerFragment;

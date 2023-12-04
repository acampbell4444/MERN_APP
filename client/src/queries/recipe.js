import { gql } from "@apollo/client";

export const GET_RECIPES = gql`
    query {
        recipes {
            _id
            title
            ingredients {
                name
                amount
                unit
            }
            instructions
        }
    }
`;

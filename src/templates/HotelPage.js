import React from 'react';
import { graphql } from 'gatsby';

const HotelPage = ({ data: { gcms: { hotel }}}) => {
    return (
        <React.Fragment>
            <h1>{ hotel.name }</h1>
            <p>{ hotel.description }</p>
        </React.Fragment>
    )
}

export const pageQuery = graphql`
    query HotelPageQuery($id: ID) {
        gcms {
            hotel(where: { id: $id }) {
                name
                description
                slug
            }
        }
    }
`

export default HotelPage;
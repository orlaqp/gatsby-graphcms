import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

const pageQuery = graphql`
{
    gcms {
        hotels {
            name
            phone
            slug
            description
        }
    }
}
`;

const IndexPage = () => {
    const {gcms: {hotels}} = useStaticQuery(pageQuery);

    return (
        <div>
            {hotels.map(({ slug, ...hotel}) => (
                <Link key={slug} to={`/hotels/${slug}`}>
                    {hotel.name}
                </Link>
            ))}
        </div>
    )
}

export default IndexPage;
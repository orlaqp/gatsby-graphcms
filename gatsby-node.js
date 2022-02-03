exports.createPages = async({graphql, actions: {createPage}}) => {
    const {data: {gcms: {hotels}}} = await graphql(`
    {
        gcms {
            hotels(stage: PUBLISHED) {
                id
                slug
            }
        }
    }
    `);

    hotels.forEach(({id, slug}) => createPage({
        path: `/hotels/${slug}`,
        component: require.resolve(`./src/templates/HotelPage.js`),
        context: {
            id
        }
    }));
}
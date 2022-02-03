module.exports = {
    plugins: [
        {
            resolve: 'gatsby-source-graphql',
            options: {
                typeName: 'GraphCMS',
                fieldName: 'gcms',
                url: 'https://api-us-east-1.graphcms.com/v2/ckyl4bf290he001xo3s6c5hju/master'
            }
        }
    ]
}
export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eebb1404e7b9d7f1aaa5d4f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-1mh8x5ur',
                  apiId: '26cca00d-05b3-4286-9c77-65022a2e84fa'
                },
                {
                  buildHookId: '5eebb1404e7b9d8bb7aa5b43',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-6r23gr5i',
                  apiId: '513ef334-65b5-45ff-9dad-51eb4fc67bc9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/diarm/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-6r23gr5i.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}

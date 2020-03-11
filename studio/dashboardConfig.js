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
                  buildHookId: '5e69588ace192201be4ad2e5',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-kwwjdc6p',
                  apiId: '2dfd97d2-719c-4606-9a54-a98a5038ca5b'
                },
                {
                  buildHookId: '5e69588a6d074401ca67af7e',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-d7dk3rba',
                  apiId: 'f1c2d8ab-67cc-4566-8995-0388765ed851'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jtosborne129/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-d7dk3rba.netlify.com',
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

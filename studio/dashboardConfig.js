export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5edb1c9622763e3587a0356b',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-1kgaaybk',
                  apiId: 'a00d4e77-41d1-429e-9a7d-dfcd218c2338'
                },
                {
                  buildHookId: '5edb1c962908fe531399cbdf',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-bdo1rsi7',
                  apiId: '47337bbe-6182-4c3a-ac6b-a4faf38c38b3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ekaone/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-bdo1rsi7.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}

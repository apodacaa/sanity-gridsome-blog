export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '62b6239e7cf0a9115575ae36',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-vtgk6pss',
                  apiId: '7832ef92-c869-497a-951f-4d1a72a3cba4'
                },
                {
                  buildHookId: '62b6239e131e3e149c06c899',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-cbe7gms2',
                  apiId: '06104991-fedb-4258-9988-ec44fec2fb47'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/apodacaa/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-cbe7gms2.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '5f9a14375a2a055419714291',
                  title: 'Sanity Studio',
                  name: 'asdfasdf-studio',
                  apiId: '7f0db06a-5614-450c-bd86-392679a7602e'
                },
                {
                  buildHookId: '5f9a143770e6463a0774e144',
                  title: 'Blog Website',
                  name: 'asdfasdf-web',
                  apiId: '1036473f-af7a-4850-92ef-c714d6af9850'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tysbrown/asdfasdf',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://asdfasdf-web.netlify.app', category: 'apps'}
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

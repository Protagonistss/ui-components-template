module.exports = {
  title: '世纪金政组件库',
  dest: './dist',
  base: '/',
  repo: '',
  description: 'K-Designer组件库文档',
  head: [['link', { rel: 'icon', href: 'favicon.ico' }]],
  theme: '',
  themeConfig: {
    nav: [
      {
        text: '起步',
        link: '/guide/'
      },
      {
        text: '设计',
        link: '/design/'
      }
    ],
    sidebar: {
      '/guide/': ['installation', '介绍', '组件'],
      '/design/': ['theme', 'animation']
    }
  }
}

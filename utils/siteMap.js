
import kebabCase from 'lodash/kebabCase'


function getPaths(lang, type) {
    let initial = lang
    if (lang === 'es') {
      initial = ''
    }
    return fs
      .readdirSync(path.resolve(__dirname, 'content', `${lang}/${type}`))
      .filter(filename => path.extname(filename) === '.md')
      .map(filename => `${initial}/${type}/${path.parse(filename).name}`)
  }

  

export const fetchSitemapRoutes = async () => {
  const routes = []
  .concat(getPaths('es', 'atracciones'))
  .concat(getPaths('en', 'atracciones'))
  tagsData.tags.forEach((tag) => routes.push(`/topics/${kebabCase(tag.name)}`))

  return routes
}
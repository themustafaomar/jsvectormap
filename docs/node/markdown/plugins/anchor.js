import string from 'string'

const symbolTemplate = `
  <div aria-hidden="true" class="absolute items-center group-hover:flex hidden mr-1 -left-2 top-0 bottom-0 m-auto">
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"></path>
    </svg>
  </div>`

export const anchorPlugin = (anchor) => {
  return {
    slugify: s => string(s).slugify().toString(),
    callback(token) {
      token.attrPush([
        'class', 'link-point heading group relative flex items-center capitalize tracking-tight -ml-4 pl-4',
      ])
    },
    permalink: anchor.permalink.linkInsideHeader({
      symbol: symbolTemplate,
      placement: 'before',
    }),
  }
}
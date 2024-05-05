import markdownitContainer from 'markdown-it-container'

export const containerPlugin = md => {
  md.use(...createContainer('danger', md))
    .use(...createContainer('info', md))
}

function getSymbol(type) {
  if (type === 'info') {
    return `
      <svg class="w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    `
  } else if (type === 'danger') {
    return `
      <svg class="w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
      </svg>
    `
  }
}

function createContainer(type, md) {
  return [
    markdownitContainer,
    type,
    {
      render(tokens, idx) {
        const token = tokens[idx]
        if (token.nesting === 1) {
          return `<div class="custom-block ${type} flex"><div class="mr-2">${getSymbol(type)}</div>\n`
        } else {
          return `</div>\n`
        }
      }
    }
  ]
}
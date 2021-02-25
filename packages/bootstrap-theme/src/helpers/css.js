const nthChildToNthChildType = css => css.replace(/\:nth\-child/g, `:nth-type`)
const firstChildToFirstOfType = css => css.replace(/\:first\-child/g, `:first-of-type`)
const nthLastChildToNthLastChildType = css => css.replace(/\:nth\-last\-child/g, `:nth-last-of-type`)

export const fixCss = css => nthLastChildToNthLastChildType(firstChildToFirstOfType(nthChildToNthChildType(css)))
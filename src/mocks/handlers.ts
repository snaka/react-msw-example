import { rest } from 'msw'

export const handlers = [
  rest.get('https://api.npms.io/v2/search', (req, res, ctx) => {
    return res(ctx.json({ message: "Hello world!" }))
  })
]

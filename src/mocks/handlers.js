import { rest } from 'msw'

export const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/todos', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([
      {
        id : 1,
        title : "청소하기",
        completed : false
      },
      {
        id : 2,
        title : "공부하기",
        completed : false
      },
      {
        id : 3,
        title : "이력서 넣기",
        completed : false
      }
    ]))
  })
]
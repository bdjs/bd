declare module 'bd'

import Koa from 'koa'

declare class Application extends Koa {
  init(): void
  middlewares(): void
}

export default Application
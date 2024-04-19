import { Hono } from "hono";
// import { handle } from 'hono/vercel'
import { handle } from '@hono/node-server/vercel'

const app = new Hono().basePath("/api/v3");

import type { PageConfig } from 'next'

export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
}

app.get('/', (c) => {
  return c.json({
    message: "hello vercosy.",
  });
})

const handler = handle(app)

export default handler

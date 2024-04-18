import { Hono } from "hono";
import {handle  } from 'hono/vercel'

const app = new Hono().basePath("/api/v1");

app.get('/', (c) => {
  return c.json({
    message: "hello vercosy.",
  });
})

const handler = handle(app)

export const GET = handler
export const POST = handler
export const PUT = handler
export const DELETE = handler
export const PATCH = handler


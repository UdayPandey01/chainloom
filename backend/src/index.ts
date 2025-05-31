import { Hono } from "hono";
import { cors } from "hono/cors";
import { jobRouter } from "./routes/job";

const app = new Hono();

app.use("*", cors());
app.get("/", (c) => c.text("Hello World"));
app.route("/jobs", jobRouter);

export default app;

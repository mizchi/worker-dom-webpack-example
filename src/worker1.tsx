/** @jsx h */
import { ready } from "@mizchi/worker-dom/dist/lib/worker.mjs";
import { h, render } from "preact";
import { App } from "./components/App";

async function run() {
  await ready;
  render(<App />, document.body);
}

run();

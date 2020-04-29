/** @jsx h */
import { ready } from "@mizchi/worker-dom/dist/lib/worker.mjs";
import { h, render } from "preact";
import { Sub } from "./components/Sub";

async function run() {
  await ready;
  render(<Sub />, document.body);
}

run();

import { attachWorker } from "@mizchi/worker-dom/dist/lib/main.mjs";

// app1
const el = document.createElement("main");
document.body.appendChild(el);
const worker = new Worker("./worker1.tsx", { type: "module" });
attachWorker(el, worker);

// app2
const el2 = document.createElement("div");
document.body.appendChild(el2);
const worker2 = new Worker("./worker2.tsx", { type: "module" });

attachWorker(el2, worker2);

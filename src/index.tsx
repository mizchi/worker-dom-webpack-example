import { attachWorker } from "@mizchi/worker-dom/dist/lib/main.mjs";

// app1
const el1 = document.createElement("div");
document.body.appendChild(el1);
const worker1 = new Worker("./worker1.tsx", { type: "module" });
attachWorker(el1, worker1);

// app2
const el2 = document.createElement("div");
document.body.appendChild(el2);
const worker2 = new Worker("./worker2.tsx", { type: "module" });

attachWorker(el2, worker2);

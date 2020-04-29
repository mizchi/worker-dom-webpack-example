declare module "@mizchi/worker-dom/dist/lib/main.mjs" {
  function attachWorker(dom: HTMLElement, worker: Worker): void;
}

declare module "@mizchi/worker-dom/dist/lib/worker.mjs" {
  const ready: Promise<void>;
}

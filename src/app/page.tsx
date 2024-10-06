"use client";

import { useStore } from "@/lib/store";

export default function Home() {

  const { count, increment, reset } = useStore();

  return (
    <div className="flex flex-col items-center justify-center gap-40 mt-40">
      <h1 className="font-bold text-5xl">Nextjs starter</h1>
      <div className="flex flex-col items-center justify-center  py-2">
        <h1 className="text-4xl">Count: {count}</h1>
        <div className="mt-4 space-x-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={increment}
          >
            Increase
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded"
            onClick={reset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

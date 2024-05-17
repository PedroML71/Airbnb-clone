"use client";

import { FC } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface PaginationControlsProps {}

const PaginationControls: FC<PaginationControlsProps> = ({}) => {
  const router = useRouter();
  const params = useSearchParams();

  const page = params.get("page") ?? "1";
  const per_page = params.get("per_page") ?? "1";

  return (
    <div className="flex gap-2">
      <button
        className="bg-blue-500 text-white p-1"
        onClick={() => {
          router.push(`/?page=${Number(page) - 1}&per_page=${per_page}`);
        }}
      >
        prev page
      </button>

      <div>
        {page} / {Math.ceil(10 / Number(per_page))}
      </div>

      <button
        className="bg-blue-500 text-white p-1"
        onClick={() => {
          router.push(`/?page=${Number(page) + 1}&per_page=${per_page}`);
        }}
      >
        next page
      </button>
    </div>
  );
};

export default PaginationControls;

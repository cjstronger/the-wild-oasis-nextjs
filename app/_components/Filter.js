"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Filter({ filter }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`);
  }
  return (
    <div className="border border-primary-600 flex my-4">
      <Button id="all" filter={filter} handleFilter={() => handleFilter("all")}>
        All Cabins
      </Button>
      <Button
        id="small"
        filter={filter}
        handleFilter={() => handleFilter("small")}
      >
        1 &mdash; 3 guests
      </Button>
      <Button
        filter={filter}
        id="medium"
        handleFilter={() => handleFilter("medium")}
      >
        4 &mdash; 7 guests
      </Button>
      <Button
        filter={filter}
        id="large"
        handleFilter={() => handleFilter("large")}
      >
        8 &mdash; 12 guests
      </Button>
    </div>
  );
}

function Button({ children, handleFilter, filter, id }) {
  return (
    <button
      className={`${
        filter === id ? "bg-primary-500 text-primary-50" : ""
      } px-5 py-1 hover:bg-primary-600 text-primary-200`}
      onClick={handleFilter}
    >
      {children}
    </button>
  );
}

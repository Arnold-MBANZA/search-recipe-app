"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState, useTransition } from "react";

export default function SearchRecipe() {
  const [value, setValue] = useState("");
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());

    if (value.trim()) {
      params.set("query", value.trim());
    } else {
      params.delete("query");
    }

    startTransition(() => {
      router.replace(`${pathname}?${params.toString()}`);
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        gap: 10,
        justifyContent: "center",
        alignItems: "center",
        height: 70,
        width: "100%",
        maxWidth: 600,
        margin: "0 auto",
      }}
    >
      <input
        type="text"
        name="search"
        id="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search for a recipe"
        style={{
          padding: 10,
          flex: 1,
          border: "1px solid #ccc",
          borderRadius: 5,
          outline: "none",
          fontSize: "1rem",
        }}
      />
      <button
        disabled={isPending}
        type="submit"
        style={{
          padding: "10px 15px",
          background: "blue",
          border: "none",
          color: "white",
          cursor: "pointer",
          borderRadius: 5,
          fontSize: "1rem",
        }}
      >
        {isPending ? "En cours ..." : "Recherche"}
      </button>
    </form>
  );
}

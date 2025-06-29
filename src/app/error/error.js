import Link from "next/link";
import { useEffect } from "react";

("use client");

export default function ErrorPage({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <>
      <h1>Something went wrong!</h1>
      <Link href={"/"}>Go home</Link>
      <button onClick={() => reset()}>Try again</button>
    </>
  );
}

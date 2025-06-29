import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <>
      <h2>
        "Camp is esoteric - Something of a private code, a badge of identity
        even, among small urban cliques" Please sign in to wear your badge!
      </h2>
      <SignIn />
    </>
  );
}

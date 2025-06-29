import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <>
      <h2>
        "Camp is esoteric - Something of a private code, a badge of identity
        even, among small urban cliques" Please sign up to claim your badge!
      </h2>
      <SignUp />
    </>
  );
}

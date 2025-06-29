import Link from "next/link";
import {SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,} from "@clerk/nextjs";
import {auth} from "@clerk/nextjs/server";

export default async function Header(){
const {userId} = await auth()
    
return(
        <>
         <nav>
        <Link href={"/"}>
          Home
        </Link>
        <Link href={"/user_id"}>
          My Profile
        </Link>
        <Link href={"/posts"}>
          Votes
        </Link>
      </nav>
      <SignedIn>
        <UserButton/>
    <SignedIn/>
      <SignedOut>
        <SignInButton/>
        <SignUpButton/>
      </SignedOut>
      </>
    );
}
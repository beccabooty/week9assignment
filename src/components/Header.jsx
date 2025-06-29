import Link from "next/link";
import {SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,} from "@clerk/nextjs";
import {auth} from "@clerk/nextjs/server";
import { NavigationMenu } from "radix-ui";

export default async function Header(){
const {userId} = await auth()
    
return(
        <>
         <NavigationMenu.Root>
         <NavigationMenu.Item>
			<NavigationMenu.Link
			className="NavHome"
			href="/">
			Home
			</NavigationMenu.Link>
		</NavigationMenu.Item>
        <NavigationMenu.Item>
			<NavigationMenu.Link
			className="NavProfile"
			href="/user_id">
			My Profile
			</NavigationMenu.Link>
		</NavigationMenu.Item>
        <NavigationMenu.Item>
			<NavigationMenu.Link
			className="NavVote"
			href="/posts">
			Vote
			</NavigationMenu.Link>
		</NavigationMenu.Item>
        </NavigationMenu.Root>
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
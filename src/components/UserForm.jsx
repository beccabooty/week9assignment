import { currentUser } from "@clerk/nextjs/dist/types/server";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function UserForm() {
  async function handleSubmit(userData) {
    "use server";
    const { userID } = await auth();

    userData = {
        username: userData.get("username"),
        id: userData.get("clerk_id")
    };

    db.query('INSERT INTO campusers(username,clerk_id) VALUES($1, $2),
        [userData.username, userData.id]);

    revalidatePath("/users");
    redirect("user_id");
  }
  return (
    <>
      <form action={handleSubmit}>
        <fieldset>
          <legend>Create your profile</legend>
          <label htmlFor="name">Username:</label>
          <input type="text" name="name" required />
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

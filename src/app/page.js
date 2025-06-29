import Link from "next/link";

export default function Homepage() {
  return (
    <>
      <h1>Votes on Camp</h1>
      <h2>
        "The camp eye has the power to transform experience. But not everything
        can be seen as camp. It&#39;s not all in the eye of the beholder."
      </h2>
      <Link href="https://monoskop.org/images/5/59/Sontag_Susan_1964_Notes_on_Camp.pdf">
        Download Notes on Camp
      </Link>
    </>
  );
}

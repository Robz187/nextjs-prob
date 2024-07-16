import Link from "next/link";

export default function Notifications() {
  console.log("Notifications loaded-1");

    return (
      <>
        <h1>Some Notifications</h1>
        <Link href="/problem-dashboard/archived">Archived</Link>
      </>
    );
  }
  
import Link from "next/link";

export default function NotificationsArchived() {
  console.log("NotificationsArchived loaded");
    return (
      <>
        <h1>Archived Notifications</h1>
        <Link href="/problem-dashboard">Default</Link>
      </>
    );
  }
  
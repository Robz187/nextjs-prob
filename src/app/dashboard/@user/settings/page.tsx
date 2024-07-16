import Link from "next/link";

export default function User(){
return(
    <>
    <div>
        <p>Some User Settings</p>
        <Link href="/dashboard">Go back to Dashboard</Link>
    </div>
    </>
)
}
import Link from "next/link";

export default function User(){
   return(
    <>
    <div>
        <p>Some User Analytics</p>
        <Link href="/dashboard/settings/">Some Settings</Link>
    </div>
    </>
   )
}
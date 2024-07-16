import Link from "next/link";

export default function Navbar(){
    return(
        <>
        <div>
            <ul style={{
                display:"flex",
                flexDirection:"column"
            }}>
                <Link href="/">Home</Link>
                <Link href="/dashboard">Dashboard</Link>
                <Link href="/problem-dashboard">Problem Dashboard</Link>
            </ul>
        </div>
        </>
    )
}
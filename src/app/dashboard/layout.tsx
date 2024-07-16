export default function DashboardLayout({
    children,
    ads,
    user
}:{
    children:React.ReactNode,
    ads:React.ReactNode,
    user:React.ReactNode,
}){
    return(
        <>
            <div>{children}</div>
            <div>{ads}</div>
            <div>{user}</div>
        </>
    )
}
//Paralell Routing Components
export default function DashboardLayout({
    children,
    users,
    google,
    notifications,
    login

}:{
    children:React.ReactNode,
    users:React.ReactNode,
    google:React.ReactNode,
    notifications:React.ReactNode,
    login:React.ReactNode,
}){
    let isLoggedIn = true;
    return isLoggedIn?(
        <>
            <div>{children}</div>
            <div>{users}</div>
            <div>{google}</div>
            <div>{notifications}</div>
        </>
    ):(
        <div>{login}</div>
    )
}
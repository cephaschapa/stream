function Wrapper({children}) {
    return (
        <div className="flex items-center h-full px-5 md:px-16 xl:px-52 w-screen">
            {children}
        </div>
    )
}

export default Wrapper

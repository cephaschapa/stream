const NavWrapper = ({children}) => {
    return(
        <div className="flex h-full items-center p-3 overflow-scroll">
            {
                children
            }
        </div>
    );
}

export default NavWrapper;
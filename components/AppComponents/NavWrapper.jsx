const NavWrapper = ({children}) => {
    return(
        <div className="flex items-center p-3 dark:bg-slate-800">
            {
                children
            }
        </div>
    );
}

export default NavWrapper;
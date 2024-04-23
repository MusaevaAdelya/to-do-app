function Header({children}) {
    return (
        <div className="flex justify-between items-end space-x-5">
            {children}
        </div>
    )
}

export default Header

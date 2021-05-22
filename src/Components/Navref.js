const Navref = ({reference, name}) => {
    return (
    <div className="navbar-ref" onClick={() => reference?.current?.scrollIntoView({behavior:"smooth", block:"end"})}>
        {name}
    </div>)
}

export default Navref
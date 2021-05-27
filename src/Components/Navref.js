const Navref = ({reference, name}) => {
    return (
    <div className="navbar-ref" onClick={() => reference?.current?.scrollIntoView({behavior:"smooth", block:"nearest"})}>
        {name}
    </div>)
}

export default Navref
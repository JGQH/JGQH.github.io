const Navref = ({reference, name}) => {
    return (
    <div className="navbar-ref" onClick={() => reference?.current?.scrollIntoView()}>
        {name}
    </div>)
}

export default Navref
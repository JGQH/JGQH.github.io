const Navref = ({reference, name}) => {
    return (
    <div className="navbar-ref" onClick={() => reference?.current?.scrollIntoView()}>
        {name}
    </div>)
}

const Navbar = ({references, names}) => {
    return (
    <div className="port-navbar">
        {references.map((reference, i) => (
            <Navref key={i} reference={reference} name={names[i]} />
        ))}
    </div>)
}

export default Navbar
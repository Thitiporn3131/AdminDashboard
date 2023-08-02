import "./navbar.scss"

const Navbar = () =>{
    return (
        <div className="navbar">
            <div className="logo">
                <img src="logo.svg" alt="" />
                <span>sajahadmin</span>
            </div>
            <div className="icons">
                <img src="/search.svg" alt="" className="icon" />
                <img src="/app.svg" alt="" className="icon" />
                <img src="expand.svg" alt="" className="icon" />
                <div className="notification">
                    <img src="/notifications.svg" alt=""/>
                    <span>1</span>
                </div>
                <div className="user">
                    <img 
                        src="https://i.scdn.co/image/ab6761610000e5ebb0527c32ded4594c557f613a"
                        alt=""
                    />
                    <span>Sajah</span>
                </div>
                <img src="/settings.svg" alt="" className="icon" />
            </div>
        </div>
    )
    
}
export default Navbar
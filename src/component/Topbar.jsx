import { NavLink } from "react-router-dom";

export const Topbar = () => {
    return(
        <div className="controls-bar">
            <NavLink to="/posts/new" className="btn btn-primary">Create post</NavLink>
        </div>
    )
}
import { Link } from "react-router-dom";
function Sidebar(){
    return(
        <>
            <div id="sidebar">
			    <ul>
				    <li>
					    <h2>Archives</h2>
					    <ul>
						    <li><Link to="#">Aliquam libero</Link></li>
						    <li><Link to="#">Consectetuer adipiscing elit</Link></li>
						    <li><Link to="#">Metus aliquam pellentesque</Link></li>
						    <li><Link to="#">Urnanet non molestie semper</Link></li>
						    <li><Link to="#">Proin gravida orci porttitor</Link></li>
					    </ul>
				    </li>
			    </ul>
		    </div>
        </>
    )
}
export default Sidebar;
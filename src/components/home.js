import React, { useEffect }from "react";
import Showbar from './showbar';
import Sidebar from './sidebar';
const Home = (props) => {
     useEffect(() => {
        props.setActive(4)
    })
    
    return (
        <>
            <Showbar />
            <Sidebar />
        </>
    )
    
}
export default Home;
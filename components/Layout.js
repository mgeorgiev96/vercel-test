import Footer from "./Footer";
import Navbar from "./Navbar";

const Layoutw = ({children}) => {
    return (
        <div className="content">
            <Navbar/>
            {children}
            <Footer/>
        </div>
    );
}
 
export default Layoutw;
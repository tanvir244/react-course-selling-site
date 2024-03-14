import Cart from "../Cart/Cart";
import Courses from "../Courses/Courses";

const Main = () => {

    return (
        <div className="flex justify-between">
            <Courses></Courses>
            <Cart></Cart>
        </div>
    );
};

export default Main;
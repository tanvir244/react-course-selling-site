import { useState } from "react";
import Cart from "../Cart/Cart";
import Courses from "../Courses/Courses";

const Main = () => {
    const [select, setSelect] = useState([]);
    const [time, setTime] = useState(0);
    const [price, setPrice] = useState(0);

    const handleSelectItem = course => {
        const newSelection = [...select, course];
        setSelect(newSelection);
    }
    const handleTotalCreditHour = hour =>{
        const newTime = time + hour;
        setTime(newTime);
    }
    const handleTotalPrice = nowPrice => {
        const newTotalPrice = price + nowPrice;
        setPrice(newTotalPrice);
    }

    return (
        <div className="flex justify-between">
            <Courses 
                handleSelectItem={handleSelectItem}
                handleTotalCreditHour={handleTotalCreditHour}
                handleTotalPrice={handleTotalPrice}
            ></Courses>
            <Cart
                select={select}
                time={time}
                price={price}
            ></Cart>
        </div>
    );
};

export default Main;
import { FaDollarSign } from "react-icons/fa";
import PropTypes from 'prop-types';

const Course = ({ course, handleSelectItem, handleTotalCreditHour, handleTotalPrice }) => {
    const { name, description, photo, price, credit } = course;

    return (
        <div className="border p-3 space-y-4 rounded-lg shadow-xl">
            <img src={photo} alt="" />
            <h3 className="text-lg font-bold">{name}</h3>
            <p className="text-[#7c7c7c] text-sm">{description}</p>
            <div className="flex justify-between text-sm font-semibold">
                <p className="flex gap-1">
                    <span className="flex items-center"><FaDollarSign /></span> price: {price}
                </p>
                <p className="flex gap-1">Credit hour: {credit}</p>
            </div>
            <button onClick={() => {
                handleSelectItem(course)
                handleTotalCreditHour(credit)
                handleTotalPrice(price)
                }} className="btn w-full rounded-lg bg-black text-white py-1 border-2 border-black hover:border-gray-300 hover:bg-white hover:text-black transition-all">Select</button>
        </div>
    );
};

Course.propType = {
    course: PropTypes.array.isRequired,
    handleSelectItem: PropTypes.func,
    handleTotalPrice: PropTypes.func
}

export default Course;
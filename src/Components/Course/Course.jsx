import { FaDollarSign } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";
import PropTypes from 'prop-types';

const Course = ({ course }) => {
    const { name, description, photo, price, credit } = course;

    return (
        <div className="border p-3 space-y-4 rounded-lg">
            <img src={photo} alt="" />
            <h3 className="text-lg font-bold">{name}</h3>
            <p className="text-[#7c7c7c] text-sm">{description}</p>
            <div className="flex justify-between text-sm font-semibold">
                <span><FaDollarSign /></span>
                <p className="flex gap-1">price: {price}</p>
                <button><FaRegBookmark /></button>
                <p className="flex gap-1">Credit hour: {credit}</p>
            </div>
            <button className="btn w-full bg-black text-white py-1 border-2 border-black hover:border-gray-300 hover:bg-white hover:text-black transition-all">Select</button>
        </div>
    );
};

Course.propType = {
    course: PropTypes.array.isRequired
}

export default Course;
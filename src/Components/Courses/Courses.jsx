import { useEffect, useState } from "react";
import Course from "../Course/Course";
import PropTypes from 'prop-types';

const Courses = ({handleSelectItem, handleTotalCreditHour, handleTotalPrice}) => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('/courses.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])

    return (
        <div className="w-[72%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border p-6 rounded-lg shadow-xl">
            {
                courses.map(course => <Course
                key={course.id}
                course={course}
                handleSelectItem={handleSelectItem}
                handleTotalCreditHour={handleTotalCreditHour}
                handleTotalPrice={handleTotalPrice}
                ></Course>)
            }
        </div>
    );
};

Courses.propTypes = {
    handleSelectItem: PropTypes.func,
    handleTotalCreditHour: PropTypes.func,
    handleTotalPrice: PropTypes.func
}

export default Courses;
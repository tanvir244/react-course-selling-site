import { useEffect, useState } from "react";
import Course from "../Course/Course";

const Courses = () => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('/courses.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])

    return (
        <div className="w-[75%] grid grid-cols-3 gap-4 border p-6 rounded-lg">
            {
                courses.map(course => <Course
                key={course.id}
                course={course}
                ></Course>)
            }
        </div>
    );
};

export default Courses;
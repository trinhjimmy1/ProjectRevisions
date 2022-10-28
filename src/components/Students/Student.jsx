import React, {useContext} from 'react';
import {StudentsContext} from "../context/StudentsContext.js";

const Student = ({student, index}) => {
    const {setStudents} = useContext(StudentsContext);

    const handleClick = () => {
        setStudents(prevState => {
            const newArr = [...prevState];
            newArr.splice(index, 1);
            return newArr;
        })
    }

    return (
        <div>
            {student.lastname} {student.firstname}
            <button onClick={handleClick}>X</button>
        </div>
    );
};

export default Student;
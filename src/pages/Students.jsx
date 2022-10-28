import React, {useState} from 'react';
import StudentsList from "../components/Students/StudentsList.jsx";
import {StudentsContext} from "../components/context/StudentsContext";

const Students = () => {
    const [students, setStudents] = useState([
        {
            lastname: "Mavracic",
            firstname: "Jonathan",
            age: 32,
        },
        {
            lastname: "Mavracic",
            firstname: "Eliott",
            age: 5,
        },
        {
            lastname: "Mavracic",
            firstname: "Joseph",
            age: 7,
        },
    ])
    return (
        <StudentsContext.Provider
            value={{
            setStudents: setStudents
        }}>
            <div>
                <h1>Students</h1>
                <StudentsList students={students}/>
            </div>
        </StudentsContext.Provider>
    );
};

export default Students;
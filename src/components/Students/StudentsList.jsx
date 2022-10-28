import React from 'react';
import Student from "./Student.jsx";

const StudentsList = ({students}) => {
    return (
        <div>
            {
                students.map((student, index) => (
                    <Student key={index} index={index} student={student}/>
                ))
            }
        </div>
    );
};

export default StudentsList;
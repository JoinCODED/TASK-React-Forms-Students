import React from 'react'
import Student from './Student'

function StudentsList({list}) {
    const students = list.map(student =>
        <Student student={student} />)
    return (
        <div>
            {students}
        </div>
    )
}

export default StudentsList

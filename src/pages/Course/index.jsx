import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CourseService from '../../api/service/CourseService'

function Course() {

    const params = useParams()
    const [courseId, setCourseId] = useState(undefined)
    const [courseData, setCourseData] = useState({
        courseId: undefined,
        courseName: undefined,
        courseCategory: undefined,
        lecturer: undefined
    })

    useEffect(() => {
        setCourseId(params?.courseId)
    }, [params])

    useEffect(() => {

        if (courseId)

            (async () => {
                let response = await CourseService.getCourseById(courseId);
                console.log(response);
            })();

    }, [courseId])

    return (
        <div>One Course</div>
    )
}

export default Course
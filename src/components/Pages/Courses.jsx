import React from 'react'
import CourseGrid from '../Organisms/CourseGrid'
import { connect } from 'react-redux'

const Courses = () => {
  return <CourseGrid courses={courses} />
}

const mapStateToProps = (state) => ({
  courses: state.courses,
})

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Courses)

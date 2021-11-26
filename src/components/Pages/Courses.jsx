import React, { Component } from "react"
import CourseGrid from "../Organisms/CourseGrid";
import {get} from 'axios';
class Courses extends Component {

  constructor(props) {
    super(props)

    this.state = {
      courses: []
    }
  }

  componentDidMount() {
    const courses_request = get(process.env.REACT_APP_BASE_API_COURSES)
    courses_request
    .then(({data}) =>
     this.setState({courses: data}));
  }

  render() {
    const { courses } = this.state

    return <CourseGrid courses={courses} />
  }
  
}

export default Courses
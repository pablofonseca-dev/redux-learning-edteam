import {get} from 'axios';

const useCourseMatch = ({id}) => {
    const endpoint = `${process.env.REACT_APP_BASE_API_COURSES}?id=`;
    const courseRequest = get(`${endpoint}${id}`);
    console.log(courseRequest);
    return 0;
}

export default useCourseMatch;
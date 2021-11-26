import {get} from 'axios';
import {useState, useEffect} from 'react';

const useCourseMatch = (id) => {

    const [data, setData] = useState();
    const [error, setError] = useState();

    const endpoint = `${process.env.REACT_APP_BASE_API_COURSES}?id=`;
    
    useEffect(() => {
        get(`${endpoint}${id}`)
        .then(({data}) => {
            const [course] = data;
            setData(course) 
        })
        .catch(err => setError(err)); 
    }, [id]);

    return [data, error]; 
}

export default useCourseMatch;
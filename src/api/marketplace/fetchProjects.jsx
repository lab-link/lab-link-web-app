import api from '../api';

const fetchProjects = async () =>{
    try {
        const response = await api.get(`/get-all-projects`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export default fetchProjects;
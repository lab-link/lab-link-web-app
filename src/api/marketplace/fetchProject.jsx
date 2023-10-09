import api from '../api';

const fetchProject = async (profileId) =>{
    try {
        const response = await api.get(`/get-project/${profileId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export default fetchProject;
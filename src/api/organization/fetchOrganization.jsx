import api from '../api';

const fetchOrganization = async (projectId) =>{
    try {
        const response = await api.get(`/get-organization-by-project-id/${projectId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export default fetchOrganization;
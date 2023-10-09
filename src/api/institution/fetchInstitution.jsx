import api from '../api';

const fetchProfileInstitutions = async (profileId) =>{
    
    try {
        const response = await api.get(`/get-all-institutions-by-profile/${profileId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export default fetchProfileInstitutions;
import api from '../api';

const fetchUserProfile = async (profileId) =>{
    try {
        const response = await api.get(`/get-profile/${profileId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export default fetchUserProfile;
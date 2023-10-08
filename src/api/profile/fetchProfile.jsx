import axios from 'axios';


const fetchUserProfile = async (profileId) =>{
    const apiUrl = `http://127.0.0.1:5000/get-profile/${profileId}`;
    
    try {
        const response = await axios.get(apiUrl);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export default fetchUserProfile;
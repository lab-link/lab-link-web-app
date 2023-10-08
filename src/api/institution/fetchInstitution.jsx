import axios from 'axios';


const fetchProfileInstitutions = async (profileId) =>{
    const apiUrl = `http://127.0.0.1:5000/get-all-institutions-by-profile/${profileId}`
    
    try {
        const response = await axios.get(apiUrl);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export default fetchProfileInstitutions;
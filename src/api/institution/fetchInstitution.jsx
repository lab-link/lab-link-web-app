import api from '../api';

const fetchProfileInstitutions = (profileId) =>{
    return new Promise(async (resolve, reject) => {
        try {
            const response = await api.get(`/get-all-institutions-by-profile/${profileId}`);
            resolve(response.data)
        } catch (error) {
            reject(error);
        }
    });
}


export default fetchProfileInstitutions;
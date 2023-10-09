import api from '../api';

const fetchUserProfile = (profileId) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await api.get(`/get-profile/${profileId}`);
        resolve(response.data);
      } catch (error) {
        reject(error);
      }
    });
  };

export default fetchUserProfile;
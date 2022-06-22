import axios from 'axios';

const API_URL = '/api/goals/'

// create goal
const createGoal = async (goalData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    // console.log(`@service create goal ${token}`);
    const response = await axios.post(API_URL, goalData, config);

    return response.data
}

// get goals
const getUserGoals = async (token) => {
    const config = {
        headers:{
            Authorization: `Bearer ${token}`
        },
    }
    const response = await axios.get(API_URL, config)
    return response.data
}


// update goal
// const updateGoal = async (goalData, token) => {
//     const config = {
//         headers:{
//             Authorization: `Bearer ${token}`
//         }
//     }
//     const response = await axios.put(API_URL + 'id', goalData, config);
// }

// delete goal
const deleteGoal = async (goalId, token) => {
    const config = {
        headers:{
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.delete(API_URL + 'id', goalId, config);

    return response;
}

const goalService = {
    createGoal,
    getUserGoals,
    deleteGoal
}

export default goalService
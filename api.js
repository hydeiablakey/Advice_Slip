import axios from 'axios'; 

export const generateAdvice = async () => {
    const url = `https://api.adviceslip.com/advice`
    const response = await axios.get(url); 
    return response
}
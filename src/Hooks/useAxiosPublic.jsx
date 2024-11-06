import axios from "axios";

const axioxPublic = axios.create({
    baseURL: 'http://localhost:5000'
})
const useAxiosPublic = () => {
    return axioxPublic;
};

export default useAxiosPublic;
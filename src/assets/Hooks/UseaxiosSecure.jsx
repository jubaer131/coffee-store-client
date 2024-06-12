import axios from "axios";


const axiosCommon = axios.create({
    baseURL: 'http://localhost:5001'
})
const UseaxiosSecure = () => {

    return axiosCommon
};

export default UseaxiosSecure;
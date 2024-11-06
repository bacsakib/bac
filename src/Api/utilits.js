import axios from "axios";
export const imageUpload = async image => {
    const formData = new FormData();
    formData.append('image', image);

    const { data } = await axios.post(
        `https://api.imgbb.com/1/upload?key=8c694a3df6b0b4cb185b0799232d3e07`,
        formData
    );
    return data;
};

import axios from "axios";
const url = "http://localhost:8000";

///////////////////////////////////////////////////////////////////
//Doctor
export const addDoctor = async (obj) => {
    try {
        const data = await axios.post(`${url}/adddoctor` , obj , {withCredentials: true});
        return data;
    } catch (error) {
        return error;
    }
}

export const logDoctor = async (obj) => {
    try {
        const data = await axios.post(`${url}/logdoctor` , obj , {withCredentials: true});
        return data;
    } catch (error) {
        return error;
    }
}

export const getAllDoctor = async () => {
    try {
        const data = await axios.get(`${url}/getalldoctor`);
        return data;
    } catch (error) {
        return error;
    }
}

export const getDoctor = async (id) => {
    try {
        const data = await axios.get(`${url}/getdoctor/${id}`);
        return data;
    } catch (error) {
        return error;
    }
}

export const updateDoctor = async (obj) => {
    try {
        console.log(obj);
        const data = await axios.post(`${url}/updatedoctor` , obj);
        return data;
    } catch (error) {
        return error;
    }
}

///////////////////////////////////////////////////////////////////
// Patient
export const addPatient = async (obj) => {
    try {
        const data = await axios.post(`${url}/addpatient` , obj, {withCredentials: true});        
        return data;
    } catch (error) {
        return error;
    }
}

export const logPatient = async (obj) => {
    try {
        const data = await axios.post(`${url}/logPatient` , obj , {withCredentials:true});
        return data;
    } catch (error) {
        return error;
    }
}

export const getAllPatient = async (obj) => {
    try {
        const data = await axios.get(`${url}/getallpatient`);
        return data;
    } catch (error) {
        return error;
    }
}

export const getPatient = async (id) => {
    try {
        const data = await axios.get(`${url}/getpatient/${id}`);
        return data;
    } catch (error) {
        return error;
    }
}

export const searchDoctor = async (obj) => {
    try {
        const data = await axios.get(`${url}/searchdoctor?name=${obj.name}&country=${obj.country}&speciality=${obj.speciality}&qualification=${obj.qualification}`);
        return data;
    } catch (error) {
        return error;
    }
}

export const updatePatient = async (obj) => {
    try {
        console.log(obj);
        const data = await axios.post(`${url}/updatepatient` , obj);
        return data;
    } catch (error) {
        return error;
    }
}

///////////////////////////////////////////////////////////////////
// Admin
export const logAdmin = async (obj) =>{
    try{
        const data = await axios.post(`${url}/logAdmin`, obj, {withCredentials: true}); 
        return data;
    }
    catch(err){
        return err;
    }
}


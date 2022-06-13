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
        // console.log(obj);
        const data = await axios.post(`${url}/updatedoctor` , obj);
        return data;
    } catch (error) {
        return error;
    }
}

export const addPendingRequest = async (obj) => {
    try {
        console.log('before api')
        const data = await axios.post(`${url}/addpendingrequest` , obj);
        console.log('after api')
        return data;
    } catch (error) {
        return error;
    }
}

export const getPendingAppts = async (id) => {
  try {
    const data = await axios.get(`${url}/getpendingappts/${id}`);
    return data;
  } catch (error) {
    return error;
  }
};

export const deletependingReq = async (obj) => {
  try {
    const data = await axios.post(`${url}/deletependingreq`, obj);
    return data;
  } catch (error) {
    return error;
  }
};

export const addupcomingAppt = async (obj) => {
    try {
        const data = await axios.post(`${url}/addupcomingappt`,obj);
        return data;        
    } catch (error) {
        return error;
    }
}

export const getUpcomingAppts = async (id) => {
  try {
    const data = await axios.get(`${url}/getupcomingappts/${id}`);
    return data;
  } catch (error) {
    return error;
  }
};

export const addPastAppt = async(obj) => {
    try {
        const data = await axios.post(`${url}/addpastappt`,obj);
        return data;
    } catch (error) {
        return error;
    }
}

export const getPastAppts = async (id) => {
  try {
    const data = await axios.get(`${url}/getpastappts/${id}`);
    return data;
  } catch (error) {
    return error;
  }
};

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
        // console.log(obj);
        const data = await axios.post(`${url}/updatepatient` , obj);
        return data;
    } catch (error) {
        return error;
    }
}

export const addPatUpcomingAppt = async (obj) => {
    try {
        const data = await axios.post(`${url}/addpatupcomingappt`, obj);
        return data;
    } catch (error) {
        return error;
    }
}

export const addPatPastAppt = async (obj) => {
    try {
        const data = await axios.post(`${url}/addpatpastappt` , obj);
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


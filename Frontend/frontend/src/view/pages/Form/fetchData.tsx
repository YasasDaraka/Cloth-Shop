import axios from "axios";
import {isAuthenticated} from "./tableDetails/authentication";


export const signup = async (url: string, data: any) => {


        try {
            const response = await axios.post(url, JSON.stringify(data), {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            if (response.status === 201) {
                alert(`Saved Successfully!`)
            }
        } catch (error: any) {
            if (error.response) {
                console.log(error)
                /* alert(error.response.data.message);*/
            }
        }

}
export const saveData = async (url: string, data: any, setData: () => void) => {

    if (await isAuthenticated()) {

        try {
            const token = localStorage.getItem('accessToken')
            const response = await axios.post(url, JSON.stringify(data), {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            if (response.status === 201) {
                alert(`Saved Successfully!`)
                setData();
            }
        } catch (error: any) {
            if (error.response) {
                console.log(error)
                /* alert(error.response.data.message);*/
            }
        }
    }
}
export const updateData = async (url: string, data: any, setData: () => void) => {

    if (await isAuthenticated()) {
        try {
            const token = localStorage.getItem('accessToken')
            const response = await axios.put(url, JSON.stringify(data), {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            if (response.status === 204) {
                alert(`Update Successfully!`)
                setData();
            }
        } catch (error: any) {
            if (error.response) {
                alert(error.response.data.message);
            }
        }
    }
}

export const searchData = async (url: string, mapping: string, id: string) => {
    if (await isAuthenticated()) {
        try {
            const token = localStorage.getItem('accessToken')
            const response = await axios.get(url + mapping + id, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (response.status === 200) {
                return response.data;
            }
        } catch (error: any) {
            if (error.response) {
                alert(error.response.data.message);
            }
        }
    }
};

export const searchAllData = async (url: string) => {
    let list = []
    if (await isAuthenticated()) {
        try {
            const token = localStorage.getItem('accessToken')
            const response = await axios.get(url + "/getAll", {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (response.status === 200) {
                list = response.data;
            }
        } catch (error: any) {
            if (error.response) {
                console.log(error.response.data.message);
            }
        }
        return list;
    }
};

export const deleteEntity = async (url: any, params: any, setData: () => void) => {
    if (await isAuthenticated()) {
        try {
            const token = localStorage.getItem('accessToken')
            const response = await axios.delete(url, {
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                params: params
            });
            if (response.status === 204) {
                alert(`delete Successfully!`)
                setData();
            }
        } catch (error: any) {
            if (error.response) {
                console.log(error)
                if (error.response.status === 404) {
                    alert(error.response.data.error);
                } else {
                    alert("error on delete");
                }

            }
        }
    }

}

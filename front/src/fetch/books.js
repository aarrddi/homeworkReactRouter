import instance from "../modules/axios.js";

export const listBooks = async () =>{
    try{

        const response = await instance({
            method: "GET",
            url: "/books"
        })

        return response.data;

    }catch(err){
        throw new Error(err)
    }
}
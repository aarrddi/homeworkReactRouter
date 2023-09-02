 import instance from "../modules/axios.js";

 export const login = async(params) =>{
    try{

        const {email,password} = params;

        const response = await instance ({
            method: "POST",
            url: "/login",
            data: {
                email,
                password
                    }
        })


        const {accessToken} = response.data
        localStorage.setItem("accessToken",accessToken)
        return response.data;

    }catch(err){
        console.log(err);
        // throw new Error(err)
    }
 }
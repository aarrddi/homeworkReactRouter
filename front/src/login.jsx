import { useState } from "react";
import { 
    Container, 
    FormControl,
    FormLabel,
    Input,
    Button,
    Center,
    Text,
    Stack
        } from '@chakra-ui/react'
import {login} from "./fetch/auth.js"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom";



function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();


const handleSubmit = async () => {
    try{
    await login({email,password})
    
    Swal.fire({
        icon: 'success',
        title: 'Login Success',
        text: 'Login Successfully',
        showConfirmButton: false,
        timer: 1500
      })

      navigate("/");
    }catch(err){
        Swal.fire({
            icon: 'error',
            tittle: 'Login Failed',
            text: 'Invalid Email/Password',
            showConfirmButton: false,
            timer: 1500
        })
    }

}
return(
    <>
    <Center h="100%" w="100%">
            <Stack spacing="10px">
            <Text fontSize='5xl' align="center">Login</Text>
        <FormControl>
            <FormLabel>Email Address</FormLabel>
            <Input type="email" onChange={(e) => setEmail(e.target.value)} />
            <FormLabel>Password</FormLabel>
            <Input type="password" onChange={(e) => setPassword(e.target.value)} />
            <Button onClick={handleSubmit}>SUBMIT</Button>
        </FormControl>
            </Stack>
        </Center>
    {/* </Container> */}
    </>
)
}

export default Login;
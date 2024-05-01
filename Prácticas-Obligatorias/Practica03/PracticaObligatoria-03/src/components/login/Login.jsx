import { useState } from "react";
const Login = () => {
    const [username, setUsername] = useState('');

    const handleChange = (event) => {
        event.preventDefault();
        
        const value = event.target.value;

        if (value.toLowerCase().includes("o")) {


            alert("El username no tiene que contener o")
            window.location.reload();
        

        } else {
            setUsername(value);
            
        };
    }
    
    const handleRegister = () => {

        if (username === "" || username.toLowerCase().includes("o")) {
            alert("Usuario inválido");
        } else {

            alert("Ha ingresado correctamente")

        };
    }

    return (

        <form onSubmit={handleRegister}>
            <label>
                User Name:
                <input type="text" name="name" onChange={handleChange} />
            </label>
            <button >Registrarse</button>
            <p>{username}</p>
        </form>
    );
};

export default Login



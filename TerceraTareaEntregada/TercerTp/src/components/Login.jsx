import React, {useState} from "react";
import "./Login.css"
const Login = () => {

    const [name, setName] = useState("");

    const handleUsername = (e) => {
        const value = e.target.value;
        setName(value)
    }

    const hanldeKeyDown = (e) =>{
        if(e.key.toLowerCase() === "o")
            return alert("Por favor, Nombres de usuario sin la letra o!")
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(name === ""  || name.toLowerCase().includes("o"))
            return alert("Usuario invalido, vuelva a intentarlo")

        alert("Usuario registrado correctamente!");
    };
        return(
        <div className="contenedor">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                placeholder="Nombre del usuario"
                value={name}
                onKeyDown={hanldeKeyDown}
                onChange={handleUsername}
                className="input-field"
                />
                <button className="register-button">Registrarse</button>
                <p>{name}</p>
            </form>
        </div>
    )
}

export default Login
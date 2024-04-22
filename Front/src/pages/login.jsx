import { useState } from "react";

export default function Login({ onReset }) {
  const [formData, setFormData] = useState({username: "", password: ""});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmitClick = (event) => {
    event.preventDefault();
    console.log("username = "+username.value+", password = "+password.value)
    if(username == "" ){//marche pas
      console.log(event)
      alert("Veillez remplir tous les champs");
    }
    return;
  };
  
  const handleResetClick = () => {
    setFormData({
      username: "",
      password: "",
    });
    onReset();
  }

  return (
    <> 
      <h2>Login</h2>

      <form>
        <label htmlFor="username">Nom Utilisateur:</label>
        <input type="text" id="username" name="username" value={formData.username} onChange={handleChange}/>
        <br />

        <label htmlFor="password">Mot de passe:</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange}/>
        <br />

        <button onClick={handleSubmitClick}>Connexion</button>
        <button onClick={handleResetClick}>Annuler</button>
      </form>
    </>
  );
}
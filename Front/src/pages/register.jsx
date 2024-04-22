import { useState } from "react";

export default function Register({ onReset }) {
  const [formData, setFormData] = useState({nom: "", prenom: "", username: "", password: "", password2: ""});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("nom = "+nom.value+", prenom = "+prenom.value+", username = "+username.value+", password = "+password.value+", password2 = "+password2.value)
    alert(`Bienvenue, ${formData.prenom}\nVotre compte est maintenant créé\n -CouD'Coud`,
    );
    //faut un check si les champs sont vides
  };

  const handleReset = () => {
    // Reset the form data to its initial state
    setFormData({
      nom: "",
      prenom: "",
      username: "",
      password: "",
      password2: ""
    });
    onReset();
  };

  return (
    <> 
      <h2>Enregistrement</h2>

      <form onSubmit={handleSubmit} onReset={handleReset}>
        <label htmlFor="nom">Nom:</label>
        <input type="text" id="nom" name="nom" value={formData.nom} onChange={handleChange}/>

        <label htmlFor="prenom">Prénom:</label>
        <input type="text" id="prenom" name="prenom" value={formData.prenom} onChange={handleChange}/>
        <br />

        <label htmlFor="username">Nom Utilisateur:</label>
        <input type="text" id="username" name="username" value={formData.username} onChange={handleChange}/>
        <br />

        <label htmlFor="password">Mot de passe:</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange}/>
        <br />
        <label htmlFor="password2">Retaper votre Mot de passe:</label>
        <input type="password" id="password2" name="password2" value={formData.password2} onChange={handleChange}/>
        <br />

        <button type="submit">Enregistrer</button>
        <button type="reset">Annuler</button>
      </form>
    </>
  );
}


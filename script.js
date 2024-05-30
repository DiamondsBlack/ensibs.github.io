function handleSubmit(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire
    
    // Récupère le formulaire avec l'identifiant contact-form
    const form = document.getElementById('contact-form');
    
    // Encode l'objet du message du formulaire pour l'inclure dans une URL
    const subject = encodeURIComponent("Prise de contact");
    
    // Encode le corps du message du formulaire pour l'inclure dans une URL
    const body = encodeURIComponent(`
      Nom: ${form.nom.value}\n
      Prénom: ${form.prenom.value}\n
      Adresse email: ${form.email.value}\n
      Date de naissance: ${form.date.value}\n
      Formations souhaitées: ${form.formations.value}\n
      Actuellement, vous êtes: ${form.annee.value}\n
      Langues parlées: ${Array.from(form.langues).filter(langue => langue.checked)
        .map(langue => langue.value).join(', ')}\n
      Demande spécifique:\n${form.demande.value}
    `);
    
    // Rediriger vers messagerie
    window.location.href = `mailto:prenom.nom@univ-ubs.fr?subject=${subject}&body=${body}`;
  }
  
  document.getElementById('contact-form').addEventListener('submit', handleSubmit);
  
  
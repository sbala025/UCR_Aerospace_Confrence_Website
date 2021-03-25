function submitForm(e){
    e.preventDefault();
    fetch('/api/rsvp', {
        method:'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: document.getElementById('emailInput').value,
          firstName: document.getElementById('firstNameInput').value,
          lastName: document.getElementById('lastNameInput').value,
          year: document.getElementById('yearInput').value,
          major: document.getElementById('majorInput').value,
          heardAbout: document.getElementById('heardFromInput').value,
        })
      })
      .then(resp=>{
        return resp.json();
      })
      .then(data=>{
        document.getElementById('rsvpSubmissionStatus').innerText = data.message;
      })
      .catch(error=>{
        document.getElementById('rsvpSubmissionStatus').innerText = error;
      });

}

$("#rsvpForm").submit((e)=>{
  submitForm(e)
});
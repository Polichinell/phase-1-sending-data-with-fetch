
const submitData = (userName, userMail) => {
    const formData = {
        name: userName,
        email: userMail,
      };

    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(formData),
      })
      .then(function (response) {
        return response.json();
      })
      .then(function (object) {
        document.querySelector('body').append(object.id);
      })
      .catch(function (error) {
        alert("Oopsie");
        console.log(error.message);
        document.querySelector('body').append(error.message)
      })
}

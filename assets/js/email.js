const sendEmail = (e) => {
    // e.preventDefault();
    console.log('Send Email');
    alert('Send Email');
    var params = {
      name: document.getElementById("fullname").value,
      email: document.getElementById("emailaddress").value,
      message: document.getElementById("message").value,
    };

    const serviceId = "service_l2olwpu";
    const templateId = "template_7am3a5l";

    emailjs
      .send(serviceId, templateId, params)
      .then((res) => {
        document.getElementById("fullname").value = "";
        document.getElementById("emailaddress").value = "";
        document.getElementById("message").value = "";
      })
      .catch((error) => {
        console.log(error);
      });
  };
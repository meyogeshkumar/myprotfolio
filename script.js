var typed = new Typed("#type", {
  strings: [" Frontend Developer", " Web Designer", " Software Developer"],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 100,
  loop: true,
});
function downloadPDF() {
  const link = document.createElement("a");
  link.href = "resume/Yogeshkumar resume.pdf";
  link.download = "Yogeshkumar.pdf";
  document.body.appendChild(link);
  console.log(document.body.appendChild(link));
  link.click();
  console.log(link.click());
}
function sendmail(event) {
  event.preventDefault();
  if (
    document.getElementById("name").value == "" &&
    document.getElementById("email").value == "" &&
    document.getElementById("message").value == ""
  ) {
    error1();
  } else {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
    const serviceID = "service_ugwnjiu";
    const templateID = "template_0gquztb";

    emailjs
      .send(serviceID, templateID, params)
      .then((res) => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        successfully();
      })

      .catch((err) => console.log(err));
  }
}

function successfully() {
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Send Successfully",
    showConfirmButton: false,
    timer: 1500,
  });
}
function error1() {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Fill the input box",
  });
}

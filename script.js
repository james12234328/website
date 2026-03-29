const photoInput = document.getElementById("photo");
const preview = document.getElementById("preview");

photoInput.addEventListener("change", function() {
const file = this.files[0];
const reader = new FileReader();

reader.onload = function() {
preview.src = reader.result;
preview.style.width = "100px";
};

reader.readAsDataURL(file);
});

document.getElementById("birthdayForm").addEventListener("submit", function(e) {
e.preventDefault();

const name = document.getElementById("name").value;
const dob = document.getElementById("dob").value;
const message = document.getElementById("message").value;

const phone = "91XXXXXXXXXX";

const text = `New Client:
Name: ${name}
DOB: ${dob}
Message: ${message}`;

const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
window.open(url, "_blank");

generateWebsite(name, message, preview.src);

alert("Submitted 🎉");
});

function generateWebsite(name, message, photo) {

const html = `
<html>
<body style="background:black;color:white;text-align:center;">
<h1>Happy Birthday ${name} 🎂</h1>
<p>${message}</p>
<img src="${photo}" width="200">
</body>
</html>
`;

const blob = new Blob([html], { type: "text/html" });
const link = document.createElement("a");

link.href = URL.createObjectURL(blob);
link.download = "birthday.html";
link.click();
}

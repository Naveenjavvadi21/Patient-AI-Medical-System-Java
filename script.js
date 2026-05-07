const API_URL = "http://localhost:8080/patients";

// Register patient
function registerPatient() {
    const patient = {
        name: document.getElementById("name").value,
        age: document.getElementById("age").value,
        bloodGroup: document.getElementById("blood").value,
        disease: document.getElementById("disease").value
    };

    fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(patient)
    })
    .then(res => res.json())
    .then(data => {
        alert("Patient Registered!");
    });
}

// Get patients
function getPatients() {
    fetch(API_URL)
    .then(res => res.json())
    .then(data => {
        const list = document.getElementById("patientList");
        list.innerHTML = "";

        data.forEach(p => {
            const li = document.createElement("li");
            li.textContent = `${p.name} | Age: ${p.age} | Blood: ${p.bloodGroup}`;
            list.appendChild(li);
        });
    });
}

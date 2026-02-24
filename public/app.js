document.querySelector("#mainForm").onsubmit = async (e) => {

  e.preventDefault();

  const data = new FormData(e.target);

  try {
    const response = await fetch("/api/register-patient", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(value)
    });
    if (response.ok) {
      const result = await response.json();
      alert("Registration successful: ", result);
    } else {
      alert("how");
    }
  } catch (error){
    console.error("AAAAAAAAAAAAA ", error);
    alert("Error");
  }

}

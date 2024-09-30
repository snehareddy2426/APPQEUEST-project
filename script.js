document.getElementById("appointmentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const patientName = document.getElementById("patientName").value;
    const doctorName = document.getElementById("doctorName").value;
    const appointmentDate = document.getElementById("appointmentDate").value;
    const symptoms = document.getElementById("symptoms").value;

    // Simple simulation of predictive analysis
    const predictiveText = predictiveAnalysis(symptoms);
    
    document.getElementById("predictiveAnalysis").innerHTML = `
        <h2>Predictive Analysis</h2>
        <p>Thank you, ${patientName}. Based on your symptoms, we recommend seeing a <strong>${predictiveText}</strong>.</p>
    `;

    // Clear form fields
    document.getElementById("appointmentForm").reset();
});

// A very basic predictive analysis function
function predictiveAnalysis(symptoms) {
    let analysis = "general physician";
    
    if (symptoms.toLowerCase().includes("headache")) {
        analysis = "neurologist";
    } else if (symptoms.toLowerCase().includes("fever") || symptoms.toLowerCase().includes("cough")) {
        analysis = "pulmonologist";
    } else if (symptoms.toLowerCase().includes("chest pain")) {
        analysis = "cardiologist";
    }
    
    return analysis;
}

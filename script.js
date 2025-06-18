
function calculateDueDate() {
    const lastDate = new Date(document.getElementById("lastDate").value);
    const interval = parseInt(document.getElementById("interval").value);

    if (!isNaN(lastDate.getTime()) && !isNaN(interval)) {
        const nextDue = new Date(lastDate.setMonth(lastDate.getMonth() + interval));
        document.getElementById("result").innerText = "Next Due Date: " + nextDue.toISOString().split('T')[0];
    } else {
        document.getElementById("result").innerText = "Please enter valid inputs.";
    }
}

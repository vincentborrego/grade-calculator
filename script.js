function setChoice(choice) {
    document.getElementById('assignment-form').style.display = (choice === 'assignment') ? 'block' : 'none';
    document.getElementById('class-form').style.display = (choice === 'class') ? 'block' : 'none';
}

function calculateAssignmentGrade() {
    const pointsReceived = parseFloat(document.getElementById('points-received').value);
    const totalPoints = parseFloat(document.getElementById('total-points').value);

    const resultElement = document.getElementById('assignment-result');

    if (isNaN(pointsReceived) || isNaN(totalPoints) || totalPoints === 0) {
        resultElement.textContent = "Please enter valid points.";
        resultElement.style.color = "black"; // Reset to default
        return;
    }

    const grade = (pointsReceived / totalPoints) * 100;

    // Determine passing or failing and set message
    if (grade < 70) {
        resultElement.textContent = `Your total grade is: ${grade.toFixed(2)}%. You failed!`;
        resultElement.style.color = "red";
    } else {
        resultElement.textContent = `Your total grade is: ${grade.toFixed(2)}%. You passed!`;
        resultElement.style.color = "green";
    }
}

function calculateClassGrade() {
    const formativesCount = parseFloat(document.getElementById('formatives-count').value);
    const summativesCount = parseFloat(document.getElementById('summatives-count').value);
    const formativesTotal = parseFloat(document.getElementById('formatives-total').value);
    const summativesTotal = parseFloat(document.getElementById('summatives-total').value);

    const resultElement = document.getElementById('class-result');

    if (
        isNaN(formativesCount) || isNaN(summativesCount) || 
        isNaN(formativesTotal) || isNaN(summativesTotal) ||
        formativesCount <= 0 || summativesCount <= 0
    ) {
        resultElement.textContent = "Please enter valid numbers.";
        resultElement.style.color = "black"; // Reset to default
        return;
    }

    const formativeGrade = (formativesTotal * 40) / (formativesCount * 100);
    const summativeGrade = (summativesTotal * 60) / (summativesCount * 100);
    const totalGrade = formativeGrade + summativeGrade;

    // Determine passing or failing and set message
    if (totalGrade < 70) {
        resultElement.textContent = `Your total grade is: ${totalGrade.toFixed(2)}%. You are failing!`;
        resultElement.style.color = "red";
    } else {
        resultElement.textContent = `Your total grade is: ${totalGrade.toFixed(2)}%. You are passing!`;
        resultElement.style.color = "green";
    }
}

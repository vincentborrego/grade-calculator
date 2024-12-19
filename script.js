function setChoice(choice) {
  document.getElementById('assignment-form').style.display = (choice === 'assignment') ? 'block' : 'none';
  document.getElementById('class-form').style.display = (choice === 'class') ? 'block' : 'none';
}

function calculateAssignmentGrade() {
  const pointsReceived = parseFloat(document.getElementById('points-received').value);
  const totalPoints = parseFloat(document.getElementById('total-points').value);

  if (isNaN(pointsReceived) || isNaN(totalPoints) || totalPoints === 0) {
      document.getElementById('assignment-result').textContent = "Please enter valid points.";
      return;
  }

  const grade = (pointsReceived / totalPoints) * 100;
  document.getElementById('assignment-result').textContent = `Your total grade is: ${grade.toFixed(2)}%`;
}

function calculateClassGrade() {
  const formativesCount = parseFloat(document.getElementById('formatives-count').value);
  const summativesCount = parseFloat(document.getElementById('summatives-count').value);
  const formativesTotal = parseFloat(document.getElementById('formatives-total').value);
  const summativesTotal = parseFloat(document.getElementById('summatives-total').value);

  if (
      isNaN(formativesCount) || isNaN(summativesCount) || 
      isNaN(formativesTotal) || isNaN(summativesTotal) ||
      formativesCount <= 0 || summativesCount <= 0
  ) {
      document.getElementById('class-result').textContent = "Please enter valid numbers.";
      return;
  }

  const formativeGrade = (formativesTotal * 40) / (formativesCount * 100);
  const summativeGrade = (summativesTotal * 60) / (summativesCount * 100);
  const totalGrade = formativeGrade + summativeGrade;

  document.getElementById('class-result').textContent = `Your total grade is: ${totalGrade.toFixed(2)}`;
}

document.getElementById("generateFields").addEventListener("click", function () {
    const numSubjects = parseInt(document.getElementById("numSubjects").value);
    const subjectInputs = document.getElementById("subjectInputs");
    subjectInputs.innerHTML = "";

    if (isNaN(numSubjects) || numSubjects <= 0) {
        alert("Please enter a valid number of subjects!");
        return;
    }

    for (let i = 1; i <= numSubjects; i++) {
        subjectInputs.innerHTML += `
            <div class="subject-container">

                <h4>Subject ${i} </h4>
                
                <label for="credits-${i}">Credits:</label>
                <input type="number" id="credits-${i}" min="1" required>
                
                <label for="cie1-${i}">CIE1:</label>
                <input type="number" id="cie1-${i}" min="0" max="30" required>

                <label for="cie2-${i}">CIE2:</label>
                <input type="number" id="cie2-${i}" min="0" max="30" required>

                <label for="comp-${i}">Component:</label>
                <input type="number" id="comp-${i}" min="0" max="20" required>

                <label for="semEnd-${i}">SEE:</label>
                <input type="number" id="semEnd-${i}" min="0" max="100" required>
            </div>
        `;
    }

    document.getElementById("calculateCgpa").style.display = "block";
});

document.getElementById("calculateCgpa").addEventListener("click", function () {
    const numSubjects = parseInt(document.getElementById("numSubjects").value);
    let totalGradePoints = 0;
    let totalCredits = 0;

    for (let i = 1; i <= numSubjects; i++) {
        const cie1 = parseInt(document.getElementById(`cie1-${i}`).value);
        const cie2 = parseInt(document.getElementById(`cie2-${i}`).value);
        const comp = parseInt(document.getElementById(`comp-${i}`).value);
        const semEnd = parseInt(document.getElementById(`semEnd-${i}`).value);
        const credits = parseInt(document.getElementById(`credits-${i}`).value);

        if (
            isNaN(cie1) || isNaN(cie2) || isNaN(comp) || isNaN(semEnd) || isNaN(credits) ||
            cie1 < 0 || cie2 < 0 || comp < 0 || semEnd < 0 || credits <= 0
        ) {
            alert(`Please enter valid marks and credits for Subject ${i}!`);
            return;
        }

        const totalMarks = (cie1 + cie2) / 2 + comp + semEnd / 2;

        let gradePoints = 0;
        if (totalMarks >= 90) gradePoints = 10;
        else if (totalMarks >= 80) gradePoints = 9;
        else if (totalMarks >= 70) gradePoints = 8;
        else if (totalMarks >= 60) gradePoints = 7;
        else if (totalMarks >= 50) gradePoints = 6;
        else if (totalMarks >= 40) gradePoints = 5;
        else gradePoints = 0;

        totalGradePoints += gradePoints * credits;
        totalCredits += credits;
    }

    const cgpa = totalGradePoints / totalCredits;
    document.getElementById("result").innerText = `Your CGPA is: ${cgpa.toFixed(2)}`;
});

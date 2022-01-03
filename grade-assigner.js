function assignGrade(score) {
    if (score > 90) {
        return "A";
    } else if (score > 80) {
        return "B";
    } else if (score > 70) {
        return "C";
    } else if (score > 65) {
        return "D";
    } else {
        return "E";
    }
}

assignGrade();

for (let grade = 60; grade <= 100; grade++) {
    if (grade >= 65 && grade <= 70) {
        console.log("For scoring " + grade + " points, you get a D")
    }
    else if (grade >= 71 && grade <= 80) {
        console.log("For scoring " + grade + " points, you get a C")
    }
    else if (grade >= 81 && grade <= 90) {
        console.log("For scoring " + grade + " points, you get a B")
    }
    else if (grade >= 91) {
        console.log("For scoring " + grade + " points, you get a A")
    } else {
        console.log("For scoring " + grade + " points, you get a E")

    }
}





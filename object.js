function addStudents() {
    const studentCount = parseInt(document.getElementById('studentCount').value);
    if (isNaN(studentCount) || studentCount < 1) {
        alert('Kérlek adj meg egy érvényes számot!');
        return;
    }

    const students = [];
    for (let i = 0; i < studentCount; i++) {
        const name = prompt(`Add meg a(z) ${i + 1}. tanuló nevét:`);
        const email = prompt(`Add meg a(z) ${i + 1}. tanuló e-mail címét:`);
        students.push({ name, email });
    }

    let output = '<h3>A tanulók adatai:</h3><ul>';
    students.forEach(student => {
        output += `<li>Név: ${student.name}, E-mail: ${student.email}</li>`;
    });
    output += '</ul>';
    document.getElementById('studentsOutput').innerHTML = output;
}

function showSchedule() {
    const schedule = {
        "Hétfő": ["Matematika", "Fizika","Történelem", "Irodalom", "Angol", "Biológia", "Testnevelés"],
        "Kedd": ["Kémia", "Testnevelés", "Matek", "Földrajz", "Zene"],
        "Szerda": ["Rajz", "Történelem", "Angol", "Matematika", "Irodalom", "Fizika", "Kémia"],
        "Csütörtök": ["Biológia", "Kémia", "Testnevelés", "Földrajz", "Zene", "Matek", "Informatika"],
        "Péntek": ["Informatika", "Rajz", "Történelem", "Angol", "Irodalom", "Matematika"]
    };

    let maxClasses = 0;
    for (const day in schedule) {
        maxClasses = Math.max(maxClasses, schedule[day].length);
    }

    let output = '<h3>Heti Órarend:</h3>';
    output += '<table>';
    output += '<tr><th>Óraszám</th>'; 
    for (const day in schedule) {
        output += `<th>${day}</th>`;
    }
    output += '</tr>';

    for (let i = 0; i < maxClasses; i++) {
        output += `<tr><td>${i + 1}. óra</td>`;
        for (const day in schedule) {
            output += `<td>${schedule[day][i] || ""}</td>`;
        }
        output += '</tr>';
    }

    output += '</table>';
    document.getElementById('scheduleOutput').innerHTML = output;
}
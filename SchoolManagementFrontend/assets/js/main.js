// Login Form Validation
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Basic validation
    if (username === '' || password === '') {
        alert("Both fields are required!");
    } else {
        // Simulate a login (You can replace this with actual backend validation)
        alert("Login Successful!");
        window.location.href = 'dashboard.html'; // Redirect to dashboard
    }
});

// Student Form Validation and Adding to List
document.getElementById('studentForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('studentName').value;
    const age = document.getElementById('studentAge').value;
    const grade = document.getElementById('studentGrade').value;

    if (name && age && grade) {
        const studentList = document.getElementById('studentList');
        const li = document.createElement('li');
        li.classList.add('list-group-item');
        li.textContent = `${name}, Age: ${age}, Grade: ${grade}`;
        studentList.appendChild(li);

        // Clear form
        document.getElementById('studentForm').reset();
    } else {
        alert("All fields are required!");
    }
});

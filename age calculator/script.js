function calculateAge() {
    var birthDateInput = document.getElementById('birthDate').value;
    
    if (birthDateInput !== '') {
        var birthDate = new Date(birthDateInput);
        var currentDate = new Date();

        var age = currentDate.getFullYear() - birthDate.getFullYear();

        // Check if birthday has occurred this year
        if (currentDate.getMonth() < birthDate.getMonth() || (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())) {
            age--;
        }

        document.getElementById('result').innerText = 'Your age is: ' + age + ' years.';
    } else {
        alert('Please enter your birthdate.');
    }
}
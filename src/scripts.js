var toggleButton = document.getElementById('toggle-skills');
var skillsSection = document.getElementById('skills');
toggleButton.addEventListener('click', function () {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
        toggleButton.textContent = 'Hide Skills'; // Change text to "Hide"
    }
    else {
        skillsSection.style.display = 'none';
        toggleButton.textContent = 'View Skills'; // Change text to "View"
    }
});

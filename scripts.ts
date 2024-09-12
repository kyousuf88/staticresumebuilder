const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;
const skillsSection = document.getElementById('skills') as HTMLElement;

toggleButton.addEventListener('click', () => {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
        toggleButton.textContent = 'Hide Skills'; // Change text to "Hide"
    } else {
        skillsSection.style.display = 'none';
        toggleButton.textContent = 'View Skills'; // Change text to "View"
    }
});

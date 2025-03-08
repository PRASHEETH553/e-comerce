function initializeFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const courseGrid = document.getElementById('courseGrid');

    function filterCourses(category) {
        const filteredCourses = category === 'all' 
            ? courses 
            : courses.filter(course => course.category === category);
        
        courseGrid.innerHTML = filteredCourses.map(course => createCourseCard(course)).join('');
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            // Filter courses
            filterCourses(button.dataset.category);
        });
    });

    // Initial load with all courses
    filterCourses('all');
}
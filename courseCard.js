function createCourseCard(course) {
    return `
        <div class="course-card">
            <div class="course-image">
                <img src="${course.thumbnail}" alt="${course.title}">
                <a href="login.html" target="_blank" class="video-overlay">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <polygon points="10 8 16 12 10 16 10 8"/>
                    </svg>
                </a>
            </div>
            <div class="course-content">
                <div class="course-category">${course.category.charAt(0).toUpperCase() + course.category.slice(1)}</div>
                <h3 class="course-title">${course.title}</h3>
                <p class="course-instructor">by ${course.instructor}</p>
                <div class="course-meta">
                    <div class="students">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: inline">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                            <circle cx="9" cy="7" r="4"/>
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                        </svg>
                        ${course.students.toLocaleString()} students
                    </div>
                    <div class="duration">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: inline">
                            <circle cx="12" cy="12" r="10"/>
                            <polyline points="12 6 12 12 16 14"/>
                        </svg>
                        ${course.duration}
                    </div>
                </div>
                
            </div>
        </div>
    `;
    
}

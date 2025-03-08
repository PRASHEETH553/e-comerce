// JavaScript for handling button clicks
document.addEventListener('DOMContentLoaded', function() {
    // Get the buttons by their class names
    const learnmore=document.querySelector('.btn-secondary');
    const loginButton = document.querySelector('.btn-login');
    const signupButton = document.querySelector('.btn-signup');
    const b = document.querySelector('.btn-primary');

    // Add click event listener for "Login" button
    loginButton.addEventListener('click', function() {
        window.location.href = 'login.html'; // Change to your login page
    });

    // Add click event listener for "Sign Up" button
    signupButton.addEventListener('click', function() {
        window.location.href = 'signup.html'; // Change to your signup page
    });

    learnmore.addEventListener('click',function(){
        window.location.href='learn.html';
    });
    
    b.addEventListener('click',function(){
        window.location.href='course.html';
    });


});
window.onload = function () {
    var aboutmeNav = document.getElementById('aboutmeNav');
    var skillsNav = document.getElementById('skillsNav');
    var logNav = document.getElementById('logNav');
    var aboutmeWapper = document.getElementById('aboutme-wrapper');
    var skillsWapper = document.getElementById('skills-wrapper');
    var logWapper = document.getElementById('log-wrapper');

    // aboutmeNav.style.color = 'white';

    aboutmeNav.addEventListener('click', function () {
        // aboutmeNav.style.color = 'white';
        // skillsNav.style.color = 'rgb(175, 175, 175)';
        // logNav.style.color = 'rgb(175, 175, 175)';
        aboutmeWapper.style.display = 'flex';
        skillsWapper.style.display = 'none';
        logWapper.style.display = 'none';
    });

    skillsNav.addEventListener('click', function () {
        // aboutmeNav.style.color = 'rgb(175, 175, 175)';
        // skillsNav.style.color = 'white';
        // logNav.style.color = 'rgb(175, 175, 175)';
        aboutmeWapper.style.display = 'none';
        skillsWapper.style.display = 'flex';
        logWapper.style.display = 'none';
    });

    logNav.addEventListener('click', function () {
        // aboutmeNav.style.color = 'rgb(175, 175, 175)';
        // skillsNav.style.color = 'rgb(175, 175, 175)';
        // logNav.style.color = 'white';
        aboutmeWapper.style.display = 'none';
        skillsWapper.style.display = 'none';
        logWapper.style.display = 'flex';
    });
};

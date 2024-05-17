window.onload = function () {
    var aboutmeNav = document.getElementById('aboutmeNav');
    var skillsNav = document.getElementById('skillsNav');
    var logNav = document.getElementById('logNav');
    var aboutmeWapper = document.getElementById('aboutme-wrapper');
    var skillsWapper = document.getElementById('skills-wrapper');
    var logWapper = document.getElementById('log-wrapper');

    aboutmeNav.addEventListener('click', function () {
        aboutmeWapper.style.display = 'flex';
        skillsWapper.style.display = 'none';
        logWapper.style.display = 'none';
    });

    skillsNav.addEventListener('click', function () {
        aboutmeWapper.style.display = 'none';
        skillsWapper.style.display = 'flex';
        logWapper.style.display = 'none';
    });

    logNav.addEventListener('click', function () {
        aboutmeWapper.style.display = 'none';
        skillsWapper.style.display = 'none';
        logWapper.style.display = 'flex';
    });
};

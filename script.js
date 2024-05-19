window.onload = function () {
    var links = document.querySelectorAll('.nav-link');
    var sections = document.querySelectorAll('.wrapper');

    function showSection(sectionId) {
        sections.forEach(section => {
            section.style.display = (section.id === sectionId) ? 'flex' : 'none';
        });
    }

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            const target = link.getAttribute('data-target');
            showSection(target);
        });
    });

    links[0].classList.add('active');
    showSection(links[0].getAttribute('data-target'));
};

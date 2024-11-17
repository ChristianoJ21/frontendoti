// Toggle Night/Day Mode
function toggleMode() {
    document.body.classList.toggle('night');
    const themeToggle = document.querySelector('header button');
    themeToggle.textContent = document.body.classList.contains('night') ? '🌙' : '🌞';
}

// Expand contributors list
function toggleContributors() {
    const extraContributors = document.querySelectorAll('#contributors .extra');
    extraContributors.forEach(item => item.classList.toggle('hidden'));
    const btn = document.getElementById('expand-contributors');
    btn.textContent = btn.textContent === '+3 more' ? 'show less' : '+3 more';
}

// Expand projects list
function toggleProjects() {
    const extraProjects = document.querySelectorAll('.project-card.extra');
    extraProjects.forEach(card => card.classList.toggle('hidden'));
    const btn = document.getElementById('expand-projects');
    btn.textContent = btn.textContent === 'More' ? 'Collapse' : 'More';
}

let expanded = false;

function toggleProjects() {
    const cards = document.querySelectorAll(".project-card");
    const button = document.querySelector(".more-less-btn button");

    if (expanded) {
        cards.forEach((card, index) => {
            if (index >= 6) card.style.display = "none";
        });
        button.textContent = "More";
    } else {
        cards.forEach(card => (card.style.display = "block"));
        button.textContent = "Collapse";
    }

    expanded = !expanded;
}

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".project-card");
    cards.forEach((card, index) => {
        if (index >= 6) card.style.display = "none";
    });
});


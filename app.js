
const filtereButton = document.querySelectorAll('.filter-button button');
const filterableCards = document.querySelectorAll('.filterable-cards .card');

const filterCard = e => {

    document.querySelector('.active').classList.remove('active');
    e.target.classList.add('active');

    filterableCards.forEach(card => {

        card.classList.add('hidden');

        if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === 'all') {
            card.classList.remove('hidden')
            console.log(e.target.dataset.name);
        };
    });

}

filtereButton.forEach(button => button.addEventListener('click', filterCard))
document.addEventListener('DOMContentLoaded', () => {
    const characterContainer = document.getElementById('character-container');
    fetch('https://rickandmortyapi.com/api/character/?page=19')
        .then(response => response.json())
        .then(data => {
            data.results.forEach(character => {
                const characterCard = document.createElement('div');
                characterCard.classList.add('character-card');
                const status = character.status === 'Alive' ? 'Vivo' : character.status === 'Dead' ? 'Morto' : 'Desconhecido';
                characterCard.innerHTML = `
                    <img src="${character.image}" alt="${character.name}">
                    <h2>${character.name}</h2>
                    <p><strong>Status:</strong> ${status}</p>
                    <p><strong>Espécie:</strong> ${character.species} ${character.type ? `(${character.type})` : ''}</p>
                    <p><strong>Origem:</strong> ${character.origin.name}</p>
                    <p><strong>Localização Atual:</strong> ${character.location.name}</p>
                `;
                characterContainer.appendChild(characterCard);
            });
        })
        .catch(error => console.error('Erro ao buscar dados:', error));
});
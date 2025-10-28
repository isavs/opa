document.addEventListener('DOMContentLoaded', () => {
    const hotspots = document.querySelectorAll('.hotspot');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close-button');

    // Função para abrir um modal
    function openModal(modalId) {
        const targetModal = document.getElementById(modalId + '-modal');
        if (targetModal) {
            targetModal.classList.add('show');
        }
    }

    // Função para fechar um modal
    function closeModal(modalElement) {
        modalElement.classList.remove('show');
    }

    // Adiciona evento de clique para cada hotspot
    hotspots.forEach(hotspot => {
        hotspot.addEventListener('click', (event) => {
            const targetId = event.target.dataset.target;
            openModal(targetId);
        });
    });

    // Adiciona evento de clique para cada botão de fechar
    closeButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const modalElement = event.target.closest('.modal');
            if (modalElement) {
                closeModal(modalElement);
            }
        });
    });

    // Adiciona evento de clique para fechar o modal clicando fora do conteúdo
    modals.forEach(modal => {
        modal.addEventListener('click', (event) => {
            if (event.target === modal) { // Verifica se o clique foi no fundo do modal, não no conteúdo
                closeModal(modal);
            }
        });
    });
});
const CONFIG = {
    NAV_MENU_ID: 'navMenu',
    FORM_ID: 'volunteerForm',
    SUCCESS_MESSAGE_ID: 'successMessage',
    TABLE_CONTAINER_ID: 'tabelaVoluntarios',
    HEADER_HEIGHT: 70
};
const STORAGE_KEY = 'voluntarios';

const toggleMenu = () => {
    const menu = document.getElementById(CONFIG.NAV_MENU_ID);
    if (menu) {
        menu.classList.toggle('active');
    }
};

const scrollActive = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const sectionPosition = section.offsetTop - CONFIG.HEADER_HEIGHT;

    window.scrollTo({
        top: sectionPosition,
        behavior: "smooth"
    });

    const menu = document.getElementById(CONFIG.NAV_MENU_ID);
    if (menu) {
        menu.classList.remove('active');
    }
};

const getVoluntarios = () => {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
};

const saveVoluntarios = (voluntarios) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(voluntarios));
};

/**
 * @function excluirVoluntario
 
 * @param {number} index - 
 */
const excluirVoluntario = (index) => {
    if (confirm("Tem certeza que deseja excluir este voluntário? Esta ação é irreversível.")) {
        let voluntarios = getVoluntarios();
        
        
        voluntarios.splice(index, 1);
        
        saveVoluntarios(voluntarios);
        exibirVoluntarios(); 
    }
};


const exibirVoluntarios = () => {
    const voluntarios = getVoluntarios();
    const tabelaContainer = document.getElementById(CONFIG.TABLE_CONTAINER_ID);

    if (!tabelaContainer) return;

    if (voluntarios.length === 0) {
        tabelaContainer.innerHTML = '<p class="text-info">Nenhum voluntário cadastrado ainda.</p>';
        return;
    }

    const headers = [
        { label: 'Data', key: 'dataCadastro' },
        { label: 'Nome', key: 'nome' },
        { label: 'Email', key: 'email' },
        
        { label: 'Telefone', key: 'telefone' },
        { label: 'Idade', key: 'idade' },
        { label: 'CPF', key: 'cpf' },
        { label: 'CEP', key: 'cep' },
        { label: 'Endereço', key: 'endereço' },
        { label: 'Cidade', key: 'cidade' },
        { label: 'Estado', key: 'estado' },
        { label: 'Disponibilidade', key: 'disponibilidade' },
        { label: 'Área de Interesse', key: 'areaInteresse' },
        { label: 'Experiência', key: 'experiencia' },
        { label: 'Motivação', key: 'motivacao' },
        { label: 'Ações', key: 'acoes', isAction: true } 
    ];

    const thead = `
        <thead>
            <tr>
                ${headers.map(h => `<th>${h.label}</th>`).join('')}
            </tr>
        </thead>
    `;

    const tbody = `
        <tbody>
            ${voluntarios.map((voluntario, index) => `
                <tr>
                    ${headers.map(h => {
                        
                        if (h.isAction) {
                            return `
                                <td data-label="Ações">
                                    <button 
                                        class="btn-excluir" 
                                        onclick="excluirVoluntario(${index})" 
                                        title="Excluir Voluntário"
                                    >
                                        &#10005; Excluir
                                    </button>
                                </td>
                            `;
                        }
                        
                        return `
                            <td data-label="${h.label}"> 
                                ${voluntario[h.key] || 'N/A'}
                            </td>
                        `;
                    }).join('')}
                </tr>
            `).join('')}
        </tbody>
    `;

    const tableHTML = `<table class="voluntarios-table">${thead}${tbody}</table>`;
    tabelaContainer.innerHTML = tableHTML;
};

const handleSubmit = (event) => {
    event.preventDefault();

    const form = document.getElementById(CONFIG.FORM_ID);
    if (!form) return;

    const { nome, email, telefone, idade, disponibilidade, experiencia, motivacao, cpf, cep, endereço, cidade, estado } = form.elements;
    const areaInteresse = form.elements["area-interesse"];

    const formData = {
        nome: nome.value,
        email: email.value,
        telefone: telefone.value,
        idade: idade.value,
        disponibilidade: disponibilidade.value,
        experiencia: experiencia.value,
        motivacao: motivacao.value,
        
        cpf: cpf.value,
        cep: cep.value,
        endereço: endereco.value,
        cidade: cidade.value,
        estado: estado.value,
        areaInteresse: areaInteresse.value,
        
        dataCadastro: new Date().toLocaleDateString('pt-BR')
    };

    let voluntarios = getVoluntarios();
    voluntarios.push(formData);
    saveVoluntarios(voluntarios);

    const successMessage = document.getElementById(CONFIG.SUCCESS_MESSAGE_ID);
    if (successMessage) {
        successMessage.classList.add('show');
        successMessage.scrollIntoView({ behavior: "smooth", block: "center" });

        setTimeout(() => {
            form.reset();
            successMessage.classList.remove('show');
        }, 3000);
    }
    
    exibirVoluntarios();
};

document.addEventListener('DOMContentLoaded', () => {
    
    const form = document.getElementById(CONFIG.FORM_ID);
    if (form) {
        
        form.addEventListener('submit', handleSubmit);
    }
    
    
    exibirVoluntarios(); 
});
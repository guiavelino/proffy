import React from 'react';

import './styles.css';

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/58201367?s=460&u=32827adcba7f082a960a19d4f553a25523a58a70&v=4" alt="Guilherme Avelino" />
                <div>
                    <strong>Guilherme Avelino</strong>
                    <span>Química</span>
                </div>
            </header>
            <p>
                Entusiasta das melhores tecnologias de química avançada.
                <br /> <br />
                Apaixonado por explodir coisas em laboratório e por mudar a vidas das pessoas através de exeriências. Mais de 200.000 pessoas já passaram por uma das minha explosões.
            </p>
            <footer>
                <p>
                    Preço/Hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsAppIcon} alt="WhatsApp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;
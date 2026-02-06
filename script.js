<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description"
        content="Dra. Livia Lins - Especialista em Implantes Dentários, Facetas e Harmonização do Sorriso em João Pessoa. Agende sua avaliação.">
    <title>Dra. Livia Lins | Implantes e Estética Dental</title>
    <link rel="icon" type="image/png" href="img/logo-ll.png">

    <link rel="apple-touch-icon" href="img/logo-ll.png">
    <link rel="stylesheet" href="style.css">

    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>

<body>
    <header>
        <nav>
            <div class="logo-container">
                <img src="img/logo-ll.png" alt="Logo Dra. Livia Lins" class="logo-img">
                <span class="logo-text">Dra. Livia Lins</span>
            </div>

            <ul>
                <li class="nav-item">
                    <button class="nav-btn" id="aboutTrigger">Sobre mim</button>
                </li>

                <li class="nav-item contact-wrapper">
                    <button class="nav-btn" id="contact-trigger">Contato</button>

                    <div class="contact-popover" id="contact-popover">
                        <div class="popover-arrow"></div>
                        <div class="popover-content">
                            <span class="phone-number">83 98714-3928</span>
                            <button class="copy-btn" id="btn-copy-number" title="Copiar número">
                                <i class="far fa-copy"></i>
                            </button>
                        </div>
                    </div>
                </li>
            </ul>
        </nav>
    </header>

    <div class="about-overlay" id="aboutOverlay">
        <div class="about-modal">
            <button type="button" class="close-about-btn" aria-label="Fechar">&times;</button>
            <img src="img/logo-ll.png" class="modal-bg-logo" alt="">

            <div class="modal-content">
                <h3>Muito prazer!</h3>
                <p>
                    Sou <strong>Dra. Lívia Lins</strong>, cirurgiã-dentista aqui em João Pessoa,
                    apaixonada por transformar sorrisos e elevar a autoestima dos meus pacientes. 💫
                </p>

                <p>
                    Atuo com foco em implantes dentários, facetas em resina e atendimento clínico
                    personalizado, sempre prezando pelo conforto, qualidade e um resultado
                    natural e harmônico. 🦷💖
                </p>

                <p>
                    Acredito que o sorriso tem o poder de abrir portas e contar histórias —
                    e estou aqui para te ajudar a contar a sua da melhor forma possível.
                </p>
            </div>
        </div>
    </div>

    <section class="hero">
        <div class="bg-name">LIVIA </br> LINS</div>
        <div class="hero-container">
            <div class="hero-content">
                <h1>Transforme seu sorriso com quem é especialista.</h1>
                <p>Implantes e estética com naturalidade e tecnologia avançada.</p>
                <a href="https://wa.me/5583987143928" class="btn-cta">Agendar Avaliação</a>

                <div class="hero-stats">
                    <div class="stat-item"><strong>+500</strong> Pacientes</div>
                    <div class="stat-item"><strong>Mestranda</strong> UFPB</div>
                    <div class="stat-item"><strong>Especialista</strong> Implantes</div>
                </div>
            </div>

            <div class="hero-image-wrapper">
                <div class="hero-image"></div>
            </div>
        </div>
    </section>

    <section id="tratamentos">
        <div class="container">
            <h2 class="section-title">Procedimentos</h2>
            <div class="especialidades-container">
                <div class="especialidades-track" id="track-tratamentos">
                    <div class="especialidade-card">
                        <h3>Implantes Dentários</h3>
                        <p>Tecnologia avançada para recuperar sua função.</p>
                    </div>
                    <div class="especialidade-card">
                        <h3>Facetas em Resina</h3>
                        <p>Estética imediata para transformar o sorriso.</p>
                    </div>
                    <div class="especialidade-card">
                        <h3>Restaurações</h3>
                        <p>Devolvendo a forma original dos seus dentes.</p>
                    </div>
                    <div class="especialidade-card">
                        <h3>Tratamento Periodontal</h3>
                        <p>Saúde da gengiva e ossos de suporte.</p>
                    </div>
                    <div class="especialidade-card">
                        <h3>Próteses / Coroas</h3>
                        <p>Reabilitação protética de alta durabilidade.</p>
                    </div>
                    <div class="especialidade-card">
                        <h3>Endodontia</h3>
                        <p>Tratamento de canal moderno e seguro.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="resultados">
        <div class="container">
            <h2 class="section-title">Transformações Reais</h2>
            <p class="section-subtitle">Ciência e precisão para devolver a sua melhor versão.</p>

            <button class="nav-prev" id="prev-results"><i class="fas fa-chevron-left"></i></button>
            <button class="nav-next" id="next-results"><i class="fas fa-chevron-right"></i></button>


            <div class="results-slider" id="results-slider">
                <div class="result-card">
                    <div class="result-image"> <img src="img/saude.png" alt="Saúde Periodontal"> </div>
                    <div class="result-info">
                        <h3>Saúde Periodontal</h3>
                        <p>Remoção de cálculos e recuperação gengival</p>
                    </div>
                </div>

                <div class="result-card">
                    <div class="result-image"> <img src="img/reabilitação.png" alt="Saúde & Naturalidade"> </div>
                    <div class="result-info">
                        <h3>Saúde & Naturalidade</h3>
                        <p>Clareamento Dental</p>
                    </div>
                </div>

                <div class="result-card">
                    <div class="result-image"> <img src="img/restauração.png" alt="Restauração de Alta Precisão"> </div>
                    <div class="result-info">
                        <h3>Restauração de Alta Precisão</h3>
                        <p>Recuperação funcional e estética</p>
                    </div>
                </div>

                <div class="result-card">
                    <div class="result-image"> <img src="img/facetas.jpeg" alt="Facetas em Resina"> </div>
                    <div class="result-info">
                        <h3>Saúde & Naturalidade</h3>
                        <p>Facetas em Resina Composta</p>
                    </div>
                </div>

                <div class="result-card">
                    <div class="result-image"> <img src="img/restauração2.jpeg" alt="Recuperação de dente com Canal">
                    </div>
                    <div class="result-info">
                        <h3>Recuperação de dente com Canal</h3>
                        <p>Restauração com Resina</p>
                    </div>
                </div>
            </div>
            <div class="slider-dots" id="slider-dots">
                <span class="dot active"></span>
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
            </div>
        </div>
    </section>

    <div class="fab-container">
        <div class="fab-main"> <i class="fas fa-plus"></i> </div>
        <div class="fab-options">
            <a href="https://www.instagram.com/dra.livialins" target="_blank" class="fab-button fab-instagram">
                <i class="fab fa-instagram"></i>
                <span class="fab-tooltip">Instagram</span>
            </a>
            <a href="https://wa.me/5583987143928" target="_blank" class="fab-button fab-whatsapp">
                <i class="fab fa-whatsapp"></i>
                <span class="fab-tooltip">Agendar</span>
            </a>
        </div>
    </div>

    <footer>
        <div class="footer-container">
            <div class="footer-column branding">
                <h3 class="footer-title">Dra. Livia Lins</h3>
                <p class="footer-info">Cirurgiã-Dentista pela UFPB (CRO-PB:10034)</p>
                <p class="footer-info">Transformando sorrisos.</p>
            </div>
            <div class="footer-column">
                <h4 class="footer-subtitle">Procedimentos</h4>
                <ul class="specialties-grid">
                    <li>Implantes Dentários</li>
                    <li>Facetas em resina</li>
                    <li>Restaurações</li>
                    <li>Tratamento Periodontal</li>
                    <li>Cirurgias Periodontais</li>
                    <li>Extrações</li>
                    <li>Próteses / Coroas</li>
                    <li>Tratamento de Canal</li>
                </ul>
            </div>
            <div class="footer-column">
                <h4 class="footer-subtitle">Contato</h4>
                <ul class="contact-list">
                    <li>📍 João Pessoa, Paraíba</li>
                    <li>📧 liviavlins09@gmail.com</li>
                    <li>📞 83 98714-3928</li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2026 Dra. Livia Lins. Todos os direitos reservados.</p>
        </div>
    </footer>

    <div id="image-viewer"> <span class="close">&times;</span> <img class="modal-content" id="full-image"> </div>

    <script src="script.js"></script>
</body>

</html>

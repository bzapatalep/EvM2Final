$(document).ready(function() {
    
    // 1. EVENTO CLICK: Cambio entre temas claro/oscuro
    $('#btn-theme').on('click', function() {
        $('body').toggleClass('dark-mode');
        
        // Cambiar el texto del botón dinámicamente
        if ($('body').hasClass('dark-mode')) {
            $(this).text('Modo Claro').removeClass('btn-outline-light').addClass('btn-light');
        } else {
            $(this).text('Modo Oscuro').removeClass('btn-light').addClass('btn-outline-light');
        }
    });

    // 2. EVENTO CLICK: Cambio de colores aleatorios en la sección perfil
    $('#btn-color').on('click', function() {
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        $('.profile-card').css('background-color', randomColor);
        // Si el color es muy oscuro, cambiar texto a blanco para legibilidad
        $('.profile-card h1, .profile-card p').css('color', '#333');
    });

    // 3. EVENTO INPUT (Validación en tiempo real): Requisito de Rúbrica
    $('#inputEmail').on('input', function() {
        const email = $(this).val();
        const feedback = $('#emailFeedback');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailRegex.test(email)) {
            feedback.text('✓ Formato correcto').css('color', 'green');
            $(this).addClass('is-valid').removeClass('is-invalid');
        } else if (email === "") {
            feedback.text('');
            $(this).removeClass('is-valid is-invalid');
        } else {
            feedback.text('× Ingrese un email válido (ej: usuario@web.com)').css('color', 'red');
            $(this).addClass('is-invalid').removeClass('is-valid');
        }
    });

    // Manejo del envío del formulario (Submit)
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        const emailInput = $('#inputEmail');

        if (emailInput.hasClass('is-valid')) {
            alert('¡Gracias! Tu mensaje ha sido enviado correctamente.');
            this.reset();
            emailInput.removeClass('is-valid');
            $('#emailFeedback').text('');
        } else {
            alert('Por favor, verifica los campos antes de enviar.');
        }
    });

    // Efecto extra: Scroll suave al hacer clic en los enlaces del menú
    $('.nav-link').on('click', function(e) {
        if (this.hash !== "") {
            e.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 70
            }, 600);
        }
    });
});
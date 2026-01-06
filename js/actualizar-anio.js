// Actualizar el año automáticamente
document.addEventListener('DOMContentLoaded', function() {
    try {
        const yearElement = document.getElementById('current-year');
        if (yearElement) {
            const currentYear = new Date().getFullYear();
            yearElement.textContent = currentYear || 2026;
        }
    } catch (error) {
        // Si falla, se mantendrá el año por defecto 2026 del HTML
        console.log('Usando año por defecto');
    }
});

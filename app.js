let resultadosDiv = document.getElementById("resultados");
        let ul = document.createElement("ul");
        resultadosDiv.appendChild(ul);

        for (let i = 1; i <= 100; i++) {
            let resultado = '';

            if (i % 3 === 0) {
                resultado += `<span class="green">Fizz</span>`;
            }

            if (i % 5 === 0) {
                resultado += `<span class="orange">Buzz</span>`;
            }

            if (resultado === '') {
                resultado = i;
            }

            agregarResultado(resultado);
        }

        function agregarResultado(resultado) {
            const li = document.createElement("li");
            li.innerHTML = resultado;
            ul.appendChild(li);

            
            if (ul.children.length >= 15) {
                ul = document.createElement("ul");
                resultadosDiv.appendChild(ul);
            }
        }

        function toggleDarkMode() {
            document.body.classList.toggle("dark-mode");
        }

        document.addEventListener("DOMContentLoaded", function () {
            const toggleBtn = document.getElementById("toggleBtn");
            toggleBtn.addEventListener("click", toggleDarkMode);
        });
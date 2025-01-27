import { data } from "./data.js";

let genero, edad;
let peso = 0;
let estatura = 0;
let Personas = [];
let imcMujer = 0;
let imcHombre = 0;
let mujer = 0;
let hombre = 0;
let imc18 = 0;
let cont18 = 0;
let imc25 = 0;
let cont25 = 0;
let imc40 = 0;
let cont40 = 0;
let imcTotal = 0;

obtenerCalculo();
statics();

function obtenerCalculo() {
    let btn = document.getElementById("calcular-btn");
    btn.addEventListener("click", function (e) {
      // Encuentra el formulario asociado
      const form = e.target.closest("form");
  
      // Verifica la validez del formulario
      if (form.checkValidity()) {
        // Si el formulario es válido, llama a la función calcularIMC
        calcularIMC();
      } else {
        // Si no es válido, muestra los mensajes de error
        form.reportValidity();
      }
    });
  }

function calcularIMC() {
  peso = Number(document.getElementById("weigth").value);
  estatura = Number(document.getElementById("height").value);

  let resultado = (peso / Math.pow(estatura, 2)).toFixed(1);
  let pesoMin = (18.5 * Math.pow(estatura, 2)).toFixed(0);
  let pesoMax = (24.9 * Math.pow(estatura, 2)).toFixed(0);

  console.log(resultado, pesoMin, pesoMax);

  resultadoIMC(resultado, pesoMin, pesoMax);

  guardar(resultado);
}

function resultadoIMC(resultado, pesoMin, pesoMax) {
  let resultadoIMC = document.getElementById("imc");

  if (resultado < 18.5) {
    resultadoIMC.innerHTML = `
        <div class="row" id="result-imc">
        <div class="o-result">
            <h2>Resultado</h2>
            <h3>${resultado}</h3>
        </div>

        <div class="o-img-result">
            <img src="./img/barra.png" alt="">
            <i class="bi bi-caret-up-fill o-position" style="left:-20%"></i>
        </div>

        <div class="ideal">
            <h4>Peso ideal: ${pesoMin} - ${pesoMax} (kg)</h4>
        </div>
        </div>

        <div class="o-pesos row">
        <div class="row o-bajopeso">
            <i class="bi bi-calculator-fill col-sm-1"></i>
            <p class="col">Bajo peso</p>
        </div>
        </div>
            `;

    console.log("Por debajo del peso ideal");
  } else if (resultado >= 18.5 && resultado <= 24.9) {
    resultadoIMC.innerHTML = `
        <div class="row" id="result-imc">
        <div class="o-result">
            <h2>Resultado</h2>
            <h3>${resultado}</h3>
        </div>

        <div class="o-img-result">
            <img src="./img/barra.png" alt="">
            <i class="bi bi-caret-up-fill o-position" style="left:0%"></i>
        </div>

        <div class="ideal">
            <h4>Peso ideal: ${pesoMin} - ${pesoMax} (kg)</h4>
        </div>
        </div>

        <div class="o-pesos row">
        <div class="row o-saludable">
            <i class="bi bi-calculator-fill col-sm-1"></i>
            <p class="col">Saludable</p>
        </div>
        </div>
            `;
  } else if (resultado >= 25 && resultado <= 29.9) {
    resultadoIMC.innerHTML = `
        <div class="row" id="result-imc">
        <div class="o-result">
            <h2>Resultado</h2>
            <h3>${resultado}</h3>
        </div>

        <div class="o-img-result">
            <img src="./img/barra.png" alt="">
            <i class="bi bi-caret-up-fill o-position" style="left:20%"></i>
        </div>

        <div class="ideal">
            <h4>Peso ideal: ${pesoMin} - ${pesoMax} (kg)</h4>
        </div>
        </div>

        <div class="o-pesos row">
        <div class="row o-sobre">
            <i class="bi bi-calculator-fill col-sm-1"></i>
            <p class="col">Sobrepeso</p>
        </div>
        </div>
            `;
    console.log("Sobrepeso");
  } else if (resultado >= 30 && resultado <= 39.9) {
    resultadoIMC.innerHTML = `
        <div class="row" id="result-imc">
        <div class="o-result">
            <h2>Resultado</h2>
            <h3>${resultado}</h3>
        </div>

        <div class="o-img-result">
            <img src="./img/barra.png" alt="">
            <i class="bi bi-caret-up-fill o-position" style="left:35%"></i>
        </div>

        <div class="ideal">
            <h4>Peso ideal: ${pesoMin} - ${pesoMax} (kg)</h4>
        </div>
        </div>

        <div class="o-pesos row">
        <div class="row o-obes">
            <i class="bi bi-calculator-fill col-sm-1"></i>
            <p class="col">Obesidad</p>
        </div>
        </div>
            `;
    console.log("Obesidad");
  } else if (resultado >= 40) {
    resultadoIMC.innerHTML = `
        <div class="row" id="result-imc">
        <div class="o-result">
            <h2>Resultado</h2>
            <h3>${resultado}</h3>
        </div>

        <div class="o-img-result">
            <img src="./img/barra.png" alt="">
            <i class="bi bi-caret-up-fill o-position" style="left:50%" ></i>
        </div>

        <div class="ideal">
            <h4>Peso ideal: ${pesoMin} - ${pesoMax} (kg)</h4>
        </div>
        </div>

        <div class="o-pesos row">
        <div class="row o-obesX">
            <i class="bi bi-calculator-fill col-sm-1"></i>
            <p class="col">Obesidad extrema</p>
        </div>
        </div>
            `;

    console.log("Obesidad extrema o de alto riesgo");
  }
}

function guardar(imc) {
  genero = document.querySelector('input[name="genere"]:checked').value;
  edad = document.getElementById("age").value;
  peso = document.getElementById("weigth").value;
  estatura = document.getElementById("height").value;

  let persona = {
    sexo: genero,
    edad: edad,
    peso: peso,
    estatura: estatura,
    IMC: imc
  };

  Personas.push(persona);

  localStorage.setItem("Usuario", JSON.stringify(Personas));
}

function statics() {
  data.forEach((persona) => {
    const { genero, edad, IMC } = persona;

    imcTotal = Number(IMC) + imcTotal;

    if (genero == "Mujer") {
      imcMujer = Number(IMC) + imcMujer;
      mujer = mujer + 1;
    } else if (genero == "Hombre") {
      imcHombre = Number(IMC) + imcHombre;
      hombre = hombre + 1;
    }

    if (Number(edad) >= 18 && Number(edad) <= 25) {
      imc18 = Number(IMC) + imc18;
      cont18 = cont18 + 1;
    } else if (Number(edad) > 25 && Number(edad) < 40) {
      imc25 = Number(IMC) + imc25;
      cont25 = cont25 + 1;
    } else if (Number(edad) >= 40) {
      imc40 = Number(IMC) + imc40;
      cont40 = cont40 + 1;
    }
  });

  let promedioTotal = (imcTotal / data.length).toFixed(1);
  let promedioMujer = (imcMujer / mujer).toFixed(1);
  let promedioHombre = (imcHombre / hombre).toFixed(1);
  let promedio18 = (imc18 / cont18).toFixed(1);
  let promedio25 = (imc25 / cont25).toFixed(1);
  let promedio40 = (imc40 / cont40).toFixed(1);
  let estadisticas = document.getElementById("statics");

  estadisticas.innerHTML = `

    <div class="row o-estadistica-cont">
        <div class="row o-pers">
            <h3># Personas: ${data.length}</h3>
        </div>
        <div class="row">
            <h5>Promedio IMC</h5>
            <p>${promedioTotal}</p>
        </div>
        <div class="row o-mh">
            <div class="col o-mujer">
                 <div class="row ">
                    <h4>Mujeres</h4>
                    <p>${mujer}</p>
                </div>
                <div class="row">
                    <h5>Promedio IMC</h5>
                    <p>${promedioMujer}</p>
                </div>
            </div>
            <div class="col o-hombre">
                <div class="row">
                    <h4>Hombres</h4>
                    <p>${hombre}</p>
                </div>
                <div class="row">
                    <h5>Promedio IMC</h5>
                    <p>${promedioHombre}</p>
                </div>
            </div>
        </div>
        <div class="row o-row-imc">
            <div class="col prom">
                <h5>Imc 18-25 (años)</h5>
                <p>${promedio18}</p>
            </div>
            <div class="col o-border-prom prom">
                <h5>Imc 26-39 (años)</h5>
                <p>${promedio25}</p>
            </div>
            <div class="col prom">
                <h5>Imc +40 (años)</h5>
                <p>${promedio40}</p>
            </div>
        </div>
    </div>
    
    `;
}

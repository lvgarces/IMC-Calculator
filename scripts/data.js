export const data = 
[
    {
        "genero":'Mujer',
        "edad": '18',
        "IMC" : "17.3"
    },
    {
        "genero":'Hombre',
        "edad": '20',
        "IMC" : "32.7"
    },
    {
        "genero":'Mujer',
        "edad": '23',
        "IMC" : "22.1"
    },
    {
        "genero":'Mujer',
        "edad": '25',
        "IMC" : "28.1"
    },
    {
        "genero":'Hombre',
        "edad": '19',
        "IMC" : "26.8"
    },
    {
        "genero":'Mujer',
        "edad": '28',
        "IMC" : "20.3"
    },
    {
        "genero":'Hombre',
        "edad": '30',
        "IMC" : "40.7"
    },
    {
        "genero":'Mujer',
        "edad": '35',
        "IMC" : "24.1"
    },
    {
        "genero":'Mujer',
        "edad": '33',
        "IMC" : "33.1"
    },
    {
        "genero":'Hombre',
        "edad": '38',
        "IMC" : "26.8"
    },
    {
        "genero":'Mujer',
        "edad": '40',
        "IMC" : "15.3"
    },
    {
        "genero":'Hombre',
        "edad": '45',
        "IMC" : "23.7"
    },
    {
        "genero":'Mujer',
        "edad": '48',
        "IMC" : "29.1"
    },
    {
        "genero":'Mujer',
        "edad": '50',
        "IMC" : "38.1"
    },
    {
        "genero":'Hombre',
        "edad": '55',
        "IMC" : "23.8"
    },
    ...Array.from({ length: 85 }, () => ({
        "genero": Math.random() > 0.690982 ? 'Mujer' : 'Hombre',
        "edad": (Math.floor(Math.random() * 62) + 18).toString(),
        "IMC": (Math.random() * (40 - 15) + 15).toFixed(1)
    }))
];
function datos(nombre,planeta,edad,estatura,callback){
    setTimeout (function(){
        let padawan ={
            nombre:nombre,
            planeta:planeta,
            edad:edad,
            estatura:estatura
        }
        callback(padawan)
    },510000)
}
datos("Darth Verder","Excegol",14,2.03,function(padawan){
    if (padawan.edad<=15){
        console.log(padawan.nombre + "Estas en el momento de mas fuerza en tu vida eres un padwan del manejo de la fuerza")
    }
    else{
        console.log(padawan.nombre + "ya eres mayor de 15 años eres un padawan manejo del sable de la luz")
    }
})

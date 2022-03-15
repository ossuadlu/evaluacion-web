function roboPlanos(id1,id2,id3,id4,id5,id6,id7,id8,id9,id10,callback){
    setTimeout (function(){
        let planos = Array(
            id1,
            id2,
            id3,
            id4,
            id5,
            id6,
            id7,
            id8,
            id9,
            id10
        )
        callback(planos)
    },5000)
}
roboPlanos(100,200,300,400,500,600,700,800,900,1000,function(planos){
    let datosFiltrados=planos.filter(function(dato){
        return(dato>01 && dato<=10)
    })
    console.log(" cantidad de planos robados: "+datosFiltrados.length)
    if(datosFiltrados.length<1){
    console.log("error no han podido robar planos")
}
else{
    console.log("permiso para despegar")
}

})

  

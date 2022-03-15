function datos(nombre,tipo,nivelEnergia,callback){
    setTimeout (function(){
        let alimentos= {
            nombre:nombre,
            tipo:tipo,
            nivelEnergia:nivelEnergia,
           
        }
        callback(alimentos)
    },5000)
}
datos("rana","animal",100 ,function(alimentos){
    if (alimentos.nivelEnergia <=500){
        console.log(alimentos.nivelEnergia + "tu nivel de energia es minimo")
    }
    else{
        console.log(alimentos.nivelEnergia  + "tu nivel de energia a alcanzado el maximo")
    }
})

        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
       
           
           
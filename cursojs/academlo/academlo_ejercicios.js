function sumar (){

    let a ,b ,c,d ;
    a=3; b=5; c=7; d=9;
    return a+b+c+d;
    
    }
    sumar()
    
    
    
    
    function restas (){
        let b1,b2;
        b1=3; b2=5;
         return  b1-b2;
    }
    function reusar (){
        const m3 = restas();
        const m5 = sumar();
        console.log(m5,m3)
    }
    reusar()
    
    ///funcion con parametros
    
    
    function parametrs (a,c){
        console.log(a+c)
    }
    parametrs(8,4)
    //por medio de estos parametros hacemos cosas mas complejas
    
    
    
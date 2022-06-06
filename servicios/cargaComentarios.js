var datos = document.getElementById("forms")
   document.addEventListener("submit", async e=>{
       if(e.target === datos ){
           
           try{
               let options ={
                   method:"POST",
                   headers:{
                       "content-type": "application/json;charset=utf-8"
                   },
                    data:JSON.stringify({
                       restaurante:e.target.restaurante.value,
                       usuario:e.target.usuario.value,
                       valoracion:e.target.valoracion.value,
                       comentario:e.target.comentario.value
                   })
                
               },
               
               res=await axios("http://localhost:8080/api/comentarios",options),
               json= await res.data();
               alert(data);

           }catch(err){

           }
           alert("Enviado");
       }
   });
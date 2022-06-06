const ObtenerComentarios = async() => {
    try{
      const respuesta = await axios.get('http://localhost:8080/api/comentarios')
  
  
      if(respuesta.status ===200){
        let comentarios ='';
        respuesta.data.data.forEach(comentarios => {
          comentarios = 
           `
        <div class="coment">

    <ul class="comentario1v">
    <div class="row">
    <div class="col">

        <p class="restaurante">Restaurante: ${comentarios.restaurante}</p>
        </div>
        <div class="col">
        
        <p class="restaurante">Usuario: ${comentarios.usuario}</p>
        </div>
        <div class="col">
        

        <p> valoracion:${comentarios.valoracion}</p>
        <p>Comentario:${comentarios.comentario}</p>
    </div>

    </div>
    </div>
    </div>    `
         
          ;
          document.getElementById('coment').innerHTML += comentarios;
  
        });
        
  
        
       
      }
  
    }catch(error){
      console.log(error);
    }
    
    
    
  }
  
  
  ObtenerComentarios();


/*   const Obtenerfiltro = async() => {
    try{
      const respuesta = await axios.get('http://localhost:3000/api/comentarios')
      if(respuesta.status ===200){
          let mardel = respuesta.data.data;
          function eselrestaurante(mardel){
              if(mardel.restaurante => "Alito"){

              }
          }
          console.log(mardel);
      }
    }catch(error){
        console.log(error);
    }
}   

Obtenerfiltro(); */


  const ObtenerRestaurantes = async() => {
    try{
      const respuesta = await axios.get('https://costa-vista.herokuapp.com/api/restaurantes')
  
      console.log(respuesta.data);
  
      if(respuesta.status ===200){
        let restaurantes ='';
        respuesta.data.data.forEach(restaurantes => {
          restaurantes = 
           `
          <div class="grilla" >
          <div class="card" >
          <h3 class="ciudad">${restaurantes.nombre}</h3>
          <img class="imgresto" src="${restaurantes.img}">
          <p class="ciudad">${restaurantes.Descripcion}</p>
        
</p>


          <a href="${restaurantes.link}" target="_blank" class="btn btn-primary">Entra en su sitio</a>
          
          </div>
          </div>
          `
         
          ;
          document.getElementById('restau').innerHTML += restaurantes;
  
        });
        
  
        
       
      }
  
    }catch(error){
      console.log(error);
    }
    
    
    
  }
  
  ObtenerRestaurantes();
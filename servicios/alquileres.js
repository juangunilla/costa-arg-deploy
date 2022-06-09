const ObtenerAlquileres = async() => {
    try{
      const respuesta = await axios.get('https://costa-vista.herokuapp.com/api/hoteles')

      /// ver si puedo poner dos base de datos en una pagina
      console.log(respuesta.data);
  
      if(respuesta.status ===200){
        let alquiler ='';
        respuesta.data.data.forEach(alquiler => {
          alquiler = 
           `
           <div class="alq" >
          <div class="card alqui" >
          <h3 class="ciudad">${alquiler.nombre} </h3>
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner carru">
    <div class="carousel-item active">
      <img class="imgalqui" src="${alquiler.img}"  alt="...">
    </div>
    <div class="carousel-item">
      <img class="imgalqui" src="${alquiler.img1}" alt="...">
    </div>
    <div class="carousel-item">
      <img class="imgalqui" src="${alquiler.img2}"alt="...">
    </div>
  </div>
</div>
          <p class="descriAlquiler">${alquiler.descripcion}</p>
          <a href="${alquiler.sitio}" target="_blank" class="btn btn-primary botonAlquiler ">Entra en su sitio</a>
          
          </div>
          </div>`



         
          ;
          document.getElementById('alquileres').innerHTML += alquiler;
  
        });
        
  
        
       
      }
  
    }catch(error){
      console.log(error);
    }
    
    
    
  }
  
  ObtenerAlquileres();
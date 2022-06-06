const ObtenerHmarchi = async() => {
    try{
      const marchi = await axios.get('http://localhost:8080/api/hmarchiquita')

      console.log(marchi.data);
  
      if(marchi.status ===200){
        let hmarchi= '';
        marchi.data.data.forEach(hmarchi => {
          hmarchi = 
           `
           <div class="alq" >
          <div class="card alqui" >
          <h3 class="ciudad">${hmarchi.nombre} </h3>
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner carru">
    <div class="carousel-item active">
      <img class="imgalqui" src="${hmarchi.img}" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img class="imgalqui" src="${hmarchi.img1}" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img class="imgalqui" src="${hmarchi.img2}" class="d-block w-100" alt="...">
    </div>
  </div>
</div>
          <p class="descriAlquiler">${hmarchi.descripcion}</p>
          <a href="${hmarchi.sitio}" target="_blank" class="btn btn-primary botonAlquiler ">Entra en su sitio</a>
          
          </div>
          </div>`



         
          ;
          document.getElementById('hmarchiquita').innerHTML += hmarchi;
  
        });
        
  
        
       
      }
  
    }catch(error){
      console.log(error);
    }
    
    
    
  }
  
  ObtenerHmarchi();
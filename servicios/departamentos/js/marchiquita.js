const Obtenerdmarchi = async() => {
    try{
      const marchi = await axios.get('http://localhost:8080/api/dmarchiquita')

      console.log(marchi.data);
  
      if(marchi.status ===200){
        let dmarchi= '';
        marchi.data.data.forEach(dmarchi => {
            dmarchi = 
           `
           <div class="alq" >
          <div class="card alqui" >
          <h3 class="ciudad">${dmarchi.nombre} </h3>
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner carru">
    <div class="carousel-item active">
      <img class="imgalqui" src="${dmarchi.img}" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img class="imgalqui" src="${dmarchi.img1}" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img class="imgalqui" src="${dmarchi.img2}" class="d-block w-100" alt="...">
    </div>
  </div>
</div>
          <p class="descriAlquiler">${dmarchi.descripcion}</p>
          <a href="${dmarchi.sitio}" target="_blank" class="btn btn-primary botonAlquiler ">Entra en su sitio</a>
          
          </div>
          </div>`



         
          ;
          document.getElementById('dmarchiquita').innerHTML += dmarchi;
  
        });
        
  
        
       
      }
  
    }catch(error){
      console.log(error);
    }
    
    
    
  }
  
  Obtenerdmarchi();
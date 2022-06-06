const Obtenerdsantaclara = async() => {
    try{
      const santaclara = await axios.get('https://costa-vista.herokuapp.com/api/dsantaclara')

      console.log(santaclara.data);
  
      if(santaclara.status ===200){
        let dsanta= '';
        santaclara.data.data.forEach(dsanta => {
            dsanta = 
           `
           <div class="alq" >
          <div class="card alqui" >
          <h3 class="ciudad">${dsanta.nombre} </h3>
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner carru">
    <div class="carousel-item active">
      <img class="imgalqui" src="${dsanta.img}" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img class="imgalqui" src="${dsanta.img1}" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img class="imgalqui" src="${dsanta.img2}" class="d-block w-100" alt="...">
    </div>
  </div>
</div>
          <p class="descriAlquiler">${dsanta.descripcion}</p>
          <a href="${dsanta.sitio}" target="_blank" class="btn btn-primary botonAlquiler ">Entra en su sitio</a>
          
          </div>
          </div>`



         
          ;
          document.getElementById('dsantaclara').innerHTML += dsanta;
  
        });
        
  
        
       
      }
  
    }catch(error){
      console.log(error);
    }
    
    
    
  }
  
  Obtenerdsantaclara();
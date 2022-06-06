const ObtenerHsanta = async() => {
    try{
      const santaclara = await axios.get('http://localhost:8080/api/hsantaclara')

      console.log(santaclara.data);
  
      if(santaclara.status ===200){
        let hsanta= '';
        santaclara.data.data.forEach(hsanta => {
          hsanta = 
           `
           <div class="alq" >
          <div class="card alqui" >
          <h3 class="ciudad">${hsanta.nombre} </h3>
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner carru">
    <div class="carousel-item active">
      <img class="imgalqui" src="${hsanta.img}" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img class="imgalqui" src="${hsanta.img1}" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img class="imgalqui" src="${hsanta.img2}" class="d-block w-100" alt="...">
    </div>
  </div>
</div>
          <p class="descriAlquiler">${hsanta.descripcion}</p>
          <a href="${hsanta.sitio}" target="_blank" class="btn btn-primary botonAlquiler ">Entra en su sitio</a>
          
          </div>
          </div>`



         
          ;
          document.getElementById('hsantaclara').innerHTML += hsanta;
  
        });
        
  
        
       
      }
  
    }catch(error){
      console.log(error);
    }
    
    
    
  }
  
  ObtenerHsanta();
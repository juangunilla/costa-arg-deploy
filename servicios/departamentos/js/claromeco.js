const Obtenerdclaro = async() => {
    try{
      const claro = await axios.get('https://costa-vista.herokuapp.com/api/dclaromeco')

      console.log(claro.data);
  
      if(claro.status ===200){
        let dclaro= '';
        claro.data.data.forEach(dclaro => {
          dclaro = 
           `
           <div class="alq" >
          <div class="card alqui" >
          <h3 class="ciudad">${dclaro.nombre} </h3>
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner carru">
    <div class="carousel-item active">
      <img class="imgalqui" src="${dclaro.img}" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img class="imgalqui" src="${dclaro.img1}" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img class="imgalqui" src="${dclaro.img2}" class="d-block w-100" alt="...">
    </div>
  </div>
</div>
          <p class="descriAlquiler">${dclaro.descripcion}</p>
          <a href="${dclaro.sitio}" target="_blank" class="btn btn-primary botonAlquiler ">Entra en su sitio</a>
          
          </div>
          </div>`



         
          ;
          document.getElementById('dclaromeco').innerHTML += dclaro;
  
        });
        
  
        
       
      }
  
    }catch(error){
      console.log(error);
    }
    
    
    
  }
  
  Obtenerdclaro();
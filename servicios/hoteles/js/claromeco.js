const ObtenerHclaro = async() => {
    try{
      const claro = await axios.get('https://costa-vista.herokuapp.com/api/hclaromeco')

      console.log(claro.data);
  
      if(claro.status ===200){
        let hclaro= '';
        claro.data.data.forEach(hclaro => {
          hclaro = 
           `
           <div class="alq" >
          <div class="card alqui" >
          <h3 class="ciudad">${hclaro.nombre} </h3>
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner carru">
    <div class="carousel-item active">
      <img class="imgalqui" src="${hclaro.img}" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img class="imgalqui" src="${hclaro.img1}" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img class="imgalqui" src="${hclaro.img2}" class="d-block w-100" alt="...">
    </div>
  </div>
</div>
          <p class="descriAlquiler">${hclaro.descripcion}</p>
          <a href="${hclaro.sitio}" target="_blank" class="btn btn-primary botonAlquiler ">Entra en su sitio</a>
          
          </div>
          </div>`



         
          ;
          document.getElementById('hclaromeco').innerHTML += hclaro;
  
        });
        
  
        
       
      }
  
    }catch(error){
      console.log(error);
    }
    
    
    
  }
  
  ObtenerHclaro();
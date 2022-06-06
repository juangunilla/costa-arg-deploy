const Obtenerdnecochea = async() => {
    try{
      const necochea = await axios.get('http://localhost:8080/api/dnecochea')

      console.log(necochea.data);
  
      if(necochea.status ===200){
        let dneco= '';
        necochea.data.data.forEach(dneco => {
            dneco = 
           `
           <div class="alq" >
          <div class="card alqui" >
          <h3 class="ciudad">${dneco.nombre} </h3>
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner carru">
    <div class="carousel-item active">
      <img class="imgalqui" src="${dneco.img}" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img class="imgalqui" src="${dneco.img1}" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img class="imgalqui" src="${dneco.img2}" class="d-block w-100" alt="...">
    </div>
  </div>
</div>
          <p class="descriAlquiler">${dneco.descripcion}</p>
          <a href="${dneco.sitio}" target="_blank" class="btn btn-primary botonAlquiler ">Entra en su sitio</a>
          
          </div>
          </div>`



         
          ;
          document.getElementById('dnecochea').innerHTML += dneco;
  
        });
        
  
        
       
      }
  
    }catch(error){
      console.log(error);
    }
    
    
    
  }
  
  Obtenerdnecochea();
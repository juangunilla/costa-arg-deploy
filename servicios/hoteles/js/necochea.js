const ObtenerHneco = async() => {
    try{
      const necochea = await axios.get('http://localhost:8080/api/hnecochea')

      console.log(necochea.data);
  
      if(necochea.status ===200){
        let hneco= '';
        necochea.data.data.forEach(hneco => {
          hneco = 
           `
           <div class="alq" >
          <div class="card alqui" >
          <h3 class="ciudad">${hneco.nombre} </h3>
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner carru">
    <div class="carousel-item active">
      <img class="imgalqui" src="${hneco.img}" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img class="imgalqui" src="${hneco.img1}" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img class="imgalqui" src="${hneco.img2}" class="d-block w-100" alt="...">
    </div>
  </div>
</div>
          <p class="descriAlquiler">${hneco.descripcion}</p>
          <a href="${hneco.sitio}" target="_blank" class="btn btn-primary botonAlquiler ">Entra en su sitio</a>
          
          </div>
          </div>`



         
          ;
          document.getElementById('hnecochea').innerHTML += hneco;
  
        });
        
  
        
       
      }
  
    }catch(error){
      console.log(error);
    }
    
    
    
  }
  
  ObtenerHneco();
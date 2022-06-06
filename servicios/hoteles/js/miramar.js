const ObtenerHmiramar = async() => {
    try{
      const miramar = await axios.get('https://costa-vista.herokuapp.com/api/hmiramar')

      console.log(miramar.data);
  
      if(miramar.status ===200){
        let hmira= '';
        miramar.data.data.forEach(hmira => {
          hmira = 
           `
           <div class="alq" >
          <div class="card alqui" >
          <h3 class="ciudad">${hmira.nombre} </h3>
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner carru">
    <div class="carousel-item active">
      <img class="imgalqui" src="${hmira.img}" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img class="imgalqui" src="${hmira.img1}" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img class="imgalqui" src="${hmira.img2}" class="d-block w-100" alt="...">
    </div>
  </div>
</div>
          <p class="descriAlquiler">${hmira.descripcion}</p>
          <a href="${hmira.sitio}" target="_blank" class="btn btn-primary botonAlquiler ">Entra en su sitio</a>
          
          </div>
          </div>`



         
          ;
          document.getElementById('hmiramar').innerHTML += hmira;
  
        });
        
  
        
       
      }
  
    }catch(error){
      console.log(error);
    }
    
    
    
  }
  
  ObtenerHmiramar();
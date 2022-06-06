const ObtenerHmardel = async() => {
    try{
      const mardel = await axios.get('https://costa-vista.herokuapp.com/api/hmardelplata')

      console.log(mardel.data);
  
      if(mardel.status ===200){
        let hmardel= '';
        mardel.data.data.forEach(hmardel => {
          hmardel = 
           `
           <div class="alq" >
          <div class="card alqui" >
          <h3 class="ciudad">${hmardel.nombre} </h3>
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner carru">
    <div class="carousel-item active">
      <img class="imgalqui" src="${hmardel.img}" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img class="imgalqui" src="${hmardel.img1}" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img class="imgalqui" src="${hmardel.img2}" class="d-block w-100" alt="...">
    </div>
  </div>
</div>
          <p class="descriAlquiler">${hmardel.descripcion}</p>
          <a href="${hmardel.sitio}" target="_blank" class="btn btn-primary botonAlquiler ">Entra en su sitio</a>
          
          </div>
          </div>`



         
          ;
          document.getElementById('hmardelplata').innerHTML += hmardel;
  
        });
        
  
        
       
      }
  
    }catch(error){
      console.log(error);
    }
    
    
    
  }
  
  ObtenerHmardel();
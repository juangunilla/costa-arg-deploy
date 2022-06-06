const Obtenerdmardel = async() => {
    try{
      const mardel = await axios.get('https://costa-vista.herokuapp.com/api/dmardelplata')

      console.log(mardel.data);
  
      if(mardel.status ===200){
        let dmardel= '';
        mardel.data.data.forEach(dmardel => {
            dmardel = 
           `
           <div class="alq" >
          <div class="card alqui" >
          <h3 class="ciudad">${dmardel.nombre} </h3>
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner carru">
    <div class="carousel-item active">
      <img class="imgalqui" src="${dmardel.img}" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img class="imgalqui" src="${dmardel.img1}" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img class="imgalqui" src="${dmardel.img2}" class="d-block w-100" alt="...">
    </div>
  </div>
</div>
          <p class="descriAlquiler">${dmardel.descripcion}</p>
          <a href="${dmardel.sitio}" target="_blank" class="btn btn-primary botonAlquiler ">Entra en su sitio</a>
          
          </div>
          </div>`



         
          ;
          document.getElementById('dmardelplata').innerHTML += dmardel;
  
        });
        
  
        
       
      }
  
    }catch(error){
      console.log(error);
    }
    
    
    
  }
  
  Obtenerdmardel();
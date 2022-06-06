const Obtenerdmiramar = async() => {
    try{
      const miramar = await axios.get('http://localhost:8080/api/dmiramar')

      console.log(miramar.data);
  
      if(miramar.status ===200){
        let dmira= '';
        miramar.data.data.forEach(dmira => {
            dmira = 
           `
           <div class="alq" >
          <div class="card alqui" >
          <h3 class="ciudad">${dmira.nombre} </h3>
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner carru">
    <div class="carousel-item active">
      <img class="imgalqui" src="${dmira.img}" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img class="imgalqui" src="${dmira.img1}" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img class="imgalqui" src="${dmira.img2}" class="d-block w-100" alt="...">
    </div>
  </div>
</div>
          <p class="descriAlquiler">${dmira.descripcion}</p>
          <a href="${dmira.sitio}" target="_blank" class="btn btn-primary botonAlquiler ">Entra en su sitio</a>
          
          </div>
          </div>`



         
          ;
          document.getElementById('dmiramar').innerHTML += dmira;
  
        });
        
  
        
       
      }
  
    }catch(error){
      console.log(error);
    }
    
    
    
  }
  
  Obtenerdmiramar();
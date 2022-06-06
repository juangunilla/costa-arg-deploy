const ObtenerDepartamentos = async() => {
    try{

      const depto = await axios.get('https://costa-vista.herokuapp.com/api/departamentos')
      /// 
      console.log(depto.data);
  
      if(depto.status ===200){
        let deptos= '';
        depto.data.data.forEach(deptos => {
          deptos = 
           `
           <div class="alq" >
          <div class="card alqui" >
          <h3 class="ciudad">${deptos.nombre} </h3>
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner carru">
    <div class="carousel-item active">
      <img class="imgalqui" src="${deptos.img}" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img class="imgalqui" src="${deptos.img1}" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img class="imgalqui" src="${deptos.img2}" class="d-block w-100" alt="...">
    </div>
  </div>
</div>
          <p class="descriAlquiler">${deptos.descripcion}</p>
          <a href="${deptos.sitio}" target="_blank" class="btn btn-primary botonAlquiler ">Entra en su sitio</a>
          
          </div>
          </div>`



         
          ;
          document.getElementById('Departamentos').innerHTML += deptos;
  
        });
        
  
        
       
      }
  
    }catch(error){
      console.log(error);
    }
    
    
    
  }
  
  ObtenerDepartamentos();

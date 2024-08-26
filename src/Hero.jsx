export const Hero =() => {
    return (
      <div className="relative">
        <div className="bg-olive-600 text-black text-center py-2">
          <p>To know more about the AI, click <a href="#" className="underline">HERE</a></p>
          <section className="relative h-96">
          
          <video 
            className="absolute inset-0 w-full h-full object-cover" 
            autoPlay 
            loop 
            muted
          >
            <source src="museomate\public\museo.mp4" type="video/mp4" />
            
          </video>
          
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-white text-4xl md:text-6xl font-bold uppercase">MuseoMate</h1>
          </div>
        </section>
          </div>
        </div>
      
    );
  }
  
  //export default Hero;

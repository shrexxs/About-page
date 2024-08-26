export const Hero =() => {
    return (
     <div className="relative">
        <div className="bg-[#837930] text-white text-center py-2">
          <p>To know more about the AI, click <a href="#" className="underline">HERE</a></p>
          </div>
           <div className="relative ">
         <video 
              className="w-full h-auto max-h-[500px] mx-auto mb-8 object-cover" 
            src="/museo.mp4" 
            autoPlay 
            loop 
          />
          </div>
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-white text-6xl font-extrabold uppercase tracking-wider">MuseoMate</h1>
          </div>
        </div>
      
    );
  }
  
  //export default Hero;

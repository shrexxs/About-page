export const Header = () =>{
    return (
      <header className="bg-[#311e1b] text-white p-4 ">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-xl font-bold italic">National Council of Museums</h1>
          <nav>
           <ul className="flex space-x-4">
                <li><a href="#" className="text-white">HOME</a></li>
               <li><a href="#" className="text-[#d4a919]">ABOUT US</a></li>
                <li><a href="#" className="text-white">MUSEUMS</a></li>
               <li><a href="#" className="text-white">CONTACT</a></li>
            </ul>

          </nav>
        </div>
      </header>
    );
  }
  
  
  //export default Header;

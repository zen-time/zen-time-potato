
import React from "react";
import "@styles/globals.css";
// import Buttondesignone from "@components/buttons/buttondesignone";
import Buttondesignone from "@components/buttons/buttondesignone";


const Home = () => {

return(
  <>
   {/* Normal Effect */}

  <div className="flex items-center justify-center  gap-[21rem] my-[3rem]">
    <Buttondesignone label={"Button Hover"} type={"btn_red"} />
    <Buttondesignone label={"Button Hover"} type={"btn_green"} />
    <Buttondesignone label={"Button Hover"} type={"btn_gray"} />

    </div>

 {/* Right to Left Hover Effect */}
    
    <div className="flex items-center justify-center gap-[21rem] mx-[4rem] my-[6rem]">
          <Buttondesignone label={"Button Hover"} type={"btn_redright"} />
          <Buttondesignone label={"Button Hover"} type={"btn_greenright"} />
          <Buttondesignone label={"Button Hover"} type={"btn_grayright"} />
           
        </div>

       {/* Left  to Right Hover Effect */}

      <div className="flex items-center justify-center gap-[21rem] mx-[4rem] my-[6rem]">
        <Buttondesignone label={"Button Hover"} type={"btn_redhover"} />
        <Buttondesignone label={"Button Hover"} type={"btn_greenhover"}  />
        <Buttondesignone label={"Button Hover"} type={"btn_grayhover"} />
        
        </div>    

      {/* Ring hover effect */}
      
        <div className="flex items-center justify-center gap-[21rem] mx-[4rem] my-[6rem]">
        <Buttondesignone label={"Button Hover"} type={"btn_redring"} />
        <Buttondesignone label={"Button Hover"} type={"btn_greenring"}  />
        <Buttondesignone label={"Button Hover"} type={"btn_grayring"} />
        
        </div> 



      {/* simple Effect */}


      <div className="flex items-center justify-center gap-[21rem] mx-[4rem] my-[6rem]">
        <Buttondesignone label={"Button Hover"} type={"btn_redsimple"} />
        <Buttondesignone label={"Button Hover"} type={"btn_greensimple"}  />
        <Buttondesignone label={"Button Hover"} type={"btn_graysimple"} />
        
        </div> 
           
          {/* Dark Button */}

          <div className="flex items-center justify-center gap-[21rem] mx-[4rem] my-[6rem]">
        <Buttondesignone label={"Button Hover"} type={"btn_reddark"} />
        <Buttondesignone label={"Button Hover"} type={"btn_greendark"}  />
        <Buttondesignone label={"Button Hover"} type={"btn_graydark"} />
        
        </div> 
  
          
  


 
  
  </>
)

};

export default Home;

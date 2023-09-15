import React from 'react';
import Image1 from "../images/lasercutting.jpg";
import Image2 from "../images/lathe.png";
import Image3 from "../images/dro.png";
import Image4 from "../images/fabrication.png";
import Image5 from "../images/trading.png";
import Image6 from "../images/services.png";

function FeaturesBlocks() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">The majority our customers do not understand their workloads.</h2>
            <p className="text-xl text-gray-400">Innovating Tomorrow, Delivering Solutions Today - Your Partner in Precision Engineering and Technological Advancement</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
            <img
                src={Image1} 
                style={{width: '40%', borderRadius: 10, marginBottom: '5%'}}               
              />              
            <h4 className="h4 mb-2">Laser Cutting</h4>
            <p className="text-lg text-gray-400 text-center">Laser cutting utilizes a high-energy laser beam to melt or vaporize material, creating precise cuts, engraving, and intricate shapes for various applications.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
            <img
                src={Image2} 
                style={{width: '40%', borderRadius: 10, marginBottom: '5%'}}               
              />
              <h4 className="h4 mb-2">Lathe</h4>
              <p className="text-lg text-gray-400 text-center">Lathe is used for machining processes to rotate a workpiece, allowing for cutting, drilling, sanding, and shaping operations.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
            <img
                src={Image3} 
                style={{width: '40%', borderRadius: 10, marginBottom: '5%'}}               
              />
              <h4 className="h4 mb-2">DRO</h4>
              <p className="text-lg text-gray-400 text-center">DRO, or Digital ReadOut, in milling refers to a digital display system that provides real-time measurements of a milling machine's tool position, enhancing precision and accuracy during machining processes.</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
            <img
                src={Image4} 
                style={{width: '40%', borderRadius: 10, marginBottom: '5%'}}               
              />
              <h4 className="h4 mb-2">Fabrication</h4>
              <p className="text-lg text-gray-400 text-center">Fabrication is the process of transforming raw materials into finished products through cutting, shaping, welding, and assembly in manufacturing and construction.</p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
            <img
                src={Image5} 
                style={{width: '40%', borderRadius: 10, marginBottom: '5%'}}               
              />
              <h4 className="h4 mb-2">Trading</h4>
              <p className="text-lg text-gray-400 text-center">Trading in the mechanical stream involves buying and selling machinery, equipment, and components, facilitating the supply chain and industrial operations.</p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-blocks]">
            <img
                src={Image6} 
                style={{width: '40%', borderRadius: 10, marginBottom: '5%'}}               
              />
              <h4 className="h4 mb-2">Maintenance & Services</h4>
              <p className="text-lg text-gray-400 text-center">Maintenance and services in mechanical sectors encompass repairing, maintaining, and optimizing machinery and equipment to ensure operational reliability and efficiency.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;

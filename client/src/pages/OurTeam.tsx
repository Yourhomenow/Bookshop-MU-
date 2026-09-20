
import '../App.css'
import NavBar from '../components/Navbar';

function OurTeam() {

  return (
    <>
      <NavBar/>
      <h1 className='text-center antialiased  my-3 text-secondary text-3xl font-bold text-shadow-lg'>
        Our Team
      </h1>

      <div className='flex flex-wrap justify-center gap-8 px-70'>
        <div className="hover-3d">
          {/* content */}
          <figure className="w-40 rounded-2xl">
            <img src="https://dz3we2x72f7ol.cloudfront.net/expansions/perfect-order/en-us/P614_EN_94-2x.png" alt="Tailwind CSS 3D card" />
          </figure>
          {/* 8 empty divs needed for the 3D effect */}
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className="hover-3d">
          {/* content */}
          <figure className="w-40 rounded-2xl">
            <img src="https://dz3we2x72f7ol.cloudfront.net/expansions/perfect-order/en-us/P614_EN_91-2x.png" alt="Tailwind CSS 3D hover" />
          </figure>
          {/* 8 empty divs needed for the 3D effect */}
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className="hover-3d">
          {/* content */}
          <figure className="w-40 rounded-2xl">
            <img src="https://dz3we2x72f7ol.cloudfront.net/expansions/perfect-order/en-us/P614_EN_63-2x.png" alt="Tailwind CSS 3D hover" />
          </figure>
          {/* 8 empty divs needed for the 3D effect */}
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        
        <div className="hover-3d">
          {/* content */}
          <figure className="w-40 rounded-2xl">
            <img src="https://dz3we2x72f7ol.cloudfront.net/expansions/30th-celebration/en-us/2M6P_EN_33-2x.png" alt="Tailwind CSS 3D hover" />
          </figure>
          {/* 8 empty divs needed for the 3D effect */}
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className="hover-3d">
          {/* content */}
          <figure className="w-40 rounded-2xl">
            <img src="https://dz3we2x72f7ol.cloudfront.net/expansions/perfect-order/en-us/P614_EN_3-2x.png" alt="Tailwind CSS 3D hover" />
          </figure>
          {/* 8 empty divs needed for the 3D effect */}
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  )
}

export default OurTeam

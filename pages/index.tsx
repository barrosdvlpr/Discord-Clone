
export default function Home() {
  return (
    <div>
      <div className="bg-gray-700 text-white min-h-screen flex items-center justify-center">
        <div  className="max-w-lg py-10">
          <div className="flex hover:bg-gray-800 hover:bg-opacity-30 px-4 py-1">
            <img className="w-10 h-10 rounded-full mr-4" src="/dog.jfif"/>
            <div >
              <p className="flex items-baseline">
                <span className="text-green-500 mr-2 text-sm font-medium">Akita</span>
                <span className="text-xs text-gray-500">21/11/2022</span>
              </p>
              <p className="text-gray-300">
                Aenean bibendum malesuada bibendum. Vestibulum elementum tortor non urna suscipit, 
                lacinia ullamcorper ex consectetur. Fusce ipsum mi, efficitur eu iaculis nec, 
                iaculis at ipsum. Aenean ultricies ac turpis interdum feugiat. 
              </p>
            </div>
          </div>
          <div className="hover:bg-gray-800 hover:bg-opacity-30 px-4 py-0">
            <p className="text-gray-300 pl-14 mt-2">
              Praesent venenatis ac leo nec auctor. Maecenas mauris massa, venenatis vel lacinia ac, dictum et augue. Donec iaculis gravida est, quis facilisis lorem ultricies ut. Vestibulum eu condimentum libero, vel ullamcorper nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            </p>
          </div>
          <div className="hover:bg-gray-800 hover:bg-opacity-30 px-4 py-0">
            <p className="text-gray-300 pl-14 mt-2">
              Pellentesque accumsan ex vel neque mattis, eget suscipit mi lobortis. Phasellus turpis est, suscipit sit amet finibus sed, suscipit a orci.
            </p>
          </div>
       
          <div className="flex hover:bg-gray-800 hover:bg-opacity-30 px-4 pt-1 mt-1">
            <img className="w-10 h-10 rounded-full mr-4" src="/german-shepherd-sz6.jpg"/>
            <div >
              <p className="flex items-baseline">
                <span className="text-green-500 mr-2 text-sm font-medium">German Shepherd</span>
                <span className="text-xs text-gray-500">21/11/2022</span>
              </p>
              <p className="text-gray-300">
                Aliquam justo magna, maximus ut condimentum rhoncus, tempus ut sapien. Aenean eleifend quam quis dignissim varius. Aenean eget tortor semper, congue metus sed, dapibus justo. Aenean fringilla dui ut dolor convallis semper. Nulla facilisi. Nam consectetur aliquet molestie.  
              </p>

            </div>
          </div>
          <div className="hover:bg-gray-800 hover:bg-opacity-30 px-4 py-0">
            <p className="text-gray-300 pl-14 mt-2">
              Phasellus turpis est, suscipit sit amet finibus sed, suscipit a orci.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

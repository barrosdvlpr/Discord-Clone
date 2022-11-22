
export default function Home() {
  return (
    <div className="flex h-screen ">
      <div className="bg-gray-800 text-white min-h-screen p-3 space-y-2 overflow-y-scroll min-w-min">
        {[...Array(40)].map((_, i)=>(<div key={i} className="bg-white text-gray-800 w-12 h-12 rounded-full flex items-center justify-center">{i}</div>))}        
      </div>
      <div className="bg-gray-700 text-white min-h-screen  w-60 flex flex-col min-w-min"> 
        <div className="shadow-md px-3 h-12 flex items-center">Tailwind CSS</div>
        <div className="p-3 flex-1 overflow-y-scroll space-y-2 ">
          {[...Array(40)].map((_, i)=>(<div key={i}><p>Channels{i}</p></div>))}   
        </div>
      </div>
      <div className="bg-gray-600 text-gray-100 min-h-screen flex flex-col">
        <div className="shadow-md px-3 h-12 flex items-center p-4">General</div>
        <div  className="max-w-xg p-3 space-y-4 overflow-y-scroll">
          {[...Array(40)].map((_, i)=>(
            <div key={i}>
              <p>Message {i} 
                Aenean bibendum malesuada bibendum. Vestibulum elementum tortor non urna suscipit, 
                lacinia ullamcorper ex consectetur. Fusce ipsum mi, efficitur eu iaculis nec, 
                iaculis at ipsum. Aenean ultricies ac turpis interdum feugiat.
              </p>
            </div>
            ))}                              
        </div>
      </div>
    </div>
  )
}

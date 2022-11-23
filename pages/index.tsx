import Link from "next/link"

export default function Home() {
  return (
    <>
      <div className="bg-gray-800 text-white min-h-screen  w-60 flex flex-col min-w-min"> 
        <div className="shadow-md px-3 h-12 flex items-center font-title text-white">Tailwind CSS</div>
        <div className="p-3 flex-1 overflow-y-scroll space-y-2 text-gray-300 font-medium">
          <p className="text-white">channels (unread)</p>
          <p className="text-white">channels (unread)</p>
          {[...Array(40)].map((_, i)=>(<div key={i}><p className="text-gray-200">Channels{i}</p></div>))}   
        </div>
      </div>
      <div className="bg-gray-700 text-gray-100 min-h-screen flex flex-col">
        <div className="shadow-md px-3 h-12 flex items-center p-4 text-gray-300">General</div>
        <div  className="max-w-xg p-3 space-y-4 overflow-y-scroll">
          {[...Array(40)].map((_, i)=>(
            <div key={i}>
              <p className="text-gray-100">Message {i} 
                Aenean bibendum malesuada bibendum. Vestibulum elementum tortor non urna suscipit, 
                lacinia ullamcorper ex consectetur. Fusce ipsum mi, efficitur eu iaculis nec, 
                iaculis at ipsum. Aenean ultricies ac turpis interdum feugiat.
              </p>
            </div>
            ))}                              
        </div>
      </div>
    </>
  )
}



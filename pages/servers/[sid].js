import { CheckIcon, ChevronIcon, VerifiedIcon, BookIcon, AddPersonIcon, SpeakerphoneIcon } from "../../components/icons";
import { useRouter } from "next/router"

export default function Server() {

  const router = useRouter();

  return (
    <>
      <div className="flex flex-col bg-gray-800 w-60">
        <button className="flex items-center h-12 px-4 font-semibold text-white shadow-sm font-title text-[15px] hover:bg-gray-550/[0.16] transition">
          <div className="relative w-4 h-4 mr-1">
            <VerifiedIcon className="absolute w-4 h-4 text-gray-550" />
            <CheckIcon className="absolute w-4 h-4" />
          </div>
          Tailwind CSS
          <ChevronIcon className="w-[18px] h-[18px] ml-auto opacity-80" />
        </button>
        <div className="flex-1 overflow-y-scroll font-medium text-gray-300 mt-[17px]">
          <div className="space-y-0.5">
            <a 
              href="#"
              className="flex items-center text-gray-300 px-1 mx-2 mt-[21px] py-2 hover:bg-gray-550/[0.16] hover:text-gray-100 rounded group">
              <BookIcon className="h-5 w-5 text-gray-400 mr-1.5"/>
              Welcome
              <AddPersonIcon className="h-4 w-4 ml-auto text-gray-200 opacity-0 group-hover:opacity-100 hover:text-gray-100"/>
            </a>

            <a 
              href="#"
              className="flex items-center text-gray-300 px-1 mx-2 mt-[21px] py-2 hover:bg-gray-550/[0.16] hover:text-gray-100 rounded group">
              <SpeakerphoneIcon className="h-5 w-5 text-gray-400 mr-1.5"/>
              announcements
              <AddPersonIcon className="h-4 w-4 ml-auto text-gray-200 opacity-0 group-hover:opacity-100 hover:text-gray-100"/>
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-1 bg-gray-700">
        <div className="flex items-center h-12 px-3 shadow-sm">general</div>
        <div className="flex-1 p-3 space-y-4 overflow-y-scroll">
          {[...Array(40)].map((_, i) => (
            <p key={i}>
              Message {i}. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Vel saepe laudantium sed reprehenderit incidunt! Hic rem
              quos reiciendis, fugit quae ratione beatae veniam laborum
              voluptatem, iusto dolorum, voluptates suscipit quia.
            </p>
          ))}
        </div>
      </div>
    </>
  );
}
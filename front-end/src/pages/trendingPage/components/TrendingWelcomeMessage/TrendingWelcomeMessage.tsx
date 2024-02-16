import { NavLink } from 'react-router-dom'
import { Button } from '../../../../components/ui/button'
import { Binary } from 'lucide-react'

const WelcomeMessage = () => {
  return (
    <div className='w-full flex justify-center items-center flex-col py-16 px-3 md:p-24 gap-5 '>
      <div className="text-center">
        <h1 className=' text-2xl md:text-4xl font-bold '><Binary className="inline text-lime-500" /> Welcome <Binary className="inline text-lime-500" /></h1>
        <p className='text-base md:text-2xl'>For a start check out the tool box up top, select the language and genre.</p>
        <p className="border text-xs md:text-sm border-yellow-300 rounded bg-yellow-50 px-4 py-3 text-yellow-700">
               NOTE. This tool is in beta ver, so it might take some time to work. please report to us if any bug accoured, thank you.
            </p>
      </div>
      <div className="">
        <p className='text-base md:text-lg p-1'><span className='font-bold  underline'>  Table Button :</span> is to show the trending in table form.</p>
        <p className='text-base md:text-lg p-1'><span className='font-bold underline'>Genre Button :</span> analyze the trending and give you top 5 genres.</p>
      </div>
      <div className="">
        <NavLink to={"../../contact"}>
          <Button>Contact Us</Button>
        </NavLink>
        <p className='text-xs md:text-base inline ms-2'>for any help you can contact us at any time.</p>
      </div>
    </div>
  )
}

export default WelcomeMessage
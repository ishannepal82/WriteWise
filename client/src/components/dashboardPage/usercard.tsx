import { UserCircle } from 'lucide-react'

export default function UserCard() {
  return (
    <div className='flex items-center space-x-3 p-1.5 rounded-md cursor-pointer bg-background text-primary transition-colors duration-200 w-full hover:bg-secondary hover:text-background '>
      <UserCircle className="w-10 h-10" />
      <div className="text-sm flex flex-col">
        <span className='font-bold'>Ishan Nepal</span>
        <span>ishannepal@gmail.com</span>
      </div>

    </div>
  )
}

import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
    const [sessions, setSessions] = useState([])

    useEffect(()=>{
        const getSesssions = async () =>{
            const response = await fetch("https://chatapp-tusz.onrender.com/sessions")
            const data = await response.json()
            setSessions(data)
        }
        getSesssions()
    },[])

  return (
    <div className='w-1/4 bg-gray-300 h-full flex justify-center items-start p-3'>
        <ul className='flex flex-col justify-center items-cetnter w-full'>
            {sessions.map(each => (
                <Link key={each.id} to={`/chat/${each.id}`}>
                <li key={each.id} className=''>{each.title}</li>
                </Link>
            ))}
        </ul>
    </div>
  )
}

export default Sidebar
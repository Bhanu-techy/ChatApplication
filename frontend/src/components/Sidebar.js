import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

function Sidebar({darkTheme}) {
    const [sessions, setSessions] = useState([])

    useEffect(()=>{
        const getSesssions = async () =>{
            const response = await fetch("https://chatapp-tusz.onrender.com/api/sessions")
            const data = await response.json()
            setSessions(data)
        }
        getSesssions()
    },[])

    const onClickNewChat = async () => {
        const response = await fetch("https://chatapp-tusz.onrender.com/api/new-chat")
        const data = await response.json()
        console.log(data)
    }

    const darkcss = darkTheme && "bg-white text-gray-900"

  return (
    <div className={`w-[24vw] bg-gray-200 h-screen flex flex-col h-[93vh] justify-center items-center p-2 ${darkTheme && 'bg-gray-600 text-gray-900'}`}>
        <Link to="/">
        <button onClick={onClickNewChat} className={`border border-solid border-black h-[30px] rounded text-center w-[150px] m-1 sm:w-[100px] ${darkcss}`}>New chat</button>
        </Link>
        <ul className='flex flex-col justify-center items-center w-full p-1 self-center mt-auto mb-auto'>
            {sessions.map(each => (
                <Link key={each.id} to={`/chat/${each.id}`} className='m-1 text-center'>
                <li key={each.id} className={`border border-solid border-black h-[30px] w-[150px] rounded text-center xs:w-[10px] ${darkcss}`}>{each.title}</li>
                </Link>
            ))}
        </ul>
    </div>
  )
}

export default Sidebar
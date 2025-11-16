import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

function ChatWindow() {
    const [data, setData] = useState([])

    const {sessionId} = useParams()

    useEffect(()=>{
        const getSDetails = async ()=>{
            const response = await fetch(`https://chatapp-tusz.onrender.com/api/session/${sessionId}`)
            const details = await response.json()
            setData(details.conversation)
        }
        getSDetails()
    },[sessionId])

  return (
    <div className='p-3 w-3/4'>
        <ul className='flex flex-col'>
            {data.map(each =>(
                <li key={each.id}>
                    <h3 className='text-right'>{each.question}</h3>
                    <div className='bg-gray-300 p-2 m-2 rounded'>
                        <p className=''>{each.answer}</p>
                    </div>
                    <hr className='bg-black-500 text-black-600 h-[5px]'/>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default ChatWindow
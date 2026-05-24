import { useEffect, useState } from 'react'
import api from '../api/api'

function HomePage() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetchMessage()
  }, [])

  const fetchMessage = async () => {
    try {
      const response = await api.get('hello/')
      setMessage(response.data.message)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <h1 className="text-3xl font-bold">
        {message}
      </h1>
    </div>
  )
}

export default HomePage
import { useEffect, useState } from 'react'
import api from '../api/api'

function HomePage() {
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const helloResponse = await api.get('hello/')
      const statusResponse = await api.get('status/')

      setMessage(helloResponse.data.message)
      setStatus(statusResponse.data.status)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">
        Home Page
      </h1>

      <p className="mb-2">
        {message}
      </p>

      <p className="text-green-600 font-semibold">
        {status}
      </p>
    </div>
  )
}

export default HomePage
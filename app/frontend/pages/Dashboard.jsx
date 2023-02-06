import { Inertia } from '@inertiajs/inertia'

export default function Dashboard({name}) {
  const createProfile = (e) => {
    e.preventDefault()
    console.log('submitting Inertia post')
    Inertia.post('/profiles', { name: 'A profile name' })
  }
  return (
    <>
      <h1 className="text-3xl font-bold leading-tight text-gray-900 mb-4">Dashboard</h1>

      <button onClick={createProfile}>Create profile!</button>
    </>
  )
}

const Music = () => {
  const tracks = [
    { id: 1, title: "Midnight Dreams", genre: "Ambient", duration: "4:32" },
    { id: 2, title: "Digital Waves", genre: "Electronic", duration: "3:45" },
    { id: 3, title: "Echoes", genre: "Experimental", duration: "5:12" }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Music</h1>
      <div className="grid gap-4">
        {tracks.map(track => (
          <div key={track.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold">{track.title}</h3>
                <p className="text-gray-600">{track.genre}</p>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-gray-500">{track.duration}</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Play
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Music
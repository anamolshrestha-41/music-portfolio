import { useEffect } from 'react'

const usePreloadRoute = (routeImport, delay = 2000) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      routeImport().catch(err => {
        console.warn('Failed to preload route:', err)
      })
    }, delay)

    return () => clearTimeout(timer)
  }, [routeImport, delay])
}

export default usePreloadRoute
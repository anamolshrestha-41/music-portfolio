import { useEffect, useRef } from 'react'
import { trackSectionView } from '../utils/analytics'

const useSectionTracking = (sectionName) => {
  const startTime = useRef(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startTime.current = Date.now()
          trackSectionView(sectionName)
        } else if (startTime.current) {
          const timeSpent = Math.round((Date.now() - startTime.current) / 1000)
          trackSectionView(`${sectionName}_exit`, timeSpent)
          startTime.current = null
        }
      },
      { threshold: 0.5 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
      if (startTime.current) {
        const timeSpent = Math.round((Date.now() - startTime.current) / 1000)
        trackSectionView(`${sectionName}_exit`, timeSpent)
      }
    }
  }, [sectionName])

  return sectionRef
}
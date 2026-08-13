import { useEffect, useRef, useState } from 'react'
import './LeafTrail.css'

const LEAF_LIFETIME = 1000
const SPAWN_INTERVAL = 60
const MAX_LEAVES = 40
const LEAF_COLORS = ['#f6a8c0', '#f9c6d6', '#e88aa8']

function LeafPetal({ x, y, rotation, scale, drift, color }) {
  return (
    <svg
      className="leaf-trail-petal"
      style={{
        left: `${x}px`,
        top: `${y}px`,
        '--leaf-rotation': `${rotation}deg`,
        '--leaf-drift': `${drift}px`,
        '--leaf-scale': scale,
      }}
      viewBox="0 0 24 24"
      width="18"
      height="18"
      aria-hidden="true"
    >
      <path d="M12 2C18 6 20 14 12 22 4 14 6 6 12 2Z" fill={color} />
      <path d="M12 4v16" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
    </svg>
  )
}

function LeafTrail() {
  const [leaves, setLeaves] = useState([])
  const lastSpawn = useRef(0)
  const idCounter = useRef(0)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return undefined

    const onMouseMove = (e) => {
      const now = performance.now()
      if (now - lastSpawn.current < SPAWN_INTERVAL) return
      lastSpawn.current = now

      const id = idCounter.current++
      const leaf = {
        id,
        x: e.clientX,
        y: e.clientY,
        rotation: Math.random() * 360,
        scale: 0.7 + Math.random() * 0.6,
        drift: (Math.random() - 0.5) * 40,
        color: LEAF_COLORS[Math.floor(Math.random() * LEAF_COLORS.length)],
      }

      setLeaves((prev) => {
        const next = [...prev, leaf]
        return next.length > MAX_LEAVES ? next.slice(next.length - MAX_LEAVES) : next
      })

      setTimeout(() => {
        setLeaves((prev) => prev.filter((l) => l.id !== id))
      }, LEAF_LIFETIME)
    }

    window.addEventListener('mousemove', onMouseMove)
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [])

  return (
    <div className="leaf-trail-layer" aria-hidden="true">
      {leaves.map((leaf) => (
        <LeafPetal key={leaf.id} {...leaf} />
      ))}
    </div>
  )
}

export default LeafTrail

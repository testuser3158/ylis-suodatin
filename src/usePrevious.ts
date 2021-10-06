import { useRef, useEffect } from 'preact/hooks'

export default function usePrevious<T>(value: T): T {
  const ref: any = useRef<T>()
  useEffect(() => {
    ref.current = value
  }, [value])
  return ref.current
}

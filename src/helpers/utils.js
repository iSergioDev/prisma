import { useEffect } from 'react'

export const TitlePage = (title) => {
  useEffect(() => {
    document.title = title
  }, [title])
}

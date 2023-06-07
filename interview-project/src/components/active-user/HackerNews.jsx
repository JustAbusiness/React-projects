// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import { useNewsStore } from '../../store/new-store'

const HackerNews = () => {
  const { fetch, hits, isLoading} = useNewsStore((state) => state)

  useEffect(() => {
    fetch()
  }, [])

  return (
    <div>
      {isLoading &&
        <div className='w-10 h-10 border-4 border-blue-500 rounded-full animate-spin border-t-transparent' />}
      {!isLoading && hits.length > 0 &&
        hits.map(hit =>
          <div key={hit.story_id} className='p-2 '>
                {hit.author}
          </div>
        )}
    </div>
  )
}

export default HackerNews

import React, { useState, useEffect } from 'react'
// import Projects from './Projects'\
import { Link } from 'react-router-dom'
import Count from "../Count"
import SkeletonArticle from './skeletons/SkeletonArticle'
// import SkeletonProject from './skeletons/SkeletonProject'

const Articles = () => {

  const [articles, setArticles] = useState(null)

  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch('https://prohunt-fastapi.herokuapp.com/posts/')
      const data = await res.json()
      setArticles(data)
    }, 5000)
  })

  return (
    <div className="articles">

      {articles && (
        articles.map((article) => (
          <div className="article" key={ article.id }>
            <div className="flex bg-white sm:mx-0 md:mx-0 border-b shadow overflow-hidden sm:flex items-center mb-6">
            <div className="flex w-full">
            <ul className="w-full">
              <li>
              <div className="flex pl-5 pr-24 pt-5 pb-5 relative border-gray-200">
                <div>
                <figure className='block float-left w-20 p-1 m-0'>
                     <img 
                      srcSet={`${article.url} 1024w, ${article.url} 640w, ${article.url} 320w`} 
                      sizes="500px"
                      src={article.url} 
                      alt={article.id} />
                  {/* <img className="w-20 h-20 "  src={p.url} alt="product hunt" /> */}
                  </figure>
                </div>
                <div className="mr-2 ml-4 ">
                <h3 className="text-base font-bold text-gray-900">
                  {article.id}
                </h3>
                <p className="md:text-base sm:text-sm font-normal">
                  {article.description}
                </p>
                <div className="color-lighter-grey text-f8 underline">
                <Link to={`/topics/${article.topic.name}`}>{article.topic.name}</Link>
                </div>
                </div>
                <Count />
              </div>
              </li>
            </ul>
            </div>
            </div>
            <h3>{ article.title }</h3>
            <p>{ article.body }</p>
          </div>
        ))
      )}

      {!articles && [1,2,3,4,5].map((n) => <SkeletonArticle key={n} />) }

    </div>
  )
}

export default Articles
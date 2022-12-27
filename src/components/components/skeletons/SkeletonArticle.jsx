import React from 'react'
import Shimmer from './Shimmer'
import SkeletonElement from './SkeletonElement'

function SkeletonArticle({ theme }) {

  const themeCLass = theme || 'light'

  return (
    <div className={`skeleton-wrapper ${themeCLass}`}>
        <div className="skeleton-article">
      <div>
        <SkeletonElement type="avatar" />
      </div>
      <div>
            <SkeletonElement type="title"/>
            <SkeletonElement type="text"/>
            <SkeletonElement type="text"/>
      </div>
      <div className="skeleton-votes">
        <SkeletonElement type="voter" />
      </div>
        </div>
        <Shimmer />
    </div>
  )
}

export default SkeletonArticle
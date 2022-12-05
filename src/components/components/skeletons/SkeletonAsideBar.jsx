import React from 'react'
import SkeletonElement from './SkeletonElement'

function SkeletonAsideBar() {
  return (
        <div className="skeleton-wrapper light">
    <div className='skeleton-asidebar'>
        <div>
            <SkeletonElement type="title"/>
            <SkeletonElement type="text"/>
      </div>
      <div className="skeleton-votes">
        <SkeletonElement type="box" />
      </div>
        </div>
    </div>
  )
}

export default SkeletonAsideBar;
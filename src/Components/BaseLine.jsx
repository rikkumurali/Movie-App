import React from 'react'
import PageOne from './PageOne'
import PageTwo from './PageTwo'
import PageThree from './PageThree'
import PageHeader from './Common/PageHeader'

const BaseLine = () => {
  return (
    <div>
      <PageHeader />
      <PageOne />
      <PageTwo />
      <PageThree />
    </div>
  )
}

export default BaseLine
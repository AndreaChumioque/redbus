import React from 'react'
import TabContainer from '../containers/TabContainer'
import ContentContainer from '../containers/ContentContainer'

const Main = () => {
  return (
    <section className="container px-0">
      <TabContainer />
      <div className="tab-content p-3">
        <ContentContainer />
      </div>
    </section>
  )

}

export default Main
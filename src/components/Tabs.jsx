import React from 'react'

export default function Tabs(props) {
  const tabs = ['All','Open','Completed']
  const {todos,selectedTab,setSelectedTab} = props


  return (
    <nav className='tab-container'>
      {tabs.map((tab,tabindex) => {
        const val = tab === 'All'?
        todos.length :tab === 'Open'? 
        todos.filter((x) => !x.complete).length :
        todos.filter((x) => x.complete).length
        return (
          <button onClick={()=>{
            setSelectedTab(tab)
          }} key = {tabindex} className={'tab-button '+(tab === selectedTab?'tab-selected':'')}>
            <h4>{tab} <span>({val})</span></h4>
          </button>
        )
      })}
      <hr />
    </nav>
  )
}

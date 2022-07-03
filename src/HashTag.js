import React, { useState } from 'react'

const HashTag = () => {
  const [tagItem, setTagItem] = useState('')
  const [tagList, setTagList] = useState([])

  const onKeyPress = e => {
    if (e.target.value.length !== 0 && e.key === 'Enter') {
      submitTagItem()
    }
  }

  const submitTagItem = () => {
    let updatedTagList = [...tagList]
    updatedTagList.push(tagItem)
    setTagList(updatedTagList)
    setTagItem('')
  }

  const deleteTagItem = e => {
    const deleteTagItem = e.target.parentElement.firstChild.innerText
    const filteredTagList = tagList.filter(tagItem => tagItem !== deleteTagItem)
    setTagList(filteredTagList)
  }

  return (
    <div style={{padding:"10px", height:"150px"}}>
      <div style ={{
        display:"flex",
        alignItems:"center",
        flexWrap:"wrap",
        minHeight:"30px",
        margin:"10px",
        padding:"0 10px",
        border: "1px",
        borderRadius:"10px"
      }}>
        <input
          type='text'
          placeholder='해시태그를 입력하려면 Enter를 누르세요'
          tabIndex={2}
          onChange={e => setTagItem(e.target.value)}
          value={tagItem}
          onKeyPress={onKeyPress}
          size={50}
          style={{
            display:'inline-flex',
            borderRadius:"5px",
            outline:"none",
            cursor:"text",
            marginLeft:"25px"
          }}
        />
        {tagList.map((tagItem, index) => {
          return (
            <div 
              key={index}
              style={{
                display:"flex",
                justifyContent:"space-between",
                margin:"5px",
                padding:"5px",
                borderRadius:"5px",
                color:"black",
                fontSize:"13px",
              }}
            >
              <text>{tagItem}</text>
              <button 
                style={{
                  display:"flex",
                  justifyContent:"center",
                  alignItems:"center",
                  width:"15px",
                  height:"15px",
                  marginLeft:"10px",
                  backgroundColor:"white",
                  borderRadius:"50%",
                  color:'black',
                  marginTop:"3px"
                }}
                onClick={deleteTagItem}>X
                </button>
            </div>
          )
        })}
        
      </div>
    </div>
  )
}

export default HashTag;
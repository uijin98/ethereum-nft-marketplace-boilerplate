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
    <div style={styles.wholeBox}>
      <div style ={styles.tagBox}>
        {tagList.map((tagItem, index) => {
          return (
            <div key={index} style={styles.tagItem}>
              <p>{tagItem}</p>
              <button style={styles.button} onClick={deleteTagItem}>X</button>
            </div>
          )
        })}
        <input
          type='text'
          placeholder='해시태그를 입력하려면 Enter를 누르세요'
          tabIndex={2}
          onChange={e => setTagItem(e.target.value)}
          value={tagItem}
          onKeyPress={onKeyPress}
          size={35}
        />
      </div>
    </div>
  )
}

const styles = {
  wholeBox: {
    padding: 10,
    height: 100
  },
  tagBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  tagItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button : {
    flex: 1,
    innerHeight: 15,
    innerWidth: 15,
  },
}

export default HashTag;
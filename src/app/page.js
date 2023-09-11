"use client"
import styles from './page.module.css'
import React, { useState } from 'react'



export default function Home() {
  const arr = ["", "", "", "", "", "", "", "", ""];  
  let [chkarr, setchkarr] = useState(["", "", "", "", "", "", "", "", ""])
  const [value, setvalue] = useState(arr);
  const [count, setcount] = useState(0);
  const [lock, setlock] = useState(false)
  const [winner, setwinner] = useState("")

  const handleClick = (e, i) => {

    if(lock){
      return;
    }

    if (count % 2 === 0) {
      if (value[i]) {
        return;
      }

      
      let newarr = [...value];
      newarr[i] = "X";   
      setvalue(newarr);
      chkarr[i] = "X"
      setcount(count + 1);
      chkwin();
    }
    else {
      if (value[i]) {
        return;
      }
      
      let newarr = [...value];
      newarr[i] = "O";
      setvalue(newarr);
      chkarr[i] = "O"
      setcount(count + 1);
      chkwin();
    }

    // console.log(chkarr)
  }

  const handleReset = () => {
    setvalue(["", "", "", "", "", "", "", "", ""])
    setchkarr(["", "", "", "", "", "", "", "", ""])
    setlock(false);
    setcount(0)
    setwinner("")
    console.log('working')
  }

  const chkwin = () => {
    const list = [
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    // console.log(value)
    
    for (let i in list) {
      const [a, b, c] = list[i]
      

      if(chkarr[a] && chkarr[a] === chkarr[b] && chkarr[a] === chkarr[c]){
        console.log(chkarr[a])
        setlock(true)
        setwinner(chkarr[a])
      }
      }

  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>Tic Tak Toe Using <span>Next.Js</span></div>
      {winner && <div className={styles.header}>Winner is : {winner}</div>}
      
      <div className={styles.boxes}>
        <div className={styles.board}>
          <div className={styles.box} onClick={(e) => (handleClick(e, 0))}>{value[0]}</div>
          <div className={styles.box} onClick={(e) => (handleClick(e, 1))}>{value[1]}</div>
          <div className={styles.box} onClick={(e) => (handleClick(e, 2))}>{value[2]}</div>
        </div>
        <div className={styles.board}>
          <div className={styles.box} onClick={(e) => (handleClick(e, 3))}>{value[3]}</div>
          <div className={styles.box} onClick={(e) => (handleClick(e, 4))}>{value[4]}</div>
          <div className={styles.box} onClick={(e) => (handleClick(e, 5))}>{value[5]}</div>
        </div>
        <div className={styles.board}>
          <div className={styles.box} onClick={(e) => (handleClick(e, 6))}>{value[6]}</div>
          <div className={styles.box} onClick={(e) => (handleClick(e, 7))}>{value[7]}</div>
          <div className={styles.box} onClick={(e) => (handleClick(e, 8))}>{value[8]}</div>
        </div>
      </div>

      <button className={styles.btn} onClick={handleReset}>Reset</button>
    </div>
  )
}

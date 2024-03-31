import styles from './Home.module.css';
import Progress from 'react-circle-progress-bar'
import { useState } from 'react';

function Home() {
  const [date, setDate] = useState(new Date());
  
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const changeMonth = (offset) => {
    setDate(new Date(date.setMonth(date.getMonth() + offset)));
  }

  const changeDay = (offset) => {
    setDate(new Date(date.setDate(date.getDate() + offset)));
  }

  return (
    <div>
      <h2 className={styles.user}>Welcome User!</h2>
      <div className={styles.container}>

        {/* 
          Time off box 
        */}
        <div className={styles.box}>
          <div className={styles.firstRow}> 
            <h3>Time Off</h3>
            <button>New</button>
          </div>
          <hr className={styles.hrStyle} />
          <div className={styles.secondRow}>
            <Progress 
              progress={75} 
              subtitle={"out of 100"} 
              strokeWidth={10} 
              hideBall={true} 
              reduction={0.4}
              className={styles.progress}
            />
          </div>
          <hr className={styles.hrStyle} />
          <div className={styles.thirdRow}>
          <p>line 1</p>
          <hr className={styles.hrStyle} />
          <p>line 2</p>
          <hr className={styles.hrStyle} />
          <p>line 3</p>
          </div>
        </div>
        <div className={styles.box}>
          <h3>Box 2</h3>
          <p>Content for Box 2</p>
          <button>Button 2</button>
        </div>
        <div className={styles.box}>
          <h3>Box 3</h3>
          <p>Content for Box 3</p>
          <button>Button 3</button>
        </div>
        <div className={styles.box}>
          <h3>Box 4</h3>
          <p>Content for Box 4</p>
          <button>Button 4</button>
        </div>

        {/* 
          Schedule box 
        */}
        <div className={`${styles.box} ${styles.box5}`}>
          <div className={styles.firstRow}> 
            <h3>Schedule</h3>
            <button>See all</button>
          </div>
          <div className={styles.secondRow}>
            <div>
              <button onClick={() => changeMonth(-1)}>Prev</button>
              <span>{monthNames[date.getMonth()].slice(0, 3)}, {date.getFullYear()}</span>
              <button onClick={() => changeMonth(1)}>Next</button>
            </div>
            <div>
              <div className={styles.dayContainer}>
                <button onClick={() => changeDay(-1)}>Prev</button>
                <div className={styles.dayBox}>{new Date(date.getTime() - 2*86400000).getDate()}</div>
                <div className={styles.dayBox}>{new Date(date.getTime() - 86400000).getDate()}</div>
                <div className={styles.dayBox}>{date.getDate()}</div>
                <div className={styles.dayBox}>{new Date(date.getTime() + 86400000).getDate()}</div>
                <div className={styles.dayBox}>{new Date(date.getTime() + 2*86400000).getDate()}</div>
                <button onClick={() => changeDay(1)}>Next</button>
              </div>
            </div>
            <input type="search" placeholder="Search..." />
          </div>
          <hr className={styles.hrStyle} />
          <div className={styles.thirdRow}>
            <p>line 1</p>
            <hr className={styles.hrStyle} />
            <p>line 2</p>
            <hr className={styles.hrStyle} />
            <p>line 3</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
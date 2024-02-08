import styles from './Home.module.css';

function Home() {
  return (
    <div>
      <h2 className={styles.user}>Welcome User!</h2>
    <div className={styles.container}>
      <div className={styles.box}>
        <h3>Box 1</h3>
        <p>Content for Box 1</p>
        <button>Button 1</button>
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
      <div className={`${styles.box} ${styles.box5}`}>
        <h3>Box 5</h3>
        <p>Content for Box 5</p>
        <button>Button 5</button>
      </div>
    </div>
    </div>
  );
}

export default Home;
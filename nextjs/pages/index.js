const Home = () => (
  <section className="main">
    <div className="terminal-alert terminal-alert-primary">Post List</div>
    <figure>
      <img src="https://http.cat/102.jpg" />
    </figure>
    <div className="progress-bar progress-bar-show-percent">
      <div
        className="progress-bar-filled"
        style={{ width: '5%' }}
        data-filled="Loading 5%"
      ></div>
    </div>
  </section>
);

export default Home;

"use strict";

function Homepage() {
  return (
    <React.Fragment>
      <p>
        Welcome to our site!
      </p>
      <a href="/cards" >View cards</a>
      <img src="/static/img/balloonicorn.jpg" />
    </React.Fragment>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));


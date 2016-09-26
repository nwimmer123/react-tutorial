var CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">
        Hello, I'm a CommentList
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function () {
    return (
      <div className="CommentForm">
        I am a comment Form
      </div>
    );
  }
});

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList />
        <CommentForm />
      </div>  
    );
  }
});



ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);
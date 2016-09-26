var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello, I'm a box
      </div>  
    );
  }
});

ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);
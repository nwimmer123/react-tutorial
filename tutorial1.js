var CommentBox = React.createClass({
    render: function() {
        return (
            <div className="commentsBox">
                Hello World, I am a comment Box
                </div>
        );
    }
});

ReactDOM.render(
    <CommentBox />
    document.getElementById('context')
);
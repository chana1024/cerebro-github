const React = require('react');

class Error extends React.Component {
    render() {
        const { message, type } = this.props;
        let error = format(message, type);

        return (
            <div>
                <article className="message">
                    <div className="message-header">
                        <p>{error[1]}</p>
                    </div>
                    <div className="message-body">
                        {error[0]}
                    </div>
                </article>
            </div>
        )
    }
}

Error.propTypes = {
    message: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.object
    ]).isRequired,
    type: React.PropTypes.oneOf([
        'trending', 'trendingUsers', 'repos', 'users'
    ]).isRequired
};

function format(message, type) {
    let errorMessage = 'No results found, please try agaim!';
    let errorType;

    if (type === 'trending') {
        errorType = 'Trending Repository Error';
    } else if (type === 'trendingUsers') {
        errorType = 'Trending Developer Error';
    } else if (type === 'repos') {
        errorType = 'Repository Search Error';
    } else if (type === 'users') {
        errorType = 'User Search Error';
    } else {
        errorType = 'Unknown Error';
        errorMessage = message.toString();
    }

    return [errorMessage, errorType];
}

module.exports = Error;

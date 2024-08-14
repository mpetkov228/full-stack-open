const Notification = ({ message, isError }) => {
    const notificationStyle = {
        color: 'green',
        padding: '8px 12px',
        marginBottom: 8,
        background: 'lightgrey',
        border: '3px solid green',
        borderRadius: 5,
        fontSize: 24
    };

    const errorStyle = {
        color: 'red',
        padding: '8px 12px',
        marginBottom: 8,
        background: 'lightgrey',
        border: '3px solid red',
        borderRadius: 5,
        fontSize: 24
    };

    if (message === null) {
        return null;
    }

    return (
        <div style={isError ? errorStyle : notificationStyle}>
            {message}
        </div>
    );
};

export default Notification;
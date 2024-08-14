const Notification = ({ message }) => {
    const notificationStyle = {
        color: 'green',
        padding: '8px 12px',
        marginBottom: 8,
        background: 'lightgrey',
        border: '3px solid green',
        borderRadius: 5,
        fontSize: 24
    };

    if (message === null) {
        return null;
    }

    return (
        <div style={notificationStyle}>
            {message}
        </div>
    );
};

export default Notification;
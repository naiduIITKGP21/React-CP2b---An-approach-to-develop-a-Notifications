const Notification = (props) => {
  //  Write your code here.
  const { className, notificationText, src } = props;
  const messageContainer = `${className} message-container`;
  return (
    <div className={messageContainer}>
      <img className="img" src={src} />
      <p className="message-description">{notificationText}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Notifications</h1>
    <div className="notifications-container">
      <Notification
        src="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        className="information"
        notificationText="Information Message"
      />
      <Notification
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        className="success"
        notificationText="Success Message"
      />
      <Notification
        src="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        className="warning"
        notificationText="Warning Message"
      />
      <Notification
        src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        className="error"
        notificationText="Error Message"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

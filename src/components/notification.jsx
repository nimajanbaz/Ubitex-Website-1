import { CornerDialog } from "evergreen-ui";

const Notification = ({ title, text, isOpen, onClose }) => {
  if (isOpen) {
    setInterval(onClose, 5000);
  }

  return (
    <>
      <CornerDialog
        isShown={isOpen}
        hasFooter={false}
        title={title}
        onCloseComplete={onClose}>
        {text}
      </CornerDialog>
    </>
  );
};

export default Notification;

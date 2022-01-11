// import './modal.css';
import "../Styles/model.css";
export const Modal = ({ close, show,children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <h1>{children}</h1>
      </section>
    </div>
  );
};
const Modal = () => {
  return (
    <div className="text-black">
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn"
        onClick={() => document.getElementById("modal-about").showModal()}
      >
        open modal
      </button>
      <dialog id="modal-about" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click outside to close</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default Modal;

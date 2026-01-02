const PrimaryBtn = ({ children, submit, onClick, loader, className = "" }) => {
  return (
    <button
      onClick={onClick}
      type={submit ? "submit" : "button"}
      disabled={loader}
      className={`px-4 py-2 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {loader ? (
        <span className="flex items-center justify-center gap-2">
          <span className="loading loading-spinner loading-sm" />
          Loading...
        </span>
      ) : (
        children
      )}
    </button>
  );
};

export default PrimaryBtn;

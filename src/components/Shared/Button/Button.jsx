export default function Button({ children, onClick,  type = "button", variant = "primary", className = "" }) {
  const baseStyle =
    "px-10 py-2 rounded-lg text-lg transition";

  const styles = {
    primary: "bg-blue-500 text-white hover:bg-blue-700 cursor-pointer",
    secondary: "bg-white text-black hover:bg-gray-100 cursor-pointer",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

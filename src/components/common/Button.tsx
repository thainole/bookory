const Button = ({ children }: { children: React.ReactNode }) => (
  <button className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-full transition">
    {children}
  </button>
);

export default Button;

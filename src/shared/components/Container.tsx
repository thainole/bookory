const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={`max-w-7xl mx-auto px-4 md:px-7.5 ${className ?? ""}`}>
    {children}
  </div>
);

export default Container;

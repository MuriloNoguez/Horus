export function SectionTitle({ children, className = "" }) {
  return (
    <h2 className={`text-4xl md:text-5xl font-bold text-center mb-6 ${className}`}>
      {children}
    </h2>
  );
}

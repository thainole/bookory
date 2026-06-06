const LoadingSection = () => {
  return (
    <section className="w-full py-20 flex flex-col items-center justify-center text-center">
      <div className="flex gap-2 mb-6">
        <span className="w-2.5 h-2.5 bg-primary rounded-full animate-bounce"></span>
        <span className="w-2.5 h-2.5 bg-primary rounded-full animate-bounce [animation-delay:0.2s]"></span>
        <span className="w-2.5 h-2.5 bg-primary rounded-full animate-bounce [animation-delay:0.4s]"></span>
      </div>

      <p className="text-lg font-semibold mb-2">Cargando...</p>
    </section>
  );
};

export default LoadingSection;

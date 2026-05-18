const LoadingSection = () => {
  return (
    <section className="w-full py-20 flex flex-col items-center justify-center text-center">
      <div className="flex gap-2 mb-6">
        <span className="w-3 h-3 bg-primary rounded-full animate-bounce"></span>
        <span className="w-3 h-3 bg-primary rounded-full animate-bounce [animation-delay:0.2s]"></span>
        <span className="w-3 h-3 bg-primary rounded-full animate-bounce [animation-delay:0.4s]"></span>
      </div>

      <h4 className="text-xl font-semibold mb-2">Cargando libros...</h4>

      <p className="text-lighter text-sm">
        Estamos buscando las mejores lecturas para ti 📖
      </p>
    </section>
  );
};

export default LoadingSection;

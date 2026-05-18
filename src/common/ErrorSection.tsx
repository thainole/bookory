const Error = ({ error }: { error: string }) => {
  return (
    <section className="w-full py-20 flex flex-col items-center justify-center text-center">
      <div className="inline-block size-8 border-4 border-lighter border-t-transparent rounded-full animate-spin"></div>
      <p className="text-lg font-semibold mb-2">{error}</p>
    </section>
  );
};

export default Error;

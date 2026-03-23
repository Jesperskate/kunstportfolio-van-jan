const FlyerPDF = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center p-4">
      <div className="w-full max-w-4xl">
        <h1 className="text-2xl font-bold text-foreground mb-4 text-center">
          Jan Voorendt — A5 Flyer
        </h1>
        <div className="flex justify-center mb-4">
          <a
            href="/Jan_Voorendt_Flyer_A5.pdf"
            download
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded hover:opacity-90 transition"
          >
            Download PDF
          </a>
        </div>
        <iframe
          src="/Jan_Voorendt_Flyer_A5.pdf"
          className="w-full rounded-lg shadow-lg border border-border"
          style={{ height: '80vh' }}
          title="Jan Voorendt A5 Flyer"
        />
      </div>
    </div>
  );
};

export default FlyerPDF;

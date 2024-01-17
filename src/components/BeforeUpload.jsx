import Button from "./ui/Button";
import { useSchema } from "../hooks/useSchema";

const BeforeUpload = () => {
  const { schema } = useSchema();

  const handleDownload = () => {
    const blob = new Blob([schema], { type: "application/xml" });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "schema.xsd";

    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div>
      <h1 className="uppercase text-4xl md:leading-[1.3] md:text-5xl bg-gradient-to-b text-transparent bg-clip-text from-white/80 to-white/50 font-semibold max-w-xl mx-auto leading-[1.3] text-center mb-5">
        Nejprve si tabulku ověřte
      </h1>
      <p className="text-sm md:text-base font-semibold text-white/70 text-center max-w-md mx-auto mb-12">
        Stáhněte si soubor pro ověření. Poté běžte na stránku pro kontrolu. Jako
        první vyberte váš XML soubor a poté soubor, který jste si stáhli. Po
        kontrole se vraťte a nahrejte svou tabulku.
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-4 items-center w-max mx-auto">
        <Button
          className="w-full md:w-max border border-indigo-600"
          button
          onClick={() => handleDownload(schema)}>
          Soubor pro ověření
        </Button>
        <Button
          blank
          target="https://www.freeformatter.com/xml-validator-xsd.html"
          className="bg-transparent border hover:bg-white/20 w-full md:w-max text-center">
          Přejít na ověření
        </Button>
      </div>
    </div>
  );
};

export default BeforeUpload;

import Image from "next/image";

export default function Page() {
  return (
    <main>
      <div className="lg:w-1/2 lg:mx-[25%] mx-3">
        <div className="flex items-start flex-col lg:mt-[15vh] mt-[15vh] mb-10  mx-5 lg:mx-0 gap-10">
          <div className="relative group">
            <h1 className="font-bold leading-relaxed">Portfolio</h1>
            <span className="absolute w-0 h-1 bg-amber-300 w-20"></span>
          </div>
        </div>
        <p>
          Deze website. Dit is natuurlijk een project voor mezelf. Het
          belangrijkste van een portfolio vind ik de informatie die er op staat.
          Verder houd ik van een rustig design en de kleur geel. Dit heb ik dus
          ook laten terugkomen op de website.{" "}
        </p>

        <div className="relative group">
          <h3 className="pt-10">Eisen</h3>
          <span className="absolute w-0 h-0.5 bg-amber-300 w-20"></span>
        </div>

        <ul className="list-disc p-10">
          <li>Rustig design</li>
          <li>Informatief</li>
          <li>Een goede lighthouse score</li>
          <li>Een lichte en snelle website</li>
        </ul>

        <p className="pt-2">
          Een rustig design heb ik gemaakt door veel witruimtes te gebruiken. Ik
          heb elk informatievak (div) de hoogte van het scherm gegeven. Verder
          heb ik rustige kleuren gebruikt. Informatie op een portfoliowebsite is
          wat mij betreft het belangrijkste. Daarom heb ik voor elk project een
          aparte pagina met uitleg over dat project. Verder heb ik ervoor
          gekozen op de homepagina niet onnodige tekst te zetten.
        </p>

        <div className="relative group">
          <h3 className="pt-10">Performance</h3>
          <span className="absolute w-0 h-0.5 bg-amber-300 w-20"></span>
        </div>

        <p className="pt-2">
          Wat ik ook belangrijk vind is de snelheid van de website. Om deze
          reden heb ik gekozen voor een statische website. Ook maak ik geen
          gebruik van een framework. Op deze manier kan ik de website zo klein
          mogelijk houden. Wel gebruik ik Vite om de website te compilen en
          builden. Ook gebruik ik Tailwind. Dit versnelt het programmeren van de
          website. Ik vind het belangrijk om de website zo snel mogelijk online
          te hebben. Als laatste gebruik ik de Library OAS animations voor de
          scroll animaties. Dit maakt de website af.
        </p>

        <Image
          src="/img/lighthouse_pc.png"
          alt="lighthouse score"
          width={1920}
          height={1080}
          classNameName="pb-32 pt-12 h-[30vh] w-auto"
        />
      </div>
    </main>
  );
}

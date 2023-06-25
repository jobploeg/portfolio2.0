export default function Page() {
  return (
    <main>
      <div className="flex items-center flex-col lg:mt-[20vh] mt-[15vh] mb-10  mx-5 lg:mx-0 gap-10">
        <div className="relative group">
          <h1 className="font-bold leading-relaxed">Massagepraktijk</h1>
          <span className="absolute w-0 h-1 bg-amber-300 w-20"></span>
        </div>
      </div>

      <div className="lg:w-1/2 lg:mx-[25%] mx-3">
        <p>
          Dit project was voor een klant via school. De klant heeft een
          massagepraktijk. Hiervoor wilde ze graag een website. Met dit project
          hebben we samengewerkt met een designer. We begonnen het project met
          een klantgesprek. Hier hebben we alle eisen van de klant
          doorgesproken. Dit waren de eisen:{" "}
        </p>
        <ul className="list-disc p-10">
          <li>Admin panel</li>
          <li>Alle teksten en afbeeldingen moeten aanpasbaar zijn</li>
          <li>
            Reserveringssysteem moet gekoppeld worden aan de agenda van de klant
          </li>
          <li>Notities kunnen maken per afspraak</li>
          <li>Een afspraakoverzicht</li>
        </ul>

        <p>
          {" "}
          Na het klantgesprek zijn we alle documentatie gaan maken. Dit hebben
          we zo snel mogelijk gedaan. Hierna zijn we begonnen met programmeren.
        </p>

        <div className="relative group">
          <h3 className="pt-10">Problemen</h3>
          <span className="absolute w-0 h-0.5 bg-amber-300 w-20"></span>
        </div>
        <p className="pt-2">
          Er waren een paar vragen waar we goed over moesten nadenken. Zo hadden
          we in totaal twee weken voor het project. Dit betekende dat we het
          project goed moesten plannen. Met dit in gedachte hebben we ook het
          reserveringssysteem bedacht. Dit moest niet te uitgebreid worden. Daar
          hadden we geen tijd voor. Daarom hebben we gekozen voor een oplossing
          waar de klant via haar Google agenda &apos; werkblokken&apos; kan
          invullen. Deze blokken halen we dan op via de Google API. Met
          Javascript hebben we toen de logica geschreven voor de
          reserveringspagina. De bezoeker krijgt tijdsblokken te zien. Deze
          worden via de Google API opgehaald en weergegeven. Als een bezoeker
          een afspraak gepland heeft, wordt dit in de Google agenda gezet, met
          een half uur pauze erna (eis van de klant). Deze oplossing werkt goed
          en is overzichtelijk in gebruik voor de klant.
        </p>

        <div className="relative group">
          <h3 className="pt-10">Technieken</h3>
          <span className="absolute w-0 h-0.5 bg-amber-300 w-20"></span>
        </div>

        <p className="pt-2">
          Voor dit project hebben we de volgende talen en technieken gebruikt:
        </p>
        <ul className="list-disc p-10">
          <li>Laravel</li>
          <li>Tailwind</li>
          <li>Sass</li>
          <li>Tailwind UI</li>
          <li>Google API</li>
          <li>Library voor Laravel en Google API</li>
        </ul>

        <div className="relative group">
          <h3>Conclusie</h3>
          <span className="absolute w-0 h-0.5 bg-amber-300 w-20"></span>
        </div>

        <p className="pt-2 pb-32">
          Ik vond dit een leuk en leerzaam project. Ik heb veel geleerd. Het
          meest leerzame aspect van dit project vond ik het werken met en voor
          een echte klant. Dit hadden we nog niet eerder gedaan op school. Hier
          heb ik veel van geleerd!
        </p>
      </div>
    </main>
  );
}

export default function Page() {
  return (
    <main>
      <div className="flex items-center flex-col lg:mt-[15vh] mt-[15vh] mb-10  mx-5 lg:mx-0 gap-10">
        <div className="relative group">
          <h1 className="font-bold leading-relaxed">Coachpraktijk</h1>
          <span className="absolute w-0 h-1 bg-amber-300 w-20"></span>
        </div>
      </div>

      <div className="lg:w-1/2 lg:mx-[25%] mx-3">
        <p>
          Via mijn oude bijbaan ben ik iemand tegengekomen die een website wilde
          voor haar nieuwe coachpraktijk. Ze wilde een website met informatie
          over haar coachpraktijk. Ook wilde ze blogposts kunnen plaatsen. Om
          deze reden heb ik gekozen om gebruik te maken van Wordpress. Op deze
          manier heeft de klant ook een fijne en betrouwbare manier om blogposts
          aan te maken.
        </p>

        <div className="relative group">
          <h3 className="pt-10">DevOps</h3>
          <span className="absolute w-0 h-0.5 bg-amber-300 w-20"></span>
        </div>

        <p className="pt-2">
          Wat ik vooral heb geleerd tijdens dit project is de DevOps-kant van
          een website maken. Ik heb dingen als de domeinnaam en de hosting
          geregeld voor de klant. Als er nu nog problemen zijn help ik de klant
          daarmee. Dit had ik nog niet eerder gedaan. Het was leuk en leerzaam
          om te doen!
        </p>

        <div className="relative group">
          <h3 className="pt-10">Werken met een klant</h3>
          <span className="absolute w-0 h-0.5 bg-amber-300 w-20"></span>
        </div>

        <p className="pt-2 pb-32">
          Belangrijk bij dit project was het afstemmen met de klant wat ze wel
          en niet wilde. Ik ben natuurlijk begonnen met een klantgesprek. Na het
          klantgesprek ben ik begonnen met het maken van een design. Deze heb ik
          weer voorgelegd aan klant. Door veel te overleggen heb ik geen onnodig
          werk gedaan. Tussentijds hebben we ook gebeld.
        </p>
      </div>
    </main>
  );
}

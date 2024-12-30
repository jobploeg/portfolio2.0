import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main>
        <div className="lg:snap-y h-screen overflow-scroll px-5 lg:mx-0">
          <div
            className="flex justify-center items-center h-screen snap-start -mt-20 lg:w-screen"
            id="me"
          >
            <div className="select-none">
              <Image
                src="/img/me.webp"
                alt="me"
                width={300}
                height={300}
                className="rounded-full h-[300px] w-auto shadow lg:mr-20 hidden lg:block"
              />
            </div>
            <div className="lg:w-2/6 ">
              <p className="opacity-80 text-lg">
                Frontend developer bij{" "}
                <Link href="https://www.broekhuis.nl" target="_blank">
                  Broekhuis
                </Link>
              </p>
              <h1 className="font-bold leading-relaxed">Job van der Ploeg</h1>
              <p>
                Hoi! ik ben Job van der Ploeg. Ik werk als frontend developer
                bij Broekhuis. Ik werk graag met react. Verder heb ik ook
                ervaring met vanilla JS. Naast mijn werk loop ik graag hard!
              </p>
              <div className="mt-5">
                <a href="/img/CV.pdf" target="_blank">
                  <button className="button">Mijn CV</button>
                </a>
                <a href="#contact" className="ml-2">
                  <button className="button">Contact</button>
                </a>
              </div>
            </div>
          </div>
          <div className="h-auto w-auto snap-center mt-20" id="portfolio">
            <div className="flex lg:w-5/6 lg:justify-center mb-20 ">
              <div className="relative group lg:w-5/6">
                <h2 className="font-bold leading-relaxed">Projecten</h2>
                <span className="absolute w-0 h-1 bg-amber-300 w-20"></span>
              </div>
            </div>
            <div className="grid leading-relaxed lg:grid-cols-2 lg:gap-32 gap-24 lg:mx-48">
              <div className="flex">
                <p className="font-black text-amber-300 flex mr-10 text-5xl">
                  1
                </p>
                <div>
                  <h3 className="font-medium mb-1">Webshop</h3>
                  <p className="text-gray-800">
                    Voor mijn eindstage project heb ik een webshop gemaakt met{" "}
                    <b>Next.js</b>. Ik heb een frontend gemaakt. De data kwam
                    via de <b>Woocommerce REST API</b>. Verder heb ik de website
                    gemaakt met <b>Tailwind</b>. Voor de website heb ik
                    sortering en filtering gemaakt. Ook heb ik een product
                    overzicht pagina gemaakt met afbeelding carousel, product
                    informatie en reviews.
                  </p>
                  {/* <Link href="/webshop">
                    <button className="button mt-3">Meer</button>
                  </Link> */}
                </div>
              </div>
              <div className="flex">
                <p className="font-black text-amber-300 flex mr-10 text-5xl">
                  2
                </p>
                <div>
                  <Link href="/massagepraktijk">
                    <h3 className="font-medium mb-1">Massagepraktijk</h3>
                    <p className="text-gray-800">
                      Een project voor een <b>klant.</b> De klant wilde een
                      website voor haar massagepraktijk. Dit project hebben we
                      met drie personen gemaakt. We hebben samengewerkt met een
                      designer. De website moest een
                      <b>reserveringssysteem</b> hebben. Dit project hebben we
                      gemaakt met <b>Laravel</b> en <b>Tailwind</b>. Verder
                      hebben we gebruik gemaakt van de
                      <b>Google calendar API</b>
                    </p>
                  </Link>
                  <Link href="/massagepraktijk">
                    <button className="button mt-3">Meer</button>
                  </Link>
                </div>
              </div>
              <div className="flex">
                <p className="font-black text-amber-300 flex mr-10 text-5xl">
                  3
                </p>
                <div>
                  <Link href="/portfolio">
                    <h3 className="font-medium mb-1">Portfolio</h3>
                    <p className="text-gray-800">
                      Deze website. Dit project heb ik met HTML, Tailwind en JS
                      gemaakt. Verder heb ik <b>AOS JS</b> gebruikt voor de
                      scroll animaties. Ik gebruik <b>VITE</b> als build tool.
                      Verder gebruik ik geen framework omdat ik de website zo
                      <b>licht</b> mogelijk wil houden. De twee eisen die ik heb
                      voor deze website zijn een website die <b>informatief</b>{" "}
                      is en een website met een <b>Google lighthouse score</b>{" "}
                      van 100%.
                    </p>
                  </Link>
                  <Link href="/portfolio">
                    <button className="button mt-3">Meer</button>
                  </Link>
                </div>
              </div>
              <div className="flex">
                <p className="font-black text-amber-300 flex mr-10 text-5xl">
                  4
                </p>
                <div>
                  <Link href="/coachpraktijk">
                    <h3 className="font-medium mb-1">Coachpraktijk</h3>
                    <p className="text-gray-800">
                      Een website voor een klant. De <b>klant</b> heeft een
                      coachpraktijk. Hiervoor wilde ze een website. Een
                      <b>eis</b> was dat de website volledig aanpasbaar is door
                      de klant. Om deze reden heb ik gekozen voor{" "}
                      <b>Wordpress</b>. Verder heb ik geholpen met het{" "}
                      <b>opzetten</b> van de website en help ik met het{" "}
                      <b>beheren</b> van de website.
                    </p>
                  </Link>
                  <Link href="/coachpraktijk">
                    <button className="button mt-3">Meer</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="h-screen flex flex-col lg:flex-row lg:justify-evenly justify-center lg:items-center snap-start"
            id="contact"
          >
            <div>
              <div className="relative group">
                <h2 className="font-bold leading-relaxed">Contact</h2>
                <span className="absolute w-0 h-1 bg-amber-300 w-20"></span>
                <p className="mt-5">
                  Vragen? Je kunt me altijd mailen of een berichtje sturen via
                  mijn socials!
                </p>
                <a
                  href="mailto:job.vanderploeg@gmail.com"
                  className="flex items-center gap-5 mt-3 ease-out hover:-translate-y-1 transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-12 h-12"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  <p className="italic">job.vanderploeg@gmail.com</p>
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <Link
                href="https://github.com/jobploeg"
                className="ease-out hover:-translate-y-2 transition-all flex items-center gap-5 mt-3 lg:mt-0"
                target="_blank"
              >
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-10 h-10"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                <p className="italic">Github</p>
              </Link>
              <Link
                href="https://www.linkedin.com/in/jobvanderploeg/"
                className="ease-out hover:-translate-y-1 transition-all flex items-center gap-5"
                target="_blank"
              >
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-10 h-10 rounded-lg"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <p className="italic">Linkedin</p>
              </Link>
              <Link
                href="https://www.instagram.com/jobvdploeg/"
                className="ease-out hover:-translate-y-1 transition-all flex items-center gap-5"
                target="_blank"
              >
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-10 h-10"
                >
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                </svg>
                <p className="italic">Instagram</p>
              </Link>
              <Link
                href="https://www.atletiek.nu/atleet/main/1938010"
                className="ease-out hover:-translate-y-1 transition-all flex items-center gap-5 -ml-1"
                target="_blank"
                aria-label="atletiek.nu"
              >
                <svg
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-11 h-11 rounded-lg"
                  viewBox="0 0 600.000000 600.000000"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g
                    transform="translate(0.000000,600.000000) scale(0.100000,-0.100000)"
                    fill="#000000"
                    stroke="none"
                  >
                    <path
                      d="M2306 4945 c-96 -27 -178 -76 -262 -160 -69 -69 -88 -96 -137 -195
                    -93 -188 -137 -402 -137 -663 0 -183 23 -381 43 -374 5 1 22 63 37 137 62 308
                    152 547 264 705 85 119 175 175 282 175 112 0 266 -93 521 -316 76 -67 154
                    -129 172 -138 84 -44 207 -7 255 77 50 88 41 160 -32 260 -178 243 -425 423
                    -667 486 -93 25 -261 27 -339 6z"
                    />
                    <path
                      d="M4033 4805 c-77 -21 -130 -51 -188 -106 -112 -105 -160 -270 -121
                    -414 61 -230 298 -371 522 -311 212 56 353 270 317 480 -43 254 -289 416 -530
                    351z"
                    />
                    <path
                      d="M5421 3907 c-296 -438 -565 -689 -756 -705 -48 -4 -59 -1 -89 22 -49
                    37 -129 163 -231 363 -120 235 -154 268 -276 261 -57 -3 -74 -8 -106 -34 -48
                    -38 -83 -106 -83 -160 0 -23 14 -87 30 -143 156 -524 502 -789 864 -662 230
                    81 468 374 630 779 71 176 133 396 116 407 -5 3 -49 -55 -99 -128z"
                    />
                    <path
                      d="M2074 3300 c-141 -62 -210 -256 -147 -412 19 -48 60 -84 173 -150
                    l90 -52 -213 -216 c-117 -118 -285 -291 -372 -385 -87 -93 -379 -391 -649
                    -662 -379 -381 -486 -494 -473 -499 19 -7 135 56 482 260 665 391 1452 897
                    1707 1097 49 38 91 69 94 69 10 0 167 -105 222 -149 51 -41 53 -44 37 -61 -48
                    -53 -240 -169 -671 -405 -491 -269 -572 -320 -551 -342 4 -3 95 9 204 27 640
                    103 1116 241 1332 384 275 183 304 463 76 738 -144 175 -617 528 -886 661
                    -223 111 -359 140 -455 97z"
                    />
                  </g>
                </svg>
                <p className="italic -ml-1">Atletiek.nu</p>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

import React from "react";
import { Header } from "../components/header";
import { VintageCalendar } from "../components/calendaryexample";
import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";

export default function MeetingPage() {
  return (
    <>
      <main className=" text-black bg-old-paper-dark/50 min-h-screen">
        <Header />
        <Navigation />
        <section className="max-w-7xl mx-auto">
        <div className="mb-6 py-8 container mx-auto">
          <div className="bg-[#1a2639] text-white py-2 px-4 text-center font-bold">
            PROGRAMAR UNA REUNIÓN
          </div>
          <div className="border border-gray-300 py-3 px-4 text-center italic bg-old-paper-dark">
            ¡Extra, extra! Reserve su tiempo en la agenda de la desarrolladora
            más solicitada del momento. ¡Plazas limitadas!
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 container mx-auto px-4">
          <div className="md:w-2/3">
            <div className="border border-gray-300 mb-6 bg-old-paper-dark">
              <div className="p-6 ">
                <div className="flex justify-between items-start mb-6 ">
                  <div className="">
                    <h2 className="text-2xl font-bold mb-2">AGENDA DE CITAS</h2>
                    <div className="text-sm italic">
                      Edición Especial -{" "}
                      {new Date().toLocaleDateString("es-ES", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                  </div>
                  <div className="border border-gray-800 px-3 py-1 transform rotate-12 text-sm font-bold">
                    ¡URGENTE!
                  </div>
                </div>

                <div className="border-t border-b border-gray-300 my-4"></div>

                <p className="mb-6 first-letter:text-4xl first-letter:font-bold first-letter:mr-1 first-letter:float-left">
                  La reconocida desarrolladora Eugenia Gramajo abre su agenda
                  para reuniones exclusivas con potenciales clientes y
                  colaboradores. Esta es una oportunidad única para discutir sus
                  proyectos, resolver dudas técnicas o explorar posibilidades de
                  colaboración con una de las profesionales más destacadas del
                  sector tecnológico.
                </p>
                <VintageCalendar />
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-gray-300 p-4 bg-[#f8f5ee]">
                    <h3 className="font-bold mb-2 text-center bg-gray-800 text-white py-2">
                      DETALLES DE LA REUNIÓN
                    </h3>
                    <div className="border-t border-b border-gray-300 my-2"></div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="font-bold mr-2">Duración:</span> 30
                        minutos
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-2">Formato:</span>{" "}
                        Videollamada (Zoom/Google Meet)
                      </li>

                      <li className="flex items-start">
                        <span className="font-bold mr-2">Temas:</span>{" "}
                        Desarrollo web, consultoría técnica, revisión de
                        proyectos
                      </li>
                    </ul>
                  </div>

                  <div className="border border-gray-300 p-4 bg-[#f8f5ee] relative overflow-hidden">
                    <div className="absolute -right-8 -bottom-8 opacity-10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100"
                        height="100"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 6v6l4 2"></path>
                      </svg>
                    </div>
                    <h3 className="font-bold mb-2 text-center bg-gray-800 text-white py-2">
                      PREPARACIÓN
                    </h3>
                    <div className="border-t border-b border-gray-300 my-2"></div>
                    <p className="text-sm italic">
                      "Para aprovechar al máximo nuestra reunión, le recomiendo
                      preparar sus preguntas o temas específicos con antelación.
                      Esto nos permitirá enfocarnos en soluciones concretas
                      durante nuestro tiempo juntos."
                    </p>
                    <div className="text-right text-sm mt-2">
                      - Eugenia Gramajo
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/3">
            <div className="border border-gray-300 p-4 mb-6 bg-old-paper-dark">
              <div className="text-xs text-center uppercase tracking-wider mb-2">
                INSTRUCCIONES
              </div>
              <h3 className="text-xl font-bold text-center mb-2 bg-gray-800 text-white py-2">
                CÓMO RESERVAR
              </h3>
              <div className="border-t border-b border-gray-300 my-4"></div>

              <ol className="space-y-4 text-sm">
                <li className="flex">
                  <div className="bg-[#1a2639] text-white w-6 h-6 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <span className="font-bold">Seleccione una fecha</span> en
                    el calendario que muestra los días disponibles.
                  </div>
                </li>
                <li className="flex">
                  <div className="bg-[#1a2639] text-white w-6 h-6 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <span className="font-bold">Elija un horario</span> entre
                    las opciones disponibles para ese día.
                  </div>
                </li>
                <li className="flex">
                  <div className="bg-[#1a2639] text-white w-6 h-6 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <span className="font-bold">Confirme su reunión</span>{" "}
                    haciendo clic en el botón de confirmación.
                  </div>
                </li>
                <li className="flex">
                  <div className="bg-[#1a2639] text-white w-6 h-6 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                    4
                  </div>
                  <div>
                    <span className="font-bold">Reciba confirmación</span> por
                    correo electrónico con los detalles de la reunión.
                  </div>
                </li>
              </ol>

              <div className="mt-6 p-3 border border-dashed border-gray-400 text-center text-sm italic">
                Nota: Puede cancelar o reprogramar su cita hasta 24 horas antes
                de la hora programada.
              </div>
            </div>
            <div className="border border-gray-300 p-4 bg-old-paper-dark">
              <div className="text-xs text-center uppercase tracking-wider mb-2">
                CONTACTO ALTERNATIVO
              </div>
              <h3 className="text-xl font-bold text-center mb-2 bg-gray-800 text-white py-2">
                ¿PROBLEMAS PARA RESERVAR?
              </h3>
              <div className="border-t border-b border-gray-300 my-4"></div>

              <p className="text-sm mb-4 text-center">
                Si tiene dificultades para programar una reunión a través del
                calendario, puede contactarnos directamente:
              </p>

              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span className="text-sm">contacto@eugeniadev.com</span>
                </div>
              </div>

              <div className="text-center text-xs italic">
                Responderemos a su solicitud en un plazo de 24 horas laborables.
              </div>
            </div>
          </div>
        </div>
        </section>
        <Footer />
      </main>
    </>
  );
}

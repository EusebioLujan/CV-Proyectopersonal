import Image from "next/image"
import Link from "next/link"
import { Sun, Cloud, Mail, Github, Linkedin, Calendar, MapPin, Coffee } from "lucide-react"

export default function Home() {
  // Get current date in vintage newspaper format
  const today = new Date()
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }
  const formattedDate = today.toLocaleDateString("en-US", options)

  return (
    <main className="min-h-screen bg-old-paper text-gray-900 font-serif relative overflow-hidden">
      {/* Vintage paper edges effect */}
      <div className="paper-edge-top"></div>
      <div className="paper-edge-bottom"></div>
      <div className="paper-edge-left"></div>
      <div className="paper-edge-right"></div>

      {/* Fold line */}
      <div className="fold-line"></div>

      {/* Masthead */}
      <header className="border-b-2 border-gray-800 py-6 px-6 bg-old-paper-dark relative">
        <div className="absolute top-2 left-6 text-xs font-bold border border-gray-800 px-2 py-1 bg-old-paper-light">
          Vol. XXIII, No. 42
        </div>
        <div className="absolute top-2 right-6 text-xs font-bold border border-gray-800 px-2 py-1 bg-old-paper-light">
          <span className="font-bold">Price:</span> 5¢
        </div>

        <div className="max-w-7xl mx-auto text-center">
          <div className="text-sm uppercase tracking-widest mb-2">{formattedDate}</div>
          <div className="text-5xl md:text-6xl font-fraktur tracking-wide ornate-title mb-2">Eugenia Gramajo</div>
          <div className="text-sm uppercase tracking-widest font-bold">"The Developer's Chronicle"</div>

          <div className="flex justify-between items-center mt-4 text-xs border-t border-b border-gray-800 py-2">
            <div className="flex items-center">
              <Image src="/us-flag.svg" alt="English" width={16} height={12} />
              <span className="ml-1">English</span>
              <div className="w-10 h-5 bg-gray-300 rounded-full p-1 flex items-center ml-2">
                <div className="w-3 h-3 bg-gray-800 rounded-full ml-auto"></div>
              </div>
            </div>
            <div className="flex items-center">
              <Sun className="h-3 w-3 mr-1 text-yellow-600" />
              <span>Nuevo Berlin: 25°C</span>
            </div>
            <div>ESTABLISHED 2023</div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-gray-800 text-white border-b border-gray-600">
        <div className="max-w-7xl mx-auto flex justify-between px-6">
          <ul className="flex">
            {["Home", "Projects", "Experience", "Certificates", "Blog"].map((item) => (
              <li key={item}>
                <Link href="#" className="block px-4 py-3 hover:bg-gray-700 transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex">
            {["Contact", "Playground"].map((item) => (
              <li key={item}>
                <Link href="#" className="block px-4 py-3 hover:bg-gray-700 transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6">
        {/* Breaking News Banner */}
        <div className="mb-6 border border-gray-800 bg-old-paper-light">
          <div className="bg-gray-800 text-white px-4 py-1 text-center font-bold">BREAKING NEWS</div>
          <div className="p-3 text-center italic">
            Talented developer Eugenia Gramajo launches innovative portfolio website with vintage newspaper aesthetic!
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left Column - 8 units */}
          <div className="md:col-span-8 space-y-6">
            {/* Profile Section */}
            <div className="border border-gray-800 p-4 bg-old-paper-light">
              <h2 className="text-center text-2xl font-bold mb-4 newspaper-heading font-playfair">
                FULL-STACK DEVELOPER
              </h2>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-1/3">
                  <div className="relative">
                    <Image
                      src="/profile-placeholder.jpg"
                      alt="Eugenia Gramajo"
                      width={200}
                      height={200}
                      className="grayscale border-2 border-gray-800"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-old-paper-light border border-gray-800 px-2 py-1 text-xs rotate-[-5deg]">
                      Photograph by Studio Moderno
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3 space-y-2 text-sm leading-tight text-justify">
                  <p className="first-letter:text-4xl first-letter:font-bold first-letter:mr-1 first-letter:float-left first-letter:leading-none">
                    I am a highly skilled Full Stack developer passionate about programming based in Uruguay. Since
                    discovering my interest in this field, I have strived to improve my skills and knowledge daily,
                    allowing me to grow professionally.
                  </p>
                  <p>
                    I am highly motivated and dedicated, always looking for new opportunities to challenge myself and
                    continue growing as a developer.
                  </p>
                  <div className="flex justify-end">
                    <div className="flex space-x-2 mt-2">
                      <Link href="#" className="p-1 bg-gray-800 text-white rounded-full hover:bg-gray-700">
                        <Mail className="h-4 w-4" />
                      </Link>
                      <Link href="#" className="p-1 bg-gray-800 text-white rounded-full hover:bg-gray-700">
                        <Github className="h-4 w-4" />
                      </Link>
                      <Link href="#" className="p-1 bg-gray-800 text-white rounded-full hover:bg-gray-700">
                        <Linkedin className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Technological Adventure */}
            <div className="border border-gray-800 p-4 bg-old-paper-light">
              <h2 className="text-center text-2xl font-bold mb-4 newspaper-heading font-playfair">
                A TECHNOLOGICAL ADVENTURE
              </h2>
              <div className="columns-2 gap-6 text-sm leading-tight text-justify">
                <p className="first-letter:text-4xl first-letter:font-bold first-letter:mr-1 first-letter:float-left first-letter:leading-none mb-3">
                  Exploring the vast landscape of code, Eugenia Gramajo has embarked on a grand journey. As a pioneer of
                  this new age, this bold programmer has challenged the frontiers of code. Her projects, imbued with the
                  spirit of exploration from the golden years, bridge nostalgia with the future.
                </p>
                <p className="mb-3">
                  "Programming is not just about writing code," says Gramajo, "it's about solving problems and creating
                  experiences that resonate with users."
                </p>
                <p>
                  Join us on her journey towards the technological marvels of tomorrow! With each line of code, a new
                  possibility emerges, a new frontier is conquered.
                </p>
                <div className="vintage-ad mt-4 p-3 border border-gray-800 text-center">
                  <div className="text-xs uppercase tracking-widest">Advertisement</div>
                  <div className="text-lg font-bold mt-1">Need a Developer?</div>
                  <div className="text-sm italic mt-1">Hire Eugenia Today!</div>
                  <div className="text-xs mt-1">Satisfaction Guaranteed</div>
                </div>
              </div>
            </div>

            {/* Tech Skills */}
            <div className="border border-gray-800 p-4 bg-old-paper-light">
              <h2 className="text-center text-2xl font-bold mb-4 newspaper-heading font-playfair">
                TECHNICAL EXPERTISE
              </h2>
              <div className="grid grid-cols-3 gap-3">
                <div className="skill-card">
                  <div className="skill-icon">
                    <span className="text-2xl">&#9881;</span>
                  </div>
                  <div className="skill-name">JavaScript</div>
                  <div className="skill-level">
                    <div className="h-1 bg-gray-300 w-full mt-1">
                      <div className="h-full bg-gray-800" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                </div>
                <div className="skill-card">
                  <div className="skill-icon">
                    <span className="text-2xl">&#9881;</span>
                  </div>
                  <div className="skill-name">React</div>
                  <div className="skill-level">
                    <div className="h-1 bg-gray-300 w-full mt-1">
                      <div className="h-full bg-gray-800" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                </div>
                <div className="skill-card">
                  <div className="skill-icon">
                    <span className="text-2xl">&#9881;</span>
                  </div>
                  <div className="skill-name">Node.js</div>
                  <div className="skill-level">
                    <div className="h-1 bg-gray-300 w-full mt-1">
                      <div className="h-full bg-gray-800" style={{ width: "80%" }}></div>
                    </div>
                  </div>
                </div>
                <div className="skill-card">
                  <div className="skill-icon">
                    <span className="text-2xl">&#9881;</span>
                  </div>
                  <div className="skill-name">HTML/CSS</div>
                  <div className="skill-level">
                    <div className="h-1 bg-gray-300 w-full mt-1">
                      <div className="h-full bg-gray-800" style={{ width: "95%" }}></div>
                    </div>
                  </div>
                </div>
                <div className="skill-card">
                  <div className="skill-icon">
                    <span className="text-2xl">&#9881;</span>
                  </div>
                  <div className="skill-name">TypeScript</div>
                  <div className="skill-level">
                    <div className="h-1 bg-gray-300 w-full mt-1">
                      <div className="h-full bg-gray-800" style={{ width: "75%" }}></div>
                    </div>
                  </div>
                </div>
                <div className="skill-card">
                  <div className="skill-icon">
                    <span className="text-2xl">&#9881;</span>
                  </div>
                  <div className="skill-name">PostgreSQL</div>
                  <div className="skill-level">
                    <div className="h-1 bg-gray-300 w-full mt-1">
                      <div className="h-full bg-gray-800" style={{ width: "70%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - 4 units */}
          <div className="md:col-span-4 space-y-6">
            {/* Calendly Section */}
            <div className="border border-gray-800 p-4 bg-old-paper-light">
              <div className="text-xs uppercase tracking-widest text-center mb-2">Special Announcement</div>
              <h2 className="text-center text-xl font-bold mb-2 newspaper-heading font-playfair">SCHEDULE A MEETING</h2>
              <div className="vintage-stamp mb-3">URGENT</div>
              <p className="text-sm mb-4 italic text-center">
                ¡Extra, extra! Secure your seat on the time machine for an authentic experience. Click on the banner or
                button below to schedule your rendezvous with me on our calendar.
              </p>
              <div className="flex items-center justify-center mb-4">
                <Calendar className="h-5 w-5 mr-2" />
                <span className="font-bold">Available Now!</span>
              </div>
              <button className="w-full py-2 bg-gray-800 text-white font-bold hover:bg-gray-700 transition-colors">
                Schedule a Meeting
              </button>
            </div>

            {/* Soft Skills */}
            <div className="border border-gray-800 p-4 bg-old-paper-light">
              <h2 className="text-center text-xl font-bold mb-4 newspaper-heading font-playfair">PERSONAL QUALITIES</h2>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="inline-block w-4 h-4 mr-2 text-center leading-4">✓</span>
                  <span>Problem Solving - Analytical approach to challenges</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-4 h-4 mr-2 text-center leading-4">✓</span>
                  <span>Communication - Clear and effective expression</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-4 h-4 mr-2 text-center leading-4">✓</span>
                  <span>Teamwork - Collaborative and supportive</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-4 h-4 mr-2 text-center leading-4">✓</span>
                  <span>Adaptability - Quick to learn new technologies</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-4 h-4 mr-2 text-center leading-4">✓</span>
                  <span>Time Management - Efficient and organized</span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-300 text-xs italic text-center">
                "A developer with both technical prowess and interpersonal skills is a rare find indeed."
              </div>
            </div>

            {/* Weather Widget */}
            <div className="border border-gray-800 bg-old-paper-light">
              <div className="bg-gray-800 text-white px-4 py-1 text-center font-bold">WEATHER REPORT</div>
              <div className="p-4">
                <div className="flex items-center justify-center mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="font-bold">Nuevo Berlin</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-blue-900 text-white p-2 flex flex-col items-center">
                    <span className="text-xs">TODAY</span>
                    <Sun className="my-2 h-6 w-6" />
                    <span className="font-bold">25°C</span>
                  </div>
                  <div className="bg-blue-800 text-white p-2 flex flex-col items-center">
                    <span className="text-xs">TOMORROW</span>
                    <Cloud className="my-2 h-6 w-6" />
                    <span className="font-bold">22°C</span>
                  </div>
                  <div className="bg-blue-700 text-white p-2 flex flex-col items-center">
                    <span className="text-xs">TUESDAY</span>
                    <Sun className="my-2 h-6 w-6" />
                    <span className="font-bold">24°C</span>
                  </div>
                </div>
                <div className="text-xs text-center mt-2 italic">
                  Weather forecast provided by The Developer's Chronicle Meteorological Department
                </div>
              </div>
            </div>

            {/* Classified Ad */}
            <div className="border border-gray-800 p-4 bg-old-paper-light">
              <div className="text-xs uppercase tracking-widest text-center mb-2">Classified Advertisement</div>
              <div className="text-center space-y-2">
                <h3 className="font-bold">DEVELOPER FOR HIRE</h3>
                <p className="text-sm">
                  Experienced Full-Stack Developer available for projects, consultations, and permanent positions.
                </p>
                <div className="flex justify-center items-center text-sm">
                  <Coffee className="h-4 w-4 mr-1" />
                  <span>Will code for coffee</span>
                </div>
                <div className="text-xs italic mt-2">Contact information in the header section</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t-2 border-gray-800 py-4 px-6 text-center text-sm bg-old-paper-dark mt-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            <div className="text-xs">Vol. XXIII, No. 42</div>
            <div>Page created by Eugenia Gramajo - all rights reserved 2023</div>
            <div className="text-xs">5¢</div>
          </div>
        </div>
      </footer>
    </main>
  )
}

import { Youtube, MessageCircle, Code, Palette, TrendingUp, Briefcase, ExternalLink } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-sm z-50 border-b border-slate-700/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              OLEGTICENKO
            </span>
            <div className="flex gap-4">
              <a
                href="https://www.youtube.com/@olegticenko"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="#contact"
                className="hover:text-blue-400 transition-colors"
                aria-label="Contact"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Oleg Ticenko
              </h1>
              <p className="text-xl sm:text-2xl text-slate-300 mb-8">
                3D Artist • Developer • Investor
              </p>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Bringing ideas to life through 3D modeling, code, and strategic investments
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">What I Do</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700/50 hover:border-blue-500/50 transition-colors">
                <Palette className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-2xl font-semibold mb-3">3D Modeling</h3>
                <p className="text-slate-400">
                  Expert in Blender with the ability to model anything you can imagine. From characters to environments, I bring concepts to reality.
                </p>
              </div>

              <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700/50 hover:border-cyan-500/50 transition-colors">
                <Code className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-2xl font-semibold mb-3">Development</h3>
                <p className="text-slate-400">
                  Working on various coding projects, from web applications to tools and utilities. Always learning and building.
                </p>
              </div>

              <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700/50 hover:border-green-500/50 transition-colors">
                <TrendingUp className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-2xl font-semibold mb-3">Investing</h3>
                <p className="text-slate-400">
                  Actively investing in companies and games. Looking for promising projects and opportunities to support.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Featured Work</h2>
            <div className="relative rounded-xl overflow-hidden border border-slate-700/50 shadow-2xl">
              <img
                src="/screenshot_2025-12-09_125747.png"
                alt="3D modeling work in Blender"
                loading="lazy"
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 to-transparent p-6">
                <p className="text-lg font-semibold">3D Model created in Blender</p>
                <p className="text-slate-400">Watch more on my YouTube channel</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 rounded-lg border border-slate-700/50 overflow-hidden hover:border-blue-500/50 transition-colors group">
                <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 h-32" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">Custom Browser</h3>
                  <p className="text-slate-400 mb-4">
                    A lightweight, high-performance browser built from scratch with advanced features and optimization for low-end systems.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-slate-700/50 px-3 py-1 rounded-full">TypeScript</span>
                    <span className="text-xs bg-slate-700/50 px-3 py-1 rounded-full">Performance</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-lg border border-slate-700/50 overflow-hidden hover:border-cyan-500/50 transition-colors group">
                <div className="bg-gradient-to-r from-cyan-500/20 to-green-500/20 h-32" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">Comming soon..</h3>
                  <p className="text-slate-400 mb-4">
                    
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-slate-700/50 px-3 py-1 rounded-full">Project</span>
                    <span className="text-xs bg-slate-700/50 px-3 py-1 rounded-full">Stuff</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-lg border border-slate-700/50 overflow-hidden hover:border-green-500/50 transition-colors group">
                <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 h-32" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 group-hover:text-green-400 transition-colors">Comming soon..</h3>
                  <p className="text-slate-400 mb-4">
                    
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-slate-700/50 px-3 py-1 rounded-full">Waterfall?</span>
                    <span className="text-xs bg-slate-700/50 px-3 py-1 rounded-full">Hmmm</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-lg border border-slate-700/50 overflow-hidden hover:border-amber-500/50 transition-colors group">
                <div className="bg-gradient-to-r from-amber-500/20 to-red-500/20 h-32" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 group-hover:text-amber-400 transition-colors">Game Development</h3>
                  <p className="text-slate-400 mb-4">
                    Working on various game projects with custom 3D assets and mechanics. Always exploring new ideas and technologies.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-slate-700/50 px-3 py-1 rounded-full">Roblox/Python/VS code</span>
                    <span className="text-xs bg-slate-700/50 px-3 py-1 rounded-full">Gamedev</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Briefcase className="w-16 h-16 text-blue-400 mx-auto mb-4" />
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Open for Commissions</h2>
              <p className="text-xl text-slate-300">
                I'm available for freelance 3D modeling and development projects. Let's create something amazing together.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">Let's Connect</h2>
            <p className="text-xl text-slate-300 mb-12">
              Interested in working together or investing in projects? Reach out on Discord or check out my YouTube channel.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="https://www.youtube.com/@olegticenko"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                <Youtube className="w-5 h-5" />
                YouTube Channel
              </a>
              <div className="inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer">
                <MessageCircle className="w-5 h-5" />
                Discord: olegticenko
              </div>
            </div>
            <p className="mt-8 text-slate-400">
              Looking for an investor? DM me on Discord to discuss opportunities.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-700/50 py-8 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} Oleg Ticenko. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

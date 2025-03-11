import TekNiko from "../Images/TekNiko.png";
import Procaptivity from "../Images/Procaptivity.jpg";
import Vhire from "../Images/Vhire.png";
import Thesis from "../Images/Thesis.jpg";
import { RevealOnScroll } from "../RevealOnScroll";

const images = { tekniko: TekNiko, proactivity: Procaptivity, vhire: Vhire };

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
        <RevealOnScroll>
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          {" "}
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] 
                                    transition"
          >
            <h3 className="text-xl font-bold mb-2">TekNiko</h3>
            <p className="text-gray-400 mb-4">
              The idea of this project was to make a grab or angkas type of
              web-application, the purpose of this was to create a technician
              on-call job request. I worked at the frontend of this project.
            </p>
            <div>
              <div>
                {["React", "DaisyUI", "Firebase"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] 
                                    transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="pt-6">
              <button
                className="btn bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] 
                                    transition-all "
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                See Project
              </button>
              <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                  <img src={TekNiko} className="" />
                </div>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>
            </div>
          </div>
          <div
            className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] 
                                    transition"
          >
            <h3 className="text-xl font-bold mb-2">Vhire</h3>
            <p className="text-gray-400 mb-4">
              This project was about a web-application for hiring vehicles such
              as a Van, and it has a transactions on it. I worked in the backend
              for this.
            </p>
            <div>
              <div>
                {["Laravel", "TailwindCSS", "Mysql"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] 
                                    transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-6">
                <button
                  className="btn bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] 
                                    transition-all "
                  onClick={() =>
                    document.getElementById("my_modal_2").showModal()
                  }
                >
                  See project
                </button>
                <dialog id="my_modal_2" className="modal">
                  <div className="modal-box">
                    <img src={Vhire} className="" />
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
              </div>
            </div>
          </div>
          <div
            className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] 
                                    transition"
          >
            <h3 className="text-xl font-bold mb-2">ProCaptivity</h3>
            <p className="text-gray-400 mb-4">
              This project is a mobile application, it is essentially a pomodoro
              mobile application I worked at the backend and frontend
            </p>
            <div>
              <div>
                {["Xamarin", "C#"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] 
                                    transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="pt-6">
                <button
                  className="btn bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] 
                                    transition-all "
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  See project
                </button>
                <dialog id="my_modal_3" className="modal">
                  <div className="modal-box">
                    <img src={Procaptivity} className="" />
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
              </div>
            </div>
          </div>
          <div
            className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] 
                                    transition"
          >
            <h3 className="text-xl font-bold mb-2">
              AI Facial Recognition using Yolov8 with Ensemble
            </h3>
            <p className="text-gray-400 mb-4">
              The idea of this project was to observe and study ensembling,
              specifically how stacking ensemble works, and the nueral networks
              used are lightweight modules, NetShuffleV2 can reduce the
              calculation cost for YoloV8 while Ghostmodulev2 can reduce and
              multiply the amount of datasets by spliting the data sets into 2
              different CNN, one for the known aspects of the image and one is
              for the unknown aspects of it. I worked alone when doing this
              thesis.
            </p>
            <div>
              <div>
                {["YoloV8", "GhostModuleV2", "NetShuffleV2"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] 
                                    transition-all"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="pt-6">
                <button
                  className="btn bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] 
                                    transition-all "
                  onClick={() =>
                    document.getElementById("my_modal_4").showModal()
                  }
                >
                  See project
                </button>
                <dialog id="my_modal_4" className="modal">
                  <div className="modal-box">
                    <img src={Thesis} className="" />
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};

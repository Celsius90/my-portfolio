// projects.js
window.PROJECTS = [
  {
    id: "chromabot",
    title: "Chromabot",
    languageTag: "C++",
    subtitle: "Autonomous color-sorting robot for drawing tools using optical hue detection and encoder-based bin positioning.",
    subtitleGithubUrl: "https://github.com/Fahrenheit194/chromabot-control",
    detailLinkLabel: "Control code",
    detailLinkUrl: "https://github.com/Fahrenheit194/chromabot-control/blob/main/main.cpp",
    tags: ["Robotics", "VEX IQ", "C++"],
    thumb: "assets/chromabot/cb_front.png",
    blocks: [
    {
        type: "carousel-arrows",
        heading: "Build photos (multi-view)",
        images: [
        { src: "assets/chromabot/cb_front.png", caption: "Front view" },
        { src: "assets/chromabot/cb_back.png", caption: "Back view" },
        { src: "assets/chromabot/cb_left.png", caption: "Left view" },
        { src: "assets/chromabot/cb_right.png", caption: "Right view" },
        { src: "assets/chromabot/cb_top.png", caption: "Top view" }
        ]
    },

    {
        type: "text",
        text: {
            heading: "What it does",
            body:
                "Sorts colouring tools into five colour groups using an optical colour sensor (hue) and repeatable encoder-based positioning between bin locations.",
            bullets: [
                "Optical colour sensor: measures hue under controlled lighting to classify each tool into one of five colour groups",
                "Motor encoders: provide repeatable positioning between bin locations using stored encoder step values",
                "Drive motors (rear wheels): control robot movement and alignment during the sorting process",
                "Release mechanism motor: actuates a geared release wheel to release and advance colouring tools one at a time",
                "Distance sensor: used during calibration to estimate tool length and determine when sorting should stop",
                "Bumper switch: detects physical contact and is used as a safety/input trigger during operation",
                "Touch LED input: allows the user to step through calibration and trigger a dump/cancel action for safe operation"
            ],

            extra:
                "Each tool is classified by measured hue and routed into one of five bins: red, orange/yellow, green, blue, or purple/pink. Controlled lighting and shading around the sensor are used to keep colour readings consistent regardless of ambient conditions."
            }
    },

    {
        type: "wide-video",
        heading: "Demo video",
        src: "assets/chromabot/chromabot-demo.mp4"
    }
    ]

    },

  {
    id: "uwnrg",
    title: "UWNRG Contributions",
    languageTag: "C++",
    subtitle: "Designed a syringe-based ink deposition mechanism for PCB printing using controlled stepper-driven extrusion. (currently working on firmware in C++)",
    fullSubtitle: "CHIP (Conductive Hydrodynamic Ink Printer) is an additive manufacturing robot that deposits conductive, water-based nanoparticle inks to fabricate PCBs, integrated devices, wearable sensors, and printed displays",
    tags: ["Mechanical Design", "3D Modeling"],
    thumb: "assets/uwnrg/nrg_isometric.png",
    blocks: [
      {
        type: "wide-image",
        image: {
          src: "assets/uwnrg/3DModel.png",
          caption:
            "CHIP printer base assembly shown for context; ink deposition mechanism shown separately below."
        }
      },

      {
        type: "image-text",
        image: {
          src: "assets/uwnrg/nrg_isometric.png",
          caption: "Isometric view: ink deposition mechanism part."
        },
        text: {
          heading: "My contributions",
          body:
            "Designed and modeled a syringe-based ink deposition mechanism in SolidWorks for a nanoparticle ink printer used in PCB and sensor fabrication.",
          bullets: [
            "Developed a syringe mounting and clamping system that allows fast syringe replacement while maintaining consistent alignment during operation.",
            "Designed and integrated guide rails and a stepper-motor-driven T8 lead screw to provide controlled vertical motion of the syringe plunger, converting motor rotation into precise linear ink extrusion."
          ]
        }
      },

      {
        type: "image-text",
        image: {
          src: "assets/uwnrg/nrg_base.png",
          caption: "Close-up: syringe base region."
        },
        text: {
          heading: "Why the mechanism matters",
          body:
            "The goal is reliable deposition: consistent alignment, guided motion that doesn’t twist, and repeatable vertical travel driven by the lead screw.",
          bullets: [
            "Fast syringe loading without losing alignment",
            "Guided rails constrain motion and reduce binding",
            "Stepper-driven T8 lead screw gives controlled vertical travel"
          ]
        }
      },

      {
        type: "wide-carousel",
        heading: "Motion range (load → run → fully compressed)",
        note:
          "This shows the syringe plate travel from loading position to full compression.",
        images: [
          {
            src: "assets/uwnrg/nrg_start_pos.png",
            caption: "Start / load position - lowest travel, syringe uncompressed (fully extended)."
          },
          {
            src: "assets/uwnrg/nrg_running.png",
            caption: "Running position - mid travel during deposition."
          },
          {
            src: "assets/uwnrg/nrg_full_comp.png",
            caption: "Fully compressed - syringe plate near top (plunger fully compressed)."
          }
        ]
      }
    ]
  },

  {
    id: "conrad",
    title: "Lumino.net | The Conrad Challenge",
    subtitle: "City-scale intelligent traffic management concept combining sensing data and routing information.",
    tags: ["Systems Design"],
    thumb: "assets/conrad/tdm_cad.png",
    blocks: [
      {
        type: "wide-image",
        image: { src: "assets/conrad/tdm_cad.png", caption: "Traffic Data Module (TDM): roadside sensing unit housing LiDAR sensor and processing hardware for real-time vehicle tracking." },
        placeholder: "HERO — Lumino.net concept (16:9)"
      },

      {
        type: "text",
        text: {
          heading: "The Problem",
          body:
            "Traffic congestion wastes time, increases emissions, and raises accident risk. Existing solutions such as camera-based monitoring and navigation apps either lack reliability or lack direct control over traffic signals.",
          bullets: [
            "Fixed traffic signal timing does not adapt to real conditions",
            "Camera systems struggle in poor weather and low-light conditions",
            "Navigation apps redirect drivers but don't influence signal timing",
            "No coordinated approach combining sensing + control"
          ]
        }
      },

      {
        type: "text",
        text: {
          heading: "Why It Matters",
          body:
            "Current traffic management approaches lack coordination and adaptability. Lumino.net integrates traffic sensing and signal control into a closed-loop system, enabling signal timing to adapt continuously to real-time traffic conditions rather than fixed schedules.",
          bullets: [
            "Reduces congestion by responding to current traffic demand rather than historical averages",
            "Improves air quality by minimizing idling and stop-and-go vehicle behavior",
            "Enhances safety through optimized signal timing that reduces intersection conflicts",
            "Supports data-driven planning by providing useful traffic analytics to municipalities"
          ]
        }
      },

      {
        type: "wide-image",
        image: { src: "assets/conrad/servers.png", caption: "System architecture: roadside sensors and vehicle data feed a central server that optimizes traffic signal timing in real time." },
        placeholder: "DIAGRAM — System flow: sensing → aggregation → signal control (16:9)"
      },

      {
        type: "text",
        text: {
          heading: "System Components",
          body:
            "Lumino.net integrates four key subsystems to measure, process, and act on traffic data.",
          bullets: [
            "Roadside Traffic Sensors: LiDAR units at intersections track vehicle movement reliably in all weather and lighting conditions",
            "Vehicle Data Input: Connected vehicles send location and speed to the central server, providing redundancy if roadside sensors degrade",
            "Central Traffic Server: Aggregates all traffic data by city, builds live traffic state, and computes optimal signal timing",
            "Traffic Control & Navigation: Outputs timing changes to traffic control centers; companion app guides drivers on less congested routes"
          ]
        }
      },

      {
        type: "text",
        text: {
          heading: "Design Considerations",
          body:
            "Key principles that guided the system architecture.",
          bullets: [
            "Reliability: Dual data sources (roadside + vehicle) ensure system resilience if one input degrades",
            "Scalability: City-level server organization reduces complexity and supports gradual expansion to new municipalities",
            "Deployment: Minimal physical infrastructure requirements reduce installation burden on cities and speed time-to-value",
            "Privacy: Vehicle data aggregated at city level without individual tracking"
          ]
        }
      }
    ]
  }
];

window.SOFTWARE_PROJECTS = [
  {
    id: "tuneshelf",
    title: "TuneShelf",
    languageTag: "JavaScript",
    subtitle: "Web-based guitar tuner with real-time pitch detection using the Web Audio API. Supports custom tuning presets and interactive tuning feedback.",
    subtitleGithubUrl: "https://github.com/Fahrenheit194/TuneShelf",
    thumb: "assets/tuneshelf/tuneshelf_ui.png",
    externalUrl: "https://tuneshelf.ca/"
  },
  {
    id: "config-sim-runner",
    title: "Config-Sim-Runner",
    languageTag: "C++",
    subtitle: "C++ physics simulation engine with configuration-driven experiments. Exports CSV data and supports deterministic replay of simulation runs.",
    thumb: "assets/simrunner/sim_output.png",
    externalUrl: "https://github.com/Fahrenheit194/config-sim-runner"
  },
  {
    id: "blackjack-desktop",
    title: "Blackjack Desktop",
    languageTag: "Java",
    subtitle: "Java Swing blackjack game implementing betting logic and dealer rules. Includes bankroll management and full round-based gameplay.",
    thumb: "assets/blackjack/blackjack_ui.png",
    externalUrl: "https://github.com/Fahrenheit194/BlackJack-Desktop"
  },
  {
    id: "todo-cli",
    title: "CLI To-Do List",
    languageTag: "Python",
    subtitle: "Command-line task manager with JSON-based persistence and multiple task lists. Supports due dates, completion tracking, and command-based navigation.",
    thumb: "assets/todo/todo_cli.png",
    externalUrl: "https://github.com/Fahrenheit194/to-do_cli"
  }
];


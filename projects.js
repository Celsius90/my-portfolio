// projects.js
window.PROJECTS = [
  {
    id: "chromabot",
    title: "Chromabot",
    subtitle: "Autonomous sorting robot for coloring tools using hue detection and encoder-based bin positioning.",
    tags: ["Robotics", "VEX IQ", "C++"],
    thumb: "assets/chromabot/cb_front.png",
    blocks: [
    {
        type: "carousel-arrows",
        heading: "Build photos (multi-view)",
        note: "Use the arrows to switch angles.",
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
    subtitle:
      "CHIP (Conductive Hydrodynamic Ink Printer) is an additive manufacturing robot that deposits conductive, water-based nanoparticle inks to fabricate PCBs, integrated devices, wearable sensors, and printed displays",
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
          caption: "Isometric view: ink deposition mechanism part"
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
          caption: "Close-up: syringe base region (loading + alignment context)."
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
          "Scroll sideways through the three states. This shows the cartridge plate travel from loading position to full compression.",
        images: [
          {
            src: "assets/uwnrg/nrg_start_pos.png",
            caption: "Start / load position — lowest travel, syringe uncompressed (fully extended)."
          },
          {
            src: "assets/uwnrg/nrg_running.png",
            caption: "Running position — mid travel during deposition."
          },
          {
            src: "assets/uwnrg/nrg_full_comp.png",
            caption: "Fully compressed — cartridge plate near top (plunger fully compressed)."
          }
        ]
      }
    ]
  },

  //DEMOS TO ADD NEXT

  {
    id: "simrunner",
    title: "SimRunner",
    subtitle: "Config-driven time-step simulation engine with CSV output and replay.",
    tags: ["C++", "CLI", "Simulation"],
    thumb: "",
    blocks: [
      {
        type: "wide-image",
        image: { src: "", caption: "Hero: terminal output screenshot." },
        placeholder: "HERO — SimRunner terminal screenshot (16:9)"
      },
      {
        type: "image-text",
        image: { src: "", caption: "Config file (.cfg) screenshot." },
        placeholder: "CONFIG — .cfg screenshot (4:3)",
        text: {
          heading: "Short blurb",
          body: "Runs simulations defined in external config files and writes time-series outputs for plotting and analysis.",
          bullets: [
            "Reads .cfg → advances in fixed time steps (dt) until t_end",
            "Writes structured CSV + replay file for repeatable runs"
          ]
        }
      }
    ]
  },

  {
    id: "conrad",
    title: "Lumino.net (Conrad Challenge)",
    subtitle: "City-scale intelligent traffic management concept combining sensing + navigation data.",
    tags: ["Systems Design"],
    thumb: "assets/conrad/tdm_cad.png",
    blocks: [
      {
        type: "wide-image",
        image: { src: "", caption: "Hero: clean concept graphic/slide." },
        placeholder: "HERO — Conrad concept slide (16:9)"
      },
      {
        type: "image-text",
        image: { src: "", caption: "System flow diagram." },
        placeholder: "DIAGRAM — inputs → aggregation → adaptive control (16:9 or 4:3)",
        text: {
          heading: "Concept, diagram-first",
          body: "Keep this page visual: communicate the system in 15 seconds with one clean flow diagram.",
          bullets: [
            "Inputs: roadside sensing + navigation signals",
            "Processing: aggregate traffic state",
            "Outputs: adaptive signal timing + routing suggestions"
          ]
        }
      }
    ]
  },

  {
    id: "tuneshelf",
    title: "TuneShelf",
    subtitle: "Web guitar tuner (live site link).",
    externalUrl: "https://tuneshelf.ca/",
    thumb: "assets/tuneshelf/tuneshelf_logo.png"
  }
];

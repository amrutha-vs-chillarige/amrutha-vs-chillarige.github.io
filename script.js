/* =========================================================
   MODAL SETUP
========================================================= */

const modal = document.getElementById("modal");

const modalContent =
  document.getElementById("modal-content");

const closeButton =
  document.querySelector(".modal-close");


/* =========================================================
   CONTENT FOR EACH TILE
========================================================= */

const content = {


  /* =======================================================
     01 — COOLING PROJECT
  ======================================================= */

  cooling: `

    <p class="eyebrow">
      Featured Project · In Development
    </p>

    <h2>
      Data-Driven Thermal Management
      of AI Data Centres
    </h2>

    <p>

      <strong>North-star question:</strong><br><br>

      Can a closed-loop direct-to-chip liquid-cooling
      architecture reduce freshwater consumption for AI
      data-centre cooling while maintaining acceptable
      thermal performance under dynamic workloads?

    </p>


    <h3>
      What we're investigating
    </h3>

    <p>

      The project explicitly separates
      <strong>IT-side cooling</strong> from
      <strong>facility-side heat rejection</strong>.

      A closed liquid loop does not automatically mean
      zero water consumption: the facility can still use
      water if heat is ultimately rejected through
      evaporation.

    </p>


    <h3>
      IT-side architecture
    </h3>

    <ul>

      <li>
        GPU / CPU
      </li>

      <li>
        Cold plate
      </li>

      <li>
        Closed liquid loop
      </li>

    </ul>


    <h3>
      Facility-side heat rejection
    </h3>

    <ul>

      <li>
        Liquid loop → heat exchanger
      </li>

      <li>
        Evaporative heat rejection
      </li>

      <li>
        Dry / non-evaporative heat rejection
      </li>

    </ul>


    <h3>
      Configurations being compared
    </h3>

    <ul>

      <li>
        <strong>Baseline:</strong>
        air cooling + evaporative heat rejection
      </li>

      <li>
        <strong>Proposed:</strong>
        direct-to-chip liquid cooling +
        dry / non-evaporative heat rejection
      </li>

    </ul>


    <h3>
      Reduced-order thermal model
    </h3>

    <p>

      The MVP uses one main thermal state:

      <strong>server temperature T(t)</strong>.

      Inputs include IT/server power, ambient temperature
      and temperature setpoint.

      Outputs include server temperature over time
      and cooling effort.

    </p>


    <h3>
      Water model
    </h3>

    <p>

      Evaporative heat rejection is linked to water
      consumption through the heat rejected evaporatively.

      Dry heat rejection is modelled as approximately
      zero continuous cooling-water consumption.

    </p>


    <h3>
      Tools
    </h3>

    <p>
      Python · NumPy · Pandas · MATLAB · Simulink
    </p>


    <p>
      <strong>
        🚧 Status: actively being developed
      </strong>
    </p>

  `,


  /* =======================================================
     02 — ANALYTICS
  ======================================================= */

  analytics: `

    <p class="eyebrow">
      Data Analytics
    </p>

    <h2>
      Projects
    </h2>

    <p>

      Analytical projects combining Python, SQL,
      Power BI, NLP and data visualization to turn
      datasets into useful insights.

    </p>


    <div class="modal-cert-grid">


      <div class="modal-cert">

        <strong>
          Literary Sentiment Analysis
        </strong>

        <small>
          Python · NLP · Web Scraping · Power BI
        </small>

        <a
          href="https://github.com/amrutha-vs-chillarige/Literary-Sentiment-Analysis"
          target="_blank"
        >
          View Project ↗
        </a>

      </div>


      <div class="modal-cert">

        <strong>
          Superstore Sales Analytics
        </strong>

        <small>
          SQL · Power BI · Excel
        </small>

        <a
          href="https://github.com/amrutha-vs-chillarige/Superstore-Sales-Analytics"
          target="_blank"
        >
          View Project ↗
        </a>

      </div>


      <div class="modal-cert">

        <strong>
          EV Readiness Analysis
        </strong>

        <small>
          SQL · Power BI · Data Visualization
        </small>

        <a
          href="https://github.com/amrutha-vs-chillarige/EV-Readiness-Analysis"
          target="_blank"
        >
          View Project ↗
        </a>

      </div>


      <div class="modal-cert">

        <strong>
          Quantium Sales Impact
        </strong>

        <small>
          Python · Dash · Plotly · pytest
        </small>

        <a
          href="https://github.com/amrutha-vs-chillarige/quantium-starter-repo"
          target="_blank"
        >
          View Project ↗
        </a>

      </div>


    </div>

  `,


  /* =======================================================
     03 — AI
  ======================================================= */

  ai: `

    <p class="eyebrow">
      Generative AI
    </p>

    <h2>
      AI in Practice
    </h2>

    <p>

      Building practical GenAI capability around analytics,
      research, prompt engineering and repeatable
      AI-assisted workflows.

    </p>


    <h3>
      Completed
    </h3>

    <ul>

      <li>

        <strong>
          Vista — AI in Action
        </strong>

        · GenAI, prompting and AI workflows

      </li>

    </ul>


    <h3>
      Currently exploring
    </h3>

    <ul>

      <li>
        Prompt engineering
      </li>

      <li>
        AI-assisted analytics
      </li>

      <li>
        Structured outputs and evaluation
      </li>

      <li>
        AI-assisted research workflows
      </li>

    </ul>

  `,


  /* =======================================================
     04 — ENGINEERING
  ======================================================= */

  engineering: `

    <p class="eyebrow">
      Electrical & Electronics Engineering
    </p>

    <h2>
      EEE + Systems
    </h2>

    <p>

      My EEE background gives me a systems-oriented
      approach to modelling, analysis and problem solving.

    </p>


    <h3>
      Digital System Design using Verilog HDL
    </h3>

    <p>

      Designed and simulated
      <strong>20+ combinational and sequential digital circuits</strong>
      using dataflow, structural and behavioural
      Verilog modelling techniques.

    </p>

    <p>

      Implemented multiplexers, decoders, encoders,
      comparators, ripple carry adders,
      carry look-ahead adders, flip-flops,
      counters, shift registers and finite state machines.

    </p>


    <h3>
      Control & Power System Simulation
    </h3>

    <p>

      Simulated and analyzed DC motor speed control,
      PID control, rectifier circuits, transmission lines
      and load-frequency control using MATLAB/Simulink.

    </p>


    <p>

      <strong>
        Verilog HDL · MATLAB · Simulink ·
        Digital Logic · Control Systems
      </strong>

    </p>

  `,


  /* =======================================================
     05 — CERTIFICATES
  ======================================================= */

  credentials: `

    <p class="eyebrow">
      Credentials
    </p>

    <h2>
      Certificates
    </h2>

    <p>

      Selected virtual experience programs and
      professional learning credentials.

    </p>


    <div class="modal-cert-grid">


      <div class="modal-cert">

        <strong>
          Vista — AI in Action
        </strong>

        <small>
          GenAI · Prompting · AI workflows
        </small>

        <a
          href="https://www.theforage.com/"
          target="_blank"
        >
          View on Forage ↗
        </a>

      </div>


      <div class="modal-cert">

        <strong>
          Quantium — Software Engineering
        </strong>

        <small>
          Dash · pytest · Automation
        </small>

        <a
          href="https://drive.google.com/file/d/10jxE9jGrqgDTNTmFTWefaAELCJGVeL4W/view?usp=sharing"
          target="_blank"
        >
          View Certificate ↗
        </a>

      </div>


      <div class="modal-cert">

        <strong>
          Tata — Data Visualisation
        </strong>

        <small>
          Executive dashboards · Business insights
        </small>

        <a
          href="https://drive.google.com/file/d/11K9n188JCwT3Lsig4Z--ay8sRFeIgtfW/view?usp=sharing"
          target="_blank"
        >
          View Certificate ↗
        </a>

      </div>


    </div>


    <p>

      <em>
        More credentials will be added as they are completed.
      </em>

    </p>

  `,


  /* =======================================================
     06 — INTERNSHIPS
  ======================================================= */

  experience: `

    <p class="eyebrow">
      Work Experience
    </p>

    <h2>
      Internships
    </h2>


    <!-- IIMB -->

    <div class="experience-item">

      <h3>
        Indian Institute of Management Bangalore
      </h3>

      <div class="date">
        Research Intern · May 2026 – July 2026
      </div>


      <ul>

        <li>
          Analyzed
          <strong>
            5+ blockchain asset tokenization initiatives
          </strong>
          across India and Singapore.
        </li>

        <li>
          Reviewed
          <strong>
            100+ cybercrime research publications
            spanning over 20 years
          </strong>
          to identify long-term trends and emerging
          investigative challenges.
        </li>

        <li>
          Worked in a
          <strong>
            10+ member research team
          </strong>
          to prepare literature reviews,
          technical reports and presentations.
        </li>

      </ul>

    </div>


    <!-- BHEL -->

    <div class="experience-item">

      <h3>
        BHEL
      </h3>

      <div class="date">
        Internship · Turbo Generators & Brushless Exciters
      </div>


      <ul>

        <li>

          Studied the
          <strong>
            end-to-end manufacturing, assembly and testing
          </strong>
          of turbo-generators and brushless excitation
          systems, with exposure to rotor, stator and
          excitation-system processes.

        </li>


        <li>

          Observed
          <strong>
            electrical testing, insulation systems and
            quality-control procedures
          </strong>,
          including high-voltage testing and
          Vacuum Pressure Impregnation (VPI) technology.

        </li>


        <li>

          Gained practical exposure to
          <strong>
            industrial electrical machines,
            manufacturing workflows and
            testing/quality-assurance practices
          </strong>
          in a large-scale power engineering environment.

        </li>

      </ul>


      <a
        href="https://drive.google.com/file/d/1Zv2OKWp31BxvM8k7shJBbuSRyUpIaJWw/view?usp=sharing"
        target="_blank"
      >
        View Internship Report ↗
      </a>

    </div>

  `

};


/* =========================================================
   OPEN MODAL WHEN TILE IS CLICKED
========================================================= */

document
  .querySelectorAll("[data-modal]")
  .forEach(tile => {

    tile.addEventListener("click", () => {

      const type = tile.dataset.modal;

      if (!content[type]) {
        return;
      }

      modalContent.innerHTML =
        content[type];

      modal.classList.add("open");

      modal.setAttribute(
        "aria-hidden",
        "false"
      );

      document.body.style.overflow =
        "hidden";

    });

  });


/* =========================================================
   CLOSE MODAL
========================================================= */

function closeModal() {

  modal.classList.remove("open");

  modal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.style.overflow =
    "";

}


/* CLOSE BUTTON */

closeButton.addEventListener(
  "click",
  closeModal
);


/* CLICK OUTSIDE MODAL */

modal.addEventListener(
  "click",
  event => {

    if (event.target === modal) {

      closeModal();

    }

  }
);


/* ESCAPE KEY */

document.addEventListener(
  "keydown",
  event => {

    if (event.key === "Escape") {

      closeModal();

    }

  }
);

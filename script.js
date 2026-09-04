/* =====================================================
   INTERACTIVE PORTFOLIO
===================================================== */

const modal = document.getElementById("modal");

const modalContent =
    document.getElementById("modal-content");

const closeButton =
    document.querySelector(".modal-close");


/* =====================================================
   MODAL CONTENT
===================================================== */

const content = {


    /* -------------------------------------------------
       COOLING PROJECT
    ------------------------------------------------- */

    cooling: `

        <p class="eyebrow">
            Featured Project · Python + MATLAB/Simulink
        </p>

        <h2>
            Data-Driven Thermal Management
            of AI Data Centres
        </h2>

        <p>
            <strong>Question:</strong>
            How do different cooling strategies respond to
            changing AI workloads, and which provides the
            best balance of thermal stability and energy
            efficiency?
        </p>

        <h3>Approach</h3>

        <ul>

            <li>
                Analyze workload and cooling-system data
                using Python.
            </li>

            <li>
                Compare conventional air cooling with
                direct-to-chip liquid cooling.
            </li>

            <li>
                Generate dynamic AI workload profiles
                for simulation.
            </li>

            <li>
                Validate thermal behaviour using a
                reduced-order MATLAB/Simulink model.
            </li>

            <li>
                Use PI/PID control to regulate cooling
                response.
            </li>

            <li>
                Compare peak temperature, recovery time,
                time above threshold, cooling energy and
                controller effort.
            </li>

        </ul>

        <p>
            <em>
                This project is currently under development.
            </em>
        </p>

    `,


    /* -------------------------------------------------
       ANALYTICS
    ------------------------------------------------- */

    analytics: `

        <p class="eyebrow">
            Data Analytics
        </p>

        <h2>
            Selected Analytics Work
        </h2>

        <p>
            Projects spanning Python, SQL, NLP, Power BI
            and interactive data visualization.
        </p>


        <div class="modal-cert-grid">


            <div class="modal-cert">

                <strong>
                    Literary Sentiment Analysis
                </strong>

                <small>
                    Python · NLP · Web Scraping · Power BI
                </small>

                <br>

                <a
                    href="https://github.com/amrutha-vs-chillarige/Literary-Sentiment-Analysis"
                    target="_blank"
                >
                    View GitHub ↗
                </a>

            </div>


            <div class="modal-cert">

                <strong>
                    Superstore Sales Analytics
                </strong>

                <small>
                    SQL · Power BI · Excel
                </small>

                <br>

                <a
                    href="https://github.com/amrutha-vs-chillarige/Superstore-Sales-Analytics"
                    target="_blank"
                >
                    View GitHub ↗
                </a>

            </div>


            <div class="modal-cert">

                <strong>
                    EV Readiness Dashboard
                </strong>

                <small>
                    SQL · Power BI · Visualization
                </small>

                <br>

                <a
                    href="https://github.com/amrutha-vs-chillarige/EV-Readiness-Analysis"
                    target="_blank"
                >
                    View GitHub ↗
                </a>

            </div>


            <div class="modal-cert">

                <strong>
                    Quantium Sales Impact
                </strong>

                <small>
                    Python · Dash · Plotly · pytest
                </small>

                <br>

                <a
                    href="https://github.com/amrutha-vs-chillarige/quantium-starter-repo"
                    target="_blank"
                >
                    View GitHub ↗
                </a>

            </div>

        </div>

    `,


    /* -------------------------------------------------
       AI
    ------------------------------------------------- */

    ai: `

        <p class="eyebrow">
            Generative AI
        </p>

        <h2>
            AI in Practice
        </h2>

        <p>
            I'm building practical GenAI capability around
            analytics, research, structured prompting and
            AI-assisted workflows.
        </p>


        <h3>
            Current Learning Track
        </h3>

        <ul>

            <li>
                <strong>
                    Vista — AI in Action
                </strong>
                ✓ Completed
            </li>

            <li>
                <strong>
                    BCG — GenAI
                </strong>
                — Next
            </li>

            <li>
                <strong>
                    Datacom — Partnering with AI
                </strong>
                — Planned
            </li>

        </ul>


        <p>
            The goal isn't to collect certificates.
            It's to learn how to use AI reliably alongside
            analytical and engineering work.
        </p>

    `,


    /* -------------------------------------------------
       ENGINEERING
    ------------------------------------------------- */

    engineering: `

        <p class="eyebrow">
            Electrical & Electronics Engineering
        </p>

        <h2>
            Engineering + Systems
        </h2>

        <p>
            My engineering work sits around electrical
            systems, control, simulation and data-driven
            decision making.
        </p>


        <h3>
            Current Focus
        </h3>

        <p>
            Thermal dynamics, control systems and
            MATLAB/Simulink through the AI data-centre
            cooling project.
        </p>


        <p>
            More engineering projects and simulation work
            will be added here as they become
            portfolio-ready.
        </p>

    `,


    /* -------------------------------------------------
       CERTIFICATES
    ------------------------------------------------- */

    credentials: `

        <p class="eyebrow">
            Credentials
        </p>

        <h2>
            Certificates
        </h2>

        <p>
            Selected virtual experience and professional
            learning credentials.
        </p>


        <div class="modal-cert-grid">


            <div class="modal-cert">

                <strong>
                    Vista — AI in Action
                </strong>

                <small>
                    GenAI · Prompting · AI workflows
                </small>

                <br>

                <a
                    href="https://www.theforage.com/"
                    target="_blank"
                >
                    Forage ↗
                </a>

            </div>


            <div class="modal-cert">

                <strong>
                    Quantium — Software Engineering
                </strong>

                <small>
                    Dash · pytest · automation
                </small>

                <br>

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
                    Executive dashboards · insights
                </small>

                <br>

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
                More credentials will appear here as
                they are completed.
            </em>
        </p>

    `
};


/* =====================================================
   OPEN MODAL
===================================================== */

document
    .querySelectorAll("[data-modal]")
    .forEach(tile => {

        tile.addEventListener("click", () => {

            const type = tile.dataset.modal;

            modalContent.innerHTML = content[type];

            modal.classList.add("open");

            document.body.style.overflow = "hidden";

        });

    });


/* =====================================================
   CLOSE MODAL
===================================================== */

function closeModal() {

    modal.classList.remove("open");

    document.body.style.overflow = "";

}


closeButton.addEventListener(
    "click",
    closeModal
);


/* Click outside */

modal.addEventListener(
    "click",
    event => {

        if (event.target === modal) {

            closeModal();

        }

    }
);


/* Escape key */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeModal();

        }

    }
);

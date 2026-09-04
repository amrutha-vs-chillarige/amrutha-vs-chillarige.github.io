const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");
const closeButton = document.querySelector(".modal-close");

const content = {

    cooling: `
        <p class="eyebrow">Featured Project · In Development</p>

        <h2>Data-Driven Thermal Management of AI Data Centres</h2>

        <p>
            A data-driven engineering project investigating how
            different cooling strategies respond to changing
            AI data-centre workloads.
        </p>

        <h3>What I'm building</h3>

        <ul>
            <li>Python-based workload and cooling-data analysis</li>
            <li>Comparison of conventional air cooling and liquid cooling</li>
            <li>Dynamic AI workload profiles</li>
            <li>Reduced-order thermal modelling</li>
            <li>MATLAB / Simulink implementation</li>
            <li>PI/PID-based thermal control</li>
            <li>Performance comparison using thermal and energy metrics</li>
        </ul>

        <h3>Current status</h3>

        <p>
            <strong>🚧 In development</strong>
        </p>

        <p>
            The project is currently being implemented and will be
            updated here once the Python analysis and MATLAB/Simulink
            validation are complete.
        </p>
    `,


    analytics: `
        <p class="eyebrow">Data Analytics</p>

        <h2>Analytics Projects</h2>

        <p>
            A collection of projects using Python, SQL, Power BI,
            NLP and data visualization to turn datasets into
            actionable insights.
        </p>

        <div class="modal-cert-grid">

            <div class="modal-cert">
                <strong>Literary Sentiment Analysis</strong>
                <small>Python · NLP · Web Scraping · Power BI</small>
                <br>
                <a href="https://github.com/amrutha-vs-chillarige/Literary-Sentiment-Analysis"
                   target="_blank">
                    View Project ↗
                </a>
            </div>

            <div class="modal-cert">
                <strong>Superstore Sales Analytics</strong>
                <small>SQL · Power BI · Excel</small>
                <br>
                <a href="https://github.com/amrutha-vs-chillarige/Superstore-Sales-Analytics"
                   target="_blank">
                    View Project ↗
                </a>
            </div>

            <div class="modal-cert">
                <strong>EV Readiness Analysis</strong>
                <small>SQL · Power BI · Visualization</small>
                <br>
                <a href="https://github.com/amrutha-vs-chillarige/EV-Readiness-Analysis"
                   target="_blank">
                    View Project ↗
                </a>
            </div>

            <div class="modal-cert">
                <strong>Quantium Sales Impact</strong>
                <small>Python · Dash · Plotly · pytest</small>
                <br>
                <a href="https://github.com/amrutha-vs-chillarige/quantium-starter-repo"
                   target="_blank">
                    View Project ↗
                </a>
            </div>

        </div>
    `,


    ai: `
        <p class="eyebrow">Generative AI</p>

        <h2>AI in Practice</h2>

        <p>
            I'm developing practical GenAI skills focused on
            analytics, research, prompt engineering and
            AI-assisted workflows.
        </p>

        <h3>Completed</h3>

        <ul>
            <li>
                <strong>Vista — AI in Action</strong>
                <br>
                GenAI · Prompting · AI workflows
            </li>
        </ul>

        <h3>Currently Exploring</h3>

        <ul>
            <li>Prompt engineering</li>
            <li>AI-assisted analytics</li>
            <li>Structured outputs and evaluation</li>
            <li>Research workflows using GenAI</li>
        </ul>

        <p>
            <em>
                More projects and credentials will be added here
                as I build them.
            </em>
        </p>
    `,


    engineering: `
        <p class="eyebrow">Electrical & Electronics Engineering</p>

        <h2>EEE + Systems</h2>

        <p>
            My engineering background gives me a systems-oriented
            approach to data and problem solving.
        </p>

        <h3>Current Focus</h3>

        <ul>
            <li>MATLAB / Simulink</li>
            <li>Control systems</li>
            <li>Thermal modelling</li>
            <li>Electrical systems</li>
            <li>Data-driven engineering</li>
        </ul>

        <p>
            The main engineering project currently under development
            is the AI data-centre thermal management project.
        </p>
    `,


    credentials: `
        <p class="eyebrow">Credentials</p>

        <h2>Certificates</h2>

        <p>
            Selected virtual experience programs and professional
            learning credentials.
        </p>

        <div class="modal-cert-grid">

            <div class="modal-cert">
                <strong>Vista — AI in Action</strong>
                <small>GenAI · Prompting · AI workflows</small>
                <br>
                <a href="https://www.theforage.com/"
                   target="_blank">
                    View on Forage ↗
                </a>
            </div>

            <div class="modal-cert">
                <strong>Quantium — Software Engineering</strong>
                <small>Dash · pytest · Automation</small>
                <br>
                <a href="https://drive.google.com/file/d/10jxE9jGrqgDTNTmFTWefaAELCJGVeL4W/view?usp=sharing"
                   target="_blank">
                    View Certificate ↗
                </a>
            </div>

            <div class="modal-cert">
                <strong>Tata — Data Visualisation</strong>
                <small>Executive dashboards · Business insights</small>
                <br>
                <a href="https://drive.google.com/file/d/11K9n188JCwT3Lsig4Z--ay8sRFeIgtfW/view?usp=sharing"
                   target="_blank">
                    View Certificate ↗
                </a>
            </div>

        </div>

        <p>
            <em>
                More credentials will be added as they are completed.
            </em>
        </p>
    `
};


/* OPEN TILE */

document.querySelectorAll("[data-modal]").forEach(tile => {

    tile.addEventListener("click", function () {

        const type = this.dataset.modal;

        if (content[type]) {

            modalContent.innerHTML = content[type];

            modal.classList.add("open");

            document.body.style.overflow = "hidden";
        }

    });

});


/* CLOSE BUTTON */

closeButton.addEventListener("click", closeModal);


function closeModal() {

    modal.classList.remove("open");

    document.body.style.overflow = "";

}


/* CLICK OUTSIDE MODAL */

modal.addEventListener("click", function(event) {

    if (event.target === modal) {

        closeModal();

    }

});


/* ESCAPE KEY */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeModal();

    }

});

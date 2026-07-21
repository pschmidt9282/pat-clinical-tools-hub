// --- CLINICAL TOOLS HUB LOGIC ---

// 1. Initial Curated Clinical Tools
const INITIAL_TOOLS = [
    {
        id: "osteoporosis-meds",
        title: "Osteoporosis Master Reference",
        url: "./osteoporosis-meds/",
        category: "Endocrinology",
        description: "Point-of-care clinical reference for bone mineral density T-scores, FRAX risk calculations, and therapy guidelines (bisphosphonates, SERMs, anabolic agents)."
    },
    {
        id: "antidepressant-matrix",
        title: "Antidepressant Decision Matrix",
        url: "./antidepressant-matrix/",
        category: "Psychiatry",
        description: "Interactive clinical aid for selecting SSRIs, SNRIs, atypical, and tricyclic agents based on patient comorbidities, side-effect profiles, drug interactions, and cost."
    },
    {
        id: "contraception-matrix",
        title: "Contraception Clinical Decision Matrix",
        url: "./contraception-matrix/",
        category: "Women's Health",
        description: "Navigational matrix mapping contraceptive options (LARC, oral, barrier, emergency) matching patient preferences and CDC Medical Eligibility Criteria (MEC)."
    },
    {
        id: "glp1-gip-dashboard",
        title: "GLP-1 & GIP/GLP-1 Clinical Dashboard",
        url: "./glp1-gip-dashboard/",
        category: "Endocrinology",
        description: "Reference dashboard detailing dosage titration schedules, clinical efficacy metrics, and side-effect management for GLP-1 and dual GIP/GLP-1 receptor agonists."
    },
    {
        id: "t2d-glucose-lowering",
        title: "Type 2 Diabetes Glucose-Lowering",
        url: "./t2d-glucose-lowering/",
        category: "Endocrinology",
        description: "Interactive glycemic agent selection matching cardiorenal risks, weight loss goals, hypoglycemia profiles, and generic cost constraints."
    },
    {
        id: "antihypertensives",
        title: "Antihypertensive Selection",
        url: "./antihypertensives/",
        category: "Primary Care",
        description: "Comparative guide for first-line classes matching demographics and CKD, alongside Chlorthalidone vs. HCTZ and calcium channel blocker clinical evaluations."
    },
    {
        id: "afib-anticoagulants",
        title: "Atrial Fibrillation Anticoagulation",
        url: "./afib-anticoagulants/",
        category: "Cardiology",
        description: "At-a-glance safety matrix for DOACs vs. Warfarin covering renal adjustments, Beers Criteria warnings, drug interactions, and reversal agents."
    },
    {
        id: "insomnia",
        title: "Insomnia Pharmacotherapy",
        url: "./insomnia/",
        category: "Psychiatry",
        description: "Interactive matrix matching sleep onset vs. sleep maintenance, geriatric safety profiles, substance use risk, and 2022 Lancet NMA rankings."
    },
    {
        id: "gout",
        title: "Gout Flare & Chronic ULT",
        url: "./gout/",
        category: "Primary Care",
        description: "Differentiates colchicine, NSAIDs, and steroids for flares alongside Allopurinol, Febuxostat, and Probenecid for urate-lowering, including HLA-B*5801 screen warnings."
    },
    {
        id: "lipid-lowering",
        title: "Lipid-Lowering Therapy Sequencing",
        url: "./lipid-lowering/",
        category: "Cardiology",
        description: "Sequential lipid therapy guide mapping statin intensity, SAMS muscle management, drug interactions, and Ezetimibe/PCSK9i/Inclisiran sequencing."
    },
    {
        id: "ckd-nephroprotective",
        title: "CKD Cardiorenal Layering",
        url: "./ckd-nephroprotective/",
        category: "Nephrology",
        description: "Guidelines for safely layering and titration of the four pillars of nephroprotection (RASi + SGLT2i + Finerenone + GLP-1 RA) by eGFR, UACR, and potassium."
    },
    {
        id: "phosphate-binders",
        title: "Phosphate Binders (CKD-MBD)",
        url: "./phosphate-binders/",
        category: "Nephrology",
        description: "Interactive comparison of calcium vs. non-calcium binders, evaluating vascular calcification, daily pill burdens, and pleiotropic lipid/iron benefits."
    },
    {
        id: "ckd-anemia",
        title: "CKD Anemia & Iron Repletion",
        url: "./ckd-anemia/",
        category: "Nephrology",
        description: "ESAs vs. oral HIF-PHIs, and oral iron vs. 5 IV formulations highlighting single-visit repletion limits and FGF23-mediated hypophosphatemia risks."
    },
    {
        id: "potassium-binders",
        title: "Potassium Binders for Hyperkalemia",
        url: "./potassium-binders/",
        category: "Nephrology",
        description: "Compares SPS, Patiromer, and SZC by speed of onset, colonic necrosis warning status, sodium loading, and AMBER spironolactone-enablement trial evidence."
    },
    {
        id: "ibd-matrix",
        title: "IBD Therapeutics Clinical Matrix",
        url: "./ibd-matrix/",
        category: "Gastroenterology",
        description: "Anatomical phenotype selection (Perianal, Stricturing, Colonic, ASUC), SC vs IV regimens (Zymfentra, Entyvio, Skyrizi, Omvoh, Stelara), and TDM target trough calculators."
    },
    {
        id: "acne-matrix",
        title: "Acne Primary Care Prescribing Protocol",
        url: "./acne-matrix/",
        category: "Primary Care",
        description: "Primary care decision support matrix detailing first-line prescribing tier rules, starter vs partner roles, add-on vs swap protocols, and Isotretinoin cumulative dose calculator."
    },
    {
        id: "resistant-hypertension",
        title: "Resistant Hypertension Workup & Step-Up",
        url: "./resistant-hypertension/",
        category: "Cardiology",
        description: "Differentiating pseudo-resistance from true resistant HTN, 3-drug optimization, secondary HTN screener, and 4th-line MRA dosing protocol."
    },
    {
        id: "masld-fib4",
        title: "MASLD / NAFLD Risk Stratification (FIB-4 Flow)",
        url: "./masld-fib4/",
        category: "Gastroenterology",
        description: "Real-time FIB-4 calculator, risk stratification triage (<1.3, 1.3-2.67, >2.67), reflex elastography (VCTE/FibroScan) guidance, and Resmetirom considerations."
    },
    {
        id: "aub-triage",
        title: "Abnormal Uterine Bleeding (AUB) Outpatient Triage",
        url: "./aub-triage/",
        category: "Women's Health",
        description: "PALM-COEIN classification framework, TVUS vs. Endometrial Biopsy indications, acute OCP tapers, Tranexamic Acid, and Levonorgestrel-IUD protocols."
    },
    {
        id: "rhinosinusitis-allergic-rhinitis",
        title: "Rhinosinusitis & Allergic Rhinitis Step-Up",
        url: "./rhinosinusitis-allergic-rhinitis/",
        category: "Primary Care",
        description: "Distinguish allergic vs non-allergic vs chronic rhinosinusitis, Samter's triad check, proper nasal spray technique guide, and Tier 1-3 step-up management."
    },
    {
        id: "dizziness-triage",
        title: "Outpatient Dizziness Triage (HINTS & Epley)",
        url: "./dizziness-triage/",
        category: "Primary Care",
        description: "Interactive HINTS exam module (INFARCT stroke rules), BPPV Dix-Hallpike interpretation, step-by-step Epley Maneuver guide, and Meclizine safety warnings."
    }
];

// 2. Category Configuration (Colors, Glows, Icons)
const CATEGORY_CONFIGS = {
    "Gastroenterology": {
        color: "#10b981",
        glow: "rgba(16, 185, 129, 0.15)",
        bgAlpha: "rgba(16, 185, 129, 0.1)",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 22a7 7 0 0 0 7-7c0-4.3-7-11-7-11S5 10.7 5 15a7 7 0 0 0 7 7Z"></path>
            <path d="M12 11v4"></path>
        </svg>`
    },
    "Dermatology": {
        color: "#ec4899",
        glow: "rgba(236, 72, 153, 0.15)",
        bgAlpha: "rgba(236, 72, 153, 0.1)",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>`
    },
    "Endocrinology": {
        color: "var(--accent-endocrinology)",
        glow: "rgba(251, 191, 36, 0.15)",
        bgAlpha: "rgba(251, 191, 36, 0.1)",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <!-- Molecule icon represent endocrinology/hormones -->
            <circle cx="12" cy="5" r="2.5"></circle>
            <circle cx="6" cy="12" r="2.5"></circle>
            <circle cx="18" cy="12" r="2.5"></circle>
            <circle cx="12" cy="19" r="2.5"></circle>
            <line x1="12" y1="7.5" x2="12" y2="16.5"></line>
            <line x1="7.5" y1="10.5" x2="16.5" y2="13.5"></line>
            <line x1="7.5" y1="13.5" x2="16.5" y2="10.5"></line>
        </svg>`
    },
    "Psychiatry": {
        color: "var(--accent-psychiatry)",
        glow: "rgba(167, 139, 250, 0.15)",
        bgAlpha: "rgba(167, 139, 250, 0.1)",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <!-- Brain/Activity icon -->
            <path d="M12 2a5 5 0 0 0-5 5v2.5a5.5 5.5 0 0 0 1.5 3.9l.6.6c.4.4.6.9.6 1.4v2.1a1 1 0 0 0 .3.7l2 2a1 1 0 0 0 1.4 0l2-2a1 1 0 0 0 .3-.7v-2.1c0-.5.2-1 .6-1.4l.6-.6a5.5 5.5 0 0 0 1.5-3.9V7a5 5 0 0 0-5-5z"></path>
            <path d="M9.5 7h5"></path>
            <path d="M8.5 10h7"></path>
        </svg>`
    },
    "Women's Health": {
        color: "var(--accent-womenshealth)",
        glow: "rgba(244, 114, 182, 0.15)",
        bgAlpha: "rgba(244, 114, 182, 0.1)",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <!-- Double helix/DNA represent medical genetics & women health -->
            <path d="M4.5 10.5C4.5 10.5 7.5 4.5 12 4.5C16.5 4.5 19.5 10.5 19.5 10.5C19.5 10.5 16.5 16.5 12 16.5C7.5 16.5 4.5 10.5 4.5 10.5Z"></path>
            <circle cx="12" cy="10.5" r="3.5"></circle>
            <path d="M12 17v4"></path>
            <path d="M9 21h6"></path>
        </svg>`
    },
    "Cardiology": {
        color: "var(--accent-cardiology)",
        glow: "rgba(248, 113, 113, 0.15)",
        bgAlpha: "rgba(248, 113, 113, 0.1)",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <!-- Heart icon -->
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
        </svg>`
    },
    "Primary Care": {
        color: "var(--accent-primarycare)",
        glow: "rgba(52, 211, 153, 0.15)",
        bgAlpha: "rgba(52, 211, 153, 0.1)",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <!-- Stethoscope -->
            <path d="M4.5 2v10a7.5 7.5 0 0 0 15 0v-4"></path>
            <path d="M22 6v4h-3V6Z"></path>
            <path d="M2 6v4h3V6Z"></path>
            <path d="M12 19.5v2.5"></path>
            <circle cx="12" cy="16" r="3.5"></circle>
        </svg>`
    },
    "Nephrology": {
        color: "var(--accent-nephrology)",
        glow: "rgba(6, 182, 212, 0.15)",
        bgAlpha: "rgba(6, 182, 212, 0.1)",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <!-- Kidney/filtration representation: droplet with filtration lines -->
            <path d="M12 22a7 7 0 0 0 7-7c0-4.3-7-11-7-11S5 10.7 5 15a7 7 0 0 0 7 7Z"></path>
            <path d="M12 11v4"></path>
            <path d="M9 13h6"></path>
        </svg>`
    },
    "Other": {
        color: "var(--accent-other)",
        glow: "rgba(148, 163, 184, 0.15)",
        bgAlpha: "rgba(148, 163, 184, 0.1)",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <!-- Clipboard list -->
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
            <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
            <line x1="9" y1="12" x2="15" y2="12"></line>
            <line x1="9" y1="16" x2="13" y2="16"></line>
        </svg>`
    }
};

// 3. State & Admin Configuration
const ADMIN_PASSWORD = "toolsRcool";
let isAdmin = false;
let tools = [];
let activeCategory = "All";
let searchQuery = "";

// DOM Elements
const toolsGrid = document.getElementById("tools-grid");
const searchInput = document.getElementById("search-input");
const clearSearchBtn = document.getElementById("clear-search");
const categoriesContainer = document.getElementById("categories-container");
const resultsCount = document.getElementById("results-count");
const emptyState = document.getElementById("empty-state");
const resetFiltersBtn = document.getElementById("reset-filters-btn");
const toastContainer = document.getElementById("toast-container");

// Modal Elements
const addToolBtn = document.getElementById("add-tool-btn");
const addToolModal = document.getElementById("add-tool-modal");
const closeModalBtn = document.getElementById("close-modal-btn");
const cancelModalBtn = document.getElementById("cancel-modal-btn");
const addToolForm = document.getElementById("add-tool-form");
const toolCategorySelect = document.getElementById("tool-category");
const customCategoryGroup = document.getElementById("custom-category-group");
const toolCustomCategoryInput = document.getElementById("tool-custom-category");

// Admin Authentication Elements
const adminLoginBtn = document.getElementById("admin-login-btn");
const adminLoginModal = document.getElementById("admin-login-modal");
const closeLoginBtn = document.getElementById("close-login-btn");
const cancelLoginBtn = document.getElementById("cancel-login-btn");
const adminLoginForm = document.getElementById("admin-login-form");
const adminPasswordInput = document.getElementById("admin-password");
const loginError = document.getElementById("login-error");

// 4. Initialize Application
function init() {
    loadTools();
    checkAdminStatus();
    renderCategories();
    renderTools();
    setupEventListeners();
}

// Load tools from local storage or fallback to curated list
function loadTools() {
    const storedTools = localStorage.getItem("clinical_hub_custom_tools");
    if (storedTools) {
        try {
            const customTools = JSON.parse(storedTools);
            tools = [...INITIAL_TOOLS, ...customTools];
        } catch (e) {
            console.error("Error parsing stored tools, resetting:", e);
            tools = [...INITIAL_TOOLS];
        }
    } else {
        tools = [...INITIAL_TOOLS];
    }
}

// 5. Render Tools
function renderTools() {
    // Filter logic
    const filteredTools = tools.filter(tool => {
        const matchesCategory = activeCategory === "All" || tool.category === activeCategory;
        const searchLower = searchQuery.toLowerCase();
        const matchesSearch = searchQuery === "" || 
            tool.title.toLowerCase().includes(searchLower) ||
            tool.description.toLowerCase().includes(searchLower) ||
            tool.category.toLowerCase().includes(searchLower);
        
        return matchesCategory && matchesSearch;
    });

    // Clear grid
    toolsGrid.innerHTML = "";

    // Show/hide empty state
    if (filteredTools.length === 0) {
        toolsGrid.style.display = "none";
        emptyState.style.display = "block";
    } else {
        toolsGrid.style.display = "grid";
        emptyState.style.display = "none";
        
        // Populate tools
        filteredTools.forEach(tool => {
            const card = createToolCard(tool);
            toolsGrid.appendChild(card);
        });
    }

    // Update count badge
    resultsCount.textContent = `${filteredTools.length} Tool${filteredTools.length !== 1 ? 's' : ''}`;
}

// Helper to compile tool HTML
function createToolCard(tool) {
    const card = document.createElement("div");
    card.className = "tool-card";
    
    // Select styling configuration
    const config = CATEGORY_CONFIGS[tool.category] || CATEGORY_CONFIGS["Other"];
    
    // Set custom CSS variables for themed glowing styles
    card.style.setProperty("--category-color", config.color);
    card.style.setProperty("--category-glow", config.glow);
    card.style.setProperty("--category-color-alpha", config.bgAlpha);

    card.innerHTML = `
        <a href="${tool.url}" target="_blank" class="card-header-link" title="Open ${tool.title}">
            <div class="card-title-group">
                <div class="tool-icon-wrapper">
                    ${config.icon}
                </div>
                <div class="card-title-text">
                    <span class="tool-category-label">${tool.category}</span>
                    <h3>${tool.title}</h3>
                </div>
            </div>
        </a>
        <p class="tool-desc">${tool.description}</p>
        <div class="card-actions">
            <a href="${tool.url}" target="_blank" class="btn btn-primary btn-open">
                Open Tool
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="14" height="14">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
            </a>
            <button class="btn btn-icon-only btn-copy-link" data-url="${tool.url}" aria-label="Copy tool URL to clipboard" title="Copy URL">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
            </button>
            ${(tool.id.startsWith("custom-") && isAdmin) ? `
                <button class="btn btn-icon-only btn-delete-tool" data-id="${tool.id}" aria-label="Delete this tool" title="Delete custom tool">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                </button>
            ` : ''}
        </div>
    `;

    // Wire up events inside the card
    card.querySelector(".btn-copy-link").addEventListener("click", (e) => {
        e.stopPropagation();
        const url = e.currentTarget.getAttribute("data-url");
        copyToClipboard(url);
    });

    const deleteBtn = card.querySelector(".btn-delete-tool");
    if (deleteBtn) {
        deleteBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            const id = e.currentTarget.getAttribute("data-id");
            deleteCustomTool(id);
        });
    }

    return card;
}

// 6. Dynamic Filter Category Pills
function renderCategories() {
    // Collect all unique categories from current tools
    const categoriesSet = new Set(tools.map(t => t.category));
    const categories = ["All", ...Array.from(categoriesSet)];

    categoriesContainer.innerHTML = "";
    categories.forEach(cat => {
        const pill = document.createElement("button");
        pill.className = `category-pill ${activeCategory === cat ? 'active' : ''}`;
        pill.setAttribute("role", "tab");
        pill.setAttribute("aria-selected", activeCategory === cat ? "true" : "false");
        pill.textContent = cat;
        
        pill.addEventListener("click", () => {
            activeCategory = cat;
            // Update active pill classes
            document.querySelectorAll(".category-pill").forEach(p => {
                p.classList.remove("active");
                p.setAttribute("aria-selected", "false");
            });
            pill.classList.add("active");
            pill.setAttribute("aria-selected", "true");
            renderTools();
        });

        categoriesContainer.appendChild(pill);
    });
}

// 7. Core Interactive Features

// Clipboard copier
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showToast("URL copied to clipboard!", "success");
    }).catch(err => {
        console.error("Clipboard copy failed:", err);
        // Fallback for older browsers
        const el = document.createElement('textarea');
        el.value = text;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        showToast("URL copied to clipboard!", "success");
    });
}

// Toast notification trigger
function showToast(message, type = "info") {
    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    
    let icon = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
    `;
    
    if (type === "success") {
        icon = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="16" height="16">
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
        `;
    }

    toast.innerHTML = `
        ${icon}
        <div class="toast-content">${message}</div>
        <button class="toast-close" aria-label="Close message">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </button>
    `;

    toastContainer.appendChild(toast);

    // Auto dismiss after 3.5s
    const timer = setTimeout(() => {
        dismissToast(toast);
    }, 3500);

    toast.querySelector(".toast-close").addEventListener("click", () => {
        clearTimeout(timer);
        dismissToast(toast);
    });
}

function dismissToast(toast) {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(50px)";
    setTimeout(() => {
        if (toast.parentNode) {
            toast.parentNode.removeChild(toast);
        }
    }, 300);
}

// Delete custom tool
function deleteCustomTool(id) {
    const storedTools = localStorage.getItem("clinical_hub_custom_tools");
    if (!storedTools) return;

    try {
        let customTools = JSON.parse(storedTools);
        customTools = customTools.filter(t => t.id !== id);
        localStorage.setItem("clinical_hub_custom_tools", JSON.stringify(customTools));
        
        loadTools();
        // If the active category now contains no tools, fallback to 'All'
        const categoriesSet = new Set(tools.map(t => t.category));
        if (activeCategory !== "All" && !categoriesSet.has(activeCategory)) {
            activeCategory = "All";
        }
        
        renderCategories();
        renderTools();
        showToast("Custom tool deleted.", "info");
    } catch (e) {
        console.error("Error deleting custom tool:", e);
    }
}

// 8. Event Listeners Setup
function setupEventListeners() {
    // Search input changes
    searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value;
        if (searchQuery) {
            clearSearchBtn.style.display = "flex";
        } else {
            clearSearchBtn.style.display = "none";
        }
        renderTools();
    });

    // Clear search click
    clearSearchBtn.addEventListener("click", () => {
        searchInput.value = "";
        searchQuery = "";
        clearSearchBtn.style.display = "none";
        renderTools();
        searchInput.focus();
    });

    // Reset buttons (empty state)
    resetFiltersBtn.addEventListener("click", () => {
        resetAllFilters();
    });

    // Admin Login triggers
    adminLoginBtn.addEventListener("click", () => {
        if (isAdmin) {
            // Logout
            isAdmin = false;
            sessionStorage.removeItem("clinical_hub_admin_auth");
            updateAdminUI();
            renderTools();
            showToast("Logged out of Admin Mode.", "info");
        } else {
            openLoginModal();
        }
    });

    closeLoginBtn.addEventListener("click", () => {
        closeLoginModal();
    });

    cancelLoginBtn.addEventListener("click", () => {
        closeLoginModal();
    });

    adminLoginModal.addEventListener("click", (e) => {
        if (e.target === adminLoginModal) {
            closeLoginModal();
        }
    });

    // Modal Triggers
    addToolBtn.addEventListener("click", () => {
        openModal();
    });

    closeModalBtn.addEventListener("click", () => {
        closeModal();
    });

    cancelModalBtn.addEventListener("click", () => {
        closeModal();
    });

    // Close modal on overlay click
    addToolModal.addEventListener("click", (e) => {
        if (e.target === addToolModal) {
            closeModal();
        }
    });

    // ESC key close modal
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            if (addToolModal.classList.contains("open")) {
                closeModal();
            }
            if (adminLoginModal.classList.contains("open")) {
                closeLoginModal();
            }
        }
    });

    // Toggle custom category input box
    toolCategorySelect.addEventListener("change", (e) => {
        if (e.target.value === "Other") {
            customCategoryGroup.style.display = "block";
            toolCustomCategoryInput.setAttribute("required", "required");
        } else {
            customCategoryGroup.style.display = "none";
            toolCustomCategoryInput.removeAttribute("required");
        }
    });

    // Form submission
    addToolForm.addEventListener("submit", (e) => {
        e.preventDefault();
        submitCustomTool();
    });

    adminLoginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        submitAdminLogin();
    });
}

// Reset filters utility
function resetAllFilters() {
    searchInput.value = "";
    searchQuery = "";
    clearSearchBtn.style.display = "none";
    activeCategory = "All";
    
    // Reset category tabs in UI
    const pills = document.querySelectorAll(".category-pill");
    pills.forEach(p => {
        if (p.textContent === "All") {
            p.classList.add("active");
            p.setAttribute("aria-selected", "true");
        } else {
            p.classList.remove("active");
            p.setAttribute("aria-selected", "false");
        }
    });

    renderTools();
}

// Modal open/close actions
function openModal() {
    addToolModal.classList.add("open");
    addToolModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden"; // Disable background scrolling
    document.getElementById("tool-title").focus();
}

function closeModal() {
    addToolModal.classList.remove("open");
    addToolModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = ""; // Re-enable background scrolling
    addToolForm.reset();
    customCategoryGroup.style.display = "none";
    toolCustomCategoryInput.removeAttribute("required");
}

// Create & submit custom tool
function submitCustomTool() {
    const title = document.getElementById("tool-title").value.trim();
    const url = document.getElementById("tool-url").value.trim();
    const selectedCat = toolCategorySelect.value;
    
    let category = selectedCat;
    if (selectedCat === "Other") {
        category = toolCustomCategoryInput.value.trim() || "Other";
    }

    const description = document.getElementById("tool-description").value.trim();
    
    // Construct new tool object
    const newTool = {
        id: "custom-" + Date.now(),
        title,
        url,
        category,
        description
    };

    // Save to local storage
    const storedTools = localStorage.getItem("clinical_hub_custom_tools");
    let customToolsList = [];
    if (storedTools) {
        try {
            customToolsList = JSON.parse(storedTools);
        } catch (e) {
            customToolsList = [];
        }
    }
    
    customToolsList.push(newTool);
    localStorage.setItem("clinical_hub_custom_tools", JSON.stringify(customToolsList));

    // Reload state and render UI
    loadTools();
    renderCategories();
    renderTools();
    closeModal();
    showToast(`"${title}" added successfully!`, "success");
}

// Admin Authentication Helper Functions
function checkAdminStatus() {
    const sessionAuth = sessionStorage.getItem("clinical_hub_admin_auth");
    isAdmin = sessionAuth === "true";
    updateAdminUI();
}

function updateAdminUI() {
    if (isAdmin) {
        addToolBtn.style.display = "inline-flex";
        adminLoginBtn.classList.remove("btn-secondary");
        adminLoginBtn.classList.add("btn-primary");
        adminLoginBtn.style.backgroundColor = "var(--accent-psychiatry)";
        adminLoginBtn.style.color = "var(--bg-main)";
        adminLoginBtn.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
            </svg>
            <span>Admin: Logout</span>
        `;
    } else {
        addToolBtn.style.display = "none";
        adminLoginBtn.classList.remove("btn-primary");
        adminLoginBtn.classList.add("btn-secondary");
        adminLoginBtn.style.backgroundColor = "";
        adminLoginBtn.style.color = "";
        adminLoginBtn.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            <span>Admin Access</span>
        `;
    }
}

function openLoginModal() {
    adminLoginModal.classList.add("open");
    adminLoginModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    adminPasswordInput.focus();
}

function closeLoginModal() {
    adminLoginModal.classList.remove("open");
    adminLoginModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    adminLoginForm.reset();
    loginError.style.display = "none";
}

function submitAdminLogin() {
    const password = adminPasswordInput.value;
    if (password === ADMIN_PASSWORD) {
        isAdmin = true;
        sessionStorage.setItem("clinical_hub_admin_auth", "true");
        updateAdminUI();
        renderTools();
        closeLoginModal();
        showToast("Authenticated as Admin.", "success");
    } else {
        loginError.style.display = "block";
        adminPasswordInput.value = "";
        adminPasswordInput.focus();
    }
}

// 9. Run Application
document.addEventListener("DOMContentLoaded", init);

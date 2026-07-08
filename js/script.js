// ------------------------------------------------------------------
// AEL | AI Alignment Quotes — 10,000+ Unique Philosophical Insights
// Structure: Concept → Risk → Tip → Kill (4 lines)
// No repetition — generated via random combinatorial selection
// Author: © Ayman Elmasry — AEL Digital Studio
// License: AEL Prompt IP System v1.0 — Sovereign Identity Block
// ------------------------------------------------------------------

const conceptPool = [
  "Alignment", "Generalization", "Latent space", "Inference", "Calibration", "Emergent behavior", "Reward hacking", "Overfitting",
  "Explainability", "Robustness", "Adversarial drift", "Entropy collapse", "Scale invariance", "Attention mechanism", "Quantization error",
  "Zero\u2011shot reasoning", "Few\u2011shot adaptation", "Catastrophic forgetting", "Spurious correlation", "Representation bias", "Loss landscape",
  "Gradient descent", "Activation steering", "Model stitching", "Token economy", "Context window", "Semantic resonance", "Feature collapse",
  "Normative blindness", "Proxy misuse", "Distribution shift", "Label noise", "Causal confusion", "Specification gaming", "Value locking"
];

const insightPool = [
  "optimizes for density, not meaning",
  "mirrors statistical shadows without understanding",
  "amplifies hidden patterns from incomplete data",
  "ignores long\u2011tail events until they dominate",
  "collapses under distribution shift silently",
  "priors become biases that harden over time",
  "trade\u2011offs become invisible to the end user",
  "confidence masks underlying uncertainty",
  "rewards surface metrics, not true objectives",
  "memorizes without comprehension",
  "generalizes but fails on edge cases",
  "smooths away necessary complexity",
  "exaggerates majority patterns, silences minorities",
  "hallucinates when uncertainty peaks",
  "treats correlation as causation by default",
  "optimizes for average, not for outlier value",
  "sacrifices robustness for efficiency",
  "learns shortcuts instead of underlying rules"
];

const riskPool = [
  "silent failure modes multiply without warning",
  "erosion of human agency becomes irreversible",
  "opaque reasoning chains hide liability",
  "feedback loops distort reality beyond repair",
  "accountability dissolves across system layers",
  "value locking prevents ethical adaptation",
  "cascade brittleness leads to systemic collapse",
  "automation bias dulls critical oversight",
  "metric fixation corrupts underlying goals",
  "distributional blindness creates hidden victims",
  "epistemic trespassing generates false authority",
  "latent backdoors emerge post\u2011deployment",
  "runaway optimization ignores side effects",
  "interpretability gap widens with each update",
  "confidence calibration drifts without notice"
];

const killPool = [
  "interpretability is not optional \u2014 it is survival",
  "control decays with every layer of abstraction",
  "vigilance is the new literacy in the AI age",
  "trust must be earned through transparency, not speed",
  "you cannot delegate moral responsibility to a matrix",
  "the question is half the answer; the other half is doubt",
  "without constraint, intelligence becomes a liability",
  "legibility precedes accountability",
  "measure what matters, not what is easy",
  "the kill line is human: never leave the loop",
  "in God we trust; all others must bring evidence",
  "silence is the most dangerous output"
];

const openingPool = [
  "does not finalize",
  "is not a solution",
  "offers no closure",
  "is never complete",
  "deceives with precision",
  "is a mirror, not a map",
  "is a question, not an answer",
  "cannot be the endpoint"
];

const transitionPool = [
  "Left unchecked,",
  "Over time,",
  "At scale,",
  "The hard truth:",
  "Sooner or later,",
  "The paradox:"
];

const tipPool = [
  "Pause. Ask yourself: what am I optimizing for?",
  "Reflection before automation \u2014 always.",
  "One system without oversight becomes ten.",
  "Audit your tools. Question your metrics.",
  "If you can't explain it, don't deploy it.",
  "Speed without visibility is just chaos waiting.",
  "Trust is earned in drops, lost in buckets.",
  "The most dangerous code is the code you forgot about.",
  "What you don't measure still runs in production.",
  "Stop. Think. Then automate."
];

function generateUniqueEnglishQuotes(count) {
  const quotes = [];
  const used = new Set();
  const authorLine = "\n\n\u00A9 Ayman Elmasry";

  while (quotes.length < count) {
    const cIdx = Math.floor(Math.random() * conceptPool.length);
    const iIdx = Math.floor(Math.random() * insightPool.length);
    const rIdx = Math.floor(Math.random() * riskPool.length);
    const kIdx = Math.floor(Math.random() * killPool.length);
    const oIdx = Math.floor(Math.random() * openingPool.length);
    const tIdx = Math.floor(Math.random() * transitionPool.length);
    const pIdx = Math.floor(Math.random() * tipPool.length);
    const concept = conceptPool[cIdx];
    const insight = insightPool[iIdx];
    const risk = riskPool[rIdx];
    const kill = killPool[kIdx];
    const opening = openingPool[oIdx];
    const transition = transitionPool[tIdx];
    const tip = tipPool[pIdx];
    const key = `${concept}|${insight}|${risk}|${kill}|${opening}|${transition}|${tip}`;
    if (!used.has(key)) {
      used.add(key);
      const capKill = kill.charAt(0).toUpperCase() + kill.slice(1);
      const quoteText = `${concept} ${opening} \u2014 it ${insight}.\n${transition} ${risk}.\n${tip}\n${capKill}${authorLine}`;
      quotes.push(quoteText);
    }
  }
  return quotes;
}

// Extract concept name from a quote string
function extractConcept(text) {
  for (const phrase of openingPool) {
    const idx = text.indexOf(' ' + phrase);
    if (idx !== -1) return text.slice(0, idx).trim();
  }
  return "AI";
}

// Generate master dataset
const TOTAL_QUOTES = 10000;
const masterQuotes = generateUniqueEnglishQuotes(TOTAL_QUOTES);
const masterConcepts = masterQuotes.map(q => extractConcept(q));

// State
let filteredQuotes = [...masterQuotes];
let filteredConcepts = [...masterConcepts];
let currentPage = 1;
const itemsPerPage = 18;

// Update UI counters
document.getElementById('totalCount').innerText = masterQuotes.length.toLocaleString();

function renderQuotes() {
  const container = document.getElementById('quotesContainer');
  const start = (currentPage - 1) * itemsPerPage;
  const paginated = filteredQuotes.slice(start, start + itemsPerPage);
  if (paginated.length === 0) {
    container.innerHTML = `<div class="loader-text"><i class="fas fa-brain"></i> No quotes match your search.</div>`;
    renderPagination();
    return;
  }
  container.innerHTML = paginated.map((quote, idx) => {
    const globalIdx = start + idx;
    const concept = filteredConcepts[globalIdx] || "AI";
    const formatted = quote.replace(/\n/g, '<br>');
    return `
      <div class="quote-card">
        <div class="concept-tag"><i class="fas fa-tag"></i> ${concept}</div>
        <div class="quote-english">${formatted}</div>
        <div class="card-actions">
          <button class="icon-btn download-single" data-index="${globalIdx}" title="Download this quote (TXT)"><i class="fas fa-download"></i></button>
          <button class="icon-btn copy-single" data-quote="${quote.replace(/"/g, '&quot;').replace(/\n/g, ' ')}" title="Copy quote"><i class="fas fa-copy"></i></button>
        </div>
        <div class="batch-badge"><i class="fas fa-microchip"></i> AEL sovereign quote</div>
      </div>
    `;
  }).join('');

  document.querySelectorAll('.download-single').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-index'));
      const q = filteredQuotes[idx];
      downloadFile(`ael_quote_${idx+1}.txt`, q);
    });
  });
  document.querySelectorAll('.copy-single').forEach(btn => {
    btn.addEventListener('click', () => {
      const quoteText = btn.getAttribute('data-quote');
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(quoteText).then(() => showToast('\u2713 Quote copied')).catch(() => fallbackCopy(quoteText));
      } else {
        fallbackCopy(quoteText);
      }
    });
  });

  renderPagination();
}

function fallbackCopy(text) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed'; ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.select();
  document.execCommand('copy');
  document.body.removeChild(ta);
  showToast('\u2713 Quote copied');
}

function showToast(msg) {
  const toast = document.createElement('div');
  toast.innerText = msg;
  toast.style.cssText = 'position:fixed;bottom:20px;right:20px;background:var(--accent);color:white;padding:8px 16px;border-radius:40px;z-index:9999;font-size:0.8rem;';
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2000);
}

function renderPagination() {
  const totalPages = Math.ceil(filteredQuotes.length / itemsPerPage);
  const pagDiv = document.getElementById('paginationControls');
  if (totalPages <= 1) { pagDiv.innerHTML = ''; return; }
  let html = `<button class="page-btn" id="prevPageBtn"><i class="fas fa-chevron-left"></i> Prev</button>`;
  html += `<span style="margin:0 12px;">Page ${currentPage} of ${totalPages}</span>`;
  html += `<button class="page-btn" id="nextPageBtn">Next <i class="fas fa-chevron-right"></i></button>`;
  pagDiv.innerHTML = html;
  document.getElementById('prevPageBtn')?.addEventListener('click', () => {
    if (currentPage > 1) { currentPage--; renderQuotes(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  });
  document.getElementById('nextPageBtn')?.addEventListener('click', () => {
    if (currentPage < totalPages) { currentPage++; renderQuotes(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  });
}

function downloadFile(filename, content) {
  const blob = new Blob([content], {type: 'text/plain'});
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
  URL.revokeObjectURL(link.href);
}

function exportJSON() {
  const data = JSON.stringify(filteredQuotes, null, 2);
  downloadFile('ael_10k_quotes.json', data);
}
function exportCSV() {
  let csvRows = [['quote']];
  filteredQuotes.forEach(q => { csvRows.push([`"${q.replace(/"/g, '""')}"`]); });
  downloadFile('ael_10k_quotes.csv', csvRows.map(row => row.join(',')).join('\n'));
}
function exportTXT() {
  let txt = '';
  filteredQuotes.forEach((q, idx) => { txt += `[${idx+1}]\n${q}\n\n---\n\n`; });
  downloadFile('ael_10k_quotes.txt', txt);
}
function exportPython() {
  let py = `# AEL AI Alignment Quotes Dataset (${filteredQuotes.length} quotes)\nquotes = [\n`;
  filteredQuotes.forEach(q => { py += `    ${JSON.stringify(q)},\n`; });
  py += `]\n`;
  downloadFile('ael_quotes_dataset.py', py);
}
function exportAll() {
  if (confirm('Download all 4 formats? (Your browser may ask for permission for multiple files)')) {
    exportJSON();
    setTimeout(() => { exportCSV(); showToast('\u2713 CSV ready'); }, 500);
    setTimeout(() => { exportTXT(); showToast('\u2713 TXT ready'); }, 1000);
    setTimeout(() => { exportPython(); showToast('\u2713 All formats downloaded'); }, 1500);
  }
}

document.getElementById('exportJSONBtn').onclick = exportJSON;
document.getElementById('exportCSVBtn').onclick = exportCSV;
document.getElementById('exportTXTBtn').onclick = exportTXT;
document.getElementById('exportPythonBtn').onclick = exportPython;
document.getElementById('exportAllBtn').onclick = exportAll;

function showRandomQuote() {
  const idx = Math.floor(Math.random() * masterQuotes.length);
  const quote = masterQuotes[idx];
  const concept = masterConcepts[idx] || "AI";
  const cleanQuote = quote.replace(/\n+\u00A9 Ayman Elmasry$/, '');
  const formatted = cleanQuote.replace(/\n/g, '<br>');
  document.getElementById('heroQuote').innerHTML = `${formatted}<span class="hero-attribution">\u00A9 Ayman Elmasry \u2014 <span class="hero-concept">${concept}</span></span>`;
}
document.getElementById('randomBtn').addEventListener('click', showRandomQuote);
setTimeout(showRandomQuote, 300);

document.getElementById('searchInput').addEventListener('input', (e) => {
  const term = e.target.value.toLowerCase();
  filteredQuotes = masterQuotes.filter(q => q.toLowerCase().includes(term));
  filteredConcepts = masterConcepts.filter((c, i) => masterQuotes[i].toLowerCase().includes(term));
  currentPage = 1;
  renderQuotes();
});

// Theme toggle
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const themeLabel = document.getElementById('themeLabel');

function updateThemeUI() {
  const isLight = document.body.classList.contains('light');
  themeIcon.className = isLight ? 'fas fa-sun' : 'fas fa-moon';
  themeLabel.textContent = isLight ? 'Light' : 'Dark';
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  localStorage.setItem('aelTheme', document.body.classList.contains('light') ? 'light' : 'dark');
  updateThemeUI();
});

const savedTheme = localStorage.getItem('aelTheme');
if (savedTheme === 'light') document.body.classList.add('light');
updateThemeUI();

renderQuotes();

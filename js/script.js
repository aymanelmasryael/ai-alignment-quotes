// ------------------------------------------------------------------
// AEL | AI Alignment Quotes — 10,000+ Bilingual Insights (EN/AR)
// Structure: Concept → Risk → Tip → Kill (4 lines)
// No repetition — generated via random combinatorial selection
// Author: © Ayman Elmasry — AEL Digital Studio
// License: AEL Prompt IP System v1.0 — Sovereign Identity Block
// ------------------------------------------------------------------

// ▼▼▼ ENGLISH POOLS ▼▼▼

const conceptPool = [
  "Alignment", "Generalization", "Latent space", "Inference", "Calibration", "Emergent behavior", "Reward hacking", "Overfitting",
  "Explainability", "Robustness", "Adversarial drift", "Entropy collapse", "Scale invariance", "Attention mechanism", "Quantization error",
  "Zero-shot reasoning", "Few-shot adaptation", "Catastrophic forgetting", "Spurious correlation", "Representation bias", "Loss landscape",
  "Gradient descent", "Activation steering", "Model stitching", "Token economy", "Context window", "Semantic resonance", "Feature collapse",
  "Normative blindness", "Proxy misuse", "Distribution shift", "Label noise", "Causal confusion", "Specification gaming", "Value locking"
];

const openingPool = [
  "does not finalize", "is not a solution", "offers no closure", "is never complete",
  "deceives with precision", "is a mirror, not a map", "is a question, not an answer", "cannot be the endpoint"
];

const insightPool = [
  "optimizes for density, not meaning", "mirrors statistical shadows without understanding",
  "amplifies hidden patterns from incomplete data", "ignores long-tail events until they dominate",
  "collapses under distribution shift silently", "priors become biases that harden over time",
  "trade-offs become invisible to the end user", "confidence masks underlying uncertainty",
  "rewards surface metrics, not true objectives", "memorizes without comprehension",
  "generalizes but fails on edge cases", "smooths away necessary complexity",
  "exaggerates majority patterns, silences minorities", "hallucinates when uncertainty peaks",
  "treats correlation as causation by default", "optimizes for average, not for outlier value",
  "sacrifices robustness for efficiency", "learns shortcuts instead of underlying rules"
];

const transitionPool = [
  "Left unchecked,", "Over time,", "At scale,", "The hard truth:", "Sooner or later,", "The paradox:"
];

const riskPool = [
  "silent failure modes multiply without warning", "erosion of human agency becomes irreversible",
  "opaque reasoning chains hide liability", "feedback loops distort reality beyond repair",
  "accountability dissolves across system layers", "value locking prevents ethical adaptation",
  "cascade brittleness leads to systemic collapse", "automation bias dulls critical oversight",
  "metric fixation corrupts underlying goals", "distributional blindness creates hidden victims",
  "epistemic trespassing generates false authority", "latent backdoors emerge post-deployment",
  "runaway optimization ignores side effects", "interpretability gap widens with each update",
  "confidence calibration drifts without notice"
];

const tipPool = [
  "Pause. Ask yourself: what am I optimizing for?", "Reflection before automation - always.",
  "One system without oversight becomes ten.", "Audit your tools. Question your metrics.",
  "If you can't explain it, don't deploy it.", "Speed without visibility is just chaos waiting.",
  "Trust is earned in drops, lost in buckets.", "The most dangerous code is the code you forgot about.",
  "What you don't measure still runs in production.", "Stop. Think. Then automate."
];

const killPool = [
  "interpretability is not optional - it is survival", "control decays with every layer of abstraction",
  "vigilance is the new literacy in the AI age", "trust must be earned through transparency, not speed",
  "you cannot delegate moral responsibility to a matrix", "the question is half the answer; the other half is doubt",
  "without constraint, intelligence becomes a liability", "legibility precedes accountability",
  "measure what matters, not what is easy", "the kill line is human: never leave the loop",
  "in God we trust; all others must bring evidence", "silence is the most dangerous output"
];

// ▼▼▼ ARABIC POOLS ▼▼▼

const conceptPoolAr = [
  "\u0627\u0644\u0645\u0648\u0627\u062C\u0647\u0629", "\u0627\u0644\u062A\u0639\u0645\u064A\u0645", "\u0627\u0644\u0641\u0636\u0627\u0621 \u0627\u0644\u0643\u0627\u0645\u0646", "\u0627\u0644\u0627\u0633\u062A\u062F\u0644\u0627\u0644",
  "\u0627\u0644\u0645\u0639\u0627\u064A\u0631\u0629", "\u0627\u0644\u0633\u0644\u0648\u0643 \u0627\u0644\u0646\u0627\u0634\u0626", "\u0627\u062E\u062A\u0631\u0627\u0642 \u0627\u0644\u0645\u0643\u0627\u0641\u0623\u0629", "\u0627\u0644\u0625\u0641\u0631\u0627\u0637 \u0641\u064A \u0627\u0644\u0645\u0637\u0627\u0628\u0642\u0629",
  "\u0642\u0627\u0628\u0644\u064A\u0629 \u0627\u0644\u0634\u0631\u062D", "\u0627\u0644\u0645\u062A\u0627\u0646\u0629", "\u0627\u0644\u0627\u0646\u062C\u0631\u0627\u0641 \u0627\u0644\u0639\u062F\u0627\u0626\u064A", "\u0627\u0646\u0647\u064A\u0627\u0631 \u0627\u0644\u0627\u0646\u062A\u0631\u0648\u0628\u064A\u0627",
  "\u062B\u0628\u0627\u062A \u0627\u0644\u0645\u0642\u064A\u0627\u0633", "\u0622\u0644\u064A\u0629 \u0627\u0644\u0627\u0646\u062A\u0628\u0627\u0647", "\u062E\u0637\u0623 \u0627\u0644\u062A\u0643\u064A\u064A\u0641",
  "\u0627\u0633\u062A\u062F\u0644\u0627\u0644 \u0635\u0641\u0631\u064A", "\u062A\u0643\u064A\u0641 \u0642\u0644\u064A\u0644 \u0627\u0644\u0639\u064A\u0646\u0627\u062A", "\u0627\u0644\u0646\u0633\u064A\u0627\u0646 \u0627\u0644\u0643\u0627\u0631\u062B\u064A", "\u0627\u0631\u062A\u0628\u0627\u0637 \u0632\u0627\u0626\u0641",
  "\u0627\u0646\u062D\u064A\u0627\u0632 \u0627\u0644\u062A\u0645\u062B\u064A\u0644", "\u062A\u0636\u0627\u0631\u064A\u0633 \u0627\u0644\u062E\u0633\u0627\u0631\u0629",
  "\u0627\u0646\u062D\u062F\u0627\u0631 \u0627\u0644\u062A\u062F\u0631\u064A\u062C", "\u062A\u0648\u062C\u064A\u0647 \u0627\u0644\u062A\u0646\u0634\u064A\u0637", "\u062A\u0631\u0642\u064A\u0639 \u0627\u0644\u0646\u0645\u0627\u0630\u062C", "\u0627\u0642\u062A\u0635\u0627\u062F \u0627\u0644\u0631\u0645\u0632\u0627\u062A",
  "\u0646\u0627\u0641\u0630\u0629 \u0627\u0644\u0633\u064A\u0627\u0642", "\u0627\u0644\u0631\u0646\u064A\u0646 \u0627\u0644\u062F\u0644\u0627\u0644\u064A", "\u0627\u0646\u0647\u064A\u0627\u0631 \u0627\u0644\u0645\u064A\u0632\u0627\u062A",
  "\u0627\u0644\u0639\u0645\u0649 \u0627\u0644\u0645\u0639\u064A\u0627\u0631\u064A", "\u0625\u0633\u0627\u0621\u0629 \u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u0648\u0643\u064A\u0644", "\u062A\u063A\u064A\u0631 \u0627\u0644\u062A\u0648\u0632\u064A\u0639", "\u0636\u0648\u0636\u0627\u0621 \u0627\u0644\u062A\u0635\u0646\u064A\u0641",
  "\u0627\u0631\u062A\u0628\u0627\u0643 \u0633\u0628\u0628\u064A", "\u0627\u0644\u062A\u0644\u0639\u0628 \u0628\u0627\u0644\u0645\u0648\u0627\u0635\u0641\u0627\u062A", "\u062A\u062C\u0645\u064A\u062F \u0627\u0644\u0642\u064A\u0645\u0629"
];

const openingPoolAr = [
  "\u0644\u0627 \u064A\u064E\u062D\u0652\u0633\u064F\u0645\u064F", "\u0644\u064A\u0633 \u062D\u0644\u0627\u064B", "\u0644\u0627 \u064A\u064F\u0642\u062F\u0651\u0650\u0645\u064F \u0625\u063A\u0644\u0627\u0642\u0627\u064B",
  "\u0644\u0627 \u064A\u0643\u062A\u0645\u0644 \u0623\u0628\u062F\u0627\u064B", "\u064A\u062E\u062F\u0639 \u0628\u0627\u0644\u062F\u0642\u0629",
  "\u0647\u0648 \u0645\u0631\u0622\u0629 \u0644\u0627 \u062E\u0627\u0631\u0637\u0629", "\u0647\u0648 \u0633\u0624\u0627\u0644 \u0644\u0627 \u0625\u062C\u0627\u0628\u0629",
  "\u0644\u0627 \u064A\u0645\u0643\u0646 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0627\u0644\u0645\u062D\u0637\u0629 \u0627\u0644\u0646\u0647\u0627\u0626\u064A\u0629"
];

const insightPoolAr = [
  "\u062A\u064F\u062D\u0633\u0651\u0650\u0646\u064F \u0644\u0644\u0643\u062B\u0627\u0641\u0629\u060C \u0644\u0627 \u0644\u0644\u0645\u0639\u0646\u0649",
  "\u062A\u064E\u0639\u0652\u0643\u0650\u0633\u064F \u0638\u0644\u0627\u0644\u0627\u064B \u0625\u062D\u0635\u0627\u0626\u064A\u0629\u064B \u0628\u062F\u0648\u0646 \u0641\u0647\u0645",
  "\u062A\u064F\u0643\u0628\u0651\u0650\u0631\u064F \u0623\u0646\u0645\u0627\u0637\u0627\u064B \u062E\u0641\u064A\u0629\u064B \u0645\u0646 \u0628\u064A\u0627\u0646\u0627\u062A \u063A\u064A\u0631 \u0643\u0627\u0645\u0644\u0629",
  "\u062A\u062A\u062C\u0627\u0647\u0644 \u0627\u0644\u0623\u062D\u062F\u0627\u062B \u0627\u0644\u0646\u0627\u062F\u0631\u0629 \u062D\u062A\u0651\u0649 \u062A\u0633\u064A\u0637\u0631",
  "\u062A\u0646\u0647\u0627\u0631 \u0635\u0627\u0645\u062A\u0629\u064B \u062A\u062D\u062A \u062A\u063A\u064A\u0631 \u0627\u0644\u062A\u0648\u0632\u064A\u0639",
  "\u062A\u062A\u062D\u0648\u0651\u0644 \u0627\u0644\u0633\u0627\u0628\u0642\u0627\u062A \u0625\u0644\u0649 \u062A\u062D\u064A\u0651\u0632\u0627\u062A \u062A\u062A\u0635\u0644\u0651\u0628 \u0645\u0639 \u0627\u0644\u0648\u0642\u062A",
  "\u062A\u062E\u0641\u0649 \u0627\u0644\u0645\u0642\u0627\u064A\u0636\u0627\u062A \u0639\u0646 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0627\u0644\u0646\u0647\u0627\u0626\u064A",
  "\u064A\u064F\u062E\u0641\u064A \u0627\u0644\u062B\u0642\u0629 \u0634\u0643\u0648\u0643\u0627\u064B \u0643\u0627\u0645\u0646\u0629",
  "\u062A\u064F\u0643\u0627\u0641\u0626\u064F \u0627\u0644\u0645\u0642\u0627\u064A\u064A\u0633 \u0627\u0644\u0633\u0637\u062D\u064A\u0629\u060C \u0644\u0627 \u0627\u0644\u0623\u0647\u062F\u0627\u0641 \u0627\u0644\u062D\u0642\u064A\u0642\u064A\u0629",
  "\u062A\u062D\u0641\u0638 \u062F\u0648\u0646 \u0627\u0633\u062A\u064A\u0639\u0627\u0628",
  "\u062A\u0639\u0645\u0651\u0645 \u0648\u0644\u0643\u0646\u0647\u0627 \u062A\u0641\u0634\u0644 \u0641\u064A \u0627\u0644\u062D\u0627\u0644\u0627\u062A \u0627\u0644\u0637\u0631\u0641\u064A\u0629",
  "\u062A\u0645\u062D\u0648 \u0627\u0644\u062A\u0639\u0642\u064A\u062F \u0627\u0644\u0636\u0631\u0648\u0631\u064A",
  "\u062A\u0628\u0627\u0644\u063A \u0623\u0646\u0645\u0627\u0637 \u0627\u0644\u0623\u063A\u0644\u0628\u064A\u0629\u060C \u0648\u062A\u062E\u0641\u064A \u0627\u0644\u0623\u0642\u0644\u064A\u0627\u062A",
  "\u062A\u064F\u0647\u064E\u0644\u0652\u0648\u0650\u0633\u064F \u0639\u0646\u062F \u0630\u0631\u0648\u0629 \u0627\u0644\u0634\u0643",
  "\u062A\u0639\u0627\u0645\u0644 \u0627\u0644\u0627\u0631\u062A\u0628\u0627\u0637 \u0643\u0633\u0628\u0628\u064A\u0629 \u0627\u0641\u062A\u0631\u0627\u0636\u064A\u0627\u064B",
  "\u062A\u062D\u0633\u0651\u0650\u0646\u064F \u0644\u0644\u0645\u062A\u0648\u0633\u0637\u060C \u0644\u0627 \u0644\u0644\u0642\u064A\u0645 \u0627\u0644\u0645\u062A\u0637\u0631\u0641\u0629",
  "\u062A\u0636\u062D\u0651\u064A \u0628\u0627\u0644\u0645\u062A\u0627\u0646\u0629 \u0645\u0646 \u0623\u062C\u0644 \u0627\u0644\u0643\u0641\u0627\u0621\u0629",
  "\u062A\u062A\u0639\u0644\u0651\u0645 \u0627\u062E\u062A\u0635\u0627\u0631\u0627\u062A\u064B \u0628\u062F\u0644\u0627\u064B \u0645\u0646 \u0627\u0644\u0642\u0648\u0627\u0639\u062F \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629"
];

const transitionPoolAr = [
  "\u0648\u0644\u0648 \u062A\u0631\u0643 \u0628\u062F\u0648\u0646 \u0631\u0642\u0627\u0628\u0629\u060C", "\u0645\u0639 \u0627\u0644\u0648\u0642\u062A\u060C",
  "\u0639\u0644\u0649 \u0646\u0637\u0627\u0642 \u0648\u0627\u0633\u0639\u060C", "\u0627\u0644\u062D\u0642\u064A\u0642\u0629 \u0627\u0644\u0645\u0631\u0629:",
  "\u0639\u0627\u062C\u0644\u0627\u064B \u0623\u0648 \u0622\u062C\u0644\u0627\u064B\u060C", "\u0627\u0644\u0645\u0641\u0627\u0631\u0642\u0629:"
];

const riskPoolAr = [
  "\u0623\u0646\u0645\u0627\u0637 \u0627\u0644\u0641\u0634\u0644 \u0627\u0644\u0635\u0627\u0645\u062A\u0629 \u062A\u062A\u0636\u0627\u0639\u0641 \u0628\u062F\u0648\u0646 \u0625\u0646\u0630\u0627\u0631",
  "\u062A\u0622\u0643\u0644 \u0627\u0644\u0641\u0639\u0627\u0644\u064A\u0629 \u0627\u0644\u0628\u0634\u0631\u064A\u0629 \u062A\u0635\u0628\u062D \u0644\u0627 \u0631\u062C\u0648\u0639 \u0641\u064A\u0647\u0627",
  "\u0633\u0644\u0627\u0633\u0644 \u0627\u0644\u0627\u0633\u062A\u062F\u0644\u0627\u0644 \u0627\u0644\u0645\u0639\u062A\u0645\u0629 \u062A\u062E\u0641\u064A \u0627\u0644\u0645\u0633\u0624\u0648\u0644\u064A\u0629",
  "\u062D\u0644\u0642\u0627\u062A \u0631\u062F\u0648\u062F \u0641\u0639\u0644 \u062A\u0634\u0648\u0647 \u0627\u0644\u0648\u0627\u0642\u0639 \u0648\u0631\u0627\u0621 \u0627\u0644\u0625\u0635\u0644\u0627\u062D",
  "\u0627\u0644\u0645\u0633\u0627\u0621\u0644\u0629 \u062A\u0630\u0648\u0628 \u0639\u0628\u0631 \u0637\u0628\u0642\u0627\u062A \u0627\u0644\u0646\u0638\u0627\u0645",
  "\u062A\u062C\u0645\u064A\u062F \u0627\u0644\u0642\u064A\u0645 \u064A\u0645\u0646\u0639 \u0627\u0644\u062A\u0643\u064A\u0641 \u0627\u0644\u0623\u062E\u0644\u0627\u0642\u064A",
  "\u0647\u0634\u0627\u0634\u0629 \u0627\u0644\u062A\u0633\u0644\u0633\u0644 \u062A\u0624\u062F\u064A \u0625\u0644\u0649 \u0627\u0646\u0647\u064A\u0627\u0631 \u0645\u0646\u0638\u0627\u0645\u064A",
  "\u0627\u0646\u062D\u064A\u0627\u0632 \u0627\u0644\u0623\u0648\u062A\u0645\u062A\u0629 \u064A\u062E\u0641\u0641 \u0627\u0644\u0631\u0642\u0627\u0628\u0629 \u0627\u0644\u062D\u0631\u062C\u0629",
  "\u0627\u0644\u062A\u062B\u0628\u064A\u062A \u0639\u0644\u0649 \u0627\u0644\u0645\u0642\u0627\u064A\u064A\u0633 \u064A\u0641\u0633\u062F \u0627\u0644\u0623\u0647\u062F\u0627\u0641 \u0627\u0644\u062D\u0642\u064A\u0642\u064A\u0629",
  "\u0627\u0644\u0639\u0645\u0649 \u0627\u0644\u062A\u0648\u0632\u064A\u0639\u064A \u064A\u062E\u0644\u0642 \u0636\u062D\u0627\u064A\u0627 \u062E\u0641\u064A\u0629",
  "\u062A\u062C\u0627\u0648\u0632 \u0627\u0644\u0625\u0628\u0633\u062A\u064A\u0645\u0648\u0644\u0648\u062C\u064A\u0627 \u064A\u0648\u0644\u0651\u062F \u0633\u0644\u0637\u0629 \u0632\u0627\u0626\u0641\u0629",
  "\u0623\u0628\u0648\u0627\u0628 \u062E\u0644\u0641\u064A\u0629 \u062A\u0638\u0647\u0631 \u0628\u0639\u062F \u0627\u0644\u0646\u0634\u0631",
  "\u0627\u0644\u062A\u062D\u0633\u064A\u0646 \u0627\u0644\u062C\u0646\u0648\u0646\u064A \u064A\u062A\u062C\u0627\u0647\u0644 \u0627\u0644\u0622\u062B\u0627\u0631 \u0627\u0644\u062C\u0627\u0646\u0628\u064A\u0629",
  "\u0641\u062C\u0648\u0629 \u0627\u0644\u0642\u0627\u0628\u0644\u064A\u0629 \u0644\u0644\u062A\u0641\u0633\u064A\u0631 \u062A\u062A\u0633\u0639 \u0645\u0639 \u0643\u0644 \u062A\u062D\u062F\u064A\u062B",
  "\u0645\u0639\u0627\u064A\u0631\u0629 \u0627\u0644\u062B\u0642\u0629 \u062A\u0646\u062D\u0631\u0641 \u0628\u062F\u0648\u0646 \u0625\u0646\u0630\u0627\u0631"
];

const tipPoolAr = [
  "\u062A\u0648\u0642\u0651\u0641. \u0627\u0633\u0623\u0644 \u0646\u0641\u0633\u0643: \u0644\u0645\u0627\u0630\u0627 \u062A\u064F\u062D\u0633\u0651\u0650\u0646\u061F",
  "\u062A\u0623\u0645\u0651\u0644 \u0642\u0628\u0644 \u0627\u0644\u0623\u0648\u062A\u0645\u062A\u0629 \u2014 \u062F\u0627\u0626\u0645\u0627\u064B.",
  "\u0646\u0638\u0627\u0645 \u0648\u0627\u062D\u062F \u0628\u062F\u0648\u0646 \u0631\u0642\u0627\u0628\u0629 \u064A\u0635\u0628\u062D \u0639\u0634\u0631\u0629.",
  "\u062F\u0642\u0651\u0650\u0642 \u0623\u062F\u0648\u0627\u062A\u0643. \u062A\u062D\u062F\u0651\u0649 \u0645\u0642\u0627\u064A\u064A\u0633\u0643.",
  "\u0625\u0646 \u0644\u0645 \u062A\u0633\u062A\u0637\u0639 \u0634\u0631\u062D\u0647\u060C \u0641\u0644\u0627 \u062A\u0646\u0634\u0631\u0647.",
  "\u0627\u0644\u0633\u0631\u0639\u0629 \u0628\u062F\u0648\u0646 \u0648\u0636\u0648\u062D \u0647\u064A \u0641\u0648\u0636\u0649 \u062A\u0646\u062A\u0638\u0631.",
  "\u0627\u0644\u062B\u0642\u0629 \u062A\u0643\u062A\u0633\u0628 \u0628\u0627\u0644\u0642\u0637\u0631\u0627\u062A \u0648\u062A\u0641\u0642\u062F \u0628\u0627\u0644\u062C\u0631\u0627\u062A.",
  "\u0623\u062E\u0637\u0631 \u0643\u0648\u062F \u0647\u0648 \u0630\u0644\u0643 \u0627\u0644\u0630\u064A \u0646\u0633\u064A\u062A\u0647.",
  "\u0645\u0627 \u0644\u0627 \u062A\u0642\u064A\u0633\u0647 \u0645\u0627 \u0632\u0627\u0644 \u064A\u0639\u0645\u0644 \u0641\u064A \u0627\u0644\u0625\u0646\u062A\u0627\u062C.",
  "\u062A\u0648\u0642\u0651\u0641. \u062A\u0641\u0643\u0651\u0631. \u062B\u0645 \u0623\u0648\u062A\u0645\u062A."
];

const killPoolAr = [
  "\u0642\u0627\u0628\u0644\u064A\u0629 \u0627\u0644\u062A\u0641\u0633\u064A\u0631 \u0644\u064A\u0633\u062A \u062E\u064A\u0627\u0631\u064B\u0627 \u2014 \u0628\u0644 \u0646\u062C\u0627\u0629",
  "\u0627\u0644\u0633\u064A\u0637\u0631\u0629 \u062A\u062A\u0644\u0627\u0634\u0649 \u0645\u0639 \u0643\u0644 \u0637\u0628\u0642\u0629 \u062A\u062C\u0631\u064A\u062F",
  "\u0627\u0644\u064A\u0642\u0638\u0629 \u0647\u064A \u0645\u062D\u0648 \u0627\u0644\u0623\u0645\u064A\u0629 \u0627\u0644\u062C\u062F\u064A\u062F \u0641\u064A \u0639\u0635\u0631 \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A",
  "\u0627\u0644\u062B\u0642\u0629 \u062A\u0643\u062A\u0633\u0628 \u0628\u0627\u0644\u0634\u0641\u0627\u0641\u064A\u0629\u060C \u0644\u0627 \u0628\u0627\u0644\u0633\u0631\u0639\u0629",
  "\u0644\u0627 \u064A\u0645\u0643\u0646\u0643 \u062A\u0641\u0648\u064A\u0636 \u0627\u0644\u0645\u0633\u0624\u0648\u0644\u064A\u0629 \u0627\u0644\u0623\u062E\u0644\u0627\u0642\u064A\u0629 \u0644\u0645\u0635\u0641\u0648\u0641\u0629",
  "\u0627\u0644\u0633\u0624\u0627\u0644 \u0647\u0648 \u0646\u0635\u0641 \u0627\u0644\u0625\u062C\u0627\u0628\u0629\u060C \u0648\u0627\u0644\u0634\u0643 \u0647\u0648 \u0627\u0644\u0646\u0635\u0641 \u0627\u0644\u0622\u062E\u0631",
  "\u0628\u062F\u0648\u0646 \u0642\u064A\u0648\u062F\u060C \u064A\u0635\u0628\u062D \u0627\u0644\u0630\u0643\u0627\u0621 \u0645\u0633\u0624\u0648\u0644\u064A\u0629",
  "\u0627\u0644\u0648\u0636\u0648\u062D \u064A\u0633\u0628\u0642 \u0627\u0644\u0645\u0633\u0627\u0621\u0644\u0629",
  "\u0642\u0633 \u0645\u0627 \u064A\u0647\u0645\u060C \u0644\u0627 \u0645\u0627 \u0647\u0648 \u0633\u0647\u0644",
  "\u062E\u0637 \u0627\u0644\u0625\u0646\u0647\u0627\u0621 \u0647\u0648 \u0628\u0634\u0631\u064A: \u0644\u0627 \u062A\u062E\u0631\u062C \u0639\u0646 \u0627\u0644\u062F\u0627\u0626\u0631\u0629 \u0623\u0628\u062F\u0627\u064B",
  "\u0628\u0627\u0644\u0644\u0647 \u0646\u062A\u0648\u0643\u0644\u061B \u0648\u0627\u0644\u062C\u0645\u064A\u0639 \u0639\u0644\u064A\u0647\u0645 \u062A\u0642\u062F\u064A\u0645 \u0627\u0644\u0623\u062F\u0644\u0629",
  "\u0627\u0644\u0635\u0645\u062A \u0647\u0648 \u0623\u062E\u0637\u0631 \u0645\u062E\u0631\u062C"
];

// ▼▼▼ GENERATION ▼▼▼

function generateUniqueQuotes(count) {
  const quotes = [];
  const used = new Set();
  const authorLineEn = "\n\n\u00A9 Ayman Elmasry";
  const authorLineAr = "\n\n\u00A9 \u0623\u064A\u0645\u0646 \u0627\u0644\u0645\u0635\u0631\u064A";

  while (quotes.length < count) {
    const cIdx = Math.floor(Math.random() * conceptPool.length);
    const oIdx = Math.floor(Math.random() * openingPool.length);
    const iIdx = Math.floor(Math.random() * insightPool.length);
    const tIdx = Math.floor(Math.random() * transitionPool.length);
    const rIdx = Math.floor(Math.random() * riskPool.length);
    const pIdx = Math.floor(Math.random() * tipPool.length);
    const kIdx = Math.floor(Math.random() * killPool.length);

    const concept = conceptPool[cIdx];
    const opening = openingPool[oIdx];
    const insight = insightPool[iIdx];
    const transition = transitionPool[tIdx];
    const risk = riskPool[rIdx];
    const tip = tipPool[pIdx];
    const kill = killPool[kIdx];
    const conceptAr = conceptPoolAr[cIdx];
    const openingAr = openingPoolAr[oIdx];
    const insightAr = insightPoolAr[iIdx];
    const transitionAr = transitionPoolAr[tIdx];
    const riskAr = riskPoolAr[rIdx];
    const tipAr = tipPoolAr[pIdx];
    const killAr = killPoolAr[kIdx];

    const key = `${cIdx}|${oIdx}|${iIdx}|${tIdx}|${rIdx}|${pIdx}|${kIdx}`;
    if (!used.has(key)) {
      used.add(key);
      const capKill = kill.charAt(0).toUpperCase() + kill.slice(1);
      const en = `${concept} ${opening} \u2014 it ${insight}.\n${transition} ${risk}.\n${tip}\n${capKill}${authorLineEn}`;
      const ar = `${conceptAr} ${openingAr} \u2014 \u0625\u0646\u0647\u0627 ${insightAr}.\n${transitionAr} ${riskAr}.\n${tipAr}\n${killAr}${authorLineAr}`;
      quotes.push({ en, ar, concept, conceptAr, idx: cIdx });
    }
  }
  return quotes;
}

// ▼▼▼ STATE ▼▼▼

const TOTAL_QUOTES = 10000;
const masterQuotes = generateUniqueQuotes(TOTAL_QUOTES);

let filteredQuotes = [...masterQuotes];
let currentPage = 1;
const itemsPerPage = 18;

// Display mode: "bilingual" | "english" | "arabic"
let displayMode = "bilingual";

document.getElementById('totalCount').innerText = masterQuotes.length.toLocaleString();

// ▼▼▼ RENDER ▼▼▼

function renderQuotes() {
  const container = document.getElementById('quotesContainer');
  const start = (currentPage - 1) * itemsPerPage;
  const paginated = filteredQuotes.slice(start, start + itemsPerPage);
  if (paginated.length === 0) {
    container.innerHTML = `<div class="loader-text"><i class="fas fa-brain"></i> No quotes match your search.</div>`;
    renderPagination();
    return;
  }
  container.innerHTML = paginated.map((q, idx) => {
    const globalIdx = start + idx;
    const enFormatted = q.en.replace(/\n/g, '<br>');
    const arFormatted = q.ar.replace(/\n/g, '<br>');
    const displayEn = displayMode === "arabic" ? ' style="display:none"' : '';
    const displayAr = displayMode === "english" ? ' style="display:none"' : '';

    let quoteHtml = '';
    if (displayMode === "english") {
      quoteHtml = `<div class="quote-text"${displayEn}><div class="quote-english">${enFormatted}</div></div>`;
    } else if (displayMode === "arabic") {
      quoteHtml = `<div class="quote-text"${displayAr}><div class="quote-arabic" dir="rtl" lang="ar">${arFormatted}</div></div>`;
    } else {
      quoteHtml = `<div class="quote-text bilingual-block">
        <div class="quote-english">${enFormatted}</div>
        <div class="quote-separator"><span></span></div>
        <div class="quote-arabic" dir="rtl" lang="ar">${arFormatted}</div>
      </div>`;
    }

    return `
      <div class="quote-card">
        <div class="concept-tag"><i class="fas fa-tag"></i> ${q.concept}</div>
        ${quoteHtml}
        <div class="card-actions">
          <button class="icon-btn download-single" data-index="${globalIdx}" title="Download this quote (TXT)"><i class="fas fa-download"></i></button>
          <button class="icon-btn copy-single" data-en="${q.en.replace(/"/g, '&quot;').replace(/\n/g, '\\n')}" data-ar="${q.ar.replace(/"/g, '&quot;').replace(/\n/g, '\\n')}" title="Copy quote"><i class="fas fa-copy"></i></button>
        </div>
        <div class="batch-badge"><i class="fas fa-microchip"></i> AEL sovereign quote</div>
      </div>
    `;
  }).join('');

  document.querySelectorAll('.download-single').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-index'));
      const q = filteredQuotes[idx];
      const text = displayMode === "arabic" ? q.ar : q.en;
      const filename = displayMode === "arabic"
        ? `ael_quote_ar_${idx+1}.txt`
        : `ael_quote_en_${idx+1}.txt`;
      downloadFile(filename, text);
    });
  });
  document.querySelectorAll('.copy-single').forEach(btn => {
    btn.addEventListener('click', () => {
      const en = btn.getAttribute('data-en').replace(/\\n/g, '\n');
      const ar = btn.getAttribute('data-ar').replace(/\\n/g, '\n');
      const text = displayMode === "arabic" ? ar
        : displayMode === "english" ? en
        : en + '\n\n' + ar;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => showToast('\u2713 Copied')).catch(() => fallbackCopy(text));
      } else {
        fallbackCopy(text);
      }
    });
  });

  renderPagination();
}

function fallbackCopy(text) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.cssText = 'position:fixed;opacity:0';
  document.body.appendChild(ta);
  ta.select();
  document.execCommand('copy');
  document.body.removeChild(ta);
  showToast('\u2713 Copied');
}

function showToast(msg) {
  const t = document.createElement('div');
  t.innerText = msg;
  t.style.cssText = 'position:fixed;bottom:20px;right:20px;background:var(--accent);color:white;padding:8px 16px;border-radius:40px;z-index:9999;font-size:0.8rem;';
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 2000);
}

function renderPagination() {
  const totalPages = Math.ceil(filteredQuotes.length / itemsPerPage);
  const p = document.getElementById('paginationControls');
  if (totalPages <= 1) { p.innerHTML = ''; return; }
  p.innerHTML = `
    <button class="page-btn" id="prevPageBtn"><i class="fas fa-chevron-left"></i> ${displayMode === "arabic" ? "\u0627\u0644\u0633\u0627\u0628\u0642" : "Prev"}</button>
    <span class="page-info">${displayMode === "arabic" ? "\u0627\u0644\u0635\u0641\u062D\u0629" : "Page"} ${currentPage} ${displayMode === "arabic" ? "\u0645\u0646" : "of"} ${totalPages}</span>
    <button class="page-btn" id="nextPageBtn">${displayMode === "arabic" ? "\u0627\u0644\u062A\u0627\u0644\u064A" : "Next"} <i class="fas fa-chevron-right"></i></button>`;
  document.getElementById('prevPageBtn')?.addEventListener('click', () => {
    if (currentPage > 1) { currentPage--; renderQuotes(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  });
  document.getElementById('nextPageBtn')?.addEventListener('click', () => {
    if (currentPage < totalPages) { currentPage++; renderQuotes(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  });
}

// ▼▼▼ EXPORTS ▼▼▼

function downloadFile(filename, content) {
  const blob = new Blob([content], {type: 'text/plain'});
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
  URL.revokeObjectURL(link.href);
}

function getDisplayQuote(q) {
  if (displayMode === "arabic") return q.ar;
  if (displayMode === "english") return q.en;
  return q.en + '\n\n---\n\n' + q.ar;
}

function exportJSON() {
  const data = displayMode === "bilingual"
    ? filteredQuotes.map(q => ({ en: q.en, ar: q.ar }))
    : filteredQuotes.map(q => ({ text: getDisplayQuote(q) }));
  downloadFile('ael_10k_quotes.json', JSON.stringify(data, null, 2));
}
function exportCSV() {
  let csv = displayMode === "bilingual" ? 'english,arabic\n' : 'quote\n';
  filteredQuotes.forEach(q => {
    if (displayMode === "bilingual") {
      csv += `"${q.en.replace(/"/g, '""')}","${q.ar.replace(/"/g, '""')}"\n`;
    } else {
      const text = getDisplayQuote(q);
      csv += `"${text.replace(/"/g, '""')}"\n`;
    }
  });
  downloadFile('ael_10k_quotes.csv', csv);
}
function exportTXT() {
  let txt = '';
  filteredQuotes.forEach((q, idx) => {
    txt += `[${idx+1}]\n${getDisplayQuote(q)}\n\n---\n\n`;
  });
  downloadFile('ael_10k_quotes.txt', txt);
}
function exportPython() {
  const data = filteredQuotes.map(q => JSON.stringify(getDisplayQuote(q)));
  downloadFile('ael_quotes_dataset.py',
    `# AEL AI Alignment Quotes (${filteredQuotes.length})\nquotes = [\n${data.join(',\n')}\n]\n`);
}
function exportAll() {
  if (confirm('Download all 4 formats?')) {
    exportJSON();
    setTimeout(exportCSV, 500);
    setTimeout(exportTXT, 1000);
    setTimeout(exportPython, 1500);
  }
}

document.getElementById('exportJSONBtn').onclick = exportJSON;
document.getElementById('exportCSVBtn').onclick = exportCSV;
document.getElementById('exportTXTBtn').onclick = exportTXT;
document.getElementById('exportPythonBtn').onclick = exportPython;
document.getElementById('exportAllBtn').onclick = exportAll;

// ▼▼▼ HERO ▼▼▼

function showRandomQuote() {
  const idx = Math.floor(Math.random() * masterQuotes.length);
  const q = masterQuotes[idx];
  const cleanEn = q.en.replace(/\n+\u00A9 Ayman Elmasry$/, '');
  const cleanAr = q.ar.replace(/\n+\u00A9 \u0623\u064A\u0645\u0646 \u0627\u0644\u0645\u0635\u0631\u064A$/, '');
  const enFormatted = cleanEn.replace(/\n/g, '<br>');
  const arFormatted = cleanAr.replace(/\n/g, '<br>');

  let html;
  if (displayMode === "arabic") {
    html = `<div class="quote-arabic" dir="rtl" lang="ar">${arFormatted}</div>
      <span class="hero-attribution">\u00A9 \u0623\u064A\u0645\u0646 \u0627\u0644\u0645\u0635\u0631\u064A \u2014 <span class="hero-concept">${q.conceptAr}</span></span>`;
  } else if (displayMode === "english") {
    html = `<div class="quote-english">${enFormatted}</div>
      <span class="hero-attribution">\u00A9 Ayman Elmasry \u2014 <span class="hero-concept">${q.concept}</span></span>`;
  } else {
    html = `<div class="bilingual-block">
      <div class="quote-english">${enFormatted}</div>
      <div class="quote-separator"><span></span></div>
      <div class="quote-arabic" dir="rtl" lang="ar">${arFormatted}</div>
    </div>
    <span class="hero-attribution">\u00A9 Ayman Elmasry \u2014 <span class="hero-concept">${q.concept}</span></span>`;
  }
  document.getElementById('heroQuote').innerHTML = html;
}
document.getElementById('randomBtn').addEventListener('click', showRandomQuote);
setTimeout(showRandomQuote, 300);

// ▼▼▼ SEARCH ▼▼▼

document.getElementById('searchInput').addEventListener('input', (e) => {
  const term = e.target.value.toLowerCase();
  filteredQuotes = masterQuotes.filter(q =>
    q.en.toLowerCase().includes(term) || q.ar.toLowerCase().includes(term)
  );
  currentPage = 1;
  renderQuotes();
});

// ▼▼▼ DISPLAY MODE TOGGLE ▼▼▼

function updateDisplayMode(mode) {
  displayMode = mode;
  document.querySelectorAll('.mode-btn').forEach(b => b.classList.toggle('active', b.dataset.mode === mode));
  currentPage = 1;
  renderQuotes();
  showRandomQuote();
  renderPagination();
}

document.querySelectorAll('.mode-btn').forEach(btn => {
  btn.addEventListener('click', () => updateDisplayMode(btn.dataset.mode));
});

// ▼▼▼ THEME ▼▼▼

const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const themeLabel = document.getElementById('themeLabel');

function updateThemeUI() {
  const isLight = document.body.classList.contains('light');
  themeIcon.className = isLight ? 'fas fa-sun' : 'fas fa-moon';
  themeLabel.textContent = isLight ? 'Light' : '\u0625\u0636\u0627\u0621\u0629';
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

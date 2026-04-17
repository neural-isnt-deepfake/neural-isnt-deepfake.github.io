function detectionModels() {
  return {
    models: [
      {
        id: 1,
        name: "XLSR-AASIST",
        description: "XLS-R embeddings for cross-lingual speech representation, post-processed by AASIST spatio-temporal attention",
        paperUrl: "https://doi.org/10.21437/Odyssey.2022-16",
        preprintUrl: "https://arxiv.org/abs/2202.12233",
        githubUrl: "https://github.com/TakHemlata/SSL_Anti-spoofing/tree/4acaa61dcef5f7610f43aa4d0b29c4559b970cd2",
      },
      {
        id: 2,
        name: "XLSR-SLS",
        description: "XLS-R embeddings for cross-lingual speech representation, post-processed by sensitive layer selection (SLS)",
        paperUrl: "https://doi.org/10.1145/3664647.3681345",
        preprintUrl: "https://openreview.net/forum?id=acJMIXJg2u&noteId=acJMIXJg2u",
        githubUrl: "https://github.com/QiShanZhang/SLSforASVspoof-2021-DF/tree/89a09ac4404c5687d96d6c123fcf6db20e4e4b38",
      },
      {
        id: 3,
        name: "XLSR-Mamba",
        description: "XLS-R embeddings for cross-lingual speech representation, post-processed by a bi-directional Mamba space state model",
        paperUrl: "https://doi.org/10.1109/LSP.2025.3547861",
        preprintUrl: "https://arxiv.org/pdf/2411.10027",
        githubUrl: "https://github.com/swagshaw/XLSR-Mamba/tree/a8a613656a94415dc79e4f4a4efac585bce0890d",
      },
    ],
  };
}



// use null on infoUrl or githubUrl if they are not available
function audioEncoders() {
  return {
    models: [
      {
        id: 1,
        name: "EnCodec",
        description: "Neural Codec for audio compression by FacebookResearch",
        infoUrl: "https://ai.honu.io/papers/encodec/samples.html",
        githubUrl: "https://github.com/facebookresearch/encodec/tree/v0.1.1",
      },
      {
        id: 2,
        name: "Lyra-V2",
        description: "Neural Codec for audio compression by Google",
        infoUrl: "https://opensource.googleblog.com/2022/09/lyra-v2-a-better-faster-and-more-versatile-speech-codec.html",
        githubUrl: "https://github.com/google/lyra/tree/v1.3.2",
      },
      {
        id: 3,
        name: "Descript Audio Codec",
        description: "Neural Codec for audio compression by Descript Inc",
        infoUrl: "https://descript.notion.site/Descript-Audio-Codec-11389fce0ce2419891d6591a68f814d5", 
        githubUrl: "https://github.com/descriptinc/descript-audio-codec/tree/1.0.0",
      },
      {
        id: 4,
        name: "L3AC",
        description: "Neural Codec for speech compression by Xi’an Jiaotong University",
        // infoUrl: "https://arxiv.org/abs/2504.04949",
        githubUrl: "https://github.com/zhai-lw/L3AC/tree/1cb03f5e037c9ecdfc15bbaf3046f67d9a77c347",
      },
      {
        id: 5,
        name: "Speech Tokenizer",
        description: "Neural Codec for speech compression by Fudan University",
        infoUrl: "https://0nutation.github.io/SpeechTokenizer.github.io/",
        githubUrl: "https://github.com/ZhangXInFD/SpeechTokenizer/tree/30c96fb32a9fc06a2258c98119e237def051e46c",
      },
    ],
  };
}


// ─────────────────────────────────────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────────────────────────────────────

const DETECTION_MODELS = ['XLSR-AASIST', 'XLSR-SLS', 'XLSR-Mamba'];

// ─────────────────────────────────────────────────────────────────────────────
// ROC image paths per condition and model
// ─────────────────────────────────────────────────────────────────────────────

const ROC_IMAGES = {
  'bf-encoded': {
    'XLSR-AASIST': 'static/images/xlsr-aasist_bonafide-encoded-roc.png',
    'XLSR-SLS':    'static/images/xlsr-sls_bonafide-encoded-roc.png',
    'XLSR-Mamba':  'static/images/xlsr-mamba_bonafide-encoded-roc.png',
  },
  'spoof-encoded': {
    'XLSR-AASIST': 'static/images/xlsr-aasist_spoof-encoded-roc.png',   // TODO: add image file
    'XLSR-SLS':    'static/images/xlsr-sls_spoof-encoded-roc.png',      // TODO: add image file
    'XLSR-Mamba':  'static/images/xlsr-mamba_spoof-encoded-roc.png',    // TODO: add image file
  },
  'both-encoded': {
    'XLSR-AASIST': 'static/images/xlsr-aasist_fully-encoded-roc.png',   // TODO: add image file
    'XLSR-SLS':    'static/images/xlsr-sls_fully-encoded-roc.png',       // TODO: add image file
    'XLSR-Mamba':  'static/images/xlsr-mamba_fully-encoded-roc.png',     // TODO: add image file
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Baselines — shared across all conditions (unmodified ASVspoof19 LA)
// ─────────────────────────────────────────────────────────────────────────────

const BASELINES = [
  {
    label: 'ASVspoof19 LA',
    'XLSR-AASIST': { auc: 0.9999, eer: 0.0015, bac: 0.9983 },
    'XLSR-SLS':    { auc: 0.9999, eer: 0.0023, bac: 0.9977 },
    'XLSR-Mamba':  { auc: 0.9999, eer: 0.0020, bac: 0.9964 },
  },
  {
    label: 'ASVspoof19 LA (24 kHz)',
    'XLSR-AASIST': { auc: 0.9999, eer: 0.0026, bac: 0.9975 },
    'XLSR-SLS':    { auc: 0.9999, eer: 0.0026, bac: 0.9970 },
    'XLSR-Mamba':  { auc: 0.9999, eer: 0.0020, bac: 0.9969 },
  },
  {
    label: 'ASVspoof19 LA (44.1 kHz)',
    'XLSR-AASIST': { auc: 0.9999, eer: 0.0025, bac: 0.9974 },
    'XLSR-SLS':    { auc: 0.9999, eer: 0.0026, bac: 0.9970 },
    'XLSR-Mamba':  { auc: 0.9999, eer: 0.0020, bac: 0.9970 },
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Conditions
// ─────────────────────────────────────────────────────────────────────────────

const CONDITIONS = {

  'bf-encoded': {
description: '<strong>(publication experiments)</strong> Bona fide trials neurally encoded; spoof trials from the original ASVspoof 2019 LA eval set.',

    chartNote: 'Detection performance degrades significantly when bona fide trials are neurally encoded: '
             + 'models respond to the presence or absence of neural encoding artifacts rather than to '
             + 'synthesis-specific traces, confirming they operate primarily as neural encoding detectors.',

    tableNote: 'Since spoof content is unmodified and performance is consistent across sampling rates, '
             + 'the degradation stems entirely from false alarms on neurally encoded bona fide trials — '
             + 'direct evidence that detectors treat neural encoding as a proxy (and therefore shortcut) for synthesis.',
      rocNote: 'The presence of neural encoding traces on bona fide content drastically shifts the p=0.5 operating point, '
             + 'resulting in insufficient balanced accuracy.',
    encoders: [
      {
        label: 'EnCodec (24 kHz)',
        'XLSR-AASIST': { auc: 0.6276, eer: 0.3955, bac: 0.5043 },
        'XLSR-SLS':    { auc: 0.8737, eer: 0.1992, bac: 0.5070 },
        'XLSR-Mamba':  { auc: 0.6973, eer: 0.3290, bac: 0.5079 },
      },
      {
        label: 'Lyra-V2',
        'XLSR-AASIST': { auc: 0.4695, eer: 0.5050, bac: 0.5145 },
        'XLSR-SLS':    { auc: 0.7897, eer: 0.2755, bac: 0.5153 },
        'XLSR-Mamba':  { auc: 0.4629, eer: 0.5101, bac: 0.5009 },
      },
      {
        label: 'Descript Audio Codec (44.1 kHz)',
        'XLSR-AASIST': { auc: 0.9989, eer: 0.0151, bac: 0.9737 },
        'XLSR-SLS':    { auc: 0.9984, eer: 0.0189, bac: 0.9484 },
        'XLSR-Mamba':  { auc: 0.9988, eer: 0.0166, bac: 0.9802 },
      },
      {
        label: 'L3AC',
        'XLSR-AASIST': { auc: 0.8823, eer: 0.1948, bac: 0.5584 },
        'XLSR-SLS':    { auc: 0.9158, eer: 0.1589, bac: 0.5301 },
        'XLSR-Mamba':  { auc: 0.8792, eer: 0.1859, bac: 0.5863 },
      },
      {
        label: 'SpeechTokenizer',
        'XLSR-AASIST': { auc: 0.9803, eer: 0.0677, bac: 0.7537 },
        'XLSR-SLS':    { auc: 0.9721, eer: 0.0838, bac: 0.6675 },
        'XLSR-Mamba':  { auc: 0.9719, eer: 0.0877, bac: 0.7737 },
      },
    ],
  },

  'spoof-encoded': {
    description: '<strong>(additional experiments)</strong> Bona fide trials from the original ASVspoof 2019 LA eval set; spoof trials neurally re-encoded.',
    chartNote: 'Detection performance is preserved in its entirety, consistently with the paper\'s hypothesis: '
             + 'detectors respond to neural encoding traces introduced by the vocoder stage, '
             + 'which re-encoding does not remove — and may even reinforce.',
    tableNote: 'The detectors respond consistently to spoof trials after re-encoding, confirming '
             + 'that neural encoding traces survive the re-encoding process. '
             + 'This supports the interpretation that detectors rely on vocoding (i.e., neural encoding) artifacts '
             + 'rather than on synthesis-specific features from the acoustic feature extraction stage.',
      rocNote: 'The additional neural encoding traces on synthetic content do not alter the p=0.5 operating point, '
             + 'suggesting that the scores obtained on re-encoded synthetic content are identical if not higher.',
    encoders: [
      {
        label: 'EnCodec (24 kHz)',
        'XLSR-AASIST': { auc: 1.0000, eer: 0.0005, bac: 0.9994 },
        'XLSR-SLS':    { auc: 1.0000, eer: 0.0008, bac: 0.9984},
        'XLSR-Mamba':  { auc: 1.0000, eer: 0.0009, bac: 0.9991},
      },
      {
        label: 'Lyra-V2',
        'XLSR-AASIST': { auc: 1.0000, eer: 0.0006, bac: 0.9994 },
        'XLSR-SLS':    { auc: 1.0000, eer: 0.0008, bac: 0.9984},
        'XLSR-Mamba':  { auc: 1.0000, eer: 0.0011, bac: 0.9991},
      },
      {
        label: 'Descript Audio Codec (44.1 kHz)',
        'XLSR-AASIST': { auc: 0.9999, eer: 0.0009, bac: 0.9991 },
        'XLSR-SLS':    { auc: 1.0000, eer: 0.0012, bac: 0.9982},
        'XLSR-Mamba':  { auc: 0.9999, eer: 0.0013, bac: 0.9988},
      },
      {
        label: 'L3AC',
        'XLSR-AASIST': { auc: 1.0000, eer: 0.0007, bac: 0.9994 },
        'XLSR-SLS':    { auc: 1.0000, eer: 0.0012, bac: 0.9983},
        'XLSR-Mamba':  { auc: 0.9999, eer: 0.0014, bac: 0.9988},
      },
      {
        label: 'SpeechTokenizer',
        'XLSR-AASIST': { auc: 0.9999, eer: 0.0011, bac: 0.9990 },
        'XLSR-SLS':    { auc: 1.0000, eer: 0.0016, bac: 0.9980},
        'XLSR-Mamba':  { auc: 0.9999, eer: 0.0016, bac: 0.9985},
      },
    ],
  },

  'both-encoded': {
    description: '<strong>(additional experiments)</strong> Both bona fide and spoof trials neurally encoded with the same codec.',
    chartNote: 'When neural encoding artifacts are equalized across classes, the detector must rely '
             + 'solely on synthesis-specific traces from the acoustic feature extraction stage, '
             + 'revealing its true generalization capability as a synthetic speech detector. '
             + 'Unremoved leading and trailing silence may still act as unintended shortcuts, '
             + 'so the reported performance (far from being ideal) likely remains overestimated.',

    tableNote: 'The marginal recovery in AUC and EER compared to one-sided encoding suggests that '
             + 'detectors retain weak sensitivity to synthesis artifacts once encoding shortcuts are removed. '
             + 'Unremoved silence regions likely inflate even these modest gains, meaning true sensitivity '
             + 'to synthesis-specific traces is probably even lower than in these experiments. '
             + 'BAC near chance confirms that residual discriminability is insufficient at the default p=0.5 threshold, '
             + 'consistently with the interpretation that data-driven models are primarily neural encoding detectors.',
      rocNote: 'The presence of neural encoding traces on bona fide content drastically shifts the p=0.5 operating point, '
             + 'resulting in insufficient balanced accuracy.',
    encoders: [
      {
        label: 'EnCodec (24 kHz)',
        'XLSR-AASIST': { auc: 0.8186, eer: 0.2546, bac: 0.5054},
        'XLSR-SLS':    { auc: 0.9655, eer: 0.0957, bac: 0.5077},
        'XLSR-Mamba':  { auc: 0.8630, eer: 0.2127, bac: 0.5106},
      },
      {
        label: 'Lyra-V2',
        'XLSR-AASIST': { auc: 0.6929, eer: 0.3570, bac: 0.5026},
        'XLSR-SLS':    { auc: 0.9368, eer: 0.1388, bac: 0.5030},
        'XLSR-Mamba':  { auc: 0.6798, eer: 0.3649, bac: 0.5036},
      },
      {
        label: 'Descript Audio Codec (44.1 kHz)',
        'XLSR-AASIST': { auc: 0.9995, eer: 0.0077, bac: 0.9745},
        'XLSR-SLS':    { auc: 0.9995, eer: 0.0071, bac: 0.9490},
        'XLSR-Mamba':  { auc: 0.9995, eer: 0.0072, bac: 0.9826},
      },
      {
        label: 'L3AC',
        'XLSR-AASIST': { auc: 0.9472, eer: 0.1188, bac: 0.5595},
        'XLSR-SLS':    { auc: 0.9770, eer: 0.0796, bac: 0.5307},
        'XLSR-Mamba':  { auc: 0.9520, eer: 0.1042, bac: 0.5888},
      },
      {
        label: 'SpeechTokenizer',
        'XLSR-AASIST': { auc: 0.9910, eer: 0.0379, bac: 0.7544},
        'XLSR-SLS':    { auc: 0.9893, eer: 0.0521, bac: 0.6679},
        'XLSR-Mamba':  { auc: 0.9886, eer: 0.0492, bac: 0.7758},
      },
    ],
  },
};



// ─────────────────────────────────────────────────────────────────────────────
// Chart-data helpers
// ─────────────────────────────────────────────────────────────────────────────

function _toChartData(conditionKey, metric) {
  const encoders = CONDITIONS[conditionKey].encoders;
  const baseline = { ...BASELINES[0], label: 'Original' };
  const allSources = [baseline, ...encoders];

  return DETECTION_MODELS
    .map(model => {
      const values = {};
      allSources.forEach(row => {
        if (row[model] !== null && row[model] !== undefined) {
          values[row.label] = +(row[model][metric] * 100).toFixed(2);
        } else {
          values[row.label] = null;
        }
      });
      return { model, values };           // group label  = detection model
    })                                    // bar keys     = encoder labels
    .filter(d => Object.values(d.values).some(v => v !== null));
}

// ─────────────────────────────────────────────────────────────────────────────
// Rendering of the detailed results tables
// ─────────────────────────────────────────────────────────────────────────────

//number formatting
function _fmt(v) {
  return (v !== null && v !== undefined) ? v.toFixed(4) : '—';
}

//vocoder-specific row
function _rowHtml(row) {
  return `<tr>
    <td class="sticky-col">${row.label}</td>
    ${DETECTION_MODELS.map(m => {
      const v = row[m];
      if (!v) return '<td>—</td><td>—</td><td>—</td>';
      return `<td>${_fmt(v.auc)}</td><td>${_fmt(v.eer)}</td><td>${_fmt(v.bac)}</td>`;
    }).join('')}
  </tr>`;
}

//full table
function renderTable(conditionKey) {
  const bt = document.getElementById('baselines-tbody');
  if (bt) bt.innerHTML = BASELINES.map(_rowHtml).join('');

  const et = document.getElementById('encoders-tbody');
  if (et) et.innerHTML = CONDITIONS[conditionKey].encoders.map(_rowHtml).join('');

  const tn = document.getElementById('condition-table-note');
  if (tn) tn.textContent = CONDITIONS[conditionKey].tableNote;
}

// ─────────────────────────────────────────────────────────────────────────────
// ROC image update
// ─────────────────────────────────────────────────────────────────────────────

function renderRocImages(conditionKey) {
  Object.entries(ROC_IMAGES[conditionKey]).forEach(([model, src]) => {
    document.querySelectorAll(`img[data-roc-model="${model}"]`).forEach(img => {
      img.src = src;
    });
  });
  const rn = document.getElementById('condition-roc-note');
  if (rn) rn.textContent = CONDITIONS[conditionKey].rocNote;
}

// ─────────────────────────────────────────────────────────────────────────────
// Chart rendering
// ─────────────────────────────────────────────────────────────────────────────

// ── Chart carousel state ──────────────────────────────────────────
const CHART_TOTAL = 2;
let _chartSlide = 0;

function _updateChartDots() {
  document.querySelectorAll('.chart-carousel-dot').forEach((dot, i) => {
    dot.classList.toggle('is-active', i === _chartSlide);
  });
}

function chartNav(dir) {
  _chartSlide = (_chartSlide + dir + CHART_TOTAL) % CHART_TOTAL;
  _applyChartSlide();
}

function chartGoTo(index) {
  _chartSlide = index;
  _applyChartSlide();
}
function _updateChartNav() {
  const prev = document.querySelector('.chart-carousel-prev');
  const next = document.querySelector('.chart-carousel-next');
  if (!prev || !next) return;

  prev.disabled = _chartSlide === 0;
  next.disabled = _chartSlide === CHART_TOTAL - 1;
}

function _applyChartSlide() {
  document.getElementById('chart-slides').style.transform =
    `translateX(-${_chartSlide * 100}%)`;
  _updateChartDots();
  _updateChartNav();
}

// ── Update renderCharts to reset slide position ───────────────────
function renderCharts(conditionKey) {
  // re-apply current position after D3 re-renders
  _applyChartSlide();

  d3.select('#chart-bac').selectAll('*').remove();
  d3.select('#chart-eer').selectAll('*').remove();

  const bacData = _toChartData(conditionKey, 'bac');
  const eerData = _toChartData(conditionKey, 'eer');

  if (bacData.length) drawGroupedBarChart({
    svgId: '#chart-bac', data: bacData,
    yLabel: 'Balanced Accuracy (%)', yDomain: [0, 100]
  });
  if (eerData.length) drawGroupedBarChart({
    svgId: '#chart-eer', data: eerData,
    yLabel: 'EER (%)', yDomain: [0, 50]
  });

  const cn = document.getElementById('condition-chart-note');
  if (cn) cn.textContent = CONDITIONS[conditionKey].chartNote;
}

// ─────────────────────────────────────────────────────────────────────────────
// Condition switching — single entry point
// ─────────────────────────────────────────────────────────────────────────────

let currentCondition = 'bf-encoded';

function setCondition(conditionKey) {
  currentCondition = conditionKey;

  // Update selector button styles
  document.querySelectorAll('.condition-btn').forEach(btn => {
    const active = btn.dataset.condition === conditionKey;
    btn.classList.toggle('is-dark', active);
    btn.classList.toggle('is-outlined', !active);
  });

  // Update description under the selector
  const descEl = document.getElementById('condition-description');
  if (descEl) descEl.innerHTML = CONDITIONS[conditionKey].description;

  // Re-render all three result views
  renderCharts(conditionKey);
  renderTable(conditionKey);
  renderRocImages(conditionKey);
}
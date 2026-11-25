/**
 * Dashboard Ejecutivo - Ingeniería de Tránsito, ITS y Microsimulación
 * Autor: Daryl Candia | CIP N° 352085
 */

// Fallback initial data in case file:// protocol restricts fetch
const DEFAULT_DATA = {
  "proyecto": {
    "titulo": "Plan de Trabajo Ejecutivo - Ingeniería de Tránsito, ITS y Microsimulación",
    "responsable": "Daryl Candia",
    "cargo": "Ingeniero Civil - CIP N° 352085 | Modelador Senior de Tráfico y Peatones | Ingeniero de ITS",
    "fechaInicioGeneral": "2026-11-16",
    "fechaFinGeneral": "2027-01-26",
    "ultimaActualizacion": "2026-11-25T23:29:01.559Z"
  },
  "areas": [
    {
      "id": "transito",
      "nombre": "Ingeniería de Tránsito",
      "duracionDias": 17.15,
      "fechaInicio": "2026-11-16",
      "fechaFin": "2026-12-09",
      "tareas": [
        {
          "id": "1.1",
          "nombre": "Revisión de planos",
          "descripcion": "Revisión inicial integral de la planimetría y geometrías viales.",
          "duracionDias": 1,
          "fechaInicio": "2026-11-16",
          "fechaFin": "2026-11-16",
          "pesoEnArea": 10,
          "porcentajeManual": 100,
          "subtareas": [
            {
              "id": "1.1.1",
              "nombre": "Revisión de planos geométricos",
              "descripcion": "Análisis de ejes viales e intersecciones críticas",
              "unidad": "planos",
              "meta": 1,
              "ejecutado": 1,
              "peso": 50,
              "porcentaje": 100
            },
            {
              "id": "1.1.2",
              "nombre": "Identificación de incongruencias iniciales",
              "descripcion": "Detección de interferencias preliminares",
              "unidad": "intersecciones",
              "meta": 19,
              "ejecutado": 19,
              "peso": 50,
              "porcentaje": 100
            }
          ]
        },
        {
          "id": "1.2",
          "nombre": "Propuesta inicial semaforización",
          "descripcion": "Propuesta de ubicación y cantidad de semáforos en el proyecto.",
          "duracionDias": 4.45,
          "fechaInicio": "2026-11-17",
          "fechaFin": "2026-11-23",
          "pesoEnArea": 25,
          "porcentajeManual": 100,
          "subtareas": [
            {
              "id": "1.2.1",
              "nombre": "Catastro y ubicación de intersecciones semaforizadas",
              "descripcion": "Definición de puntos de control semafórico",
              "unidad": "intersecciones",
              "meta": 19,
              "ejecutado": 19,
              "peso": 60,
              "porcentaje": 100
            },
            {
              "id": "1.2.2",
              "nombre": "Cuadro preliminar de equipos y cabezales",
              "descripcion": "Estimación de postes, ménsulas y caras de semáforos",
              "unidad": "intersecciones",
              "meta": 19,
              "ejecutado": 19,
              "peso": 40,
              "porcentaje": 100
            }
          ]
        },
        {
          "id": "1.3",
          "nombre": "Reorganización y revisión de conteos",
          "descripcion": "Validación y procesamiento de aforos vehiculares y peatonales.",
          "duracionDias": 3,
          "fechaInicio": "2026-11-23",
          "fechaFin": "2026-11-26",
          "pesoEnArea": 15,
          "porcentajeManual": 80,
          "subtareas": [
            {
              "id": "1.3.1",
              "nombre": "Consolidación de matrices de giro",
              "descripcion": "Revisión de consistencia horaria en horas punta",
              "unidad": "intersecciones",
              "meta": 15,
              "ejecutado": 15,
              "peso": 70,
              "porcentaje": 100
            },
            {
              "id": "1.3.2",
              "nombre": "Cálculo de flujos por giro",
              "descripcion": "Cálculo de flujos equivalentes y NEMA",
              "unidad": "intersecciones",
              "meta": 15,
              "ejecutado": 15,
              "peso": 30,
              "porcentaje": 100
            }
          ]
        },
        {
          "id": "1.4",
          "nombre": "Superposición de interferencias",
          "descripcion": "Cruce con redes existentes de servicios y obras civiles.",
          "duracionDias": 2,
          "fechaInicio": "2026-11-24",
          "fechaFin": "2026-11-26",
          "pesoEnArea": 10,
          "porcentajeManual": 70,
          "subtareas": [
            {
              "id": "1.4.1",
              "nombre": "Superposición de interferencias de equipamiento semafórico",
              "descripcion": "Compatiblización de ubicación de equipamiento con las interferencias",
              "unidad": "intersecciones",
              "meta": 19,
              "ejecutado": 19,
              "peso": 100,
              "porcentaje": 100
            }
          ]
        },
        {
          "id": "1.5",
          "nombre": "Reubicación de semaforización",
          "descripcion": "Ajuste de emplazamiento de semáforos según interferencias detectadas.",
          "duracionDias": 2,
          "fechaInicio": "2026-11-24",
          "fechaFin": "2026-11-26",
          "pesoEnArea": 10,
          "porcentajeManual": 50,
          "subtareas": [
            {
              "id": "1.5.1",
              "nombre": "Reubicación de equipamiento semafórico",
              "descripcion": "Reubicación de equipamiento por interferencias",
              "unidad": "intersecciones",
              "meta": 19,
              "ejecutado": 19,
              "peso": 70,
              "porcentaje": 100
            },
            {
              "id": "1.5.2",
              "nombre": "Dibujado de vistas de corte de interferencias y canalizaciones",
              "descripcion": "Dibujado de cortes de las canalizaciones y cajas de paso con respecto a las interferencias encontradas",
              "unidad": "intersecciones",
              "meta": 19,
              "ejecutado": 0,
              "peso": 30,
              "porcentaje": 0
            }
          ]
        },
        {
          "id": "1.6",
          "nombre": "Cálculo de tiempos y lógica semafórica",
          "descripcion": "Cálculo de tiempos de verde, prioridades transporte público, peatonales y NEMA.",
          "duracionDias": 8.7,
          "fechaInicio": "2026-11-26",
          "fechaFin": "2026-12-09",
          "pesoEnArea": 30,
          "porcentajeManual": 0,
          "subtareas": [
            {
              "id": "1.6.1",
              "nombre": "Cálculo de despejes y verdes peatonales",
              "descripcion": "Norma NEMA y manual de semaforización",
              "unidad": "intersecciones",
              "meta": 19,
              "ejecutado": 0,
              "peso": 20,
              "porcentaje": 0
            },
            {
              "id": "1.6.3",
              "nombre": "Programación de lógica actuada NEMA",
              "descripcion": "Estructura de anillos y barreras para controladores",
              "unidad": "intersecciones",
              "meta": 19,
              "ejecutado": 0,
              "peso": 50,
              "porcentaje": 0
            },
            {
              "id": "1.6.3",
              "nombre": "Programación de Prioridad Semafórica",
              "descripcion": "Programación del Transit Signal Priority por cada estación",
              "unidad": "intersecciones",
              "meta": 19,
              "ejecutado": 0,
              "peso": 20,
              "porcentaje": 0
            },
            {
              "id": "1.6.4",
              "nombre": "Organización de conteos al estilo NEMA",
              "descripcion": "Transformación de conteos de campo en conteos al estilo NEMA (giros divididos en izquierda, recto y derecha por sentido).",
              "unidad": "intersecciones",
              "meta": 19,
              "ejecutado": 19,
              "peso": 10,
              "porcentaje": 100
            }
          ]
        }
      ]
    },
    {
      "id": "its",
      "nombre": "Ingeniería de ITS",
      "duracionDias": 26,
      "fechaInicio": "2026-12-09",
      "fechaFin": "2027-01-14",
      "tareas": [
        {
          "id": "2.1",
          "nombre": "Definición de Arquitectura de ITS",
          "descripcion": "Definición de servicios ITS según ARC-IT.",
          "duracionDias": 2,
          "fechaInicio": "2026-12-09",
          "fechaFin": "2026-12-11",
          "pesoEnArea": 15,
          "porcentajeManual": 0,
          "subtareas": []
        },
        {
          "id": "2.2",
          "nombre": "Exploración de Soluciones",
          "descripcion": "Rondas de RFI y RFQ para soluciones tecnológicas.",
          "duracionDias": 10,
          "fechaInicio": "2026-12-10",
          "fechaFin": "2026-12-24",
          "pesoEnArea": 25,
          "porcentajeManual": 0,
          "subtareas": []
        },
        {
          "id": "2.3",
          "nombre": "Elaboración del Concepto de Operaciones (ConOps)",
          "descripcion": "Definición de funcionamiento operativo e interacciones.",
          "duracionDias": 2,
          "fechaInicio": "2026-12-10",
          "fechaFin": "2026-12-14",
          "pesoEnArea": 15,
          "porcentajeManual": 0,
          "subtareas": []
        },
        {
          "id": "2.4",
          "nombre": "Definición de los Requisitos de los Sistemas",
          "descripcion": "Requisitos funcionales y técnicos para adquisición e integración.",
          "duracionDias": 3,
          "fechaInicio": "2026-12-22",
          "fechaFin": "2026-12-25",
          "pesoEnArea": 15,
          "porcentajeManual": 0,
          "subtareas": []
        },
        {
          "id": "2.5",
          "nombre": "Diseño a detalle de ITS",
          "descripcion": "Ingeniería de detalle: infraestructura civil, canalizaciones, energía y coms.",
          "duracionDias": 15,
          "fechaInicio": "2026-12-24",
          "fechaFin": "2027-01-14",
          "pesoEnArea": 30,
          "porcentajeManual": 0,
          "subtareas": []
        }
      ]
    },
    {
      "id": "microsimulacion",
      "nombre": "Microsimulación de Tránsito",
      "duracionDias": 34,
      "fechaInicio": "2026-12-09",
      "fechaFin": "2027-01-26",
      "tareas": [
        {
          "id": "3.1",
          "nombre": "Escenario Base",
          "descripcion": "Modelación, calibración y validación del estado actual.",
          "duracionDias": 16,
          "fechaInicio": "2026-12-09",
          "fechaFin": "2026-12-31",
          "pesoEnArea": 35,
          "porcentajeManual": 0,
          "subtareas": []
        },
        {
          "id": "3.2",
          "nombre": "Escenario Propuesto",
          "descripcion": "Modelación de mejoras geométricas y operacionales.",
          "duracionDias": 15,
          "fechaInicio": "2026-12-31",
          "fechaFin": "2027-01-21",
          "pesoEnArea": 35,
          "porcentajeManual": 0,
          "subtareas": []
        },
        {
          "id": "3.3",
          "nombre": "Resultados de simulaciones",
          "descripcion": "Extracción de demoras, colas y niveles de servicio.",
          "duracionDias": 1,
          "fechaInicio": "2027-01-21",
          "fechaFin": "2027-01-22",
          "pesoEnArea": 10,
          "porcentajeManual": 0,
          "subtareas": []
        },
        {
          "id": "3.4",
          "nombre": "Videos de simulaciones",
          "descripcion": "Generación de renderizados y animaciones de tráfico.",
          "duracionDias": 1.2,
          "fechaInicio": "2027-01-22",
          "fechaFin": "2027-01-25",
          "pesoEnArea": 10,
          "porcentajeManual": 0,
          "subtareas": []
        },
        {
          "id": "3.5",
          "nombre": "Informe de simulación",
          "descripcion": "Compilación del informe técnico final.",
          "duracionDias": 2,
          "fechaInicio": "2027-01-22",
          "fechaFin": "2027-01-26",
          "pesoEnArea": 10,
          "porcentajeManual": 0,
          "subtareas": []
        }
      ]
    }
  ],
  "incidencias": [
    {
      "id": "INC-001",
      "fecha": "2026-11-25",
      "areaId": "microsimulacion",
      "areaNombre": "Microsimulación de Tránsito",
      "tareaId": "3.2",
      "tareaNombre": "Escenario Propuesto",
      "gravedad": "Crítica",
      "descripcion": "Se requiere incorporar un modelador junior para trabajar en paralelo. Asimismo, es indispensable contar con las matrices OD del escenario propuesto y recomendable del actual. De no disponer de ellas, el análisis de giros a la izquierda BRT tomará 1 semana adicional.",
      "acciones": "Solicitar con urgencia asignación de recurso junior y gestionar entrega de matrices con el equipo de demanda.",
      "estado": "Abierta",
      "encargadoInformado": "Sí (Informe ejecutivo)",
      "personasInformadas": "Manuel, Alicia"
    },
    {
      "id": "INC-002",
      "fecha": "2026-11-25",
      "areaId": "transito",
      "areaNombre": "Ingeniería de Tránsito",
      "tareaId": "1.2",
      "tareaNombre": "Propuesta inicial semaforización",
      "gravedad": "Media",
      "descripcion": "Inconsistencias y aspectos pendientes de definición en la señalización horizontal. Geometrías complejas como el Óvalo de Mayolo requieren sustento y ajuste en microsimulación.",
      "acciones": "Emitir comunicación formal al proyectista de diseño vial solicitando aclaraciones técnicas.",
      "estado": "En análisis",
      "encargadoInformado": "Notificado por reunión",
      "personasInformadas": "Manuel, Alicia, Daniel"
    },
    {
      "id": "INC-003",
      "fecha": "2026-11-25",
      "areaId": "microsimulacion",
      "areaNombre": "Microsimulación de Tránsito",
      "tareaId": "3.2",
      "tareaNombre": "Escenario Propuesto",
      "gravedad": "Alta",
      "descripcion": "Se requiere reunión con el responsable de macrosimulación para solicitar información de pasajeros en paraderos de mayor concentración de rutas y matrices OD calibradas.",
      "acciones": "Coordinar fecha y hora para mesa de trabajo técnica inter-equipos.",
      "estado": "Abierta",
      "encargadoInformado": "Sí (Informe ejecutivo)",
      "personasInformadas": "Manuel, Alicia"
    }
  ],
  "historial": [
    {
      "fecha": "2026-11-25",
      "hora": "18:22",
      "resumen": "Creación de registro de avance y compatibilizado hasta la fecha 25-11-2026. Solo Ingeniería de Tránsito",
      "avancesPorArea": {
        "transito": 67,
        "its": 0,
        "microsimulacion": 0
      }
    },
    {
      "fecha": "2026-11-25",
      "hora": "17:30",
      "resumen": "Avance en revisión de planos y propuesta inicial semaforizada al 100%. Reorganización de conteos al 80% y superposición de interferencias en curso al 70%. Alertas emitidas por necesidad de matrices OD y modelador junior.",
      "avancesPorArea": {
        "transito": 68.5,
        "its": 0,
        "microsimulacion": 0
      }
    }
  ]
};

// Global App State
let appData = null;
let currentEditorArea = 'transito';
let activeSubtaskTaskId = null;
let activeSubtaskAreaId = null;
let currentDisplayMetricMode = 'accumulated'; // 'accumulated' or 'daily'
let selectedDailyDate = null; // null or specific date string

// Initialize App
document.addEventListener('DOMContentLoaded', async () => {
  await loadAppData();
  initializeDateDefaults();
  renderAll();
});

// Load App Data from localStorage, then data.json, then DEFAULT_DATA
async function loadAppData() {
  const local = localStorage.getItem('dashboard_data_v1');
  if (local) {
    try {
      const parsedLocal = JSON.parse(local);
      const localTime = new Date(parsedLocal.proyecto && parsedLocal.proyecto.ultimaActualizacion || 0).getTime();
      const defaultTime = new Date(DEFAULT_DATA.proyecto && DEFAULT_DATA.proyecto.ultimaActualizacion || 0).getTime();

      // If DEFAULT_DATA is newer than local storage, prioritize DEFAULT_DATA
      if (defaultTime > localTime) {
        appData = JSON.parse(JSON.stringify(DEFAULT_DATA));
        saveToLocalStorage(false);
        console.log('Datos sincronizados con la versión más reciente.');
        return;
      }

      appData = parsedLocal;
      console.log('Datos cargados desde localStorage.');
      return;
    } catch (e) {
      console.error('Error parseando localStorage:', e);
    }
  }

  try {
    const res = await fetch('data.json');
    if (res.ok) {
      appData = await res.json();
      console.log('Datos cargados desde data.json');
      saveToLocalStorage(false);
      return;
    }
  } catch (err) {
    console.warn('Fetch data.json no disponible (modo archivo local), usando DEFAULT_DATA:', err);
  }

  // Fallback
  appData = JSON.parse(JSON.stringify(DEFAULT_DATA));
  saveToLocalStorage(false);
}

// Save to localStorage
function saveToLocalStorage(showToast = true) {
  if (!appData) return;
  appData.proyecto.ultimaActualizacion = new Date().toISOString();
  localStorage.setItem('dashboard_data_v1', JSON.stringify(appData));
  
  const statusEl = document.getElementById('storage-status-text');
  if (statusEl) {
    statusEl.innerHTML = `● Guardado localmente (${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})})`;
  }

  if (showToast) {
    triggerToast('Cambios guardados con éxito', '💾');
  }
}

// Date helpers
function getTodayDateString() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function parseDate(dateStr) {
  if (!dateStr) return new Date();
  const [y, m, d] = dateStr.split('-').map(Number);
  return new Date(y, m - 1, d);
}

function formatDateSpanish(dateStr) {
  if (!dateStr) return '';
  const d = parseDate(dateStr);
  return d.toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' });
}

function initializeDateDefaults() {
  const todayStr = getTodayDateString();
  const logDateInput = document.getElementById('log-date');
  if (logDateInput) logDateInput.value = todayStr;

  const incDateInput = document.getElementById('inc-date');
  if (incDateInput) incDateInput.value = todayStr;

  const todayBanner = document.getElementById('today-date-banner');
  if (todayBanner) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    todayBanner.textContent = `Fecha de corte: ${new Date().toLocaleDateString('es-ES', options)}`;
  }
}

// ==========================================
// CALCULATION ENGINE
// ==========================================

// Calculate single task's real progress
function getTaskRealProgress(task) {
  if (task.subtareas && task.subtareas.length > 0) {
    let totalWeight = 0;
    let weightedProgress = 0;

    task.subtareas.forEach(st => {
      const w = Number(st.peso) || 0;
      totalWeight += w;

      let pct = 0;
      if (st.unidad && (st.unidad.includes('%') || st.meta === 0)) {
        pct = Math.min(100, Math.max(0, Number(st.ejecutado) || 0));
      } else {
        const meta = Number(st.meta) || 1;
        const done = Number(st.ejecutado) || 0;
        pct = Math.min(100, Math.max(0, (done / meta) * 100));
      }
      st.porcentaje = Math.round(pct * 10) / 10;
      weightedProgress += (pct * w);
    });

    if (totalWeight <= 0) totalWeight = 100;
    const finalPct = weightedProgress / totalWeight;
    return Math.round(finalPct * 10) / 10;
  } else {
    return Math.min(100, Math.max(0, Number(task.porcentajeManual) || 0));
  }
}

// Calculate single task's theoretical scheduled progress based on date
function getTaskTheoreticalProgress(task, evalDate = new Date()) {
  const start = parseDate(task.fechaInicio);
  const end = parseDate(task.fechaFin);

  if (evalDate < start) return 0;
  if (evalDate >= end) return 100;

  const totalTime = end.getTime() - start.getTime();
  if (totalTime <= 0) return 100;

  const elapsed = evalDate.getTime() - start.getTime();
  const pct = (elapsed / totalTime) * 100;
  return Math.round(Math.min(100, Math.max(0, pct)) * 10) / 10;
}

// Calculate Area statistics
function calculateAreaMetrics(area) {
  let totalWeight = 0;
  let realWeighted = 0;
  let scheduledWeighted = 0;
  let completedTasks = 0;

  area.tareas.forEach(task => {
    const weight = Number(task.pesoEnArea) || 1;
    totalWeight += weight;

    const real = getTaskRealProgress(task);
    const scheduled = getTaskTheoreticalProgress(task);

    realWeighted += (real * weight);
    scheduledWeighted += (scheduled * weight);

    if (real >= 100) completedTasks++;
  });

  if (totalWeight <= 0) totalWeight = 100;

  const realPct = Math.round((realWeighted / totalWeight) * 10) / 10;
  const schedPct = Math.round((scheduledWeighted / totalWeight) * 10) / 10;
  const diff = Math.round((realPct - schedPct) * 10) / 10;

  let statusText = 'Al día';
  let statusClass = 'status-on-track';

  const today = new Date();
  const areaStart = parseDate(area.fechaInicio);

  if (today < areaStart && realPct === 0) {
    statusText = 'Por iniciar';
    statusClass = 'status-not-started';
  } else if (diff >= 5) {
    statusText = 'Adelantado (+' + diff + '%)';
    statusClass = 'status-ahead';
  } else if (diff >= -5) {
    statusText = 'En cronograma';
    statusClass = 'status-on-track';
  } else if (diff >= -15) {
    statusText = 'Leve retraso (' + diff + '%)';
    statusClass = 'status-delayed';
  } else {
    statusText = 'Retraso crítico (' + diff + '%)';
    statusClass = 'status-delayed';
  }

  return {
    realPct,
    schedPct,
    diff,
    statusText,
    statusClass,
    completedTasks,
    totalTasks: area.tareas.length
  };
}

// ==========================================
// RENDER VIEWS & METRICS MODES
// ==========================================

function setDisplayMetricMode(mode, btnEl) {
  currentDisplayMetricMode = mode;
  if (btnEl) {
    const parent = btnEl.parentElement;
    parent.querySelectorAll('button').forEach(b => b.classList.remove('active'));
    btnEl.classList.add('active');
  }
  renderManagerDashboard();
}

function onDailyDateChanged(dateVal) {
  selectedDailyDate = dateVal;
  renderManagerDashboard();
}

function getChronologicalHistory() {
  if (!appData.historial || appData.historial.length === 0) return [];
  return [...appData.historial].sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
}

function calculateAreaDailyProgress(areaId, targetDate) {
  const area = appData.areas.find(a => a.id === areaId);
  const liveMetrics = area ? calculateAreaMetrics(area) : { realPct: 0 };
  const sorted = getChronologicalHistory();

  if (sorted.length === 0) {
    return {
      dailyGain: liveMetrics.realPct,
      cumulative: liveMetrics.realPct,
      isBaseline: true
    };
  }

  // If targetDate is specified and matches history
  const evalDate = targetDate || selectedDailyDate;

  if (evalDate && evalDate !== 'live') {
    const idx = sorted.findIndex(h => h.fecha === evalDate);
    if (idx !== -1) {
      const currentVal = sorted[idx].avancesPorArea ? (sorted[idx].avancesPorArea[areaId] ?? liveMetrics.realPct) : liveMetrics.realPct;
      if (idx === 0) {
        return {
          dailyGain: currentVal,
          cumulative: currentVal,
          isBaseline: true
        };
      } else {
        const prevVal = sorted[idx - 1].avancesPorArea ? (sorted[idx - 1].avancesPorArea[areaId] ?? 0) : 0;
        const gain = Math.round((currentVal - prevVal) * 10) / 10;
        return {
          dailyGain: gain,
          cumulative: currentVal,
          isBaseline: false
        };
      }
    }
  }

  // Live calculation: compare current live progress with the last recorded historical entry
  const latest = sorted[sorted.length - 1];
  const prevVal = latest && latest.avancesPorArea ? (latest.avancesPorArea[areaId] ?? 0) : 0;
  const gain = Math.round((liveMetrics.realPct - prevVal) * 10) / 10;
  return {
    dailyGain: gain,
    cumulative: liveMetrics.realPct,
    isBaseline: false
  };
}

function renderDateSelector() {
  const select = document.getElementById('select-daily-date');
  if (!select || !appData) return;

  const sorted = getChronologicalHistory();
  if (sorted.length === 0) {
    select.innerHTML = '<option value="live">Jornada Actual</option>';
    return;
  }

  const currentVal = selectedDailyDate || (sorted.length > 0 ? sorted[sorted.length - 1].fecha : 'live');

  let optionsHtml = '';
  optionsHtml += `<option value="live" ${currentVal === 'live' ? 'selected' : ''}>Jornada Actual (En vivo)</option>`;

  // List historical dates descending
  const descSorted = [...sorted].reverse();
  descSorted.forEach(h => {
    optionsHtml += `<option value="${h.fecha}" ${h.fecha === currentVal ? 'selected' : ''}>${formatDateSpanish(h.fecha)}</option>`;
  });

  select.innerHTML = optionsHtml;
  if (!selectedDailyDate && sorted.length > 0) {
    selectedDailyDate = sorted[sorted.length - 1].fecha;
    select.value = selectedDailyDate;
  }
}

function renderAll() {
  renderDateSelector();
  renderManagerDashboard();
  renderEditorView();
}

function renderManagerDashboard() {
  if (!appData) return;

  renderDateSelector();

  // 1. Render 3 Independent Area Cards
  const container = document.getElementById('manager-areas-cards');
  if (!container) return;

  let globalRealSum = 0;
  let globalSchedSum = 0;
  let totalTasksOverall = 0;
  let totalCompletedOverall = 0;

  container.innerHTML = '';

  const isDailyMode = currentDisplayMetricMode === 'daily';

  appData.areas.forEach(area => {
    const metrics = calculateAreaMetrics(area);
    const dailyInfo = calculateAreaDailyProgress(area.id, selectedDailyDate === 'live' ? null : selectedDailyDate);

    globalRealSum += metrics.realPct;
    globalSchedSum += metrics.schedPct;
    totalTasksOverall += metrics.totalTasks;
    totalCompletedOverall += metrics.completedTasks;

    const mainKpiValue = isDailyMode ? `${dailyInfo.dailyGain >= 0 ? '+' : ''}${dailyInfo.dailyGain}%` : `${metrics.realPct}%`;
    const mainKpiLabel = isDailyMode ? 'Avance del Día' : 'Real Acumulado';
    const targetKpiText = isDailyMode
      ? `Acumulado total: <strong>${dailyInfo.cumulative}%</strong>`
      : `Programado: <strong>${metrics.schedPct}%</strong>`;

    let dailyBadgeHtml = '';
    if (dailyInfo.isBaseline) {
      dailyBadgeHtml = `<span class="badge badge-info" style="font-size: 0.72rem; text-transform: none;">Línea base inicial: ${dailyInfo.cumulative}%</span>`;
    } else if (dailyInfo.dailyGain > 0) {
      dailyBadgeHtml = `<span class="badge badge-success" style="font-size: 0.72rem; text-transform: none; font-weight: 700;">▲ +${dailyInfo.dailyGain}% avance en la jornada</span>`;
    } else if (dailyInfo.dailyGain < 0) {
      dailyBadgeHtml = `<span class="badge badge-danger" style="font-size: 0.72rem; text-transform: none;">${dailyInfo.dailyGain}% ajuste</span>`;
    } else {
      dailyBadgeHtml = `<span class="badge badge-neutral" style="font-size: 0.72rem; text-transform: none;">0% avance en la jornada</span>`;
    }

    const card = document.createElement('div');
    card.className = `card area-card ${area.id}`;
    card.innerHTML = `
      <div class="card-header">
        <div>
          <h3 class="card-title" style="font-size: 1.05rem;">${area.nombre}</h3>
          <p class="card-subtitle">${formatDateSpanish(area.fechaInicio)} al ${formatDateSpanish(area.fechaFin)} (${area.duracionDias} días)</p>
        </div>
        <span class="status-pill ${metrics.statusClass}">${metrics.statusText}</span>
      </div>

      <div class="kpi-row">
        <div>
          <span class="kpi-val">${mainKpiValue}</span>
          <span style="font-size: 0.8rem; color: var(--text-muted); margin-left: 4px;">${mainKpiLabel}</span>
        </div>
        <div class="kpi-target">
          ${targetKpiText}
        </div>
      </div>

      <div style="margin: 0.2rem 0 0.5rem;">
        ${dailyBadgeHtml}
      </div>

      <div class="progress-container">
        <div class="progress-labels">
          <span>Avance Físico Acumulado</span>
          <span>${metrics.realPct}%</span>
        </div>
        <div class="progress-track" title="Línea negra: Meta teórica programada (${metrics.schedPct}%)">
          <div class="progress-fill ${area.id}" style="width: ${metrics.realPct}%"></div>
          <div class="progress-scheduled-marker" style="left: ${metrics.schedPct}%;" title="Programado: ${metrics.schedPct}%"></div>
        </div>
      </div>

      <div style="display: flex; justify-content: space-between; font-size: 0.78rem; color: var(--text-muted); margin-top: 0.75rem; border-top: 1px solid #f1f5f9; padding-top: 0.5rem;">
        <span>Tareas: <strong>${metrics.completedTasks}/${metrics.totalTasks} concluidas</strong></span>
        <span>Duración: <strong>${area.duracionDias} días</strong></span>
      </div>
    `;
    container.appendChild(card);
  });

  // Top Global Status Pill
  const avgReal = Math.round((globalRealSum / 3) * 10) / 10;
  const avgSched = Math.round((globalSchedSum / 3) * 10) / 10;
  const generalStatusEl = document.getElementById('general-status-pill');
  if (generalStatusEl) {
    const diff = avgReal - avgSched;
    const badgeClass = diff >= -5 ? 'badge-success' : 'badge-danger';
    const text = diff >= -5 ? 'Proyecto en curso favorable' : 'Atención a desviaciones en cronograma';
    generalStatusEl.innerHTML = `<span class="badge ${badgeClass}" style="font-size: 0.8rem; padding: 0.35rem 0.85rem;">${text}</span>`;
  }

  // Quick stats
  document.getElementById('metric-total-tasks').textContent = totalTasksOverall;
  document.getElementById('metric-completed-tasks').textContent = `${totalCompletedOverall} Completadas (${Math.round((totalCompletedOverall/totalTasksOverall)*100)}%)`;

  const openIncidents = appData.incidencias.filter(i => i.estado !== 'Resuelta');
  const criticalIncidents = openIncidents.filter(i => i.gravedad === 'Crítica');
  document.getElementById('metric-open-incidents').textContent = openIncidents.length;
  document.getElementById('metric-critical-incidents').textContent = `${criticalIncidents.length} de Gravedad Crítica`;

  const informedCount = appData.incidencias.filter(i => i.encargadoInformado && i.encargadoInformado.toLowerCase().startsWith('sí')).length;
  document.getElementById('metric-informed-count').textContent = `${informedCount} / ${appData.incidencias.length}`;

  const endDate = parseDate(appData.proyecto.fechaFinGeneral);
  const now = new Date();
  const diffDays = Math.ceil((endDate.getTime() - now.getTime()) / (1000 * 3600 * 24));
  document.getElementById('metric-days-remaining').textContent = diffDays > 0 ? `${diffDays} días restantes para fin de cronograma` : 'Fecha límite alcanzada';

  // Render Table & Incidents & History
  renderManagerTasksTable();
  renderManagerIncidents();
  renderManagerHistory();
}

// Render Manager Detailed Tasks Table (Divided by Area: Tránsito, ITS, Microsimulación)
let currentManagerTaskFilter = 'all';

function filterManagerTasks(areaId, btnEl) {
  currentManagerTaskFilter = areaId;
  const buttons = btnEl.parentElement.querySelectorAll('button');
  buttons.forEach(b => b.classList.remove('active'));
  btnEl.classList.add('active');
  renderManagerTasksTable();
}

function renderManagerTasksTable() {
  const container = document.getElementById('manager-tasks-container');
  if (!container || !appData) return;

  container.innerHTML = '';

  const areaIcons = {
    'transito': '🚦',
    'its': '🛰️',
    'microsimulacion': '🚘'
  };

  appData.areas.forEach(area => {
    if (currentManagerTaskFilter !== 'all' && area.id !== currentManagerTaskFilter) {
      return;
    }

    const metrics = calculateAreaMetrics(area);
    const icon = areaIcons[area.id] || '📁';

    const sectionEl = document.createElement('div');
    sectionEl.className = `area-tasks-section ${area.id}`;

    // Section Header
    const headerHtml = `
      <div class="area-section-header">
        <div class="area-section-title">
          <span>${icon}</span>
          <span>${area.nombre}</span>
          <span style="font-size: 0.78rem; font-weight: 500; color: var(--text-muted); margin-left: 0.5rem;">
            (${formatDateSpanish(area.fechaInicio)} al ${formatDateSpanish(area.fechaFin)} — ${area.duracionDias} días)
          </span>
        </div>
        <div style="display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap;">
          <span style="font-size: 0.82rem; color: #475569;">
            Real: <strong style="color: #0f172a; font-size: 0.95rem;">${metrics.realPct}%</strong>
            <span style="color: #94a3b8; margin: 0 4px;">|</span>
            Programado: <strong>${metrics.schedPct}%</strong>
          </span>
          <span class="status-pill ${metrics.statusClass}" style="font-size: 0.75rem;">${metrics.statusText}</span>
          <span class="badge badge-neutral" style="font-size: 0.72rem;">${metrics.completedTasks}/${metrics.totalTasks} tareas listas</span>
        </div>
      </div>
    `;

    // Tasks Table for this Area
    let tableHtml = `
      <div class="table-responsive" style="border:none; border-radius:0;">
        <table>
          <thead>
            <tr>
              <th style="width: 50px;">ID</th>
              <th>Tarea</th>
              <th>Fechas (Inicio - Fin)</th>
              <th>Duración</th>
              <th>Peso en Área</th>
              <th>Avance Programado</th>
              <th>Avance Real</th>
              <th style="text-align: center; width: 110px;">Subtareas</th>
            </tr>
          </thead>
          <tbody>
    `;

    area.tareas.forEach(task => {
      const real = getTaskRealProgress(task);
      const sched = getTaskTheoreticalProgress(task);
      const hasSubtasks = task.subtareas && task.subtareas.length > 0;
      const realBadgeColor = real === 100 ? 'badge-success' : (real > 0 ? 'badge-info' : 'badge-neutral');

      tableHtml += `
        <tr style="cursor: ${hasSubtasks ? 'pointer' : 'default'};" onclick="toggleSubtasksView('${task.id.replace('.', '-')}', ${hasSubtasks})" title="${hasSubtasks ? 'Clic para ver u ocultar subtareas' : ''}">
          <td style="font-weight: 700; color: #475569;">${task.id}</td>
          <td>
            <div style="font-weight: 600; color: #0f172a;">${task.nombre}</div>
            <div style="font-size: 0.78rem; color: var(--text-muted);">${task.descripcion || ''}</div>
          </td>
          <td style="white-space: nowrap; font-size: 0.82rem;">
            ${formatDateSpanish(task.fechaInicio)} <br>
            <span style="color: var(--text-muted);">${formatDateSpanish(task.fechaFin)}</span>
          </td>
          <td style="white-space: nowrap;">${task.duracionDias} d</td>
          <td>${task.pesoEnArea}%</td>
          <td style="min-width: 110px;">
            <div style="font-size: 0.78rem; font-weight:600; margin-bottom: 2px;">${sched}%</div>
            <div class="progress-track" style="height: 6px;">
              <div style="height: 100%; background: #94a3b8; width: ${sched}%;"></div>
            </div>
          </td>
          <td style="min-width: 120px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 2px;">
              <span class="badge ${realBadgeColor}">${real}%</span>
            </div>
            <div class="progress-track" style="height: 8px;">
              <div class="progress-fill ${area.id}" style="width: ${real}%;"></div>
            </div>
          </td>
          <td style="text-align: center;">
            ${hasSubtasks ? `
              <span class="btn btn-secondary btn-sm" style="padding: 2px 8px; font-size: 0.72rem;">
                🔍 ${task.subtareas.length} subtareas
              </span>
            ` : `<span style="color: #94a3b8; font-size: 0.78rem;">-</span>`}
          </td>
        </tr>
      `;

      // Subtasks details if existing
      if (hasSubtasks) {
        let subtasksListHtml = '';
        task.subtareas.forEach(st => {
          const stPct = st.porcentaje !== undefined ? st.porcentaje : (st.unidad && st.unidad.includes('%') ? st.ejecutado : Math.round(((st.ejecutado || 0) / (st.meta || 1)) * 100));
          subtasksListHtml += `
            <div class="subtask-item">
              <div style="flex: 2;">
                <strong>${st.nombre}</strong>
                ${st.descripcion ? `<span style="color: #64748b; margin-left: 6px;">(${st.descripcion})</span>` : ''}
              </div>
              <div style="flex: 1; text-align: center; color: #475569;">
                Ejecutado: <strong>${st.ejecutado}</strong> / Meta: <strong>${st.meta}</strong> ${st.unidad}
              </div>
              <div style="flex: 1; text-align: center; color: #475569;">
                Peso: <strong>${st.peso}%</strong>
              </div>
              <div style="width: 140px; display: flex; align-items: center; gap: 8px;">
                <div class="progress-track" style="height: 6px; flex: 1;">
                  <div style="height: 100%; background: #2563eb; width: ${stPct}%;"></div>
                </div>
                <span style="font-weight: 700; font-size: 0.78rem; min-width: 38px;">${stPct}%</span>
              </div>
            </div>
          `;
        });

        tableHtml += `
          <tr id="subtasks-detail-${task.id.replace('.', '-')}" style="display:none; background: #f8fafc;">
            <td colspan="8" style="padding: 0.75rem 1.5rem; background: #f8fafc; border-bottom: 2px solid #e2e8f0;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; flex-wrap: wrap; gap: 0.5rem;">
                <div style="font-weight: 700; font-size: 0.8rem; color: #334155; text-transform: uppercase;">
                  Subtareas secundarias de: ${task.nombre}
                </div>
                <button class="btn btn-primary btn-sm" style="padding: 3px 10px; font-size: 0.74rem;" onclick="event.stopPropagation(); openSubtaskModal('${area.id}', '${task.id}')">
                  ⚙️ Sincerar Metas y Editar Subtareas
                </button>
              </div>
              <div style="display: grid; gap: 0.5rem;">
                ${subtasksListHtml}
              </div>
            </td>
          </tr>
        `;
      }
    });

    tableHtml += `</tbody></table></div>`;
    sectionEl.innerHTML = headerHtml + tableHtml;
    container.appendChild(sectionEl);
  });
}

function toggleSubtasksView(idSuffix, hasSubtasks) {
  if (!hasSubtasks) return;
  const row = document.getElementById(`subtasks-detail-${idSuffix}`);
  if (row) {
    row.style.display = row.style.display === 'none' ? 'table-row' : 'none';
  }
}

// Render Manager Incidents
let currentIncidentFilter = 'all';

function filterIncidents(filter, btnEl) {
  currentIncidentFilter = filter;
  const buttons = btnEl.parentElement.querySelectorAll('button');
  buttons.forEach(b => b.classList.remove('active'));
  btnEl.classList.add('active');
  renderManagerIncidents();
}

function renderManagerIncidents() {
  const container = document.getElementById('manager-incidents-list');
  if (!container || !appData) return;

  container.innerHTML = '';

  let list = appData.incidencias;
  if (currentIncidentFilter === 'Abierta') {
    list = list.filter(i => i.estado === 'Abierta' || i.estado === 'En análisis');
  } else if (currentIncidentFilter === 'Crítica') {
    list = list.filter(i => i.gravedad === 'Crítica');
  } else if (currentIncidentFilter === 'Resuelta') {
    list = list.filter(i => i.estado === 'Resuelta');
  }

  if (list.length === 0) {
    container.innerHTML = `<div style="text-align: center; padding: 2rem; color: var(--text-muted); font-size: 0.9rem;">No hay incidencias que coincidan con el filtro seleccionado.</div>`;
    return;
  }

  list.forEach(inc => {
    const card = document.createElement('div');
    const gravLower = (inc.gravedad || 'Media').toLowerCase();
    card.className = `incident-card ${gravLower}`;

    const severityBadges = {
      'Crítica': 'badge-danger',
      'Alta': 'badge-warning',
      'Media': 'badge-warning',
      'Baja': 'badge-info'
    };

    const statusBadges = {
      'Abierta': 'badge-danger',
      'En análisis': 'badge-warning',
      'Resuelta': 'badge-success'
    };

    const isInformedYes = inc.encargadoInformado && inc.encargadoInformado.toLowerCase().startsWith('sí');
    const informedBadge = isInformedYes ? 'badge-success' : 'badge-warning';

    card.innerHTML = `
      <div class="incident-header">
        <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
          <span class="badge ${severityBadges[inc.gravedad] || 'badge-neutral'}">${inc.gravedad}</span>
          <span class="incident-title">${inc.id}: ${inc.areaNombre} - Tarea ${inc.tareaId}</span>
          <span style="font-size: 0.78rem; color: var(--text-muted);">(${formatDateSpanish(inc.fecha)})</span>
        </div>
        <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
          <span class="badge ${informedBadge}">
            Encargado informado: <strong>${inc.encargadoInformado || 'No'}</strong>
          </span>
          ${inc.personasInformadas ? `
            <span class="badge badge-info" style="font-size: 0.74rem; text-transform: none;">
              👤 Informado a: <strong>${inc.personasInformadas}</strong>
            </span>
          ` : ''}
          <span class="badge ${statusBadges[inc.estado] || 'badge-neutral'}">${inc.estado}</span>
        </div>
      </div>

      <div class="incident-body">
        <strong>Inconveniente detectado:</strong> ${inc.descripcion}
      </div>

      <div class="incident-action">
        <strong>Acción requerida / Medida tomada:</strong> ${inc.acciones}
      </div>
    `;
    container.appendChild(card);
  });
}

// Render Manager History Timeline
function renderManagerHistory() {
  const container = document.getElementById('manager-history-timeline');
  if (!container || !appData) return;

  container.innerHTML = '';

  if (!appData.historial || appData.historial.length === 0) {
    container.innerHTML = `<div style="padding: 1rem; color: var(--text-muted); font-size: 0.85rem;">No hay registros en la bitácora todavía.</div>`;
    return;
  }

  const chrono = getChronologicalHistory();
  // Sort descending by date for display
  const sorted = [...appData.historial].sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

  sorted.forEach(entry => {
    const item = document.createElement('div');
    item.className = 'history-entry';

    const chronoIdx = chrono.findIndex(h => h.fecha === entry.fecha);
    const isFirstEntry = chronoIdx === 0;
    const prevEntry = chronoIdx > 0 ? chrono[chronoIdx - 1] : null;

    const transitoPct = entry.avancesPorArea ? (entry.avancesPorArea.transito ?? 0) : 0;
    const itsPct = entry.avancesPorArea ? (entry.avancesPorArea.its ?? 0) : 0;
    const microPct = entry.avancesPorArea ? (entry.avancesPorArea.microsimulacion ?? 0) : 0;

    const gainTransito = prevEntry && prevEntry.avancesPorArea
      ? Math.round((transitoPct - (prevEntry.avancesPorArea.transito ?? 0)) * 10) / 10
      : (isFirstEntry ? transitoPct : 0);

    const gainIts = prevEntry && prevEntry.avancesPorArea
      ? Math.round((itsPct - (prevEntry.avancesPorArea.its ?? 0)) * 10) / 10
      : (isFirstEntry ? itsPct : 0);

    const gainMicro = prevEntry && prevEntry.avancesPorArea
      ? Math.round((microPct - (prevEntry.avancesPorArea.microsimulacion ?? 0)) * 10) / 10
      : (isFirstEntry ? microPct : 0);

    let statusBadge = '';
    if (isFirstEntry) {
      statusBadge = `<span class="badge badge-info" style="font-size: 0.72rem; text-transform:none;">Línea base consolidada</span>`;
    } else if (gainTransito > 0 || gainIts > 0 || gainMicro > 0) {
      statusBadge = `<span class="badge badge-success" style="font-size: 0.72rem; text-transform:none; font-weight:700;">▲ Avance registrado en la jornada</span>`;
    } else {
      statusBadge = `<span class="badge badge-neutral" style="font-size: 0.72rem; text-transform:none;">Reporte de actividades</span>`;
    }

    item.innerHTML = `
      <div class="history-dot"></div>
      <div style="display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.4rem;">
        <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
          <span style="font-weight: 700; color: #0f172a; font-size: 0.95rem;">
            📅 ${formatDateSpanish(entry.fecha)}
            ${entry.hora ? `<span style="font-weight: 400; font-size: 0.78rem; color: #64748b; margin-left: 4px;">(${entry.hora})</span>` : ''}
          </span>
          ${statusBadge}
        </div>
        <div style="display: flex; gap: 0.5rem; font-size: 0.75rem; flex-wrap: wrap;">
          <span style="background: #eff6ff; color: #1d4ed8; padding: 2px 7px; border-radius: 4px; font-weight: 600;">
            Tránsito: ${gainTransito > 0 ? `▲ +${gainTransito}% hoy` : (isFirstEntry ? `+${transitoPct}%` : '0%')} (Total: ${transitoPct}%)
          </span>
          <span style="background: #f0fdfa; color: #0f766e; padding: 2px 7px; border-radius: 4px; font-weight: 600;">
            ITS: ${gainIts > 0 ? `▲ +${gainIts}% hoy` : (isFirstEntry ? `+${itsPct}%` : '0%')} (Total: ${itsPct}%)
          </span>
          <span style="background: #faf5ff; color: #6d28d9; padding: 2px 7px; border-radius: 4px; font-weight: 600;">
            Microsim: ${gainMicro > 0 ? `▲ +${gainMicro}% hoy` : (isFirstEntry ? `+${microPct}%` : '0%')} (Total: ${microPct}%)
          </span>
        </div>
      </div>
      <p style="font-size: 0.88rem; color: #334155; line-height: 1.5; margin: 0;">
        ${entry.resumen}
      </p>
    `;
    container.appendChild(item);
  });
}

// ==========================================
// TAB 2: EDITOR VIEW LOGIC
// ==========================================

function switchEditorArea(areaId, btnEl) {
  currentEditorArea = areaId;
  const buttons = btnEl.parentElement.querySelectorAll('button');
  buttons.forEach(b => b.classList.remove('active'));
  btnEl.classList.add('active');
  renderEditorTasks();
}

function renderEditorView() {
  renderEditorTasks();
  renderEditorIncidentsTable();
}

function renderEditorTasks() {
  const container = document.getElementById('editor-tasks-container');
  if (!container || !appData) return;

  const area = appData.areas.find(a => a.id === currentEditorArea);
  if (!area) return;

  container.innerHTML = '';

  const tableWrapper = document.createElement('div');
  tableWrapper.className = 'table-responsive';
  
  let html = `
    <table>
      <thead>
        <tr>
          <th style="width: 50px;">ID</th>
          <th>Tarea</th>
          <th>Duración</th>
          <th>Peso en Área</th>
          <th>Método de Avance</th>
          <th style="width: 180px;">% Avance Actual</th>
          <th style="text-align: right; width: 140px;">Subtareas</th>
        </tr>
      </thead>
      <tbody>
  `;

  area.tareas.forEach(task => {
    const hasSubtasks = task.subtareas && task.subtareas.length > 0;
    const real = getTaskRealProgress(task);

    html += `
      <tr>
        <td style="font-weight: 700; color: #475569;">${task.id}</td>
        <td>
          <div style="font-weight: 600;">${task.nombre}</div>
          <div style="font-size: 0.78rem; color: var(--text-muted);">${task.descripcion || ''}</div>
        </td>
        <td>${task.duracionDias} d</td>
        <td>
          <input type="number" value="${task.pesoEnArea}" min="0" max="100" style="width: 60px; padding: 4px;" class="form-input"
            onchange="updateTaskWeight('${area.id}', '${task.id}', this.value)"> %
        </td>
        <td>
          ${hasSubtasks ? `
            <span class="badge badge-info" style="font-size: 0.72rem;">Calculado de ${task.subtareas.length} subtareas</span>
          ` : `
            <span class="badge badge-neutral" style="font-size: 0.72rem;">Porcentaje directo</span>
          `}
        </td>
        <td>
          ${hasSubtasks ? `
            <div style="display: flex; align-items: center; gap: 8px;">
              <span style="font-weight: 700; font-size: 0.95rem; color: #1e3a8a;">${real}%</span>
              <div class="progress-track" style="height: 8px; flex: 1;">
                <div class="progress-fill ${area.id}" style="width: ${real}%"></div>
              </div>
            </div>
          ` : `
            <div style="display: flex; align-items: center; gap: 6px;">
              <input type="number" value="${task.porcentajeManual || 0}" min="0" max="100" class="form-input" style="width: 75px; padding: 4px;"
                onchange="updateTaskDirectPercentage('${area.id}', '${task.id}', this.value)"> %
              <div class="progress-track" style="height: 8px; flex: 1;">
                <div class="progress-fill ${area.id}" style="width: ${task.porcentajeManual || 0}%"></div>
              </div>
            </div>
          `}
        </td>
        <td style="text-align: right;">
          <button class="btn btn-secondary btn-sm" onclick="openSubtaskModal('${area.id}', '${task.id}')">
            ⚙️ ${hasSubtasks ? `Editar (${task.subtareas.length})` : 'Desglosar'}
          </button>
        </td>
      </tr>
    `;
  });

  html += `</tbody></table>`;
  tableWrapper.innerHTML = html;
  container.appendChild(tableWrapper);
}

// Update Task Weight
function updateTaskWeight(areaId, taskId, val) {
  const area = appData.areas.find(a => a.id === areaId);
  if (!area) return;
  const task = area.tareas.find(t => t.id === taskId);
  if (!task) return;

  task.pesoEnArea = Math.max(0, Math.min(100, Number(val) || 0));
  saveToLocalStorage();
  renderAll();
}

// Update Task Direct Percentage
function updateTaskDirectPercentage(areaId, taskId, val) {
  const area = appData.areas.find(a => a.id === areaId);
  if (!area) return;
  const task = area.tareas.find(t => t.id === taskId);
  if (!task) return;

  task.porcentajeManual = Math.max(0, Math.min(100, Number(val) || 0));
  saveToLocalStorage();
  renderAll();
}

// Handle Daily Log Form
function handleSaveDailyLog(e) {
  e.preventDefault();
  const dateInput = document.getElementById('log-date');
  const summaryInput = document.getElementById('log-summary');

  if (!dateInput.value || !summaryInput.value) return;

  const transitoMetrics = calculateAreaMetrics(appData.areas.find(a => a.id === 'transito'));
  const itsMetrics = calculateAreaMetrics(appData.areas.find(a => a.id === 'its'));
  const microMetrics = calculateAreaMetrics(appData.areas.find(a => a.id === 'microsimulacion'));

  const now = new Date();
  const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

  const newEntry = {
    fecha: dateInput.value,
    hora: timeStr,
    resumen: summaryInput.value.trim(),
    avancesPorArea: {
      transito: transitoMetrics.realPct,
      its: itsMetrics.realPct,
      microsimulacion: microMetrics.realPct
    }
  };

  if (!appData.historial) appData.historial = [];
  appData.historial.unshift(newEntry);

  saveToLocalStorage();
  summaryInput.value = '';
  renderAll();
  triggerToast('Jornada agregada exitosamente al historial diario', '📅');
}

// ==========================================
// SUBTASK MODAL MANAGEMENT
// ==========================================

function openSubtaskModal(areaId, taskId) {
  if (!isCreatorAuthenticated()) {
    openAuthModal(() => openSubtaskModal(areaId, taskId));
    return;
  }

  activeSubtaskAreaId = areaId;
  activeSubtaskTaskId = taskId;

  const area = appData.areas.find(a => a.id === areaId);
  const task = area.tareas.find(t => t.id === taskId);

  document.getElementById('modal-task-name').textContent = `Desglose: ${task.id} - ${task.nombre}`;
  document.getElementById('modal-task-desc').textContent = `${area.nombre} | ${task.descripcion || ''}`;

  renderModalSubtasksList();
  document.getElementById('subtask-modal').classList.add('active');
}

function closeSubtaskModal() {
  document.getElementById('subtask-modal').classList.remove('active');
  activeSubtaskAreaId = null;
  activeSubtaskTaskId = null;
  renderAll();
}

function renderModalSubtasksList() {
  const container = document.getElementById('modal-subtasks-list');
  if (!container || !activeSubtaskAreaId || !activeSubtaskTaskId) return;

  const area = appData.areas.find(a => a.id === activeSubtaskAreaId);
  const task = area.tareas.find(t => t.id === activeSubtaskTaskId);

  container.innerHTML = '';

  if (!task.subtareas || task.subtareas.length === 0) {
    container.innerHTML = `<div style="padding: 1rem; color: var(--text-muted); font-size: 0.85rem; text-align: center;">Esta tarea no tiene subtareas secundarias. Usa el formulario de arriba para agregar la primera.</div>`;
    document.getElementById('modal-total-weight-info').textContent = 'Peso acumulado: 0%';
    return;
  }

  let totalWeight = 0;

  task.subtareas.forEach((st, idx) => {
    totalWeight += (Number(st.peso) || 0);

    const stPct = st.porcentaje !== undefined ? st.porcentaje : (st.unidad && st.unidad.includes('%') ? st.ejecutado : Math.round(((st.ejecutado || 0) / (st.meta || 1)) * 100));

    const item = document.createElement('div');
    item.style.background = '#ffffff';
    item.style.border = '1px solid #cbd5e1';
    item.style.borderRadius = 'var(--radius-sm)';
    item.style.padding = '0.85rem';
    item.style.marginBottom = '0.75rem';
    item.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)';

    item.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
        <span style="font-weight: 700; color: #1e3a8a; font-size: 0.85rem;">SUBTAREA #${idx + 1}</span>
        <button class="btn btn-danger btn-sm" style="padding: 2px 7px; font-size: 0.72rem;" onclick="deleteSubtask(${idx})">🗑️ Eliminar</button>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-bottom: 0.6rem;">
        <div>
          <label style="display:block; font-size: 0.72rem; font-weight: 600; color: #475569; margin-bottom: 2px;">Nombre de la Subtarea</label>
          <input type="text" class="form-input" style="padding: 4px 8px; font-size: 0.83rem;" value="${st.nombre}" onchange="updateSubtaskName(${idx}, this.value)">
        </div>
        <div>
          <label style="display:block; font-size: 0.72rem; font-weight: 600; color: #475569; margin-bottom: 2px;">Descripción / Observación</label>
          <input type="text" class="form-input" style="padding: 4px 8px; font-size: 0.83rem;" value="${st.descripcion || ''}" onchange="updateSubtaskDesc(${idx}, this.value)">
        </div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(95px, 1fr)); gap: 0.5rem; font-size: 0.8rem; align-items: end; background: #f8fafc; padding: 0.6rem; border-radius: 4px; border: 1px solid #e2e8f0;">
        <div>
          <label style="display:block; font-size: 0.7rem; color: #475569; margin-bottom: 2px;">Unidad</label>
          <input type="text" class="form-input" style="padding: 4px 6px; font-size: 0.82rem;" value="${st.unidad}" onchange="updateSubtaskUnit(${idx}, this.value)">
        </div>
        <div>
          <label style="display:block; font-size: 0.7rem; color: #1d4ed8; font-weight: 700; margin-bottom: 2px;">Meta Total *</label>
          <input type="number" step="any" min="0.0001" class="form-input" style="padding: 4px 6px; font-size: 0.85rem; font-weight: 700; border-color: #93c5fd;" value="${st.meta}"
            onchange="updateSubtaskMeta(${idx}, this.value)">
        </div>
        <div>
          <label style="display:block; font-size: 0.7rem; color: #15803d; font-weight: 700; margin-bottom: 2px;">Ejecutado *</label>
          <input type="number" step="any" min="0" class="form-input" style="padding: 4px 6px; font-size: 0.85rem; font-weight: 700; border-color: #86efac;" value="${st.ejecutado}"
            onchange="updateSubtaskDone(${idx}, this.value)">
        </div>
        <div>
          <label style="display:block; font-size: 0.7rem; font-weight: 700; color: #334155; margin-bottom: 2px;">Peso (%) *</label>
          <input type="number" step="any" min="0" max="100" class="form-input" style="padding: 4px 6px; font-size: 0.85rem;" value="${st.peso}"
            onchange="updateSubtaskWeight(${idx}, this.value)">
        </div>
        <div style="text-align: center; padding-bottom: 4px;">
          <div style="font-size: 0.68rem; color: #64748b; font-weight: 600;">% AVANCE</div>
          <span class="badge ${stPct === 100 ? 'badge-success' : 'badge-info'}" style="font-size: 0.82rem; font-weight: 800;">${stPct}%</span>
        </div>
      </div>
    `;
    container.appendChild(item);
  });

  const weightInfo = document.getElementById('modal-total-weight-info');
  weightInfo.textContent = `Peso acumulado en subtareas: ${totalWeight}% ${totalWeight === 100 ? '✅ (Correcto)' : '⚠️ (Suma sugerida = 100%)'}`;
}

function updateSubtaskName(idx, val) {
  const area = appData.areas.find(a => a.id === activeSubtaskAreaId);
  const task = area.tareas.find(t => t.id === activeSubtaskTaskId);
  task.subtareas[idx].nombre = val.trim();
  saveToLocalStorage();
}

function updateSubtaskDesc(idx, val) {
  const area = appData.areas.find(a => a.id === activeSubtaskAreaId);
  const task = area.tareas.find(t => t.id === activeSubtaskTaskId);
  task.subtareas[idx].descripcion = val.trim();
  saveToLocalStorage();
}

function updateSubtaskUnit(idx, val) {
  const area = appData.areas.find(a => a.id === activeSubtaskAreaId);
  const task = area.tareas.find(t => t.id === activeSubtaskTaskId);
  task.subtareas[idx].unidad = val.trim();
  saveToLocalStorage();
  renderModalSubtasksList();
}

function updateSubtaskMeta(idx, val) {
  const area = appData.areas.find(a => a.id === activeSubtaskAreaId);
  const task = area.tareas.find(t => t.id === activeSubtaskTaskId);
  task.subtareas[idx].meta = Math.max(0.0001, Number(val) || 1);
  saveToLocalStorage();
  renderModalSubtasksList();
}

function handleAddSubtask(e) {
  e.preventDefault();
  const area = appData.areas.find(a => a.id === activeSubtaskAreaId);
  const task = area.tareas.find(t => t.id === activeSubtaskTaskId);

  if (!task.subtareas) task.subtareas = [];

  const name = document.getElementById('subtask-name').value.trim();
  const desc = document.getElementById('subtask-desc').value.trim();
  const unit = document.getElementById('subtask-unit').value.trim();
  const meta = Number(document.getElementById('subtask-meta').value) || 1;
  const done = Number(document.getElementById('subtask-done').value) || 0;
  const weight = Number(document.getElementById('subtask-weight').value) || 10;

  const newSubtask = {
    id: `${task.id}.${task.subtareas.length + 1}`,
    nombre: name,
    descripcion: desc,
    unidad: unit,
    meta: meta,
    ejecutado: done,
    peso: weight,
    porcentaje: unit.includes('%') ? done : Math.round((done / meta) * 100)
  };

  task.subtareas.push(newSubtask);
  saveToLocalStorage();

  // Reset form
  document.getElementById('subtask-name').value = '';
  document.getElementById('subtask-desc').value = '';
  document.getElementById('subtask-meta').value = '';
  document.getElementById('subtask-done').value = '';
  document.getElementById('subtask-weight').value = '';

  renderModalSubtasksList();
  triggerToast('Subtarea añadida', '➕');
}

function updateSubtaskDone(idx, val) {
  const area = appData.areas.find(a => a.id === activeSubtaskAreaId);
  const task = area.tareas.find(t => t.id === activeSubtaskTaskId);
  task.subtareas[idx].ejecutado = Math.max(0, Number(val) || 0);
  saveToLocalStorage();
  renderModalSubtasksList();
}

function updateSubtaskWeight(idx, val) {
  const area = appData.areas.find(a => a.id === activeSubtaskAreaId);
  const task = area.tareas.find(t => t.id === activeSubtaskTaskId);
  task.subtareas[idx].peso = Math.max(0, Math.min(100, Number(val) || 0));
  saveToLocalStorage();
  renderModalSubtasksList();
}

function deleteSubtask(idx) {
  const area = appData.areas.find(a => a.id === activeSubtaskAreaId);
  const task = area.tareas.find(t => t.id === activeSubtaskTaskId);
  task.subtareas.splice(idx, 1);
  saveToLocalStorage();
  renderModalSubtasksList();
  triggerToast('Subtarea eliminada', '🗑️');
}

// ==========================================
// INCIDENTS CRUD & MODAL
// ==========================================

function renderEditorIncidentsTable() {
  const tbody = document.getElementById('editor-incidents-tbody');
  if (!tbody || !appData) return;

  tbody.innerHTML = '';

  appData.incidencias.forEach(inc => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td style="font-weight: 700;">${inc.id}</td>
      <td style="white-space: nowrap;">${formatDateSpanish(inc.fecha)}</td>
      <td>
        <div style="font-weight: 600;">${inc.areaNombre}</div>
        <div style="font-size: 0.78rem; color: var(--text-muted);">${inc.tareaNombre || inc.tareaId || ''}</div>
      </td>
      <td>
        <span class="badge ${inc.gravedad === 'Crítica' ? 'badge-danger' : 'badge-warning'}">${inc.gravedad}</span>
      </td>
      <td style="max-width: 300px;">
        <div style="font-size: 0.85rem; color: #1e293b;">${inc.descripcion}</div>
        <div style="font-size: 0.78rem; color: var(--primary); margin-top: 3px;"><strong>Acción:</strong> ${inc.acciones}</div>
      </td>
      <td>
        <span class="badge ${inc.encargadoInformado && inc.encargadoInformado.toLowerCase().startsWith('sí') ? 'badge-success' : 'badge-warning'}">
          ${inc.encargadoInformado}
        </span>
      </td>
      <td>
        ${inc.personasInformadas ? `<span style="font-weight: 600; color: #1e3a8a; font-size: 0.82rem;">${inc.personasInformadas}</span>` : `<span style="color: #94a3b8; font-size: 0.78rem;">-</span>`}
      </td>
      <td>
        <select class="form-select" style="padding: 2px 6px; font-size: 0.78rem;" onchange="updateIncidentStatusDirect('${inc.id}', this.value)">
          <option value="Abierta" ${inc.estado === 'Abierta' ? 'selected' : ''}>Abierta</option>
          <option value="En análisis" ${inc.estado === 'En análisis' ? 'selected' : ''}>En análisis</option>
          <option value="Resuelta" ${inc.estado === 'Resuelta' ? 'selected' : ''}>Resuelta</option>
        </select>
      </td>
      <td style="text-align: right; white-space: nowrap;">
        <button class="btn btn-secondary btn-sm" style="padding: 3px 6px;" onclick="openEditIncidentModal('${inc.id}')">✏️</button>
        <button class="btn btn-danger btn-sm" style="padding: 3px 6px;" onclick="deleteIncident('${inc.id}')">🗑️</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function updateIncidentStatusDirect(incId, newStatus) {
  const inc = appData.incidencias.find(i => i.id === incId);
  if (inc) {
    inc.estado = newStatus;
    saveToLocalStorage();
    renderAll();
    triggerToast(`Estado de incidencia actualizado a "${newStatus}"`, '✅');
  }
}

function updateIncidentTaskOptions() {
  const areaSelect = document.getElementById('inc-area');
  const taskSelect = document.getElementById('inc-task');
  if (!areaSelect || !taskSelect || !appData) return;

  const area = appData.areas.find(a => a.id === areaSelect.value);
  taskSelect.innerHTML = '';

  if (area) {
    area.tareas.forEach(t => {
      const opt = document.createElement('option');
      opt.value = t.id;
      opt.textContent = `${t.id} - ${t.nombre}`;
      taskSelect.appendChild(opt);
    });
  }
}

function openNewIncidentModal() {
  if (!isCreatorAuthenticated()) {
    openAuthModal(() => openNewIncidentModal());
    return;
  }
  document.getElementById('incident-modal-title').textContent = 'Registrar Inconveniente / Incidencia';
  document.getElementById('incident-edit-id').value = '';
  document.getElementById('inc-date').value = getTodayDateString();
  document.getElementById('inc-area').value = 'transito';
  updateIncidentTaskOptions();
  document.getElementById('inc-desc').value = '';
  document.getElementById('inc-actions').value = '';
  document.getElementById('inc-severity').value = 'Media';
  document.getElementById('inc-informed').value = 'Sí';
  document.getElementById('inc-persons').value = '';
  document.getElementById('inc-status').value = 'Abierta';

  document.getElementById('incident-modal').classList.add('active');
}

function openEditIncidentModal(incId) {
  if (!isCreatorAuthenticated()) {
    openAuthModal(() => openEditIncidentModal(incId));
    return;
  }
  const inc = appData.incidencias.find(i => i.id === incId);
  if (!inc) return;

  document.getElementById('incident-modal-title').textContent = `Editar Incidencia ${inc.id}`;
  document.getElementById('incident-edit-id').value = inc.id;
  document.getElementById('inc-date').value = inc.fecha;
  document.getElementById('inc-area').value = inc.areaId;
  updateIncidentTaskOptions();
  document.getElementById('inc-task').value = inc.tareaId;
  document.getElementById('inc-desc').value = inc.descripcion;
  document.getElementById('inc-actions').value = inc.acciones;
  document.getElementById('inc-severity').value = inc.gravedad;
  document.getElementById('inc-informed').value = inc.encargadoInformado;
  document.getElementById('inc-persons').value = inc.personasInformadas || '';
  document.getElementById('inc-status').value = inc.estado;

  document.getElementById('incident-modal').classList.add('active');
}

function closeIncidentModal() {
  document.getElementById('incident-modal').classList.remove('active');
}

function handleSaveIncident(e) {
  e.preventDefault();
  const editId = document.getElementById('incident-edit-id').value;
  const dateVal = document.getElementById('inc-date').value;
  const areaVal = document.getElementById('inc-area').value;
  const taskVal = document.getElementById('inc-task').value;
  const descVal = document.getElementById('inc-desc').value.trim();
  const actVal = document.getElementById('inc-actions').value.trim();
  const sevVal = document.getElementById('inc-severity').value;
  const infVal = document.getElementById('inc-informed').value;
  const personsVal = document.getElementById('inc-persons').value.trim();
  const statVal = document.getElementById('inc-status').value;

  const areaObj = appData.areas.find(a => a.id === areaVal);
  const taskObj = areaObj ? areaObj.tareas.find(t => t.id === taskVal) : null;

  if (editId) {
    const inc = appData.incidencias.find(i => i.id === editId);
    if (inc) {
      inc.fecha = dateVal;
      inc.areaId = areaVal;
      inc.areaNombre = areaObj ? areaObj.nombre : areaVal;
      inc.tareaId = taskVal;
      inc.tareaNombre = taskObj ? taskObj.nombre : '';
      inc.descripcion = descVal;
      inc.acciones = actVal;
      inc.gravedad = sevVal;
      inc.encargadoInformado = infVal;
      inc.personasInformadas = personsVal;
      inc.estado = statVal;
    }
  } else {
    const count = appData.incidencias.length + 1;
    const newId = `INC-${String(count).padStart(3, '0')}`;
    const newInc = {
      id: newId,
      fecha: dateVal,
      areaId: areaVal,
      areaNombre: areaObj ? areaObj.nombre : areaVal,
      tareaId: taskVal,
      tareaNombre: taskObj ? taskObj.nombre : '',
      gravedad: sevVal,
      descripcion: descVal,
      acciones: actVal,
      estado: statVal,
      encargadoInformado: infVal,
      personasInformadas: personsVal
    };
    appData.incidencias.unshift(newInc);
  }

  saveToLocalStorage();
  closeIncidentModal();
  renderAll();
  triggerToast('Incidencia guardada con éxito', '⚠️');
}

function deleteIncident(incId) {
  if (confirm(`¿Estás seguro de eliminar la incidencia ${incId}?`)) {
    appData.incidencias = appData.incidencias.filter(i => i.id !== incId);
    saveToLocalStorage();
    renderAll();
    triggerToast('Incidencia eliminada', '🗑️');
  }
}

// ==========================================
// EXPORT / IMPORT DATA JSON
// ==========================================

function exportDataJson() {
  if (!appData) return;
  const jsonStr = JSON.stringify(appData, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'data.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  triggerToast('Archivo data.json descargado', '💾');
}

function importDataJson(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (event) => {
    try {
      const parsed = JSON.parse(event.target.result);
      if (parsed.areas && parsed.incidencias) {
        appData = parsed;
        saveToLocalStorage();
        renderAll();
        triggerToast('Datos importados correctamente desde data.json', '✅');
      } else {
        alert('El archivo JSON no tiene la estructura requerida.');
      }
    } catch (err) {
      alert('Error al leer el archivo JSON: ' + err.message);
    }
  };
  reader.readAsText(file);
}

// ==========================================
// GITHUB CLOUD SYNC (API PUT /contents)
// ==========================================

function openGitHubModal() {
  // Load saved credentials from localStorage
  const savedOwner = localStorage.getItem('gh_owner') || '';
  const savedRepo = localStorage.getItem('gh_repo') || '';
  const savedBranch = localStorage.getItem('gh_branch') || 'main';
  const savedPath = localStorage.getItem('gh_path') || 'data.json';
  const savedToken = localStorage.getItem('gh_token') || '';

  document.getElementById('gh-owner').value = savedOwner;
  document.getElementById('gh-repo').value = savedRepo;
  document.getElementById('gh-branch').value = savedBranch;
  document.getElementById('gh-path').value = savedPath;
  document.getElementById('gh-token').value = savedToken;

  const statusEl = document.getElementById('gh-sync-status');
  statusEl.style.display = 'none';

  document.getElementById('github-modal').classList.add('active');
}

function closeGitHubModal() {
  document.getElementById('github-modal').classList.remove('active');
}

async function handleGitHubPublish(e) {
  e.preventDefault();
  const owner = document.getElementById('gh-owner').value.trim();
  const repo = document.getElementById('gh-repo').value.trim();
  const branch = document.getElementById('gh-branch').value.trim();
  const path = document.getElementById('gh-path').value.trim();
  const token = document.getElementById('gh-token').value.trim();

  // Save config to localStorage
  localStorage.setItem('gh_owner', owner);
  localStorage.setItem('gh_repo', repo);
  localStorage.setItem('gh_branch', branch);
  localStorage.setItem('gh_path', path);
  localStorage.setItem('gh_token', token);

  const statusEl = document.getElementById('gh-sync-status');
  const btn = document.getElementById('gh-publish-btn');
  statusEl.style.display = 'block';
  statusEl.className = 'badge badge-info';
  statusEl.innerHTML = '⏳ Conectando con GitHub...';
  btn.disabled = true;

  try {
    // 1. Get current file SHA if exists
    let sha = null;
    const getUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=${branch}`;
    const getRes = await fetch(getUrl, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/vnd.github.v3+json'
      }
    });

    if (getRes.ok) {
      const data = await getRes.json();
      sha = data.sha;
    }

    // 2. Prepare payload
    appData.proyecto.ultimaActualizacion = new Date().toISOString();
    const contentStr = JSON.stringify(appData, null, 2);
    // UTF-8 base64 encoding
    const base64Content = btoa(unescape(encodeURIComponent(contentStr)));

    const putPayload = {
      message: `Actualización de avance diario - ${getTodayDateString()} [Dashboard]`,
      content: base64Content,
      branch: branch
    };
    if (sha) {
      putPayload.sha = sha;
    }

    // 3. Commit to GitHub
    const putUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
    const putRes = await fetch(putUrl, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(putPayload)
    });

    if (!putRes.ok) {
      const errorJson = await putRes.json();
      throw new Error(errorJson.message || 'Error en la respuesta de GitHub');
    }

    statusEl.className = 'badge badge-success';
    statusEl.innerHTML = '✅ ¡Publicado en GitHub con éxito! La web se actualizará en unos instantes.';
    triggerToast('¡Avance publicado exitosamente en GitHub!', '🚀');
    saveToLocalStorage();
    renderAll();
  } catch (err) {
    console.error('Error publicando en GitHub:', err);
    statusEl.className = 'badge badge-danger';
    statusEl.innerHTML = `❌ Error: ${err.message}. Verifica el token, el nombre del repositorio y los permisos.`;
  } finally {
    btn.disabled = false;
  }
}

// ==========================================
// CREATOR AUTHENTICATION (PIN PROTECTION)
// ==========================================

const CREATOR_PIN = '316881';
let authPendingAction = null;

function isCreatorAuthenticated() {
  return sessionStorage.getItem('creator_unlocked') === 'true';
}

function openAuthModal(callbackAction = null) {
  authPendingAction = callbackAction;
  const modal = document.getElementById('auth-modal');
  const input = document.getElementById('auth-password-input');
  const errorMsg = document.getElementById('auth-error-msg');
  if (input) input.value = '';
  if (errorMsg) errorMsg.style.display = 'none';
  if (modal) modal.classList.add('active');
  setTimeout(() => { if (input) input.focus(); }, 100);
}

function closeAuthModal() {
  const modal = document.getElementById('auth-modal');
  if (modal) modal.classList.remove('active');
  authPendingAction = null;
}

function handleAuthSubmit(e) {
  e.preventDefault();
  const input = document.getElementById('auth-password-input');
  const errorMsg = document.getElementById('auth-error-msg');
  const enteredPin = input ? input.value.trim() : '';

  if (enteredPin === CREATOR_PIN) {
    sessionStorage.setItem('creator_unlocked', 'true');
    closeAuthModal();
    triggerToast('Acceso concedido. Bienvenido, mi creador.', '🔓');

    if (authPendingAction && typeof authPendingAction === 'function') {
      const act = authPendingAction;
      authPendingAction = null;
      act();
    } else {
      switchViewMode('editor');
    }
  } else {
    if (errorMsg) errorMsg.style.display = 'block';
    if (input) {
      input.value = '';
      input.focus();
    }
  }
}

// ==========================================
// VIEW SWITCHING (DASHBOARD <-> EDITOR)
// ==========================================

let currentViewMode = 'dashboard'; // 'dashboard' or 'editor'

function toggleViewMode() {
  if (currentViewMode === 'dashboard') {
    if (!isCreatorAuthenticated()) {
      openAuthModal(() => switchViewMode('editor'));
      return;
    }
    switchViewMode('editor');
  } else {
    switchViewMode('dashboard');
  }
}

function switchViewMode(mode) {
  currentViewMode = mode;
  const tabDashboard = document.getElementById('tab-dashboard') || document.getElementById('tab-manager');
  const tabEditor = document.getElementById('tab-editor');
  const btnToggle = document.getElementById('btn-toggle-mode');

  if (mode === 'dashboard') {
    if (tabDashboard) tabDashboard.classList.add('active');
    if (tabEditor) tabEditor.classList.remove('active');
    if (btnToggle) {
      btnToggle.className = 'btn btn-primary btn-sm no-print';
      btnToggle.innerHTML = '✏️ Modo Edición / Registro';
      btnToggle.title = 'Entrar al modo de registro para actualizar avances, sincerar metas o reportar incidencias';
    }
    renderManagerDashboard();
  } else {
    if (tabDashboard) tabDashboard.classList.remove('active');
    if (tabEditor) tabEditor.classList.add('active');
    if (btnToggle) {
      btnToggle.className = 'btn btn-success btn-sm no-print';
      btnToggle.innerHTML = '📊 Volver al Tablero de Avance';
      btnToggle.title = 'Regresar al tablero general de monitoreo';
    }
    renderEditorView();
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Backward compatibility alias
function switchTab(tabName) {
  switchViewMode(tabName === 'editor' ? 'editor' : 'dashboard');
}

function triggerToast(message, icon = '✅') {
  const toast = document.getElementById('toast');
  const msg = document.getElementById('toast-message');
  const ico = document.getElementById('toast-icon');

  if (!toast || !msg || !ico) return;

  msg.textContent = message;
  ico.textContent = icon;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

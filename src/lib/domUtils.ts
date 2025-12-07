/**
 * domUtils.ts
 * Helpers y constantes para selectores DOM
 * Centraliza "magic strings" de selectors para mejor mantenibilidad
 */

// Selectores para componente FilterBar
export const FILTER_SELECTORS = {
  CHIPS_CONTAINER: '.filter-chips-container',
  FILTER_CHIP: '[data-filter-name][data-filter-section]',
  ACTIVE_CHIPS: '[data-filter-active="true"]',
  CLEAR_BTN: '#filter-clear-btn',
  COUNTER_TEXT: '#filter-counter-text',
  FILTER_LINE: '#filter-line',
} as const;

// Selectores para componente Projects
export const PROJECT_SELECTORS = {
  GRID: '#projects-grid',
  CARDS: '[data-project-slug][data-tech]',
  OVERLAY: '#project-overlay',
  OVERLAY_BG: '#overlay-bg',
  DETAIL_WRAPPER: '.project-detail-wrapper',
  CLOSE_MODAL_BTN: '.close-modal-btn',
} as const;

// Selectores para LoadingIndicator
export const LOADING_SELECTORS = {
  INDICATOR: '#loading-indicator',
} as const;

// Event names
export const EVENTS = {
  FILTER_CHANGED: 'filter-changed',
} as const;

// Data attributes
export const DATA_ATTRIBUTES = {
  FILTER_NAME: 'data-filter-name',
  FILTER_SECTION: 'data-filter-section',
  FILTER_ACTIVE: 'data-filter-active',
  PROJECT_SLUG: 'data-project-slug',
  TECH_STACK: 'data-tech',
  REMOVE_X: 'data-remove-x',
} as const;

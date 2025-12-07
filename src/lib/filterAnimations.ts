import gsap from 'gsap';

/**
 * ANIMACIÓN ELITE: GSAP Timeline Optimizada + ZERO Reflow
 *
 * ARQUITECTURA:
 * 1. Preparar elemento (display reset, set initial state)
 * 2. Animar suavemente (90ms total)
 * 3. Cleanup (display:none para hidden)
 *
 * TODO SE HACE EN LA TIMELINE, NO FUERA
 *
 * @param visibleCards - Elementos que van a aparecer/estar visibles
 * @param hiddenCards - Elementos que van a desaparecer
 * @param duration - Duración total en segundos (default 0.09 = 90ms)
 */
export const animateProjectsFilter = (
  visibleCards: HTMLElement[],
  hiddenCards: HTMLElement[],
  duration: number = 0.09
): gsap.core.Timeline => {
  const tl = gsap.timeline({
    defaults: {
      duration: duration * 0.6, // 54ms por defecto para visible
      ease: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    },
  });

  // ====== SETUP INICIAL ======
  // Todo en UNA sola línea de timeline para batch DOM operations
  tl.call(
    () => {
      // Mostrar visible cards
      visibleCards.forEach((card) => {
        card.style.display = '';
        card.classList.remove('hidden');
      });

      // Ocultar hidden cards
      hiddenCards.forEach((card) => {
        card.style.display = 'none';
        card.classList.add('hidden');
      });
    },
    [],
    0
  );

  // ====== SET INITIAL STATE ======
  // Esto también en timeline para sincronizar
  tl.set(
    visibleCards,
    {
      opacity: 0,
      scale: 0.92,
      rotateZ: 1.2,
      y: -6,
    },
    0 // Posición: mismo tiempo que el call anterior
  );

  // ====== ANIMACIÓN ENTRADA: RÁPIDA Y FLUIDA ======
  visibleCards.forEach((card, index) => {
    tl.to(
      card,
      {
        opacity: 1,
        scale: 1,
        rotateZ: 0,
        y: 0,
        duration: duration * 0.6, // 54ms
      },
      index * 3 // Stagger: 3ms (ultra-rápido)
    );
  });

  // ====== ANIMACIÓN SALIDA: PARALELA (NO espera entrada) ======
  hiddenCards.forEach((card, index) => {
    tl.to(
      card,
      {
        opacity: 0,
        scale: 0.85,
        rotateZ: -1.5,
        y: 8,
        duration: duration * 0.4, // 36ms (más rápido)
        ease: 'power2.in',
      },
      index * 2.5 // Stagger: 2.5ms
    );
  });

  return tl;
};

/**
 * Anima el pill cuando se activa/desactiva
 *
 * @param pill - Elemento del pill
 * @param isActivating - Si se está activando o desactivando
 */
export const animateFilterPill = (
  pill: HTMLElement,
  isActivating: boolean
): void => {
  const tl = gsap.timeline();

  // Click feedback
  tl.to(pill, { scale: 0.95, duration: 0.1, ease: 'power2.out' }, 0).to(
    pill,
    { scale: 1, duration: 0.15, ease: 'elastic.out(1, 0.3)' },
    0.1
  );

  if (isActivating) {
    // Color transition on separate timeline for smoother feel
    gsap.to(pill, {
      borderColor: 'var(--color-text-primary)',
      boxShadow: '0 0 0.25rem rgb(var(--color-text-primary) / 0.2)',
      duration: 0.3,
      ease: 'power2.out',
    });
  }
};

/**
 * Anima el contador de filtros
 * Transición suave de números
 *
 * @param counterElement - Elemento que contiene el texto
 * @param fromNumber - Número anterior
 * @param toNumber - Número nuevo
 */
export const animateCounter = (
  counterElement: HTMLElement,
  fromNumber: number,
  toNumber: number
): gsap.core.Timeline => {
  const tl = gsap.timeline();

  if (!counterElement) return tl;

  // Animación de número
  const obj = { value: fromNumber };

  tl.to(obj, {
    value: toNumber,
    duration: 0.4,
    ease: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    snap: { value: 1 }, // Snap a números enteros
    onUpdate: () => {
      counterElement.textContent = `Mostrando ${Math.round(obj.value)} proyectos`;
    },
  });

  return tl;
};

/**
 * Anima el botón "Limpiar filtros" de entrada/salida
 *
 * @param button - Elemento del botón
 * @param isShowing - Si debe mostrarse o ocultarse
 */
export const animateClearButton = (
  button: HTMLElement,
  isShowing: boolean
): gsap.core.Timeline => {
  const tl = gsap.timeline();

  if (isShowing) {
    gsap.set(button, { opacity: 0, pointerEvents: 'none' });
    tl.to(button, {
      opacity: 1,
      pointerEvents: 'auto',
      duration: 0.2,
      ease: 'power2.out',
    });
  } else {
    tl.to(button, {
      opacity: 0,
      pointerEvents: 'none',
      duration: 0.2,
      ease: 'power2.in',
    });
  }

  return tl;
};

/**
 * Anima la línea separadora del filter bar
 *
 * @param line - Elemento de la línea
 * @param isActive - Si debe brillar o no
 */
export const animateFilterLine = (
  line: HTMLElement,
  isActive: boolean
): gsap.core.Timeline => {
  const tl = gsap.timeline();

  if (isActive) {
    tl.to(line, {
      opacity: 1,
      duration: 0.3,
      ease: 'power2.out',
    });
  } else {
    tl.to(line, {
      opacity: 0,
      duration: 0.3,
      ease: 'power2.in',
    });
  }

  return tl;
};

/**
 * Limpia todos los filtros con animación
 *
 * @param pills - Elementos de los pills
 */
export const animateClearAllFilters = (
  pills: HTMLElement[]
): gsap.core.Timeline => {
  const tl = gsap.timeline();

  pills.forEach((pill, index) => {
    tl.to(
      pill,
      {
        scale: 0.9,
        opacity: 0.5,
        duration: 0.15,
        ease: 'power2.out',
      },
      index * 20
    );

    tl.to(
      pill,
      {
        scale: 1,
        opacity: 1,
        duration: 0.15,
        ease: 'back.out(1.7)',
      },
      index * 20 + 0.1
    );
  });

  return tl;
};

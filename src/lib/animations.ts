import gsap from 'gsap';

// Caracteres para el efecto "Matrix/Glitch"
const CHARS = 'ABCD&/*E_?%$%6%^&FGHIJ+=)(^][{}K%LMNOPQRST#UVWX$YZ01!23456789';

/**
 * Función reutilizable para animar texto con efecto Scramble.
 * OPTIMIZADO: Evita actualizaciones innecesarias del DOM.
 * 
 * @param element - El elemento DOM a animar.
 * @param newText - El texto final que debe quedar escrito.
 * @param duration - Duración en segundos.
 * @param ease - Tipo de easing (suavizado).
 * @returns gsap.core.Timeline
 */
export const scrambleText = (
  element: HTMLElement,
  newText: string,
  duration: number = 1.2, // Opción 2: 1.2s (cinematográfico)
  ease: string = 'power3.out' // Cambio: power4.out → power3.out (más suave)
): gsap.core.Timeline => {
  const tl = gsap.timeline();
  const length = newText.length;
  const progress = { value: 0 };
  let frameCounter = 0;
  let lastOutput = ''; // Cache para evitar actualizaciones innecesarias

  tl.to(progress, {
    value: 1,
    duration: duration,
    ease: ease,
    onUpdate: () => {
      const p = progress.value;
      const revealIdx = Math.floor(p * length);
      let output = '';
      frameCounter++;

      for (let i = 0; i < length; i++) {
        if (i < revealIdx) {
          output += newText[i];
        } else {
          // Frame Skipping: Cambio cada 3 frames para efecto cinemático
          if (frameCounter % 3 === 0) {
            const randomChar = CHARS[Math.floor(Math.random() * CHARS.length)];
            element.dataset[`char${i}`] = randomChar;
            output += randomChar;
          } else {
            output +=
              element.dataset[`char${i}`] ||
              CHARS[Math.floor(Math.random() * CHARS.length)];
          }
        }
      }

      // OPTIMIZACIÓN: Solo actualizar DOM si el contenido cambió
      if (output !== lastOutput) {
        element.innerText = output;
        lastOutput = output;
      }
    },
  });

  return tl;
};

/**
 * Función para limpiar y resetear un elemento de texto.
 * Se usa para garantizar estado limpio antes de nuevas animaciones.
 * 
 * @param element - El elemento a limpiar
 * @param targetText - El texto final deseado
 */
export const resetTextElement = (
  element: HTMLElement,
  targetText: string
): void => {
  element.innerText = targetText;
  // Limpiar datos almacenados de caracteres previos
  Object.keys(element.dataset).forEach((key) => {
    if (key.startsWith('char')) {
      delete element.dataset[key];
    }
  });
};

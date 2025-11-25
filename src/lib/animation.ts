import gsap from 'gsap';

// Caracteres para el efecto "Matrix/Glitch"
const CHARS = 'ABCD&/*E_?%$%6%^&FGHIJ+=)(^][{}K%LMNOPQRST#UVWX$YZ01!23456789';

/**
 * Función reutilizable para animar texto con efecto Scramble.
 */
export const scrambleText = (
  element: HTMLElement,
  newText: string,
  duration: number = 1.0,
  ease: string = 'power4.out'
): gsap.core.Timeline => {
  const tl = gsap.timeline();
  const length = newText.length;
  const progress = { value: 0 };
  let frameCounter = 0;

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
      element.innerText = output;
    },
  });

  return tl;
};

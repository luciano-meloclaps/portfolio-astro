/**
 * formValidation.ts
 * ==================
 * Sistema de validación en tiempo real para formularios
 * TypeScript tipado fuerte, sin dependencias externas
 *
 * USO:
 * import { validateEmail, validateRequired } from '@/lib/formValidation';
 * const emailError = validateEmail('user@example.com');
 * if (emailError) console.log(emailError); // null si es válido
 */

export interface ValidationRule {
  name: string;
  validate: (value: string) => string | null;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

/**
 * Validación de campo requerido
 */
export function validateRequired(value: string, fieldName: string): string | null {
  if (!value || !value.trim()) {
    return `${fieldName} es requerido`;
  }
  return null;
}

/**
 * Validación de email (RFC 5322 simplificado)
 * Regex tomado de WHATWG HTML spec
 */
export function validateEmail(value: string): string | null {
  if (!value || !value.trim()) {
    return 'El email es requerido';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(value)) {
    return 'Por favor, ingresa un email válido';
  }

  return null;
}

/**
 * Validación de nombre (mínimo 2 caracteres, máximo 100)
 */
export function validateName(value: string): string | null {
  if (!value || !value.trim()) {
    return 'El nombre es requerido';
  }

  if (value.trim().length < 2) {
    return 'El nombre debe tener al menos 2 caracteres';
  }

  if (value.length > 100) {
    return 'El nombre no puede exceder 100 caracteres';
  }

  return null;
}

/**
 * Validación de asunto (mínimo 3 caracteres, máximo 200)
 */
export function validateSubject(value: string): string | null {
  if (!value || !value.trim()) {
    return 'El asunto es requerido';
  }

  if (value.trim().length < 3) {
    return 'El asunto debe tener al menos 3 caracteres';
  }

  if (value.length > 200) {
    return 'El asunto no puede exceder 200 caracteres';
  }

  return null;
}

/**
 * Validación de mensaje (mínimo 10 caracteres, máximo 5000)
 */
export function validateMessage(value: string): string | null {
  if (!value || !value.trim()) {
    return 'El mensaje es requerido';
  }

  if (value.trim().length < 10) {
    return 'El mensaje debe tener al menos 10 caracteres';
  }

  if (value.length > 5000) {
    return 'El mensaje no puede exceder 5000 caracteres';
  }

  return null;
}

/**
 * Validador de campo genérico que combina múltiples reglas
 */
export function validateField(
  value: string,
  fieldType: 'name' | 'email' | 'subject' | 'message'
): string | null {
  switch (fieldType) {
    case 'name':
      return validateName(value);
    case 'email':
      return validateEmail(value);
    case 'subject':
      return validateSubject(value);
    case 'message':
      return validateMessage(value);
    default:
      return validateRequired(value, 'Campo');
  }
}

/**
 * Validar formulario completo
 */
export function validateContactForm(formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): ValidationResult {
  const errors: Record<string, string> = {};

  // Validar cada campo
  const nameError = validateName(formData.name);
  if (nameError) errors.name = nameError;

  const emailError = validateEmail(formData.email);
  if (emailError) errors.email = emailError;

  const subjectError = validateSubject(formData.subject);
  if (subjectError) errors.subject = subjectError;

  const messageError = validateMessage(formData.message);
  if (messageError) errors.message = messageError;

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Sanitizar input para prevenir XSS (básico)
 * Para producción, usar una librería especializada
 */
export function sanitizeInput(value: string): string {
  return value
    .replace(/[<>]/g, '') // Remover < y >
    .trim();
}

/**
 * Crear objeto FormData limpio para enviar
 */
export function createFormData(formElement: HTMLFormElement): {
  name: string;
  email: string;
  subject: string;
  message: string;
} | null {
  const formData = new FormData(formElement);

  const name = sanitizeInput(formData.get('name') as string);
  const email = sanitizeInput(formData.get('email') as string);
  const subject = sanitizeInput(formData.get('subject') as string);
  const message = sanitizeInput(formData.get('message') as string);

  if (!name || !email || !subject || !message) {
    return null;
  }

  return { name, email, subject, message };
}

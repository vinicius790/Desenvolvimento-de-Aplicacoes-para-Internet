import { z } from 'zod';
import { nanoid } from 'nanoid';

/** Máscara e helpers de telefone BR. */
export function onlyDigits(value) {
  return String(value || '').replace(/\D/g, '');
}

export function maskPhone(value) {
  const digits = onlyDigits(value).slice(0, 11);
  if (digits.length === 0) return '';
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export function isValidPhone(value) {
  const digits = onlyDigits(value);
  return digits.length === 10 || digits.length === 11;
}

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(value) {
  return EMAIL_REGEX.test(String(value || '').trim());
}

export function isNonEmpty(value) {
  return String(value || '').trim().length > 0;
}

/** Schema Zod — fonte da verdade da validação do formulário. */
export const colaboradorSchema = z.object({
  nome: z
    .string()
    .trim()
    .min(2, 'Nome deve ter pelo menos 2 caracteres.'),
  email: z.string().trim().email('Informe um e-mail válido.'),
  telefone: z
    .string()
    .refine((v) => isValidPhone(v), 'Telefone deve ter 10 ou 11 dígitos.'),
  time: z.string().min(1, 'Selecione um tipo / time.'),
  observacoes: z.string().max(500, 'Observações: no máximo 500 caracteres.').optional().or(z.literal('')),
  imagem: z
    .string()
    .url('URL de imagem inválida.')
    .optional()
    .or(z.literal('')),
  /** Código de acesso demo — NUNCA renderizado nos cards; só localStorage auth blob. */
  codigoAcesso: z.string().optional().or(z.literal('')),
});

/**
 * Validação imperativa (compatível com testes unitários e RHF).
 * @returns {{ valid: boolean, errors: Record<string, string> }}
 */
export function validateColaborador(data) {
  const result = colaboradorSchema.safeParse(data);
  if (result.success) {
    return { valid: true, errors: {} };
  }
  const errors = {};
  for (const issue of result.error.issues) {
    const key = issue.path[0];
    if (key && !errors[key]) {
      errors[key] = issue.message;
    }
  }
  // Mapear nomes legados dos testes
  if (errors.nome === undefined && !data?.nome) {
    /* schema já cobre */
  }
  return { valid: false, errors };
}

/** Gera id com nanoid. */
export function generateId() {
  return `colab-${nanoid(10)}`;
}

/** Hash demo (NÃO é criptografia segura — apenas ofuscação local para a aula). */
export async function hashDemo(texto) {
  if (!texto) return '';
  if (typeof window !== 'undefined' && window.crypto?.subtle) {
    const enc = new TextEncoder().encode(`condo-demo:${texto}`);
    const buf = await window.crypto.subtle.digest('SHA-256', enc);
    return Array.from(new Uint8Array(buf))
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('');
  }
  // fallback node/test
  let h = 0;
  const s = `condo-demo:${texto}`;
  for (let i = 0; i < s.length; i += 1) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return `demo-${h.toString(16)}`;
}

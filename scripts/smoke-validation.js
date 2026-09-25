/**
 * Smoke node: valida helpers sem React.
 * Uso: node scripts/smoke-validation.js
 */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function onlyDigits(v) {
  return String(v || '').replace(/\D/g, '');
}
function isValidPhone(v) {
  const d = onlyDigits(v);
  return d.length === 10 || d.length === 11;
}
function maskPhone(value) {
  const digits = onlyDigits(value).slice(0, 11);
  if (digits.length === 0) return '';
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10)
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

const ok =
  EMAIL_REGEX.test('a@b.com') &&
  !EMAIL_REGEX.test('x') &&
  isValidPhone('11987654321') &&
  maskPhone('11987654321') === '(11) 98765-4321';

if (!ok) {
  console.error('SMOKE FAIL');
  process.exit(1);
}
console.log('SMOKE OK — validation helpers');

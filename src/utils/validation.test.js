import {
  maskPhone,
  isValidEmail,
  isValidPhone,
  isNonEmpty,
  validateColaborador,
  onlyDigits,
} from './validation';

describe('validation utils', () => {
  test('onlyDigits remove não-dígitos', () => {
    expect(onlyDigits('(11) 98765-4321')).toBe('11987654321');
  });

  test('maskPhone formata celular 11 dígitos', () => {
    expect(maskPhone('11987654321')).toBe('(11) 98765-4321');
  });

  test('maskPhone formata fixo 10 dígitos', () => {
    expect(maskPhone('1133334444')).toBe('(11) 3333-4444');
  });

  test('isValidEmail aceita e rejeita corretamente', () => {
    expect(isValidEmail('a@b.com')).toBe(true);
    expect(isValidEmail('invalido')).toBe(false);
    expect(isValidEmail('')).toBe(false);
  });

  test('isValidPhone exige 10 ou 11 dígitos', () => {
    expect(isValidPhone('(11) 98765-4321')).toBe(true);
    expect(isValidPhone('(11) 3333-4444')).toBe(true);
    expect(isValidPhone('123')).toBe(false);
  });

  test('isNonEmpty', () => {
    expect(isNonEmpty('  x  ')).toBe(true);
    expect(isNonEmpty('   ')).toBe(false);
  });

  test('validateColaborador falha sem campos obrigatórios', () => {
    const result = validateColaborador({
      nome: '',
      email: '',
      telefone: '',
      time: '',
    });
    expect(result.valid).toBe(false);
    expect(result.errors.nome).toBeDefined();
    expect(result.errors.email).toBeDefined();
    expect(result.errors.telefone).toBeDefined();
    expect(result.errors.time).toBeDefined();
  });

  test('validateColaborador passa com dados válidos', () => {
    const result = validateColaborador({
      nome: 'Maria Silva',
      email: 'maria@condo.com',
      telefone: '(11) 98765-4321',
      time: 'Condômino',
      observacoes: 'Bloco A',
      imagem: '',
      codigoAcesso: '',
    });
    expect(result.valid).toBe(true);
    expect(Object.keys(result.errors)).toHaveLength(0);
  });

  test('validateColaborador rejeita e-mail inválido', () => {
    const result = validateColaborador({
      nome: 'João',
      email: 'nao-email',
      telefone: '11987654321',
      time: 'Síndico',
    });
    expect(result.valid).toBe(false);
    expect(result.errors.email).toBeDefined();
  });
});

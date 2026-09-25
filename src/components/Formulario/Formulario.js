import PropTypes from 'prop-types';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { UserPlus } from 'lucide-react';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { colaboradorSchema, maskPhone, hashDemo } from '../../utils/validation';
import ptBR from '../../i18n/ptBR';
import './Formulario.css';

const defaultValues = {
  nome: '',
  email: '',
  telefone: '',
  time: '',
  observacoes: '',
  imagem: '',
  codigoAcesso: '',
};

/**
 * Formulário controlado com React Hook Form + Zod.
 * aoColaboradorCadastrado recebe dados SEM senha/código em claro para o card.
 */
export function Formulario({ times, aoColaboradorCadastrado }) {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(colaboradorSchema),
    defaultValues,
    mode: 'onBlur',
  });

  const onSubmit = async (data) => {
    const codigoHash = data.codigoAcesso ? await hashDemo(data.codigoAcesso) : '';
    const { codigoAcesso: _drop, ...rest } = data;
    await aoColaboradorCadastrado(rest, codigoHash);
    toast.success(ptBR.toast.criado);
    reset(defaultValues);
  };

  return (
    <section className="formulario" aria-labelledby="form-titulo">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <h2 id="form-titulo">
          <UserPlus size={28} aria-hidden="true" /> {ptBR.form.titulo}
        </h2>

        <Controller
          name="nome"
          control={control}
          render={({ field }) => (
            <CampoTexto
              label={ptBR.form.nome}
              placeholder="Digite o nome completo"
              valor={field.value}
              aoAlterado={field.onChange}
              obrigatorio
              erro={errors.nome?.message}
              id="campo-nome"
            />
          )}
        />

        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <CampoTexto
              label={ptBR.form.email}
              placeholder="Digite o e-mail"
              valor={field.value}
              aoAlterado={field.onChange}
              tipo="email"
              obrigatorio
              erro={errors.email?.message}
              id="campo-email"
            />
          )}
        />

        <Controller
          name="telefone"
          control={control}
          render={({ field }) => (
            <CampoTexto
              label={ptBR.form.telefone}
              placeholder="(11) 98765-4321"
              valor={field.value}
              aoAlterado={(v) => field.onChange(maskPhone(v))}
              tipo="tel"
              obrigatorio
              erro={errors.telefone?.message}
              id="campo-telefone"
              maxLength={16}
            />
          )}
        />

        <Controller
          name="time"
          control={control}
          render={({ field }) => (
            <ListaSuspensa
              label={ptBR.form.time}
              itens={times}
              valor={field.value}
              aoAlterado={field.onChange}
              obrigatorio
              erro={errors.time?.message}
              id="campo-time"
            />
          )}
        />

        <Controller
          name="observacoes"
          control={control}
          render={({ field }) => (
            <CampoTexto
              label={ptBR.form.observacoes}
              placeholder="Bloco, apartamento, turno… (opcional)"
              valor={field.value}
              aoAlterado={field.onChange}
              erro={errors.observacoes?.message}
              id="campo-observacoes"
              maxLength={500}
            />
          )}
        />

        <Controller
          name="imagem"
          control={control}
          render={({ field }) => (
            <CampoTexto
              label={ptBR.form.imagem}
              placeholder="https://…"
              valor={field.value}
              aoAlterado={field.onChange}
              tipo="url"
              erro={errors.imagem?.message}
              id="campo-imagem"
            />
          )}
        />

        <Controller
          name="codigoAcesso"
          control={control}
          render={({ field }) => (
            <CampoTexto
              label={ptBR.form.senhaDemo}
              placeholder="Opcional — armazenado só como hash local"
              valor={field.value}
              aoAlterado={field.onChange}
              tipo="password"
              erro={errors.codigoAcesso?.message}
              id="campo-codigo"
            />
          )}
        />

        <Botao tipo="submit" disabled={isSubmitting}>
          {ptBR.form.submit}
        </Botao>
      </form>
    </section>
  );
}

Formulario.propTypes = {
  times: PropTypes.arrayOf(PropTypes.string).isRequired,
  aoColaboradorCadastrado: PropTypes.func.isRequired,
};

export default Formulario;

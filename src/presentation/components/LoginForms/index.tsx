import { Login } from "@/application/usecases/Login";
import { Loading } from "@/presentation/components/Loading";
import { useAuth } from "@/presentation/hooks/use-auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignIn } from "@phosphor-icons/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Input } from "vbss-ui";
import { z } from "zod";
import * as S from "./styles";

const loginSchema = z.object({
  username: z.string().min(5, {
    message: "O usuário é obrigatório.",
  }),
  password: z.string().min(5, {
    message: "A senha é obrigatória.",
  }),
});

type LoginForms = z.infer<typeof loginSchema>;

export const LoginForm = () => {
  const { login } = useAuth();
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, formState, reset } = useForm<LoginForms>({
    resolver: zodResolver(loginSchema),
  });

  const handleSubmitForm = async (data: LoginForms): Promise<void> => {
    try {
      setIsLoading(true);
      const loginUsecase = new Login();
      const { username, role, token } = await loginUsecase.execute(data);
      login({ username, role, token });
      setIsLoading(false);
      setError(false);
      window.location.reload();
    } catch {
      reset();
      setError(true);
      setIsLoading(false);
    }
  };

  return (
    <S.FormContainer>
      <S.Form onSubmit={handleSubmit(handleSubmitForm)}>
        <Input
          label="Usuário:"
          placeholder="Digite seu Usuário"
          error={formState.errors.username?.message}
          {...register("username")}
          disabled={isLoading}
        />
        <Input
          label="Senha:"
          placeholder="Digite seu Senha"
          error={formState.errors.password?.message}
          {...register("password")}
          disabled={isLoading}
          type="password"
          showPasswordSwitch
        />
        <S.FormSubmitContainer error={error}>
          {error && (
            <S.ErrorMessage>
              * Usuário ou Senha invalidos. Tente novamente.
            </S.ErrorMessage>
          )}
          <Button type="submit" disabled={isLoading}>
            {isLoading ? (
              <S.LoadingContainer>
                <Loading />
              </S.LoadingContainer>
            ) : (
              <>
                <SignIn color="white" width="1rem" height="1rem" />
                Entrar
              </>
            )}
          </Button>
        </S.FormSubmitContainer>
      </S.Form>
    </S.FormContainer>
  );
};

import { GetBatchFilter } from "@/application/usecases/GetBatchFilter";
import { GetBatchFiltersOutput } from "@/application/usecases/dto/GetBatchFilters.dto";
import { Loading } from "@/presentation/components/Loading";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eraser, MagnifyingGlass } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Input } from "vbss-ui";
import { z } from "zod";
import * as S from "./styles";

const batchSearchSchema = z.object({
  search_mask: z.string().optional(),
  sampler: z.string().optional(),
  scheduler: z.string().optional(),
  status: z.string().optional(),
  origin: z.string().optional(),
  modelName: z.string().optional(),
});

type BachSearchForms = z.infer<typeof batchSearchSchema>;

interface BatchFiltersProps {
  isLoading: boolean;
  setFilters: (filters: BachSearchForms) => void;
}

export const BatchFilters = ({ isLoading, setFilters }: BatchFiltersProps) => {
  const [batchFilters, setBatchFilters] = useState<GetBatchFiltersOutput>();
  const { register, handleSubmit, reset } = useForm<BachSearchForms>({
    resolver: zodResolver(batchSearchSchema),
    defaultValues: {
      search_mask: "",
      sampler: "",
      scheduler: "",
      status: "",
      origin: "",
      modelName: "",
    },
  });

  useEffect(() => {
    const getBatchFilter = new GetBatchFilter();
    const getFilters = async () => {
      const filters = await getBatchFilter.execute();
      setBatchFilters(filters);
    };
    getFilters();
  }, []);

  const handleSubmitForm = async (data: BachSearchForms): Promise<void> => {
    setFilters(data);
  };

  return (
    <S.FormContainer>
      <S.Form onSubmit={handleSubmit(handleSubmitForm)}>
        <S.FormContentContainer>
          <Input
            placeholder="Buscar por Prompt ou negativePrompt"
            {...register("search_mask")}
            disabled={isLoading}
          />
        </S.FormContentContainer>
        <S.FormContentContainer>
          <S.Select {...register("sampler")} disabled={isLoading}>
            <option value="" disabled defaultChecked>
              Sampler
            </option>
            {batchFilters?.sampler.map(
              (filter) =>
                filter && (
                  <option key={filter} value={filter}>
                    {filter}
                  </option>
                )
            )}
          </S.Select>
          <S.Select {...register("scheduler")} disabled={isLoading}>
            <option value="" disabled defaultChecked>
              Scheduler
            </option>
            {batchFilters?.scheduler.map(
              (filter) =>
                filter && (
                  <option key={filter} value={filter}>
                    {filter}
                  </option>
                )
            )}
          </S.Select>
          <S.Select {...register("status")} disabled={isLoading}>
            <option value="" disabled defaultChecked>
              Status
            </option>
            {batchFilters?.status.map(
              (filter) =>
                filter && (
                  <option key={filter} value={filter}>
                    {filter}
                  </option>
                )
            )}
          </S.Select>
          <S.Select {...register("origin")} disabled={isLoading}>
            <option value="" disabled defaultChecked>
              Origem
            </option>
            {batchFilters?.origin.map(
              (filter) =>
                filter && (
                  <option key={filter} value={filter}>
                    {filter}
                  </option>
                )
            )}
          </S.Select>
          <S.Select {...register("modelName")} disabled={isLoading}>
            <option value="" disabled defaultChecked>
              Modelo
            </option>
            {batchFilters?.modelName.map(
              (filter) =>
                filter && (
                  <option key={filter} value={filter}>
                    {filter}
                  </option>
                )
            )}
          </S.Select>
          <S.FormSubmitContainer>
            <Button type="submit" onClick={() => reset()}>
              <Eraser color="white" width="1rem" height="1rem" />
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <S.LoadingContainer>
                  <Loading />
                </S.LoadingContainer>
              ) : (
                <>
                  <MagnifyingGlass color="white" width="1rem" height="1rem" />
                </>
              )}
            </Button>
          </S.FormSubmitContainer>
        </S.FormContentContainer>
      </S.Form>
    </S.FormContainer>
  );
};

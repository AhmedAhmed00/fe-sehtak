import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function useUpdate(key, resourse, fn) {
  const queryClient = useQueryClient();

  const {
    mutate,
    isError: isErrorUpdatihg,
    data,
    status: updatingStatus,
  } = useMutation({
    mutationFn: ({ id, body }) => fn(id, body),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [key],
      });
      toast.success(`تم تعديل ${resourse} بنجاح`);
    },
    onError: () => {
      toast.error(`تعذر تعديل ${resourse}`);
    },
  });
  return { mutate, isErrorUpdatihg, data, updatingStatus };
}

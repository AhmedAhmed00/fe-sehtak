import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'



export default function usePost(key, resourse,addfunction) {
        const queryClient = useQueryClient()

    const { mutate, isError: isErrorAdding, data, status: addingStatus } = useMutation({
        mutationFn: addfunction,

      onSuccess: () =>{ 
            queryClient.invalidateQueries({
                queryKey: [key],
            })
        toast.success(`تمت إضافة ${resourse} بنجاح`)
      },
      onError:()=>{ 
        toast.error(`تعذر إضافة ${resourse}`)
      }

        
    })
    return { mutate, isErrorAdding, data, addingStatus }
}

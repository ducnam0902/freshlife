import { Button, FormControl, FormControlLabel, FormHelperText, FormLabel, Input, MenuItem, Radio, RadioGroup, Select, Stack } from '@mui/material';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { supabase } from '@/services/supabaseServices';
import { z } from 'zod';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { hideLoading, showLoading } from '@/redux/loading/loading';
import { toast } from 'react-toastify';
interface IAddTask {
    onClose: () => void
}

interface TaskForm {
    task: string,
    type: string,
    priority: string,
}

const TaskSchema = z.object({
    task: z
        .string({ message: "Task is required" })
        .min(3, { message: "Task is must be at least 3 characters" }),
    type: z.string({ message: 'Type is required' }),
    priority: z.string({ message: 'Priority is required' }),
})

const AddTask = ({ onClose }: IAddTask) => {
    const session = useAppSelector(state => state.auth.session);
    const dispatch = useAppDispatch();
    const { control, handleSubmit, formState: { errors } } = useForm<TaskForm>({
        resolver: zodResolver(TaskSchema),
        defaultValues: {
            task: "",
            type: "ACTIVITY",
            priority: "P1",
        },
    })

    const onSubmit: SubmitHandler<TaskForm> = async (data) => {
        try {
            dispatch(showLoading());
            onClose();
            const { data: existedUser } = await supabase.from("users").select("*").eq("email", session?.user.email).single();
            if (existedUser?.id) {
                const { error } = await supabase.from("tasks").insert({
                    task_name: data.task,
                    type: data.type,
                    priority: data.priority,
                    userId: existedUser?.id,
                });
                dispatch(hideLoading());
                toast.success('Add Task Successfully');
                if (error) {
                    throw new Error(error.message);
                }
            }
        } catch (error) {
            dispatch(hideLoading());
            console.log(error);
        };
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <Controller
                name="task"
                control={control}
                render={({ field }) => <FormControl sx={{ marginBottom: 2, width: '100%' }}>
                    <FormLabel htmlFor='task_id' id='task_id' sx={{

                    }}>TASK NAME</FormLabel>
                    <Input error={Boolean(errors?.task)} aria-labelledby="task_id" placeholder='Enter task name' inputProps={{ 'aria-label': 'description' }} disableUnderline={true} sx={{ border: '2px solid #d5d5d5', padding: 1, borderRadius: '8px' }} {...field} />
                    <FormHelperText>{errors?.task?.message ?? ''}</FormHelperText>
                </FormControl>
                }
            />

            <Stack direction={'row'} gap={4}>
                <Controller
                    name="type"
                    control={control}
                    render={({ field }) => <FormControl sx={{ width: '100%' }}>
                        <FormLabel htmlFor='type_id' id='type_id' sx={{ marginBottom: 1, fontWeight: 600 }}>TYPE</FormLabel>
                        <Select
                            aria-labelledby="type_id"
                            sx={{
                                border: '1px solid #d5d5d5', borderRadius: '8px'
                            }}
                            {...field}
                        >
                            <MenuItem value={'ACTIVITY'}>Activity</MenuItem>
                            <MenuItem value={'PLAN'}>Plan</MenuItem>
                            <MenuItem value={'SHOPPING'}>Shopping</MenuItem>
                            <MenuItem value={"OTHER"}>Other</MenuItem>
                        </Select>
                    </FormControl>}
                />

                <Controller
                    name="priority"
                    control={control}
                    render={({ field }) => <FormControl sx={{ width: '100%' }}>
                        <FormLabel id="priority_id" sx={{ marginBottom: 1, fontWeight: 600 }}>PRIORITY</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="priority_id"
                            {...field}
                        >
                            <FormControlLabel value="P1" control={<Radio />} label="P1" />
                            <FormControlLabel value="P2" control={<Radio />} label="P2" />
                            <FormControlLabel value="P3" control={<Radio />} label="P3" />
                        </RadioGroup>
                    </FormControl>}
                />
            </Stack>


            <Stack direction={'row'} gap={2} sx={{ marginTop: 3 }} justifyContent={'flex-end'}>
                <Button onClick={onClose} variant='outlined' sx={{ textTransform: 'none' }}>Cancel</Button>
                <Button type="submit" variant='contained' sx={{ background: "linear-gradient(to right, #38d900, #5ee32f)", color: '#fff', textTransform: 'none', padding: 1 }}>Create</Button>
            </Stack>

        </form>
    )
}

export default AddTask
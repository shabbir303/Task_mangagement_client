import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useTasks = () => {
    const axiosPublic = useAxiosPublic();
    const { data: tasks,refetch } = useQuery({
        queryKey: ["task"],
        queryFn: async () => {
            const res = await axiosPublic.get('/task');
            return res.data
        }
    })
    return [tasks, refetch]
};

export default useTasks;

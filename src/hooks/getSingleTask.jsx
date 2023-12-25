import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useSingleTask = () => {
    const axiosPublic = useAxiosPublic();
    const {data:singleTask, refetch}=useQuery({
        queryKey:[singleTask],
        queryFn:async()=>{
          const res = await axiosPublic.get("/task/:id");
          return res.data;
        }
    })

    return [singleTask, refetch];
};

export default useSingleTask;
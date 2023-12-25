import useTasks from "../../../hooks/useTasks";
import { CiEdit } from "react-icons/ci";
import { Button } from 'flowbite-react';
import { RiDeleteBin6Line } from "react-icons/ri";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { Badge } from 'flowbite-react';
const Crud = () => {
    const [tasks,refetch] = useTasks();
    const axiosPublic = useAxiosPublic();

    const handleDelete = (tasks) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/task/${tasks._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })
    }
    console.log(tasks);
    return (
        <>
        <h1 className=" text-[30px] mt-10 text-yellow-700 font-semibold font-serif  max-w-5xl text-center ">All Tasks are showing here</h1>
       <div className="grid grid-cols-1 mb-10">
       {tasks?.map (task=> <div key={task._id} className="max-w-5xl my-[20px] bg-indigo-900 shadow-xl shadow-black rounded-xl">
            
            <a
                href="#"
                className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
            >
                <span
                    className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                ></span>

                <div className="sm:flex sm:justify-between sm:gap-4">
                    <div className="flex items-center gap-3">
                        <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                            {task.title}
                        </h3>
                        {
                          task?.priroty==="Low" && <Badge color="failure">{task.priroty}</Badge>||task?.priroty==="High" && <Badge color="success">{task.priroty}</Badge> ||task?.priroty==="Moderate" && <Badge color="warning">{task.priroty}</Badge>
                        }
                        
                    </div>

                    <div className="hidden sm:block sm:shrink-0">
                    <div className="flex flex-col items-center gap-2 ">
                        <dt className="text-lg font-medium text-gray-400 ">Last Date of Submission</dt>
                        <dd className="text-base text-gray-500">{task.deadLine} </dd>
                    </div>
                    </div>
                </div>

                <div className="mt-4 flex justify-between ">
                    <p className="max-w-[40ch] text-sm text-gray-500">
                        {task.des}
                    </p>
                    <div className="flex  gap-3 items-center  justify-center">
                        <Button className="flex items-center  justify-center gap-1">Want To edit task<CiEdit /></Button>            
                        <Button onClick={handleDelete} className="flex items-center  justify-center gap-1" color="failure">Want To Delete task<RiDeleteBin6Line /></Button>
                    </div>
                </div>
            </a>
        </div>)}
       </div>
        </>
        
    );
};

export default Crud;
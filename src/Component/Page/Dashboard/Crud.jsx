import useTasks from "../../../hooks/useTasks";


const Crud = () => {
    const [tasks] = useTasks();
    console.log(tasks); 
    return (
        <div>
            
        </div>
    );
};

export default Crud;
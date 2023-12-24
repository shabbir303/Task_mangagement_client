import Completed from "./Completed";
import Ongoing from "./Ongoing";
import Todo from "./Todo";


const ManageTask = () => {
    return (
        <div className="grid grid-cols-3 gap-[20px] h-screen">
            <Todo></Todo>
            <Ongoing></Ongoing>
            <Completed></Completed>
        </div>
    );
};

export default ManageTask;
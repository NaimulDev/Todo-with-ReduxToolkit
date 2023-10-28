import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";
import { Form } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/tasks/TasksSlice";

// eslint-disable-next-line no-unused-vars
const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit, reset } = useForm();

  const dispatch = useDispatch();
  const onCancel = () => {
    reset();
    setIsOpen(false);
  };

  const onSubmit = (data) => {
    const taskData = { ...data, status: "pending" };
    dispatch(addTask(taskData));
    onCancel();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Programming Hero">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" id="" {...register("title", { required: true })} />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input type="text" {...register("description", { required: true })} />
        </div>
        <div>
          <label htmlFor="Dedline">Dedline</label>
          <input type="date" {...register("date", { required: true })} />
        </div>
        <div>
          <label htmlFor="Assign"> Assign To</label>
          <select
            defaultValue="pick One"
            type="text"
            {...register("assignedTo", { required: true })}
          >
            <option> Naimul</option>
            <option> Nazmul</option>
            <option> Naim</option>
          </select>
        </div>
        <div className="my-3">
          <label htmlFor="priority">priority</label>
          <select
            defaultValue="pick One"
            {...register("priority", { required: true })}
            type="text"
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>
        <div className="flex gap-3">
          <button onClick={() => onCancel()} className="btn btn-danger">
            Cancel
          </button>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </Form>
    </Modal>
  );
};

export default AddTaskModal;

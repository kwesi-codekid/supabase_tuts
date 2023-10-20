import ActionButton from "./ActionButton";
import _supabase from "../database/supabase-client";

const TaskCard = ({ task }) => {
  const buttonProps = [
    {
      id: 1,
      iconSVG: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zm9.586 4.594a.75.75 0 00-1.172-.938l-2.476 3.096-.908-.907a.75.75 0 00-1.06 1.06l1.5 1.5a.75.75 0 001.116-.062l3-3.75z"
            clipRule="evenodd"
          />
        </svg>
      ),
      type: "check-completed",
      actionFunc: async () => {
        const { data } = await _supabase
          .from("tasks")
          .update({ status: "completed" })
          .eq({ id: task.id });
      }
    }
  ];
  return (
    <div className="bg-white rounded-xl pl-4 px-2 py-2">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-poppins text-gray-800">{task.title}</h3>

        <div className="bg-red-400 p-1 w-max rounded-lg text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
            />
          </svg>
        </div>
      </div>

      <p className="font-quicksand text-sm text-gray-500">{task.description}</p>

      <div className="flex items-center justify-between mt-3">
        <div class="rounded-full w-max px-4 py-1 bg-blue-500 text-white">
          <p className="font-quicksand text-xs">{task.status}</p>
        </div>

        <div className="flex items-center gap-2">
          <ActionButton />
        </div>
      </div>
    </div>
  );
};

export default TaskCard;

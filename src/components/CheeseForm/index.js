import { useForm } from "react-hook-form";
import MilkTypesSelector from "../MilkTypesSelector";

const CheeseForm = ({ onSubmit, milkTypes }) => {
  const { register, handleSubmit } = useForm();

  return (
    <div className="max-w-lg m-auto">
      <h1 className="text-3xl text-center font-bold">Ajouter un fromage</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Nom</span>
          </label>
          <input
            className="input input-bordered w-full"
            {...register("name", { required: true })}
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">URL de l'image</span>
          </label>
          <input
            className="input input-bordered w-full"
            {...register("picture", { required: true })}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            className="textarea h-24 textarea-bordered"
            {...register("description", { required: true })}
          ></textarea>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Région</span>
          </label>
          <input
            className="input input-bordered w-full"
            {...register("area", { required: true })}
          />
        </div>

        <MilkTypesSelector
          {...register("milkType", {
            setValueAs: (v) => parseInt(v),
          })}
          milkTypes={milkTypes}
        />

        <button type="submit" className="mt-2 btn btn-success">
          Sauvegarder
        </button>
      </form>
    </div>
  );
};

export default CheeseForm;

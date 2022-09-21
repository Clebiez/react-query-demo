import { useForm } from "react-hook-form";
import MilkTypesSelector from "../MilkTypesSelector";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";

const CheeseForm = ({ onSubmit, milkTypes }) => {
  const { register, handleSubmit } = useForm();

  return (
    <div className="max-w-lg m-auto">
      <h1 className="text-3xl text-center font-bold">Ajouter un fromage</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <Input label="Nom" {...register("name", { required: true })} />
        <Input
          label="URL de l'image"
          {...register("picture", { required: true })}
        />

        <Textarea
          label="Description"
          {...register("description", { required: true })}
        />

        <Input label="Région" {...register("area", { required: true })} />

        <MilkTypesSelector
          {...register("milkType", {
            setValueAs: (v) => parseInt(v),
          })}
          milkTypes={milkTypes}
        />
        <div className="mt-4 mx-auto">
          <Button type="submit" variant="success">
            Sauvegarder
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CheeseForm;

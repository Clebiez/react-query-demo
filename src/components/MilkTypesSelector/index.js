import { forwardRef } from "react";
const MilkTypesSelector = forwardRef(
  ({ milkTypes, selectedMilkType, ...props }, ref) => {
    return (
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">Type de lait</span>
        </label>
        <select
          className="select select-bordered"
          ref={ref}
          {...props}
          value={selectedMilkType || ""}
        >
          <option key={0} value="">
            Choisir un lait
          </option>
          {milkTypes.map((milkType) => (
            <option key={milkType.id} value={milkType.id}>
              {milkType.name}
            </option>
          ))}
        </select>
      </div>
    );
  }
);

export default MilkTypesSelector;

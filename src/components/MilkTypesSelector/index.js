import { forwardRef } from "react";
const MilkTypesSelector = forwardRef(({ milkTypes, ...props }, ref) => {
  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text">Type de lait</span>
      </label>
      <select className="select select-bordered" ref={ref} {...props}>
        {milkTypes.map((milkType) => (
          <option key={milkType.id} value={milkType.id}>
            {milkType.name}
          </option>
        ))}
      </select>
    </div>
  );
});

export default MilkTypesSelector;

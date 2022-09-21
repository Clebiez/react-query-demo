const Input = ({ label, ...props }) => (
  <div className="form-control w-full">
    <label className="label">
      <span className="label-text">{label}</span>
    </label>
    <input
      placeholder={label}
      className="input input-bordered w-full"
      {...props}
    />
  </div>
);

export default Input;

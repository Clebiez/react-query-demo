const Textarea = ({ label, ...props }) => (
  <div className="form-control w-full">
    <label className="label">
      <span className="label-text">{label}</span>
    </label>
    <textarea
      placeholder={label}
      className="textarea h-24 textarea-bordered"
      {...props}
    ></textarea>
  </div>
);

export default Textarea;

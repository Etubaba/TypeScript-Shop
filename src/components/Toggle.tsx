type toggleProps= {
    setChecked:any
    yes:boolean
}


const Toggle = ({ setChecked, yes }:toggleProps) => {
  return (
    <label
      className="relative p-5 flex justify-center items-center cursor-pointer"
      htmlFor="checkbox"
    >
      <input
        id="checkbox"
        checked={yes}
        onChange={(e) => setChecked(e.target.checked)}
        type="checkbox"
        className="hidden"
      />
      <span className="absolute w-5 h-[2px] bg-white rounded-md line-top"></span>
      <span className="absolute w-5 h-[2px] bg-white rounded-md line-middle"></span>
      <span className="absolute w-5 h-[2px] bg-white rounded-md line-bottom"></span>
    </label>
  );
};

export default Toggle;
export default function Input({type="", label, name, value, placeholder, className, onChange}) {
  return (
    <div>
      <div className="">
        <div className="flex flex-col space-y-2">
            <label htmlFor={name} className="font-bold tex">{label}</label>
            <input type={type} name={name} value={value} placeholder={placeholder} onChange={onChange} className={`${className}`}/>
        </div>
      </div>
    </div>
  )
}

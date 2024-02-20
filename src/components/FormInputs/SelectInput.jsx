'user client';


const SelectInput = ({ label, name, register, className, options = [], defaultValue, errors, hasMultipleSelect = false, }) => {
    return (
        <div className={className}>
            <label htmlFor={name} className='block text-md font-medium leading-6 text-gray-900 dark:text-teal-500 mb-2'>
                {label}
            </label>
            <div className='mt-2'>
                <select
                    {...register(name)}
                    name={name}
                    multiple={hasMultipleSelect}
                    id={name}
                    defaultValue={defaultValue}
                    className='block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-insert focus:ring-teal-500  sm:text-sm sm:leading-6 dark:bg-slate-900 dark:text-slate-100' 
                >
                    {
                        options.map((option, i) => {
                            return (
                                <option key={i} value={option.id} className="py-2">
                                    <li className="py-5 ">{option.title}</li>
                                </option>
                            )
                        })
                    }

                </select>
                {errors[`${name}`] && <span className='text-sm text-red-600'>{label} is required</span>}
            </div>
        </div>

    );
};

export default SelectInput;
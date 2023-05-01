import {useId} from 'react'

const TextInput = (props) => {
    const {
        disabled = false,
        error = false,
        errorText = '',
        label,
        placeholderText = '',
        required = false,
        type = 'text',
    } = props;

    const id = useId();

    return (
        <div>
            {label && !required && (
                <label for = {id} className = "block mb-2 text-sm font-medium text-gray-500">
                    {label}
                </label> 
                
            )}
            {label && required && (
                <label for = {id} className = "block mb-2 text-sm font-medium text-gray-500 after:content-['*'] after:ml-0.5 after:text-red-500">
                    {label}
                </label> 
                
            )}
            <input
                id = {id}
                type = {type}
                className = {"bg-white rounded-sm py-2 pl-2 border border-gray-400 hover:ring-2 hover-visible:ring hover:ring-gray-100 focus:border-sky-400 focus:outline-none focus:ring-2 focus-visible:ring focus:ring-cyan-200 active:ring-2 active-visible:ring active:ring-gray-200 active:border-gray-400"  + (error ? 'border border-red-500' : '')} 
                disabled = {disabled ? "disabled" : ""}
                required = {required}
                placeholder = {placeholderText}
            />
            {error && <p class = "text-red-700 text-sm">{errorText}</p>}
        </div>
    )
}

export default TextInput;
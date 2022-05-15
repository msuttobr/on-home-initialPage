import "./style.css"

const Input = ({ name, type, width, maxWidth, height, margin, placeholder, borderRadius, value, onBlur, onChange }) => {

    return (
        <div>
            <input type="text" 
                className="border-gradient-input" 
                style={{
                    width: width,
                    maxWidth: maxWidth,  
                    height: height,
                    margin: margin,
                    borderRadius: borderRadius,
                    outline: "none"        
                }}
                value={value}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                name={name}
                onBlur={onBlur}
            />
        </div>
    )
}

export default Input
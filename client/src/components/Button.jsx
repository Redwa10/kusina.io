function Button({children,rounded="100px",bg="primary",px="7",py="3"}) {
    return (
        <button className={`text-center transition ease-in font-light text-xl  text-white bg-${bg} px-${px} py-${py} rounded-[${rounded}] hover:bg-white cursor-pointer hover:text-primary`}>
            {children}
        </button>
    )
}

export default Button

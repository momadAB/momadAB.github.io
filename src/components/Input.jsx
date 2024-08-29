function Input({ text, onChangeFunc }) {
    return(
        <>
            <input type="text" value={text} onChange={onChangeFunc}/>
        </>
    );
}

export default Input
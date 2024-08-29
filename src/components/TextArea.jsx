function TextArea({ text, onChangeFunc }) {
    return(
        <>
            <textarea type="text" value={text} onChange={onChangeFunc}/>
        </>
    );
}

export default TextArea
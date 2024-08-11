const Input = (props) => {
  return (
    <div>
      {props.text} <input value={props.value} onChange={props.changeHandler} />
    </div>
  );
};
  
const PersonForm = (props) => {    
  return (
    <form onSubmit={props.handleSubmit}>
      <Input text="name:" value={props.newName} changeHandler={props.onNameChange} />
      <Input text="number:" value={props.newNumber} changeHandler={props.onNumberChange} />
      <button type="submit">add</button>
    </form>
  );
};

export default PersonForm;
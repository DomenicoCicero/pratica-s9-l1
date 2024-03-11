const ButtonComponent = props => {
  return (
    <button className={props.btn} style={{ backgroundColor: props.bgColor, color: props.color, fontSize: props.size }}>
      {props.text}
    </button>
  );
};

export default ButtonComponent;

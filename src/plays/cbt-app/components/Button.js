const Button = ({ name, color, handleClick, disabled }) => {
  return (
    <>
      <button className={`btn btn-${color}`} disabled={disabled || false} onClick={handleClick}>
        {name}
      </button>
    </>
  );
};

export default Button;

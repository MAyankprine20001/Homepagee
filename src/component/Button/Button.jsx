
import PropTypes from 'prop-types';  
import "./Button.scss"
const Button = (props) => {
 
  return (
    <div>
       <button onClick ={props.onClick} className={props.className}>{props.btn}</button>
    </div>
  ); 
}

Button.propTypes = {
  className: PropTypes.string.isRequired,
  btn: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default Button;
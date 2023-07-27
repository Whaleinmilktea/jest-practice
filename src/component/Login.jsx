import { useState } from "react";

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);

  const onClickeHandler = () => {
    setIsLogin(!isLogin);
  };

  return (
    <button onClick={onClickeHandler}>{isLogin ? "Logout" : "Login"}</button>
  );
};

export default Login;

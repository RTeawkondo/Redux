import { authActions } from '../store/auth';
import classes from './Auth.module.css';
import {useSelector, useDispatch} from "react-redux"

const Auth = () => {
  const dispatch = useDispatch()
  const isAuth = useSelector(state => state.auth.isAuthenticated)
  const loginHandler = (event)=>{
    event.preventDefault()
    dispatch(authActions.login())
  }

  const logoutHandler = ()=>{
    dispatch(authActions.logout())
  }

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;

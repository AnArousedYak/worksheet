import '../styling/LoginForm.css';

export default function LoginForm() {
  return (
    <div className="login-screen">
      <div
        className="login-card"
        role="dialog"
        aria-labelledby="login-title"
        aria-describedby="login-description"
      >
        <header className="login-header">
          <div className="login-logo" aria-hidden="true"></div>
          <h2 id="login-title" className="login-title">Log In</h2>
          <p id="login-description" className="login-subtitle">
            Welcome back. Please enter your details.
          </p>
        </header>

        <form className="login-form">
          <div className="field">
            <label htmlFor="username" className="label">Username</label>
            <input
              id="username"
              type="text"
              className="input"
              placeholder="Enter your username"
              autoComplete="username"
            />
          </div>

          <div className="field">
            <label htmlFor="password" className="label">Password</label>
            <input
              id="password"
              type="password"
              className="input"
              placeholder="••••••••"
              autoComplete="current-password"
            />
          </div>

          <button type="button" className="button-accent">Log In</button>

          <div className="login-meta">
            <a href="#" className="forgot-link">Forgot Password?</a>
          </div>
        </form>
      </div>
    </div>
  );
}

const ThemeSwitch = (props) => {
    return (
      <div className="form-check form-switch position-fixed top-0 end-0 m-3">
        <input
          className="form-check-input"
          type="checkbox"
          id="darkModeSwitch"
          onChange={props.toggleTheme}
          checked={props.theme === "dark"}
        />
        <label className="form-check-label mx-2" htmlFor="darkModeSwitch">
          <span className="d-inline d-sm-none">
            {props.theme === "dark" ? "Dark" : "Light"}
          </span>

          <span className="d-none d-sm-inline">
            {props.theme === "dark" ? "Dark Mode" : "Light Mode"}
          </span>
        </label>
      </div>
    );
};

export default ThemeSwitch;
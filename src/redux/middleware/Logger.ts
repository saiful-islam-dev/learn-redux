// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Logger = (state: any) => (next: any) => (action: any) => {
  console.log("Current state =>", state.getState());
  console.log("Action =>", action);
  next(action);
  console.log("Current state =>", state.getState());
};

export default Logger;

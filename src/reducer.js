function reducer (state, action) {
  switch (action.type) {
    case "done":
      return state.map((element) => {
        if (element.color === action.payload) {
          element.completed = !element.completed;
        }
        return element;
      });
    
    case "reset":
      return state.map((element) => {
        if (element.completed === false) {
        } else {
          element.completed = false;
        }
        return element;
      });
  }
}
export default reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  editID: undefined,
};

export const dataSlice = createSlice({
  //Store name
  name: "userData",
  //Store initial state
  initialState: initialState,
  reducers: {
    //Add user action, adds a new user to the end of the state array
    //Id is incremented based on the id of the last object in the state array, if array length is 0
    //Id is set to 0
    addUser: (state, action) => {
      state.data = [
        ...state.data,
        {
          ...action.payload,
          id:
            state.data.length === 0
              ? 0
              : state.data[state.data.length - 1].id + 1,
        },
      ];
    },
    //Remove user action, returns a new array containing all elements except id of item in payload
    removeUser: (state, action) => {
      state.data = [
        ...state.data.filter((element) => element.id !== action.payload),
      ];
    },

    modifyUser: (state, action) => {
      const stateCopy = [...state.data];
      const index = stateCopy.findIndex(
        (element) => element.id === action.payload.id
      );
      if (index === -1) {
        throw new Error("ID not found");
      } else {
        stateCopy[index] = { ...action.payload };
      }
      state.data = [...stateCopy];
    },
    //Set editId to action.payload
    setEditID: (state, action) => {
      state.editID = action.payload;
    },
  },
});

//Actions export
export const { addUser, removeUser, modifyUser, setEditID } = dataSlice.actions;
//Reducer export
export default dataSlice.reducer;

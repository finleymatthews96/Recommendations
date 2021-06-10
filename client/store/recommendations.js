import axios from "axios";

// action type
const ADD_REC = "ADD_REC";

// action creator
const addedRec = (rec) => ({ type: ADD_REC, rec });

// thunk
export const addRec = (title, category, description, level, userId) => async (
  dispatch
) => {
  try {
    console.log("userId", userId);
    const { data: rec } = await axios.post("api/recommendations", {
      title,
      category,
      description,
      level,
      userId,
    });
    dispatch(addedRec(rec));
  } catch (error) {
    console.log(error);
  }
};

// reducer
export default function (state = [], action) {
  console.log("state in recs reducer", state);
  switch (action.type) {
    case ADD_REC:
      return [...state, action.rec];
    default:
      return state;
  }
}

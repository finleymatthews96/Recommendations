import React from "react";
import { connect } from "react-redux";
import { addRec } from "../store";

export const Home = (props) => {
  const { handleSubmit, id } = props;

  return (
    <div>
      <form onSubmit={(evt) => handleSubmit(evt, id)}>
        <div>
          <label htmlFor="Title">
            <small>Title</small>
          </label>
          <input name="title" type="text" />
        </div>
        <div>
          <label htmlFor="category">
            <small>Category</small>
          </label>
          <select name="category">
            <option value="Movie">Movie</option>
            <option value="Drink">Drink</option>
            <option value="Food">Food</option>
            <option value="Activity">Activity</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="description">
            <small>Description</small>
          </label>
          <input name="description" type="text" />
        </div>
        <div>
          <label htmlFor="level">
            <small>Level</small>
          </label>
          <select name="level">
            <option value="you Must try this">you Must try this</option>
            <option value="worth trying">worth trying</option>
            <option value="if it's not too much trouble">
              if it's not too much trouble
            </option>
          </select>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

const mapState = (state) => {
  return {
    id: state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleSubmit(evt, id) {
      evt.preventDefault();
      const title = evt.target.title.value;
      const category = evt.target.category.value;
      const description = evt.target.description.value;
      const level = evt.target.level.value;
      const userId = id;
      console.log("userId", userId);
      dispatch(addRec(title, category, description, level, userId));
    },
  };
};

export default connect(mapState, mapDispatch)(Home);

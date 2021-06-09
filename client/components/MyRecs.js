import React from "react";
import { connect } from "react-redux";

export const MyRecs = (props) => {
  const { recommendations } = props;
  console.log(recommendations);

  return (
    <div>
      {recommendations.map((rec) => {
        return (
          <div key={rec.id}>
            <h3>{rec.title}</h3>
            <h4>{rec.category}</h4>
            <h5>{rec.level}</h5>
          </div>
        );
      })}
    </div>
  );
};

const mapState = (state) => {
  return {
    recommendations: state.auth.recommendations,
  };
};

export default connect(mapState)(MyRecs);

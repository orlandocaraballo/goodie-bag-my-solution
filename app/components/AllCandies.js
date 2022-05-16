import React from "react";
import { connect } from "react-redux";
import { getCandies } from "../reducers/allCandies";

class AllCandies extends React.Component {
  componentDidMount() {
    this.props.getAllCandiesInReact();
  }

  render() {
    return (
      <div>
        These are all the candies!
        <ul>
          {this.props.allCandiesInReact.map((candy) => (
            <li key={candy.id}>{candy.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  allCandiesInReact: state.allCandies,
});

const mapDispatchToProps = (dispatch) => ({
  getAllCandiesInReact: () => dispatch(getCandies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllCandies);

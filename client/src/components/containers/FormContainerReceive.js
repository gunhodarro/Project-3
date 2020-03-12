import React, { Component } from "react";
import CheckboxOrRadioGroup from "../CheckboxOrRadioGroup";
import SingleInput from "../SingleInput";
import Select from "../Select";

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ownerName: "",
      businessName: "",
      businessAddress: "",
      foodSelections: [],
      selectedFoods: [],
      businessOptions: [],
      ownerBusinessTypeSelection: ""
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleFullNameChange = this.handleFullNameChange.bind(this);
    this.handleBusinessNameChange = this.handleBusinessNameChange.bind(this);
    this.handleBusinessAddressChange = this.handleBusinessAddressChange.bind(
      this
    );
    this.handleBusinessTypeSelect = this.handleBusinessTypeSelect.bind(this);
    this.handleFoodSelection = this.handleFoodSelection.bind(this);
  }
  componentDidMount() {
    fetch("./fake_db.json")
      .then(res => res.json())
      .then(data => {
        this.setState({
          ownerName: data.ownerName,
          businessName: data.businessName,
          businessAddress: data.businessAddress,
          foodSelections: data.foodSelections,
          selectedFoods: data.selectedFoods,
          businessOptions: data.businessOptions,
          ownerBusinessTypeSelection: data.ownerBusinessTypeSelection
        });
      });
  }
  handleFullNameChange(e) {
    this.setState({ ownerName: e.target.value }, () =>
      console.log("name:", this.state.ownerName)
    );
  }
  handleBusinessNameChange(e) {
    this.setState({ businessName: e.target.value }, () =>
      console.log("business name:", this.state.businessName)
    );
  }
  handleBusinessAddressChange(e) {
    this.setState({ businessAddress: e.target.value }, () =>
      console.log("business address:", this.state.businessAddress)
    );
  }
  handleBusinessTypeSelect(e) {
    this.setState({ ownerBusinessTypeSelection: e.target.value }, () =>
      console.log("business type", this.state.ownerBusinessTypeSelection)
    );
  }
  handleFoodSelection(e) {
    const newSelection = e.target.value;
    let newSelectionArray;
    if (this.state.selectedFoods.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.selectedFoods.filter(
        s => s !== newSelection
      );
    } else {
      newSelectionArray = [...this.state.selectedFoods, newSelection];
    }
    this.setState({ selectedFoods: newSelectionArray }, () =>
      console.log("pet selection", this.state.selectedFoods)
    );
  }
  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      ownerName: "",
      businessName: "",
      businessAddress: "",
      selectedFoods: [],
      ownerBusinessTypeSelection: ""
    });
  }
  handleFormSubmit(e) {
    e.preventDefault();

    const formPayload = {
      ownerName: this.state.ownerName,
      businessName: this.state.businessName,
      businessAddress: this.state.businessAddress,
      selectedFoods: this.state.selectedFoods,
      ownerBusinessTypeSelection: this.state.ownerBusinessTypeSelection
    };

    console.log("Send this in a POST request:", formPayload);
    this.handleClearForm(e);
  }
  render() {
    return (
      <form className="container" onSubmit={this.handleFormSubmit}>
        <h5>Food Donation Form</h5>
        <SingleInput
          inputType={"text"}
          // title={"Contact Name"}
          name={"name"}
          controlFunc={this.handleFullNameChange}
          content={this.state.ownerName}
          placeholder={"Contact Name"}
        />
        <SingleInput
          inputType={"text"}
          // title={"Non-Profit Name"}
          name={"business"}
          controlFunc={this.handleBusinessNameChange}
          content={this.state.businessName}
          placeholder={"Non-Profit Name"}
        />
        <SingleInput
          inputType={"text"}
          // title={"Non-profit Address"}
          name={"businessAddress"}
          controlFunc={this.handleBusinessAddressChange}
          content={this.state.businessAddress}
          placeholder={"Non-profit Address"}
        />
        
        
        {/* <input
          type="submit"
          className="btn btn-primary float-right"
          value="Submit"
        /> */}
        {/* <button
          className="btn btn-link float-left"
          onClick={this.handleClearForm}
        >
          Clear form
        </button> */}
      </form>
    );
  }
}

export default FormContainer;

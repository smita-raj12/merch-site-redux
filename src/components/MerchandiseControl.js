import React from 'react';
import NewMerchandiseForm from './NewMerchandiseForm';
import MerchandiseList from './MerchandiseList';
import MerchandiseDetail from './MerchandiseDetail';
import EditMerchandiseForm from './EditMerchandiseForm';
import { connect } from 'react-redux';
import PropTypes from "prop-types";

class MerchandiseControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedMerchandise: null,
            editing: false
            //quan:null
            
        };
        this.handleClick = this.handleClick.bind(this);
    }
     
    handleEditClick = () => {
      console.log("handleEditClick reached!");
      
      this.setState({editing: true});
    }

    handleClickingBuy =()=> {
        console.log("buy an item");
      //   let incrementedMerchandiseList = this.state.mainMerchandiseList;
      //   let quan = 0;
      //   incrementedMerchandiseList.map(q => {
      //       return(
      //       quan = q.quantity--);
            
      //   });
      //  this.setState({quan: quan});
    }

    // handleClickingReStock =()=> {
    //    let MainMerchandiseList = this.state.mainMerchandiseList;
    //    let quan = 0;
    //    MainMerchandiseList.map(q =>{
    //        return( quan= q.quantity ++) ;
            
    //     });
    //    this.setState({quan: quan});
    // }
    handleClickingReStock =(quantity)=> {
      console.log("merch control",quantity)
      const { dispatch } = this.props;
      
        const action = {
        type: 'INCREMENT'
      
      }
      dispatch(action);
      
   }
    handleEditingMerchandiseInList = (merchandiseToEdit) => {
      const { dispatch } = this.props;
      const { id, names, description, quantity, price } = merchandiseToEdit;
      const action = {
        type: 'ADD_MERCH',
        id: id,
        names: names,
        description: description,
        quantity: quantity,
        price: price
      }
      dispatch(action);
      this.setState({
        editing: false,
        selectedMerchandise: null
      });
    }

    handleChangingSelectedMerchandise = (id) => {
      const selectedMerchandise = this.props.mainMerchandiseList[id];
      this.setState({selectedMerchandise: selectedMerchandise});
    }

    handleClick = () => {
      if (this.state.selectedMerchandise != null) {
        this.setState({
          selectedMerchandise: null,
          editing: false 
        });
      } else {
        const { dispatch } = this.props;
        const action = {
        type: 'TOGGLE_FORM'
      }
      dispatch(action);
      }
    }
    
    handleDeletingMerchandise = (id) => {
      const { dispatch } = this.props;
      const action = {
        type: 'DELETE_MERCH',
        id: id
      }
      dispatch(action);
      this.setState({selectedMerchandise: null});
    }
    
    handleAddingNewMerchandiseToList = (newMerchandise) => {
      const { dispatch } = this.props;
      const { id, names, description, quantity, price } = newMerchandise;
      const action = {
        type: 'ADD_MERCH',
        id: id,
        names: names,
        description: description,
        quantity: quantity,
        price: price
      }
      dispatch(action);
      const action2 = {
        type: 'TOGGLE_FORM'
      }
      dispatch(action2);
    }

    render(){
    let currentlyVisibleState = null;
    let buttonText = null; 
    if (this.state.editing ) {      
      currentlyVisibleState = <EditMerchandiseForm merchandise = {this.state.selectedMerchandise} 
                                    onEditMerchandise = {this.handleEditingMerchandiseInList} />
      buttonText = "Return to Merchandise List";                              
    }else if (this.state.selectedMerchandise != null) {
      currentlyVisibleState = <MerchandiseDetail merchandise = {this.state.selectedMerchandise} 
                                    onClickingDelete = {this.handleDeletingMerchandise} 
                                    onClickingEdit = {this.handleEditClick}  
                                    onClickingBuy = {this.handleClickingBuy} 
                                    onClickingReStock = {this.handleClickingReStock}        />
      buttonText = "Return to Merchandise List";
    }
    else if (this.props.formVisibleOnPage) {
      
      currentlyVisibleState = <NewMerchandiseForm onNewMerchandiseCreation={this.handleAddingNewMerchandiseToList}  />;
      buttonText = "Return to Merchandise List";
    }else{
      currentlyVisibleState = <MerchandiseList MerchandiseList={this.props.mainMerchandiseList} onMerchandiseSelection={this.handleChangingSelectedMerchandise} />;
      
      buttonText = "Add Merchandise";
    }
        return (
          <React.Fragment>
            {currentlyVisibleState}
            <button onClick={this.handleClick}>{buttonText}</button> 
          </React.Fragment>
        );
    }
}
const mapStateToProps = state => {
  return {
    mainMerchandiseList: state.mainMerchandiseList,
    formVisibleOnPage: state.formVisibleOnPage,
    //quantity: state.quantity
  }
}
MerchandiseControl.propTypes = {
  mainMerchandiseList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool,
  //quantity: PropTypes.number
};
MerchandiseControl = connect(mapStateToProps)(MerchandiseControl);


export default MerchandiseControl;
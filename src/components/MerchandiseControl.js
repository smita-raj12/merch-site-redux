import React from 'react';
import NewMerchandiseForm from './NewMerchandiseForm';
import MerchandiseList from './MerchandiseList';
import MerchandiseDetail from './MerchandiseDetail';
import EditMerchandiseForm from './EditMerchandiseForm';

class MerchandiseControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false,
            mainMerchandiseList: [],
            selectedMerchandise: null,
            editing: false,
            quan:null
           
        };
        this.handleClick = this.handleClick.bind(this);
    }
     
    handleEditClick = () => {
      console.log("handleEditClick reached!");
      
      this.setState({editing: true});
    }

    handleClickingBuy =()=> {
        //console.log("buy an item");
        let incrementedMerchandiseList = this.state.mainMerchandiseList;
        let quan = 0;
        incrementedMerchandiseList.map(q => {
            quan= q.quantity -- ;
            console.log(quan);
        });
       this.setState({quan: quan});
    }

    handleClickingReStock =()=> {
       let MainMerchandiseList = this.state.mainMerchandiseList;
       let quan = 0;
       MainMerchandiseList.map(q =>{
            quan= q.quantity ++ ;
            console.log(quan);
        });
       this.setState({quan: quan});
    }

    handleEditingMerchandiseInList = (merchandiseToEdit) => {
      const editedMainMerchandiseList = this.state.mainMerchandiseList
        .filter(merchandise => merchandise.id !== this.state.selectedMerchandise.id)
        .concat(merchandiseToEdit);
      this.setState({
          mainMerchandiseList: editedMainMerchandiseList,
          editing: false,
          selectedMerchandise: null
        });
    }

    handleChangingSelectedMerchandise = (id) => {
      const selectedMerchandise = this.state.mainMerchandiseList.filter(merchandise => merchandise.id === id)[0];
      this.setState({selectedMerchandise: selectedMerchandise});
    }

    handleClick = () => {
      if (this.state.selectedMerchandise != null) {
        this.setState({
          formVisibleOnPage: false,
          selectedMerchandise: null,
          editing: false 
        });
      } else {
        this.setState(prevState => ({
          formVisibleOnPage: !prevState.formVisibleOnPage,
        }));
      }
    }
    
    handleDeletingMerchandise = (id) => {
      const newMainMerchandiseList = this.state.mainMerchandiseList.filter(merchandise => merchandise.id !== id);
      this.setState({
        mainMerchandiseList: newMainMerchandiseList,
        selectedMerchandise: null
      });
    }
    
    handleAddingNewMerchandiseToList = (newMerchandise) => {
      const newMainMerchandiseList = this.state.mainMerchandiseList.concat(newMerchandise);
      this.setState({mainMerchandiseList: newMainMerchandiseList,
                    formVisibleOnPage: false });
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
    else if (this.state.formVisibleOnPage) {
      
      currentlyVisibleState = <NewMerchandiseForm onNewMerchandiseCreation={this.handleAddingNewMerchandiseToList}  />;
      buttonText = "Return to Merchandise List";
    } else {
      currentlyVisibleState = <MerchandiseList MerchandiseList={this.state.mainMerchandiseList} onMerchandiseSelection={this.handleChangingSelectedMerchandise} />;
      
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

export default MerchandiseControl;
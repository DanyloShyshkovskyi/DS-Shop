import React, { Component } from "react";
import { Form, Navbar, Nav, FormControl, Button, Image } from "react-bootstrap";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Gender from "./Boxes/Gender";
import Collapse from "./Collapse";
import {withGetScreen} from 'react-getscreen'

 class CheckboxSex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      man: true,
      woman: true,
      children: false,
      CheckIt:true,
    };
  }

  


  onClickMan = () => {
    this.setState({
      man: !this.state.man,
    });
  };
  onClickWoman = () => {
    this.setState({
      woman: !this.state.woman,
    });
  };
  onClickChildren = () => {
    this.setState({
      children: !this.state.children,
    });
  };
  checkItAll = () =>{
    this.setState({
      man: true,
      woman: true,
      children: true,
    })
  }

  render() {

    if (this.props.isMobile()){
        var CheckIt = false
        var mr3 = ""
    }

    if (this.props.isDesktop()){
      var CheckIt = true
      var mr3 = "mr-3"
  }




    return (
      <div>
        <Navbar id="main" variant="light"  style={{ background: "#f7f7f7"}}>
          <Form className="mr-auto">
            <FormControlLabel
            className={mr3}
              value="start"
              control={
                <Checkbox
                
                style={{color: "black"}}
                iconStyle={{fill: 'white'}}
                iconStyle={{fill: 'white'}}
                  visible="none"
                  onClick={this.onClickMan}
                  checked={this.state.man}
                  color="primary"
                />
              }
              label="MEN"
              labelPlacement="start"
            />
            <FormControlLabel
             className={mr3}
              value="start"
              control={
                <Checkbox
                style={{color: "black"}}
                  onClick={this.onClickWoman}
                  checked={this.state.woman}
                  color="primary"
                />
              }
              label="WOMEN"
              labelPlacement="start"
              color="white"
            />
            <FormControlLabel
             className={mr3}
              value="start"
              control={
                <Checkbox
                style={{color: "black"}}
                  onClick={this.onClickChildren}
                  checked={this.state.children}
                  color="primary"
                />
              }
              label="CHILDREN"
              labelPlacement="start"
            />
          </Form>
          {CheckIt && <Form inline>
              <Button
              className="mr-5"
              onClick={this.checkItAll}
              variant="light"
              style={{
                background: "black",
                borderStyle: "none",
                color:"white",
                height:"50px",
                width:"150px",
                overflow:"hidden"
              }}
            >
              CHEK IT ALL
            </Button>
          </Form>}
        </Navbar>

        <Form className="mt-5">
        <Collapse collapsed={this.state.man}>
          <Gender sex="men"/>
        </Collapse>
        <Collapse collapsed={this.state.woman}>
          <Gender sex="women"/>
        </Collapse>
        <Collapse collapsed={this.state.children}>
          <Gender sex="children"/>
        </Collapse>
         
        </Form>
      </div>
    );
  }
}

export default withGetScreen(CheckboxSex);

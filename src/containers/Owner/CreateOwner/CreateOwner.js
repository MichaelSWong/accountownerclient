import React, { Component } from 'react';
import Input from '../../../UI/Inputs/Input';
import { Form, Button, FormGroup, Col, Card } from 'react-bootstrap';
import { returnInputConfiguration } from '../../../Utility/InputConfiguration';
import * as formUtilityActions from '../../../Utility/FormUtility';

class CreateOwner extends Component {
  state = {
    ownerForm: {},
    isFormValid: false,
  };

  componentWillMount = () => {
    this.setState({ ownerForm: returnInputConfiguration() });
  };

  render() {
    const formElementsArray = formUtilityActions.convertStateToArrayOfFormObjects(
      { ...this.state.ownerForm }
    );
    return (
      <Card>
        <Form horizontal onSubmit={this.createOwner}>
          {formElementsArray.map((element) => {
            return (
              <Input
                key={element.id}
                elementType={element.config.element}
                id={element.id}
                label={element.config.label}
                type={element.config.type}
                value={element.config.value}
                changed={(event) => this.handleChangeEvent(event, element.id)}
                errorMessage={element.config.errorMessage}
                invalid={!element.config.valid}
                shouldValidate={element.config.validation}
                touched={element.config.touched}
                blur={(event) => this.handleChangeEvent(event, element.id)}
              />
            );
          })}
          <br />
          <FormGroup>
            <Col mdOffset={6} md={1}>
              <Button
                type='submit'
                className='btn btn-info'
                disabled={!this.state.isFormValid}
              >
                Create
              </Button>
            </Col>
            <Col md={1}>
              <Button
                className='btn btn-danger'
                onClick={this.redirectToOwnerList}
              >
                Cancel
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </Card>
    );
  }
}

export default CreateOwner;

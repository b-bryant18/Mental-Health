import React from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Calculator = (props) => {
    return (
        <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="foodType" className="mr-sm-2">Food or Drink</Label>
          <Input type="food" name="food" id="foodType" placeholder="Protein shake" />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="calories" className="mr-sm-2">Calories</Label>
          <Input type="calories" name="calories" id="calAmount" placeholder="400" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
}
// Maybe add forms for sugar and carbs
// Create a button that adds the next set of forms like todo app
// Need to add calories together with submit button
// event.preventDefault() for submit button

export default Calculator;

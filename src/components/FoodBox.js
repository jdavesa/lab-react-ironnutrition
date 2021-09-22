import { Card, Col, Divider, Button } from "antd";


function FoodBox(props) {

  return (
    <Col>
      <Card title={props.name} style={{ width: 230, height: 300, margin: 50}}>
        <img src={props.image} height={60}/>
        <p>Calories: {props.calories}</p>
        <p>Servings: {props.servings}</p>
        <p>
          <b>Total Calories: {props.calories * props.servings} </b> kcal
        </p>
        <Button type="primary" onClick={()=>props.delete(props.name)}> Delete </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;

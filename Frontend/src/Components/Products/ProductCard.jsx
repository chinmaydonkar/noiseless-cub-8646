import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductCard ({img,title,desc,originalPrice,size,salePrice}) {
  console.log(img,title,desc,originalPrice,size,salePrice);
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {`${img[0]}`} />
      <Card.Body>
        <Card.Title style={{fontWeight:"600"}}>{title}</Card.Title>
        {/* <Card.Text>{desc}</Card.Text> */}
        <Card.Text style={{textDecoration: "line-through"}}>INR {originalPrice}</Card.Text>
        <Card.Text style={{color:"red"}}>INR {salePrice}</Card.Text>
        <Card.Text>{size && size[0]}</Card.Text>
        <Button variant="primary">Buy</Button>
      </Card.Body>
    </Card>
    
  );
}

export default ProductCard;
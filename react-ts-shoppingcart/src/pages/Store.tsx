import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
import storeItems from "../data/items.json";

export function Store() {
    return <><h1>Store</h1>
    {/* md means medium screen size has column of 2; g-3 means gap of 3 between items */}
    <Row md={2} xs={1} lg={3} className="g-3"> 
    {storeItems.map(item => (
        // <Col>{JSON.stringify(item)}</Col>  This is to print the data info on the browser
        // takes in the item properties such as name, pricing, etc.
        <Col key={item.id}>
            <StoreItem {...item} />
        </Col>
    ))}
    </Row>

</>
}
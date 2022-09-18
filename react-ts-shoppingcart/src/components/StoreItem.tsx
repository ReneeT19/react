import { Card } from "react-bootstrap"

type StoreItemProps = {
    id: number,
    name: string,
    price: number,
    imgUrl: string
}

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
    return (
    <Card>
        <Card.Img 
            variant="top" 
            src={imgUrl} 
            height="200px" 
            // objectFit is for correct aspect ratio for each image
            style={{objectFit: "cover"}} /> 
    </Card>
    )
}
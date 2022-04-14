import React,{ Component } from 'react';
import { Card, CardBody, CardTitle, CardImg,CardText, Label } from 'reactstrap';

class DishDetails extends Component{
        constructor(props){
            super(props);
        }

        render(){

            const options = {year: 'numeric', month: 'short', day: 'numeric'};

            const reviews = this.props.selectedDish.comments.map((feed) => {
                const con_date = new Date(feed.date.split("T")[0]);
                
                
                return (
                    <label className='mt-1 d-block fs-4'>
                        {feed.comment}
                        <label className='mt-1 d-block fs-5'>
                        -- {feed.author}, {con_date.toDateString("en-us",options).slice(4)}
                        </label>  
                    </label>
                );
            });
    

            if (this.props != null)
                return(
                    <div className='row'>
                        <div className='col-12 col-md-5 m-1'>
                            <Card>
                                <CardImg top src={this.props.selectedDish.image} width='100%' alt={this.props.selectedDish.name} />
                                <CardBody>
                                    <CardTitle>{this.props.selectedDish.name}</CardTitle>
                                    <CardText>{this.props.selectedDish.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div  className="col-12 col-md-5 m-1">
                            <h1>Comments</h1>
                            {reviews}
                        </div>
                       
                        
                    </div>
                    
                    
                   
                );
            else
                return(
                    <div>
                            
                    </div>
                   
                );
        }
}

export default DishDetails;
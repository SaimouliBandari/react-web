// import React,{ Component } from 'react';
// import { Card, CardBody, CardTitle, CardImg,CardText, Label } from 'reactstrap';

// class DishDetails extends Component{
//         constructor(props){
//             super(props);
//         }

//         render(){

//             const options = {year: 'numeric', month: 'short', day: 'numeric'};

//             const reviews = this.props.selectedDish.comments.map((feed) => {
//                 const con_date = new Date(feed.date.split("T")[0]);
                
                
//                 return (
//                     <label className='mt-1 d-block fs-4'>
//                         {feed.comment}
//                         <label className='mt-1 d-block fs-5'>
//                         -- {feed.author}, {con_date.toDateString("en-us",options).slice(4)}
//                         </label>  
//                     </label>
//                 );
//             });
    

//             if (this.props != null)
//                 return(
//                     <div className='row'>
//                         <div className='col-12 col-md-5 m-1'>
//                             <Card>
//                                 <CardImg top src={this.props.selectedDish.image} width='100%' alt={this.props.selectedDish.name} />
//                                 <CardBody>
//                                     <CardTitle>{this.props.selectedDish.name}</CardTitle>
//                                     <CardText>{this.props.selectedDish.description}</CardText>
//                                 </CardBody>
//                             </Card>
//                         </div>
//                         <div  className="col-12 col-md-5 m-1">
//                             <h1>Comments</h1>
//                             {reviews}
//                         </div>
                       
                        
//                     </div>
                    
                    
                   
//                 );
//             else
//                 return(
//                     <div>
                            
//                     </div>
                   
//                 );
//         }
// }

// export default DishDetails;

import React from 'react';
import { Card, CardImg, CardText, CardBody,
   CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';   
 
function RenderDish(dish) {
      return (
         <div className="col-12 col-md-5 m-1">
            <Card>
               <CardImg top src={dish.image} alt={dish.name} />
               <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
               </CardBody>
            </Card>
         </div>
      );
   }
   
   function RenderComments(comments) {
      if (comments != null) {
         return (
            <div className="col-12 col-md-5 m-1">
               <h4>Comments</h4>
               <ul className="list-unstyled">
               {comments.map((comment) => {
                  return (
                     <li key={comment.id}>
                       <p>{comment.comment}</p>
                       <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>                                      
                     </li>
                  );
                })}
                </ul>
            </div>
         );
      }
      else {
         return (
            <div></div>
         );
      }
   }
   
   const  DishDetail = (props) => {
      if (props.dish != null) {
         return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                
               <div className="row">
                  
                  <RenderDish dish={(props.dish)}/>
                  <RenderComments comments ={props.comments}/>
               </div>
            </div>
         );
      }
      else {
         return (
            <div></div> 
         );
      }
   }


export default DishDetail;
import React from 'react' ;


function TeamMember(props) {
    return (
        <div className="col-md-4 col-sm-6 ">
           <div className="card" >
               <div className="card-header">
                <img style={{maxWidth:'100%'}} src={props.info.pic} alt="profile"/>
               </div>
                <div className="card-body">
                  <h2>{props.info.name}</h2>
                  <h5>{props.info.position}</h5>
                  <p>{props.info.phone}</p>
                  <p >{props.info.email}</p>
                  <p >{props.info.website}</p>
                </div>
            </div>
      
        </div>
    );
  }
  
  export default TeamMember;
  
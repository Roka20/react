import React from 'react' ;
import TeamMember from './TeamMember';


function Team() {
    return (
        <div className="row">
                
                 
            <TeamMember 
            info = {
              {
                pic : '/img/pic1.jpg' ,
                name : 'Roka' ,
                position : 'office manager' ,
                phone : '01100449536',
                email : 'roka.elsofi@gmail.com' ,
                website : 'rpka_hhygyg.com'


              }
            }
              

            
            
            
            />    



      </div>
    );
  }
  
  export default Team;
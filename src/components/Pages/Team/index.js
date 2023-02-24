import React from 'react'

import NavBar from '../../NavBar'
import Footer from "../../Footer";

import { Placeholder, Card, Feed } from 'semantic-ui-react'

import './style.scss'

 const Team = () => {

return (
<div>   

<NavBar />

<div className='Team--Title'>
  <h1>Les Power Rangers</h1>
  <p>"Go, go Power Rangers!"</p>
</div>


<div className='Team--Info'>

<Card>
    <Card.Content>
      <Card.Header> Le Gang </Card.Header>
    </Card.Content>
    <Card.Content>
      <Feed>
        <Feed.Event>
          <Feed.Label image="https://i.pinimg.com/564x/f8/c5/d0/f8c5d06275fdc056a2b2f97a962c3dad.jpg" />
          <Feed.Content>
            <Feed.Date content='' />
           
            <Feed.Summary>
              Abouanane Badre 
            </Feed.Summary>

            <Feed.Summary>
            Réferent-Git / Dev-Front  
            </Feed.Summary>

            <Feed.Summary>
            Linkedin : <a> badre-abouanane  </a> 
            </Feed.Summary>

          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label image="https://i.pinimg.com/564x/f8/c5/d0/f8c5d06275fdc056a2b2f97a962c3dad.jpg" />
          <Feed.Content>
          <Feed.Date content='' />
           
           <Feed.Summary>
             Delattre Hugo
           </Feed.Summary>

           <Feed.Summary>
            Lead-Dev-Front / Product-Owner / Dev-Front  
           </Feed.Summary>

           <Feed.Summary>
           Linkedin : <a> hugo delattre  </a> 
           </Feed.Summary>

          </Feed.Content>
        </Feed.Event>

         <Feed.Event>
          <Feed.Label image="https://i.pinimg.com/564x/f8/c5/d0/f8c5d06275fdc056a2b2f97a962c3dad.jpg" />
          <Feed.Content>
            <Feed.Date content='' />
           
            <Feed.Summary>
               Squedin Julian 
            </Feed.Summary>

            <Feed.Summary>
             Crum-Master / Dev-Back 
            </Feed.Summary>

            <Feed.Summary>
            E-mail : <a> XXX </a> 
            </Feed.Summary>

          </Feed.Content>
        </Feed.Event>

<Feed.Event>
          <Feed.Label image="https://i.pinimg.com/564x/f8/c5/d0/f8c5d06275fdc056a2b2f97a962c3dad.jpg" />
          <Feed.Content>
            <Feed.Date content='' />
           
            <Feed.Summary>
               Bennecib Ilham
            </Feed.Summary>

            <Feed.Summary>
            Lead-Dev-Back / Dev-Back 
            </Feed.Summary>

            <Feed.Summary>
            E-mail : <a> XXX </a> 
            </Feed.Summary>
            
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label image="https://i.pinimg.com/564x/f8/c5/d0/f8c5d06275fdc056a2b2f97a962c3dad.jpg" />
          <Feed.Content>
            <Feed.Date content='' />
           
            <Feed.Summary>
               Guitton Mathis 
            </Feed.Summary>

            <Feed.Summary>
            Réferent-technologique / Dev-Front  
            </Feed.Summary>

            <Feed.Summary>
            E-mail : <a>mathis.guitton01@hotmail.com</a> 
            </Feed.Summary>
            
          </Feed.Content>
        </Feed.Event>

      </Feed>
    </Card.Content>
  </Card>

  </div>






  <Footer />
</div>  

    )
}
export default Team

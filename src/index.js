import '../assets/css/style.css';
import {getCompanyLaunches,getCompanyInfo} from './utilits/space-x-servis'
import {Rockets} from './components/rocket'
import{Info} from './components/info'

getCompanyInfo().then(data=>{

    let header=new Info(data)

    document.querySelector('body').appendChild(header.getNode())
})



getCompanyLaunches().then(data=>{
    console.log(data)
    data= data.filter(element=>{
       return element.links.mission_patch!=null
    });
    console.log(data)
   data.forEach(element => {
       let raketa=new Rockets(element)
       
       document.getElementById('app').appendChild(raketa.getNode())

       
   });
        


    });

   
    

            

        

     
       
        
    
   
        
       
    

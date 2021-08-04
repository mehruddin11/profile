import {useState} from 'react';
import {
  FaEnvelopeOpen,
  FaUser,
  FaPhone,
} from 'react-icons/fa'
const url ='https://th.bing.com/th/id/OIP.IumWkT1hfQ3DbUZJ47fYiQHaFj?pid=ImgDet&rs=1'
function App(){
	const [title, setTitle] = useState('name')
	const [value, setValue] =useState('Mehruddin')
	const handelValue =(e) =>{
		if (e.target.classList.contains('icon')) {
			 const newValue = e.target.dataset.label
    setTitle(newValue)
    if(newValue === 'number' ){
    	setValue('9260924137')
    }
     if(newValue === 'name' ){
    	setValue('Mehruddin khan')
    }
     if(newValue === 'email' ){
    	setValue('Mehruddin881@gmail.com')
    }

}

		}

   
	return (
		<main>
			<div className='block bcg-black'></div>
			<div className='block'>
			<div className='container'>
			<img  src = {url} alt ={url} />
			<h4 className='user-title'> my {title} </h4>
			<div className='user-value'>{value} </div>
			<div className='values-list'>
			 <button className='icon' data-label='number' onMouseOver={handelValue}>
			<FaPhone/>
			</button> 
			<button className='icon' data-label='name' onMouseOver={handelValue}>
			<FaUser/>
			</button> 
			<button className='icon' data-label='email' onMouseOver={handelValue}>
			 <FaEnvelopeOpen/>
			</button> 

			</div>
		 
			</div>
			</div>
		</main>
		
		);
}
export default App;
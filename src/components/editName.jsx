import React, { useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../redux-reducers/redux-user';


function EditName() {
	const token = useSelector((state) => state.auth.token);
	const user = useSelector((state) => state.user.profil);
	
	const [firstName, setfirstName] = useState(user.firstName);
	const [lastName, setlastName] = useState(user.lastName);
	const [isShow, setShow] = useState(false);
	const dispatch = useDispatch();
	
  const handleEditUpdate = () => {
		dispatch(updateUser({ firstName, lastName, token }))
		openOrCloseEditForm()
  };

	const openOrCloseEditForm = () => isShow ? setShow(false) : setShow(true)
  return (
		<section className="editProfil">
			{ isShow ?
		 	<div>
			 <div>
				 <input
				 className="input"
				 type="text"
				 id="firstName"
				 placeholder={firstName}
				 onChange={(e) => setfirstName(e.target.value)}
				 />
				 <input
					 className="input"
					 type="text" 
					 id="lastName"
					 placeholder={lastName}
					 onChange={(e) => setlastName(e.target.value)}
					 />
			 </div>
			 <div className="btnGroup">
				 <button onClick={handleEditUpdate} className="edit-button">Save</button> 
				 <button onClick={openOrCloseEditForm} className="edit-button">Cancel</button> 
			 </div>
		 </div>
		  :
			<button onClick={openOrCloseEditForm} className="edit-button">Edit Name</button> 
		}
		</section>
	)
}
export default EditName
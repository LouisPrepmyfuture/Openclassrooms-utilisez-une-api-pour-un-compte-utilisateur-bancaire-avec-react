import React from "react"
import EditName from "../components/editName"
import { useSelector } from 'react-redux';
import {accountData} from "../dataMock/account"
import CardAccount from "../components/card/cardAccount"

function Profil() {
	const user = useSelector((state)=> state.user.profil)
	
  return (
		<main className="main bg-dark">
      <div class="header">
        <h1>Welcome back<br />{user.firstName} {user.lastName}!</h1>
       <EditName />
      </div>
      <h2 class="sr-only">Accounts</h2>
			{ accountData.map(({id, title, amount, description})=>(
				<CardAccount key={id} title={title} amount={amount} description={description} />
			))}
		</main>
	)
}

export default Profil

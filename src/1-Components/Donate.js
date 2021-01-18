import axios from 'axios';
import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

toast.configure();

export default function Donate(props) {
    const [donationAmount, setDonationAmount] = useState()


    async function handleToken(token) {
        console.log('Frontend line 12:', { token, donationAmount })
        await axios.post('/donate', {
            token,
            donationAmount
        }).then(res => {
            console.log(res.data.status);
            if (res.data.status === 'success') {
                console.log('status = success')
                toast('Success! Thank you for your donation!',
                    { type: 'success' })
            } else {
                console.log('status = error')
                toast('Something went wrong',
                    { type: 'error' })
            }
            setDonationAmount('')
        }).catch(err => console.log(err))


    }

    return (
        <div>
            <div className='input-box'>
                <h1>Donation amount:</h1>
                <p>$</p>
                <input
                    onChange={(e) => setDonationAmount(+e.target.value)}
                    placeholder='insert donation amount here'
                    value={donationAmount} />
            </div>
            <StripeCheckout
                stripeKey='pk_test_51IAKa4GUHQ1yJgjQEFLpm0Nq93qBT7U90pY4B501tXWKB4iSwXkX0CKaRZEAiozlixcQwKzlW7KkFWv8JoK0789M00Q3KupYy2'
                token={handleToken}
                billingAddress
                amount={donationAmount * 100}
            />
        </div>
    )
}
import axios from 'axios';
import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { toast } from 'react-toastify'

toast.configure();

export default function Donate(props) {
    const [donationAmount, setDonationAmount] = useState(0)

    async function handleToken(token) {
        console.log('Frontend line 12:', { token, donationAmount })
        const response = await axios.post('/donate', {
            token,
            donationAmount
        });
        const { status } = response.data

        if (status === 'success') {
            toast('Success! Check emails for details',
                { type: 'success' })
        } else {
            toast('Something went wrong',
                { type: 'error' })
        }

    }

    return (
        <div>
            <div className='input-box'>
                <h1>Donation amount:</h1>
                <p>$</p>
                <input onChange={(e) => setDonationAmount(+e.target.value)} placeholder='insert donation amount here' />
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
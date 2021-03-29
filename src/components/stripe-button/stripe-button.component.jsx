import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IaELESJbMEqEN1PpqDCDfCsczMmeBq4HkTRJLfMhoMgfja50UvSzdjJuVzVfdQ0vXHVXGAqYMQ4EMF2toHXEnr400EXvvhA9P';
    const onToken = token => {
        console.log(token);
        alert('Payment Succesful');
    }

    return(
        <StripeCheckout 
            label='Pay now'
            name='Crwn Clothing Store Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
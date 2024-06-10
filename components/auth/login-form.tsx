import React from 'react';

import CardWrapper from "@/components/auth/card-wrapper";

const LoginForm = () => {
    return (
        <CardWrapper
            headerLabel="Welcom back"
            backButtonLabel="Don't have an account?"
            backButtonHref="/auth/register"
            showSocial
        >
            Login form !
        </CardWrapper>
    );
};

export default LoginForm;
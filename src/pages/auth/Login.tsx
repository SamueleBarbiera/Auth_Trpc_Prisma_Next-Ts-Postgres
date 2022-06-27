/* eslint-disable react-hooks/exhaustive-deps */
import Footer from '../../components/layout/Footer'
import Header from '../../components/layout/Header'
import LoginForm from '../../components/auth/LoginForm'
import Head from 'next/head'
import { getProviders, getSession } from 'next-auth/react'
import PrismaClient from '@prisma/client'
import prisma from '../../server/db/client'
import { useShoppingCart } from 'use-shopping-cart'
import React, { useEffect } from 'react'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

const Login: React.FC<any> = ({ providers }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return (
        <>
            <Head>
                <title>Login</title>
                <link rel="icon" href="/icon-512x512.png" />
            </Head>
            <Header />
            <LoginForm providers={providers} />
            <Footer />
        </>
    )
}

export default Login
export const getServerSideProps: GetServerSideProps = async () => {

    return {
        props: {
            providers: await getProviders(),
        },
    }
}

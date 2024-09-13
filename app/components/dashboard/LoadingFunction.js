'use client'
import React from 'react'
// import UserTabs from './UserTabs'
import LoadingSpinner from './LoadingSpinner'
// import LoadingSpinner from '../icons/LoadingSpinner'

export default function LoadingFunction({loadingTitle}) {
    return (
        <div className='max-w-3xl mx-auto mt-8'>
        <div className='text-center mt-16'>
        <LoadingSpinner />
        <div className='mt-12'>
        <span className='' >Loading {loadingTitle} .. Please wait </span>
        </div>
        </div>
        </div>
    )
}
// <UserTabs isAdmin={true} />

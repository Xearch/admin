'use client'

import { useGetUserProfile } from '@/src/services/endpoints/getUserProfile'

import { ProfileCard } from './ProfileCard'
import { SkeletonProfileCard } from './SkeletonProfileCard'

export function Profile() {
  const { data: userProfile, isLoading } = useGetUserProfile()
  return (
    <>
      {!userProfile && isLoading ? (
        <SkeletonProfileCard />
      ) : (
        userProfile && <ProfileCard data={userProfile} />
      )}
    </>
  )
}

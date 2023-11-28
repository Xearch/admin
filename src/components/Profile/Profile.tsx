'use client'

import { useGetUserProfile } from '@/src/services/endpoints/getUserProfile'
import { Title, Text } from '@mantine/core'

import classes from './Profile.module.css'
import { ProfileCard } from './ProfileCard'
import { SkeletonProfileCard } from './SkeletonProfileCard'

export function Profile() {
  const { data: userProfile, isLoading } = useGetUserProfile()
  return (
    <>
      <Title className={classes.title} ta="center">
        {userProfile && (
          <Text inherit component="span">
            Bem vindo {userProfile.user.name}
          </Text>
        )}
      </Title>
      {!userProfile && isLoading ? (
        <SkeletonProfileCard />
      ) : (
        userProfile && <ProfileCard data={userProfile} />
      )}
    </>
  )
}

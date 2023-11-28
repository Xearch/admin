'use client'

import { useAuth } from '@/src/contexts/AuthContext'
import { useGetUserProfile } from '@/src/services/endpoints/getUserProfile'
import { Title, Text } from '@mantine/core'

import classes from './Profile.module.css'
import { ProfileCard } from './ProfileCard'
import { SkeletonProfileCard } from './SkeletonProfileCard'

export function Profile() {
  const { data: userProfile, isLoading } = useGetUserProfile()
  const { user } = useAuth()
  return (
    <>
      <Title className={classes.title} ta="center">
        <Text inherit component="span">
          Bem vindo {user.name}
        </Text>
      </Title>
      {!userProfile && isLoading ? (
        <SkeletonProfileCard />
      ) : (
        userProfile && <ProfileCard data={userProfile} />
      )}
    </>
  )
}

import classes from '@/src/app/Layout/logo/Logo.module.css'
import logoDark from '@/src/assets/dark_logo.png'
import logoWhite from '@/src/assets/white_logo.png'
import { Flex, FlexProps, useMantineColorScheme } from '@mantine/core'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface LogoProps extends FlexProps {
  height?: number
  width?: number
  alt?: string
}

export function Logo({ height = 40, width = 100, alt = 'logo', ...rest }: LogoProps) {
  const { colorScheme } = useMantineColorScheme()
  const { push } = useRouter()
  return (
    <Flex align="center" justify="center" {...rest} onClick={() => push('/home')} className={classes.logo}>
      <Image src={colorScheme === 'dark' ? logoDark : logoWhite} alt={alt} width={width} height={height} />
    </Flex>
  )
}

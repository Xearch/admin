import { Box, Alert } from '@mantine/core'
import { IconInfoCircle } from '@tabler/icons-react'

export function NotFoundRegister() {
  return (
    <Box maw={500} mx="auto" mt={50}>
      <Alert variant="light" color="blue" title="Informação" icon={<IconInfoCircle />}>
        Nenhum registro foi encontrado para a busca.
      </Alert>
    </Box>
  )
}
